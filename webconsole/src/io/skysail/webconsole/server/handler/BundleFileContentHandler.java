package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.bundles.BundleFileContentDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class BundleFileContentHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiServiceTracker osgiServiceTracker;

    public BundleFileContentHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	String[] uriSplit = session.getUri().split("/", 6);
    	OsgiService osgiService = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());
        BundleFileContentDescriptor descriptors = osgiService.getBundleFileContentDescriptor(uriSplit);
        return mapper.writeValueAsString(descriptors);
    }

}
