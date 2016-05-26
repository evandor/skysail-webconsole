package io.skysail.webconsole.server.handler;

import java.io.BufferedReader;
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
import lombok.extern.slf4j.Slf4j;

@Slf4j
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
			log.error(e.getMessage() + " when accessing " + resource, e);
		}
		return "problem accessing uri " + uri.toString();
	}

	public Response handle(IHTTPSession session) {
		String msg;
		try {
			msg = getResponse(new URI(session.getUri()));
			Response response = fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, getMediaType(session.getUri()), msg);
			//response.addHeader("X-Webconsole-Client", agentBundle.getSymbolicName());
			//response.addHeader("X-Webconsole-Client-Version", agentBundle.getVersion().toString());
			return response;
		} catch (URISyntaxException e) {
			log.error(e.getMessage(), e);
			return fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.INTERNAL_ERROR, NanoHTTPD.MIME_HTML,
					e.getMessage());
		}
	}

	private String getMediaType(String uri) {
		String filetype = uri.substring(1 + uri.lastIndexOf("."));
		if ("png".equals(filetype)) {
			return "image/png";
		}
		return NanoHTTPD.MIME_HTML;
	}

	public Response getVersion() {
		return fi.iki.elonen.NanoHTTPD.newFixedLengthResponse(Status.OK, NanoHTTPD.MIME_HTML, agentBundle.getVersion().toString());
	}

}
