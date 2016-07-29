package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.listener.AgentServiceListener;

public class ServiceListenerHandler extends AbstractHttpHandler {

    private AgentServiceListener serviceListener;

    public ServiceListenerHandler(AgentServiceListener serviceListener, String basicAuth) {
        super(basicAuth);
        this.serviceListener = serviceListener;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        return mapper.writeValueAsString(serviceListener.getServiceEvents());

    }

}
