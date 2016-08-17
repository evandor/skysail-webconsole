package io.skysail.webconsole.osgi.entities.bundles;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.Bundle;
import org.osgi.service.log.LogService;
import org.osgi.util.tracker.ServiceTracker;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.skysail.domain.Identifiable;
import io.skysail.webconsole.osgi.entities.services.ServiceReferenceDescriptor;
import io.skysail.webconsole.osgi.utils.FileUtils;
import lombok.Getter;
import lombok.Setter;

/**
 * A minimal OSGi bundle representation.
 */
@Getter
public class BundleDescriptor implements Identifiable {

    @Setter
    private String id; // eg "0"

    private String symbolicName; // eg "org.apache.felix.framework"
    private String version; // eg "5.2.0"
    private String state; // eg "ACTIVE"
    private long size; // eg 3234 (KB)
    private List<String> registeredServiceIds;
    private List<String> usedServiceIds;

    @JsonIgnore
    @Getter
	private ServiceTracker<LogService, LogService> tracker;

    /**
     * Constructor taking an OSGi bundle.
     *
     * @param bundle
     *            an OSGi bundle
     * @param tracker
     */
    public BundleDescriptor(Bundle bundle, ServiceTracker<LogService, LogService> tracker) {
        this.tracker = tracker;
		id = Long.toString(bundle.getBundleId());
        symbolicName = bundle.getSymbolicName();
        version = bundle.getVersion() != null ? bundle.getVersion().toString() : "0.0.0";
        state = translate(bundle.getState());
        registeredServiceIds = getRegisteredServices(bundle).stream().map(r -> r.getId()).collect(Collectors.toList());
        usedServiceIds = getServicesInUse(bundle).stream().map(r -> r.getId()).collect(Collectors.toList());
        handleLocation(bundle);
    }

    private void handleLocation(Bundle bundle) {
        String location = bundle.getLocation();
        if (location == null) {
           // log.info("could not determine file size for bundle {}", bundle.getSymbolicName());
            return;
        }
        this.size = FileUtils.getSize(location);
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

    protected List<ServiceReferenceDescriptor> getRegisteredServices(Bundle bundle) {
        if (bundle.getRegisteredServices() == null) {
            return Collections.emptyList();
        }
        return Arrays.stream(bundle.getRegisteredServices()) // NOSONAR
                .map(ref -> new ServiceReferenceDescriptor(ref))
                .collect(Collectors.toList());
    }

    protected List<ServiceReferenceDescriptor> getServicesInUse(Bundle bundle) {
        if (bundle.getServicesInUse() == null) {
            return Collections.emptyList();
        }
        return Arrays.stream(bundle.getServicesInUse()) // NOSONAR
                .map(ref -> new ServiceReferenceDescriptor(ref))
                .collect(Collectors.toList());
    }

}
