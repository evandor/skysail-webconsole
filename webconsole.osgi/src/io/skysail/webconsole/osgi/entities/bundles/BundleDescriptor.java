package io.skysail.webconsole.osgi.entities.bundles;

import java.io.File;

import org.osgi.framework.Bundle;

import io.skysail.domain.Identifiable;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

/**
 * A minimal OSGi bundle representation.
 *
 */
@Getter
@Setter
@Slf4j
public class BundleDescriptor implements Identifiable {

    private String id;
    private String symbolicName;
    private String version;
    private String state;
    private long size;

    /**
     * Constructor taking an OSGi bundle.
     *
     * @param bundle an OSGi bundle
     */
    public BundleDescriptor(Bundle bundle) {
        id = Long.toString(bundle.getBundleId());
        symbolicName = bundle.getSymbolicName();
        version = bundle.getVersion() != null ? bundle.getVersion().toString() : "0.0.0";
        state = translate(bundle.getState());
        String location = bundle.getLocation();
        if (location != null) {
            if (location.startsWith("reference:file:")) {
                String filename = location.substring("reference:file:".length());
                this.size = new File(filename.replace("%25", "%")).length() / 1024;
                if (this.size == 0) {
                    log.info("could not determine file size of '{}'", filename.replace("%25","%"));
                }
            } else {
                log.info("could not determine file size of {}", location);
            }
        } else {
            log.info("could not determine file size for bundle {}", bundle.getSymbolicName());
        }
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

}
