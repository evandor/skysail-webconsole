package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class BundlesHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiServiceTracker osgiServiceTracker;

    public BundlesHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        OsgiService service = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());
        List<BundleDescriptor> bundleDescriptors = service.getBundleDescriptors();
        return mapper.writeValueAsString(bundleDescriptors);
    }

}
