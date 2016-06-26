package io.skysail.webconsole.services;

import java.util.Optional;

import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.util.tracker.ServiceTracker;
import org.osgi.util.tracker.ServiceTrackerCustomizer;

import io.skysail.webconsole.osgi.services.OsgiService;
import lombok.Getter;

public class OsgiServiceTracker extends ServiceTracker<OsgiService, OsgiService> {

    @Getter
    private Optional<OsgiService> osgiService;

    public OsgiServiceTracker(BundleContext context, Class<OsgiService> clazz,
            ServiceTrackerCustomizer<OsgiService, OsgiService> customizer) {
        super(context, clazz, customizer);
    }

    @Override
    public OsgiService addingService(ServiceReference<OsgiService> reference) {
        OsgiService service = super.addingService(reference);
        osgiService = Optional.of(service);
        return service;
    }

    @Override
    public void remove(ServiceReference<OsgiService> reference) {
        osgiService = Optional.empty();
        super.remove(reference);
    }
}
