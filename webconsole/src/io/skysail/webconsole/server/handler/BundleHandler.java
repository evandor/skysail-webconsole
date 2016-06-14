package io.skysail.webconsole.server.handler;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;
import org.osgi.framework.VersionRange;
import org.osgi.service.packageadmin.ExportedPackage;
import org.osgi.service.packageadmin.PackageAdmin;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.entities.bundles.BundleDetails;
import io.skysail.webconsole.entities.packages.ImportPackage;
import io.skysail.webconsole.services.OsgiService;

public class BundleHandler extends AbstractHttpHandler { // NOSONAR

    private BundleContext bundleContext;
    private OsgiService osgiService;

    public BundleHandler(BundleContext bundleContext, OsgiService osgiService) {
        this.bundleContext = bundleContext;
        this.osgiService = osgiService;
    }

    @Override
    @SuppressWarnings("deprecation")
    public synchronized String getResponse(IHTTPSession session) throws JsonProcessingException {
        String bundleId = session.getUri().substring(session.getUri().lastIndexOf("/") + 1);
        BundleDetails bundleDetails = getBundleDetails(bundleId);

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
        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .filter(b -> bundleId.equals(Long.toString(b.getBundleId())))
                .findFirst().map(b -> new BundleDetails(b))
                .orElseThrow(() -> new IllegalArgumentException(""));
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
