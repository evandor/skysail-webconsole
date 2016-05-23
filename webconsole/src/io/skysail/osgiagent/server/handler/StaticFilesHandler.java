package io.skysail.osgiagent.server.handler;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import org.osgi.framework.Bundle;

import fi.iki.elonen.NanoHTTPD;
import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import fi.iki.elonen.NanoHTTPD.Response;
import fi.iki.elonen.NanoHTTPD.Response.Status;

public class StaticFilesHandler {

    private Bundle agentBundle;

    public StaticFilesHandler(Bundle bundle) {
        this.agentBundle = bundle;
    }

    private String getResponse(URI uri) throws IOException {
        URL resource = agentBundle.getResource(uri.getPath());
        BufferedReader br = new BufferedReader(new InputStreamReader(resource.openConnection().getInputStream()));
        StringBuilder sb = new StringBuilder();
        while (br.ready()) {
            sb.append(br.readLine()).append("\n");
        }
        br.close();
        return sb.toString();
    }

    public Response handle(IHTTPSession session) {
        String msg;
        try {
            msg = getResponse(new URI(session.getUri()));
            return fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, NanoHTTPD.MIME_HTML, msg);
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            return fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.INTERNAL_ERROR, NanoHTTPD.MIME_HTML, e.getMessage());
        }
    }

}
