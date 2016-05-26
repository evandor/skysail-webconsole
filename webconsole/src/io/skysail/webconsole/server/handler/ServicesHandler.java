package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.entities.ServiceDescriptor;
import io.skysail.webconsole.services.OsgiService;

public class ServicesHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiService osgiService;

    public ServicesHandler(OsgiService osgiService) {
        this.osgiService = osgiService;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        List<ServiceDescriptor> descriptors = osgiService.getServiceDescriptors();
        return mapper.writeValueAsString(descriptors);
    }

}
