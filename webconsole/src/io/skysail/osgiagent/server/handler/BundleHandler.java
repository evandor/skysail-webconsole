package io.skysail.osgiagent.server.handler;

import java.util.Arrays;

import org.osgi.framework.BundleContext;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.osgiagent.entities.BundleDetails;

public class BundleHandler extends AbstractHttpHandler { // NOSONAR

    private BundleContext bundleContext;

    public BundleHandler(BundleContext bundleContext) {
        this.bundleContext = bundleContext;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	String bundleId = session.getUri().substring(session.getUri().lastIndexOf("/") + 1);
        BundleDetails bundleDetails = getBundleDetails(bundleId);
        return mapper.writeValueAsString(bundleDetails);
    }

    public BundleDetails getBundleDetails(String bundleId) {
    	return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .filter(b -> bundleId.equals(Long.toString(b.getBundleId())))
                .findFirst().map(b -> new BundleDetails(b))
                .orElseThrow(() -> new IllegalArgumentException(""));
    }

}
