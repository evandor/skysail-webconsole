package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class PackagesHandler extends AbstractHttpHandler {

    private OsgiServiceTracker osgiServiceTracker;

    public PackagesHandler(OsgiServiceTracker osgiServiceTracker) {
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        OsgiService osgiService = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());
        return mapper.writeValueAsString(osgiService.getPackageDescriptors());
    }

}
