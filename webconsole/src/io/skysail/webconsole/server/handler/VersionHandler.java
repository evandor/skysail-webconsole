package io.skysail.webconsole.server.handler;

import org.osgi.framework.Bundle;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;

public class VersionHandler extends AbstractHttpHandler { // NOSONAR

	private Bundle clientBundle;

    public VersionHandler(Bundle clientBundle) {
		this.clientBundle = clientBundle;
	}

	@Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
    	return clientBundle.getSymbolicName() + " [" +clientBundle.getVersion().toString() + "]";
    }



}
