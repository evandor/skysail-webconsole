package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.services.OsgiService;

public class PackagesHandler extends AbstractHttpHandler {

    private OsgiService osgiService;

    public PackagesHandler(OsgiService osgiService) {
        this.osgiService = osgiService;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        return mapper.writeValueAsString(osgiService.getPackageDescriptors());
    }

}
