package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.services.NopOsgiService;
import io.skysail.webconsole.services.OsgiServiceTracker;

public class PackageHandler extends AbstractHttpHandler {

    private OsgiServiceTracker osgiServiceTracker;

    public PackageHandler(OsgiServiceTracker osgiServiceTracker, String basicAuth) {
        super(basicAuth);
        this.osgiServiceTracker = osgiServiceTracker;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	String packageName = session.getUri().substring(session.getUri().lastIndexOf("/") + 1);
    	
        OsgiService osgiService = osgiServiceTracker.getOsgiService().orElse(new NopOsgiService());
        return mapper.writeValueAsString(osgiService.getPackageDescriptor(packageName));
    }

}
