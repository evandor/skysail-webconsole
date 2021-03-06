package io.skysail.webconsole.osgi.entities;

import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.wiring.BundleCapability;

import lombok.EqualsAndHashCode;
import lombok.Getter;

@Getter
@EqualsAndHashCode
public class Capability {

    private String namespace;
    private List<String> attributes;
    private List<String> directives;
    private long bundleId;
    private String bundleName;
    private String nsAttribute = "";
    private String version = null;

    public Capability(BundleCapability cap) {
        namespace = cap.getNamespace();
        if (namespace != null && cap.getAttributes().get(namespace) != null) {
            nsAttribute = cap.getAttributes().get(namespace).toString();
        }
        if (cap.getAttributes().get("version") != null) {
            version = cap.getAttributes().get("version").toString();
        }
        attributes = cap.getAttributes().keySet().stream().map(key -> key + ": " + cap.getAttributes().get(key)).collect(Collectors.toList());
        directives = cap.getDirectives().keySet().stream().map(key -> key + ":= " + cap.getDirectives().get(key)).collect(Collectors.toList());
        bundleId = cap.getResource().getBundle().getBundleId();
        bundleName = cap.getResource().getBundle().getSymbolicName();
    }

    // artificial id derived from namespace and hashcodes
    public String getId() {
        return new StringBuilder(namespace).append("-").append(bundleId).append("-").append(this.hashCode()).toString();
    }
    public String getName() {
        String result = namespace + ": " + nsAttribute;
        if (version != null) {
            result += " (" + version +")";
        }
        return result;
    }
}
