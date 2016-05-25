package io.skysail.osgiagent.server.handler.test;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.Dictionary;
import java.util.Hashtable;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;
import org.osgi.framework.Version;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import fi.iki.elonen.NanoHTTPD.Response;
import io.skysail.osgiagent.server.handler.BundleHandler;

public class BundleHandlerTest {

	@Rule
	public ExpectedException thrown = ExpectedException.none();

	private BundleHandler bundleHandler;
	private IHTTPSession session;
	private BundleContext bundleContext;


	@Before
	public void setup() {
		bundleContext = Mockito.mock(BundleContext.class);
		bundleHandler = new BundleHandler(bundleContext);
		session = Mockito.mock(IHTTPSession.class);

	}

	@Test
	public void throws_IllegalArgumentException_for_unknown_bundleId() {
		thrown.expect(IllegalArgumentException.class);
		Mockito.when(bundleContext.getBundles()).thenReturn(new Bundle[0]);
		Mockito.when(session.getUri()).thenReturn("/bundles/6");

		bundleHandler.handle(session);
	}

	@Test
	public void test() {
		Bundle[] bundles = new Bundle[1];
		Bundle bundle = Mockito.mock(Bundle.class);
		Mockito.when(bundle.getBundleId()).thenReturn(0L);
		Mockito.when(bundle.getVersion()).thenReturn(new Version("0.1.0"));
		Dictionary<String, String> headers = new Hashtable<>();
		Mockito.when(bundle.getHeaders(null)).thenReturn(headers);
		bundles[0] = bundle;
		Mockito.when(bundleContext.getBundles()).thenReturn(bundles);
		Mockito.when(session.getUri()).thenReturn("/bundles/0");

		Response response = bundleHandler.handle(session);

		assertThat(response.getStatus().getDescription(), is("200 OK"));
		assertThat(response.getMimeType().toString(), is("text/html"));
		String responseAsText = convertStreamToString(response.getData());
		assertThat(responseAsText, containsString("\"version\":\"0.1.0\""));
		assertThat(responseAsText, containsString("\"id\":\"0\""));
	}

	static String convertStreamToString(java.io.InputStream is) {
	    @SuppressWarnings("resource")
		java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
	    return s.hasNext() ? s.next() : "";
	}
}
