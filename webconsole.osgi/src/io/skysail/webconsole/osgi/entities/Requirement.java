package io.skysail.webconsole.osgi.entities;

import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.wiring.BundleRequirement;

import lombok.Getter;

@Getter
public class Requirement {

    private String namespace;
    private List<String> attributes;
    private List<String> directives;
    private long bundleId;
    private String bundleName;
    private String nsAttribute;

    public Requirement(BundleRequirement req) {
        namespace = req.getNamespace();
        nsAttribute = (String)req.getAttributes().get(namespace);
        attributes = req.getAttributes().keySet().stream().map(key -> key + ": " + req.getAttributes().get(key)).collect(Collectors.toList());
        directives = req.getDirectives().keySet().stream().map(key -> key + ":= " + req.getDirectives().get(key)).collect(Collectors.toList());
        bundleId = req.getResource().getBundle().getBundleId();
        bundleName = req.getResource().getBundle().getSymbolicName();
    }

    // artificial id derived from namespace and hashcodes
    public String getId() {
        return new StringBuilder(namespace).append("-").append(bundleId).append("-").append(this.hashCode()).toString();
    }
    public String getName() {
        return namespace + ": " + nsAttribute;
    }
}
