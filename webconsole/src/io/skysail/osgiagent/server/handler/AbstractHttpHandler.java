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
import lombok.extern.slf4j.Slf4j;

@Slf4j
public abstract class AbstractHttpHandler {

    protected ObjectMapper mapper = new ObjectMapper();

    abstract String getResponse(IHTTPSession session) throws JsonProcessingException;

    String getMimeType() {
        return "application/json";
    }

    public Response handle(IHTTPSession session) {

        String cors = "*";
        Response r;
        if (cors != null && Method.OPTIONS.equals(session.getMethod())) {
            r = fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, "text/plain", null, 0);
        } else {

            String msg;
            try {
                msg = getResponse(session);
                r =  fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, NanoHTTPD.MIME_HTML, msg);
            } catch (IOException e) {
                log.error(e.getMessage(), e);
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
