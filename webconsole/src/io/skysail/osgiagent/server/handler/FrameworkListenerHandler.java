package io.skysail.osgiagent.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.osgiagent.listener.AgentFrameworkListener;

public class FrameworkListenerHandler extends AbstractHttpHandler {

    private AgentFrameworkListener frameworklistener;

    public FrameworkListenerHandler(AgentFrameworkListener serviceListener) {
        this.frameworklistener = serviceListener;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        return mapper.writeValueAsString(frameworklistener.getFrameworkEvents());
    }

}
