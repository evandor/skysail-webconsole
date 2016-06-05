package io.skysail.webconsole.server.handler.test;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import fi.iki.elonen.NanoHTTPD.Method;
import fi.iki.elonen.NanoHTTPD.Response;
import io.skysail.webconsole.server.handler.BundleHandler;
import io.skysail.webconsole.services.OsgiService;
import io.skysail.webconsole.test.TestUtils;

public class BundleHandlerTest {

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    private BundleHandler bundleHandler;
    private IHTTPSession session;
    private BundleContext bundleContext;

    @Before
    public void setup() {
        bundleContext = Mockito.mock(BundleContext.class);
        OsgiService osgiService = Mockito.mock(OsgiService.class);
        bundleHandler = new BundleHandler(bundleContext, osgiService);
        session = Mockito.mock(IHTTPSession.class);
        Mockito.when(session.getMethod()).thenReturn(Method.GET);
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
        bundles[0] = TestUtils.mockBundle(0L, "symbolicName", "0.1.0");
        Mockito.when(bundleContext.getBundles()).thenReturn(bundles);
        Mockito.when(session.getUri()).thenReturn("/bundles/0");

        Response response = bundleHandler.handle(session);

        assertThat(response.getStatus().getDescription(), is("200 OK"));
        assertThat(response.getMimeType().toString(), is("text/html"));
        String responseAsText = TestUtils.convertStreamToString(response.getData());
        assertThat(responseAsText, containsString("\"version\":\"0.1.0\""));
        assertThat(responseAsText, containsString("\"id\":\"0\""));
    }

}
