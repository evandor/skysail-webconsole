package io.skysail.webconsole.osgi.entities.bundles;

import org.osgi.framework.Bundle;
import org.osgi.framework.wiring.BundleWiring;
import org.osgi.service.log.LogService;
import org.osgi.util.tracker.ServiceTracker;

import io.skysail.webconsole.osgi.entities.wires.WireDescriptorSnapshot;
import lombok.Getter;

/**
 * A Bundle Snapshot is something in between the maximal (BundleDetails) and minimal (BundleDescriptor)
 * bundle representation.
 *
 * It is used to capture the essential bundle state, optimized to be sent over the wire in "large" quantities.
 *
 * As a use case, a Framework Snapshot is created at startup, containing (among others) snapshots of all bundles.
 *
 */
@Getter
public class BundleSnapshot extends BundleDescriptor {

    private String exportService;
    private WireDescriptorSnapshot wireDescriptor;

    /**
     * @param bundle an OSGi bundle.
     */
    public BundleSnapshot(Bundle bundle, ServiceTracker<LogService, LogService> tracker) {
        super(bundle, tracker);
        wireDescriptor = new WireDescriptorSnapshot(bundle.adapt(BundleWiring.class));
    }

}
