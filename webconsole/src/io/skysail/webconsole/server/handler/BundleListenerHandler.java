package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.listener.AgentBundleListener;

public class BundleListenerHandler extends AbstractHttpHandler { // NOSONAR

    private AgentBundleListener bundleListener;

    private ObjectMapper mapper = new ObjectMapper();

    public BundleListenerHandler(AgentBundleListener bundleListener) {
        this.bundleListener = bundleListener;
    }

    @Override
    String getResponse(IHTTPSession session) {
        try {
            return mapper.writeValueAsString(bundleListener.getBundleEvents());
        } catch (JsonProcessingException e) { // NOSONAR
            return e.getMessage();
        }
    }

    @Override
    String getMimeType() {
        return "application/json";
    }

}
