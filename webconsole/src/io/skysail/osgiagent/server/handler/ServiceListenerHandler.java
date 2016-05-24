package io.skysail.osgiagent.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.osgiagent.listener.AgentServiceListener;

public class ServiceListenerHandler extends AbstractHttpHandler {

    private AgentServiceListener serviceListener;

    public ServiceListenerHandler(AgentServiceListener serviceListener) {
        this.serviceListener = serviceListener;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        return mapper.writeValueAsString(serviceListener.getServiceEvents());

    }

}
