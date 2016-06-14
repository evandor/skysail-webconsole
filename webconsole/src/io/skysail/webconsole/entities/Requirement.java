package io.skysail.webconsole.entities;

import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.wiring.BundleRequirement;

import lombok.Getter;

@Getter
public class Requirement {

    private String namespace;
    private List<String> attributes;
    private List<String> directives;
    private String resource;

    public Requirement(BundleRequirement req) {
        namespace = req.getNamespace();
        attributes = req.getAttributes().keySet().stream().map(key -> key + ": " + req.getAttributes().get(key)).collect(Collectors.toList());
        directives = req.getDirectives().keySet().stream().map(key -> key + ":= " + req.getDirectives().get(key)).collect(Collectors.toList());
        resource = req.getResource().toString();
        //System.out.println(req.getRevision());
    }

}
