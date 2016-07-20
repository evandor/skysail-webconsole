package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.services.ServiceDetails;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class ServicesHandler extends AbstractHttpHandler { // NOSONAR

    private OsgiServiceTracker osgiServiceTracker;

    public ServicesHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        List<ServiceDetails> descriptors =
                osgiServiceTracker.getOsgiService()
                .orElse(new NopOsgiService())
                .getServiceDetails();
        return mapper.writeValueAsString(descriptors);
    }

}
