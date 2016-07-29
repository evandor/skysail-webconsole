package io.skysail.webconsole.server.handler;

import org.osgi.framework.BundleContext;
import org.osgi.framework.dto.FrameworkDTO;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;

public class FrameworkHandler extends AbstractHttpHandler { // NOSONAR

    private BundleContext bundleContext;

    public FrameworkHandler(BundleContext bundleContext, String basicAuth) {
        super(basicAuth);
        this.bundleContext = bundleContext;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	FrameworkDTO bundleDetails = getFrameworkDetails();
        return mapper.writeValueAsString(bundleDetails);
    }

    public FrameworkDTO getFrameworkDetails() {
    	return bundleContext.getBundle(0L).adapt(FrameworkDTO.class);
    }

}
