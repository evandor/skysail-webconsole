package io.skysail.webconsole.osgi.entities.bundles;

import org.osgi.framework.Bundle;
import org.osgi.service.log.LogService;
import org.osgi.util.tracker.ServiceTracker;

import lombok.Getter;
import lombok.Setter;

public class BundleFileContentDescriptor extends BundleDescriptor {

    @Getter
    @Setter
    private String code;

    public BundleFileContentDescriptor(Bundle bundle, ServiceTracker<LogService, LogService> tracker) {
        super(bundle, tracker);
    }


}
