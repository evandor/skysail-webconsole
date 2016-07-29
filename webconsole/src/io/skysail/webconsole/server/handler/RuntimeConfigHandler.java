package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;

public class RuntimeConfigHandler extends AbstractHttpHandler { // NOSONAR

    public RuntimeConfigHandler(String basicAuth) {
        super(basicAuth);
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        RuntimeConfig runtimeConfig = new RuntimeConfig();
        return mapper.writeValueAsString(runtimeConfig);
    }

}
