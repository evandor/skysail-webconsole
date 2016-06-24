package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.services.ServiceDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;

public class BundleServicesHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiService osgiService;

    public BundleServicesHandler(OsgiService osgiService) {
        this.osgiService = osgiService;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	String[] uriSplit = session.getUri().split("/");
        List<ServiceDescriptor> descriptors = osgiService.getBundleServiceDescriptors(uriSplit[uriSplit.length-2]);
        return mapper.writeValueAsString(descriptors);
    }

}
