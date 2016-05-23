package io.skysail.osgiagent.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import io.skysail.osgiagent.listener.AgentFrameworkListener;

public class FrameworkListenerHandler extends AbstractHttpHandler {

    private AgentFrameworkListener frameworklistener;

    public FrameworkListenerHandler(AgentFrameworkListener serviceListener) {
        this.frameworklistener = serviceListener;
    }

    @Override
    String getResponse() throws JsonProcessingException {
        return mapper.writeValueAsString(frameworklistener.getFrameworkEvents());
    }

}
