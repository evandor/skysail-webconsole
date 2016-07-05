package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.bundles.BundleContentDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class BundleContentsHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiServiceTracker osgiServiceTracker;

    public BundleContentsHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	String[] uriSplit = session.getUri().split("/");
    	OsgiService osgiService = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());
        BundleContentDescriptor descriptors = osgiService.getBundleContentDescriptor(uriSplit[uriSplit.length-2]);
        return mapper.writeValueAsString(descriptors);
    }

}
