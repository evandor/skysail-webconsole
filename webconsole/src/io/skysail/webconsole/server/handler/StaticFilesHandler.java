package io.skysail.webconsole.server.handler;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;

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

    private String getResponse(URI uri) {
        URL resource = agentBundle.getResource("/client" + uri.getPath());
        BufferedReader br;
        if (resource == null) {
            return null;
        }
        try {
            URLConnection connection = resource.openConnection();
            InputStream inputStream = connection.getInputStream();
            br = new BufferedReader(new InputStreamReader(inputStream));
            StringBuilder sb = new StringBuilder();
            while (br.ready()) {
                sb.append(br.readLine()).append("\n");
            }
            br.close();
            return sb.toString();
        } catch (Exception e) {
            //log.error(e.getMessage() + " when accessing " + resource, e);
        }
        return "problem accessing uri " + uri.toString();
    }

    public Response handle(IHTTPSession session) {
        String msg;
        try {
            // msg = getResponse(new URI(session.getUri()));
            // return NanoHTTPD.newFixedLengthResponse(Status.OK,
            // getMediaType(session.getUri()), msg);
            byte[] responseBytes = getResponseBytes(new URI(session.getUri()));
            if (responseBytes != null) {
                InputStream inputStream = new ByteArrayInputStream(responseBytes);
                return NanoHTTPD.newFixedLengthResponse(Status.OK, getMediaType(session.getUri()), inputStream,
                        responseBytes.length);
            } else {
                return NanoHTTPD.newFixedLengthResponse(Status.NOT_FOUND, getMediaType(session.getUri()), "");
            }
        } catch (URISyntaxException e) {
            //log.error(e.getMessage(), e);
            return fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.INTERNAL_ERROR, NanoHTTPD.MIME_HTML,
                    e.getMessage());
        }
    }

    private byte[] getResponseBytes(URI uri) {
        URL resource = agentBundle.getResource("/client" + uri.getPath());
        BufferedReader br;
        if (resource == null) {
            return null;
        }
        try {
            URLConnection connection = resource.openConnection();
            InputStream inputStream = connection.getInputStream();

            byte[] buff = new byte[8000];

            int bytesRead = 0;

            ByteArrayOutputStream bao = new ByteArrayOutputStream();

            while ((bytesRead = inputStream.read(buff)) != -1) {
                bao.write(buff, 0, bytesRead);
            }

            byte[] data = bao.toByteArray();

            return data;
        } catch (Exception e) {
            //log.error(e.getMessage() + " when accessing " + resource, e);
        }
        return new byte[0];
    }

    private String getMediaType(String uri) {
        String filetype = uri.substring(1 + uri.lastIndexOf("."));
        if ("png".equals(filetype)) {
            return "image/png";
        }
        return NanoHTTPD.MIME_HTML;
    }

    public Response getVersion() {
        return fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, NanoHTTPD.MIME_HTML,
                agentBundle.getVersion().toString());
    }

}
