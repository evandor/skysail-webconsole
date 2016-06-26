package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.services.ServiceDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class BundleServicesHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiServiceTracker osgiServiceTracker;

    public BundleServicesHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	String[] uriSplit = session.getUri().split("/");
    	OsgiService osgiService = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());
        List<ServiceDescriptor> descriptors = osgiService.getBundleServiceDescriptors(uriSplit[uriSplit.length-2]);
        return mapper.writeValueAsString(descriptors);
    }

}
