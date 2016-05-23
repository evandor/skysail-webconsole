package io.skysail.osgiagent.server.handler;

import java.io.IOException;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import fi.iki.elonen.NanoHTTPD;
import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import fi.iki.elonen.NanoHTTPD.Method;
import fi.iki.elonen.NanoHTTPD.Response;
import fi.iki.elonen.NanoHTTPD.Response.Status;

public abstract class AbstractHttpHandler {

    protected ObjectMapper mapper = new ObjectMapper();

    abstract String getResponse() throws JsonProcessingException;

    String getMimeType() {
        return "application/json";
    }


    public Response handle(IHTTPSession session) {

        String cors = "*";
        Response r;
        if (cors != null && Method.OPTIONS.equals(session.getMethod())) {
            //r = new NanoHTTPD.Response(Response.Status.OK, NanoHTTPD.MIME_PLAINTEXT, null, 0);
            r = fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, "text/plain", null, 0);
        } else {

            String msg;
            try {
                msg = getResponse();
                r =  fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, NanoHTTPD.MIME_HTML, msg);
            } catch (IOException e) {
                e.printStackTrace();
                return fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.INTERNAL_ERROR, NanoHTTPD.MIME_HTML,
                        e.getMessage());
            }
        }

        if (cors != null) {
            r = addCORSHeaders(session.getHeaders(), r, cors);
        }
        return r;
    }

    protected Response addCORSHeaders(Map<String, String> queryHeaders, Response resp, String cors) {
        resp.addHeader("Access-Control-Allow-Origin", cors);
        resp.addHeader("Access-Control-Allow-Headers", "origin,accept,content-type");
        resp.addHeader("Access-Control-Allow-Credentials", "true");
        resp.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        resp.addHeader("Access-Control-Max-Age", "" + 42 * 60 * 60);

        return resp;
    }
}
