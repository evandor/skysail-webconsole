package io.skysail.webconsole.server.handler;

import java.util.List;

import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;

public class BundlesHandler extends AbstractHttpHandler { // NOSONAR

    private BundleContext bundleContext;

    public BundlesHandler(BundleContext bundleContext) {
        this.bundleContext = bundleContext;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        ServiceReference<OsgiService> osgiServiceRef = bundleContext.getServiceReference(OsgiService.class);
        OsgiService service = bundleContext.getService(osgiServiceRef);
        List<BundleDescriptor> bundleDescriptors = service.getBundleDescriptors();
        String result = mapper.writeValueAsString(bundleDescriptors);
        bundleContext.ungetService(osgiServiceRef);
        return result;
    }

}
