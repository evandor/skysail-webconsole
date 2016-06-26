package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.services.ServiceDescriptor;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class ServicesHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiServiceTracker osgiServiceTracker;

    public ServicesHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        List<ServiceDescriptor> descriptors =
                osgiServiceTracker.getOsgiService()
                .orElse(new NopOsgiService())
                .getServiceDescriptors();
        return mapper.writeValueAsString(descriptors);
    }

}
