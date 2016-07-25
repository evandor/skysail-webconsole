package io.skysail.webconsole.server.handler;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.osgi.framework.Bundle;
import org.osgi.framework.VersionRange;
import org.osgi.service.packageadmin.ExportedPackage;
import org.osgi.service.packageadmin.PackageAdmin;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.bundles.BundleDetails;
import io.skysail.webconsole.osgi.entities.packages.ImportPackage;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class BundleHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiServiceTracker osgiServiceTracker;

    public BundleHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    @SuppressWarnings("deprecation")
    public synchronized String getResponse(IHTTPSession session) throws JsonProcessingException {
        String bundleId = session.getUri().substring(session.getUri().lastIndexOf("/") + 1);
        BundleDetails bundleDetails = getBundleDetails(bundleId);

        //ServiceReference<OsgiService> serviceReference = bundleContext.getServiceReference(OsgiService.class);
        OsgiService osgiService = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());

        // to be replaced with wiring API
        PackageAdmin packageAdmin = (PackageAdmin) osgiService.getService(PackageAdmin.class.getName());
        if (packageAdmin != null) {
            Map<String, ExportedPackage> candidates = new HashMap<>();
            ExportedPackage[] exports = packageAdmin.getExportedPackages((Bundle) null);
            if (exports != null) {
                List<ImportPackage> importedPackages = bundleDetails.getImportPackage();
                Arrays.stream(exports).forEach(export -> {
                    Optional<ImportPackage> importPkg = importedPackages.stream()
                            .filter(importedPackage -> importedPackage.getPkgName().equals(export.getName()))
                            .findFirst();
                    if (importPkg.isPresent()) {
                        if (isSatisfied(importPkg.get(), export)) {
                            candidates.put(export.getName(), export);
                            importPkg.get().addCandidate(export);
                        }
                    }
                });
            }
        }
        return mapper.writeValueAsString(bundleDetails);
    }

    public BundleDetails getBundleDetails(String bundleId) {
        OsgiService osgiService = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());
        return osgiService.getBundleDetails(bundleId);
    }

    private boolean isSatisfied(ImportPackage importPackage, ExportedPackage exported) {
        if (importPackage.getPkgName().equals(exported.getName())) {
            String versionAttr = importPackage.getVersionRange();
            if (versionAttr == null) {
                return true;
            }
            VersionRange required = new VersionRange(versionAttr.replace("\"", ""));
            return required.includes(exported.getVersion());
        }
        return false;
    }

}
