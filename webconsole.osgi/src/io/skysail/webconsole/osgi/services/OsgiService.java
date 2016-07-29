package io.skysail.webconsole.osgi.services;

import java.io.IOException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.zip.ZipFile;

import org.osgi.framework.Bundle;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;
import org.osgi.framework.ServiceRegistration;
import org.osgi.util.tracker.ServiceTracker;

import io.skysail.webconsole.osgi.entities.bundles.BundleContentDescriptor;
import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;
import io.skysail.webconsole.osgi.entities.bundles.BundleDetails;
import io.skysail.webconsole.osgi.entities.bundles.BundleFileContentDescriptor;
import io.skysail.webconsole.osgi.entities.bundles.BundleSnapshot;
import io.skysail.webconsole.osgi.entities.packages.ExportPackage;
import io.skysail.webconsole.osgi.entities.services.ServiceDescriptor;
import io.skysail.webconsole.osgi.entities.services.ServiceDetails;
import io.skysail.webconsole.osgi.utils.FileUtils;
import io.skysail.webconsole.osgi.utils.LogServiceUtils;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class OsgiService implements BundleActivator {

    private static final String BUNDLE_CONTEXT_NOT_AVAILABLE = "bundleContext not available";

    private final Map<String, ServiceTracker> services = new HashMap<>();

    private BundleContext bundleContext;

    private ServiceRegistration<OsgiService> registeredService;

    @Override
    public void start(BundleContext context) throws Exception {
        log.debug("starting {}", this.getClass().getName());
        this.bundleContext = context;
        registeredService = context.registerService(OsgiService.class, this, new Hashtable<>());
    }

    @Override
    public void stop(BundleContext context) throws Exception {
        log.debug("stopping {}", this.getClass().getName());
        this.bundleContext = null;
        registeredService = null;
    }

    public List<BundleDescriptor> getBundleDescriptors() {
        return getBundlesRepresentations(b -> new BundleDescriptor(b,bundleContext));
    }

    public List<BundleSnapshot> getBundleSnapshots() {
        return getBundlesRepresentations(b -> new BundleSnapshot(b,bundleContext)).stream()
                .map(BundleSnapshot.class::cast)
                .collect(Collectors.toList());
    }

    public List<BundleDetails> getBundleDetails() {
        return getBundlesRepresentations(b -> new BundleDetails(b,bundleContext)).stream()
                .map(BundleDetails.class::cast)
                .collect(Collectors.toList());
    }

    public List<ServiceDescriptor> getServiceDescriptors() {
        if (bundleContext == null) {
            log.warn(BUNDLE_CONTEXT_NOT_AVAILABLE);
            return Collections.emptyList();
        }
        try {
            ServiceReference<?>[] references = bundleContext.getAllServiceReferences(null, null);
            return Arrays.stream(references) // NOSONAR
                    .map(s -> new ServiceDescriptor(s))
                    .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                    .collect(Collectors.toList());
        } catch (InvalidSyntaxException e) {
        	LogServiceUtils.error(bundleContext, e);
        }
        return Collections.emptyList();
    }

    public List<ServiceDetails> getServiceDetails() {
        if (bundleContext == null) {
            log.warn(BUNDLE_CONTEXT_NOT_AVAILABLE);
            return Collections.emptyList();
        }
        try {
            ServiceReference<?>[] references = bundleContext.getAllServiceReferences(null, null);
            return Arrays.stream(references) // NOSONAR
                    .map(s -> new ServiceDetails(s))
                    .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                    .collect(Collectors.toList());
        } catch (InvalidSyntaxException e) {
        	LogServiceUtils.error(bundleContext, e);
        }
        return Collections.emptyList();
    }

    public List<ServiceDescriptor> getBundleServiceDescriptors(String bundleId) {
        Long bundleIdAsLong = Long.parseLong(bundleId);
        return getServiceDetails().stream().filter(sd -> new Long(sd.getBundleId()).equals(bundleIdAsLong))
                .collect(Collectors.toList());
    }

    public List<ExportPackage> getPackageDescriptors() {
        if (bundleContext == null) {
            log.warn(BUNDLE_CONTEXT_NOT_AVAILABLE);
            return Collections.emptyList();
        }
        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .map(b -> new BundleDetails(b,bundleContext))
                .map(b -> b.getExportPackage())
                .flatMap(b -> b.stream())
                .sorted((p1, p2) -> p1.getPkgName().compareTo(p2.getPkgName()))
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

    private List<BundleDescriptor> getBundlesRepresentations(Function<Bundle, ? extends BundleDescriptor> mapper) {
        if (bundleContext == null) {
            log.warn(BUNDLE_CONTEXT_NOT_AVAILABLE);
            return Collections.emptyList();
        }

        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .map(mapper)
                .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                .collect(Collectors.toList());
    }

    public BundleContentDescriptor getBundleContentDescriptor(String id) {
        BundleDetails bundleDetails = getBundleDetails(id);
        String location = FileUtils.normalizeBundleLocation(bundleDetails.getLocation());
        BundleContentDescriptor result = new BundleContentDescriptor(getBundle(id).get(),bundleContext);
        try (ZipFile zipFile = new ZipFile(location)) {
            zipFile.stream().filter(e -> !e.getName().endsWith("/")).forEach(result::addPath);
        } catch (IOException e) {
        	LogServiceUtils.error(bundleContext, e);
        }
        return result;
    }

    public BundleDetails getBundleDetails(String bundleId) {
        return getBundle(bundleId).map(b -> new BundleDetails(b, bundleContext))
                .orElseThrow(() -> new IllegalArgumentException(""));
    }

    public BundleFileContentDescriptor getBundleFileContentDescriptor(String[] uriSplit) {
        String id = uriSplit[4];

        String filename = new String(Base64.getDecoder().decode(uriSplit[5].substring("contents/".length())));

        String content = "";
        Optional<Bundle> bundle = getBundle(id);
        if (bundle.isPresent()) {
            content = FileUtils.getContent(bundle.get(), bundleContext, filename);
        }

        BundleFileContentDescriptor result = new BundleFileContentDescriptor(getBundle(id).get(),bundleContext);
        result.setCode(content);
        return result;
    }

    private Optional<Bundle> getBundle(String bundleId) {
        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .filter(b -> bundleId.equals(Long.toString(b.getBundleId())))
                .findFirst();
    }


}
