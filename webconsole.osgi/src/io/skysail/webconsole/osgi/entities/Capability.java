package io.skysail.webconsole.osgi.entities;

import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.wiring.BundleCapability;

import lombok.Getter;

@Getter
public class Capability {

    private String namespace;
    private List<String> attributes;
    private List<String> directives;
    private String resource;

    public Capability(BundleCapability bundleCapability) {
        namespace = bundleCapability.getNamespace();
        attributes = bundleCapability.getAttributes().keySet().stream().map(key -> key + ": " + bundleCapability.getAttributes().get(key)).collect(Collectors.toList());
        directives = bundleCapability.getDirectives().keySet().stream().map(key -> key + ":= " + bundleCapability.getDirectives().get(key)).collect(Collectors.toList());
        resource = bundleCapability.getResource().toString();
    }

}
