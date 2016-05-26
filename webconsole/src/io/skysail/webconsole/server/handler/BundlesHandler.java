package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.entities.BundleDescriptor;
import io.skysail.webconsole.services.OsgiService;

public class BundlesHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiService osgiService;

    public BundlesHandler(OsgiService osgiService) {
        this.osgiService = osgiService;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        List<BundleDescriptor> bundleDescriptors = osgiService.getBundleDescriptors();
        return mapper.writeValueAsString(bundleDescriptors);
    }

}
