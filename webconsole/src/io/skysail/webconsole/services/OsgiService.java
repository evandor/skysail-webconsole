package io.skysail.webconsole.services;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;
import org.osgi.util.tracker.ServiceTracker;

import io.skysail.webconsole.entities.BundleDescriptor;
import io.skysail.webconsole.entities.BundleDetails;
import io.skysail.webconsole.entities.ExportPackage;
import io.skysail.webconsole.entities.ServiceDescriptor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class OsgiService {

    private final Map<String, ServiceTracker> services = new HashMap<>();

    private BundleContext bundleContext;

    public OsgiService(BundleContext bundleContext) {
        this.bundleContext = bundleContext;
    }

    public List<BundleDescriptor> getBundleDescriptors() {
        if (bundleContext == null) {
            log.warn("bundleContext not available");
            return Collections.emptyList();
        }
        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .map(b -> new BundleDescriptor(b))
                .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                .collect(Collectors.toList());
    }

    public List<BundleDetails> getBundleDetails() {
        if (bundleContext == null) {
            log.warn("bundleContext not available");
            return Collections.emptyList();
        }
        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .map(b -> new BundleDetails(b))
                .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                .collect(Collectors.toList());
    }

    public List<ServiceDescriptor> getServiceDescriptors() {
        if (bundleContext == null) {
            log.warn("bundleContext not available");
            return Collections.emptyList();
        }
        try {
            ServiceReference<?>[] references = bundleContext.getAllServiceReferences(null, null);
            return Arrays.stream(references) // NOSONAR
                    .map(s -> new ServiceDescriptor(s))
                    .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                    .collect(Collectors.toList());
        } catch (InvalidSyntaxException e) {
            log.error(e.getMessage(), e);
        }
        return Collections.emptyList();
    }

	public List<ServiceDescriptor> getBundleServiceDescriptors(String bundleId) {
		return getServiceDescriptors().stream().filter(sd -> sd.getBundle().getId().equals(bundleId)).collect(Collectors.toList());
	}


    public List<ExportPackage> getPackageDescriptors() {
        if (bundleContext == null) {
            log.warn("bundleContext not available");
            return Collections.emptyList();
        }
        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .map(b -> new BundleDetails(b))
                .map(b -> b.getExportPackage())
                .flatMap(b -> b.stream())
                .sorted((p1,p2) -> p1.getPkgName().compareTo(p2.getPkgName()))
                .collect(Collectors.toList());
    }

    public final Object getService(String serviceName) {
        if (services == null) {
            return null;
        }
        ServiceTracker<?, ?> serviceTracker = services.get(serviceName);
        if (serviceTracker == null) {
            serviceTracker = new ServiceTracker(bundleContext, serviceName, null);
            serviceTracker.open();
            services.put(serviceName, serviceTracker);
        }
        return serviceTracker.getService();
    }


}
