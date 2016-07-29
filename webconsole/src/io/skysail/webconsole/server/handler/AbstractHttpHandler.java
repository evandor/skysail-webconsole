package io.skysail.webconsole.server.handler;

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
    private String basicAuth;

    public AbstractHttpHandler(String basicAuth) {
        this.basicAuth = basicAuth;
    }

    abstract String getResponse(IHTTPSession session) throws JsonProcessingException;

    protected String post(IHTTPSession session) throws JsonProcessingException {
        return "";
    }

    String getMimeType() {
        return "application/json";
    }

    public Response handle(IHTTPSession session) {

        String cors = "*";
        Response r;
        if (cors != null && Method.OPTIONS.equals(session.getMethod())) {
            r = fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, "text/plain", null, 0);
        } else {

            // apply basic authentication
            Map<String, String> headers = session.getHeaders();
            if (basicAuth != null && !basicAuth.equals(headers.get("authorization"))) {
                Response response = NanoHTTPD.newFixedLengthResponse(Status.UNAUTHORIZED,  NanoHTTPD.MIME_PLAINTEXT, "Needs authentication.");
                response.addHeader("WWW-Authenticate", "Basic realm=\"SkysailWebconsole\"");
                return response;
            }

            String msg;
            try {
                if (session.getMethod().equals(Method.GET)) {
                    msg = getResponse(session);
                } else if (session.getMethod().equals(Method.POST)) {
                    msg = post(session);
                } else {
                    throw new UnsupportedOperationException();
                }
                String mimeType = getMimeType();
                if (session.getUri().endsWith(".js")){
                    mimeType = "application/javascript";
                }
                r = NanoHTTPD.newFixedLengthResponse(Status.OK, mimeType, msg);
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
        resp.addHeader("Access-Control-Allow-Headers", "origin,accept,content-type,Authorization,Access-Control-Allow-Origin");
        resp.addHeader("Access-Control-Allow-Credentials", "true");
        resp.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        resp.addHeader("Access-Control-Max-Age", "" + 42 * 60 * 60);

        return resp;
    }

}
