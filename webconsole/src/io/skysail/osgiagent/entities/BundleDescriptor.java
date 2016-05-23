package io.skysail.osgiagent.entities;

import org.osgi.framework.Bundle;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BundleDescriptor {

    private String id;

    private String symbolicName;

    private String version;

    private String state;

    public BundleDescriptor(Bundle bundle) {
        id = Long.toString(bundle.getBundleId());
        symbolicName = bundle.getSymbolicName();
        version = bundle.getVersion().toString();
        state = translate(bundle.getState());
    }

    private String translate(int bundleState) { // NOSONAR
        switch (bundleState) {
        case Bundle.ACTIVE:
            return "ACTIVE";
        case Bundle.INSTALLED:
            return "INSTALLED";
        case Bundle.RESOLVED:
            return "RESOLVED";
        case Bundle.STARTING:
            return "STARTING";
        case Bundle.STOPPING:
            return "STOPPING";
        case Bundle.UNINSTALLED:
            return "UNINSTALLED";
        default:
            return "unknown";
        }
    }

    public String getName() {
        return symbolicName + " (" + version + ") [#" + id + "]";
    }

}
