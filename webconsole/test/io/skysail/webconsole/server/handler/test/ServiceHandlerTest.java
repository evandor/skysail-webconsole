package io.skysail.webconsole.server.handler.test;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;
import org.osgi.framework.Constants;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import fi.iki.elonen.NanoHTTPD.Method;
import fi.iki.elonen.NanoHTTPD.Response;
import io.skysail.webconsole.server.handler.ServiceHandler;
import io.skysail.webconsole.test.TestUtils;

public class ServiceHandlerTest {

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    private ServiceHandler serviceHandler;
    private IHTTPSession session;
    private BundleContext bundleContext;

    @Before
    public void setup() {
        bundleContext = Mockito.mock(BundleContext.class);
        serviceHandler = new ServiceHandler(bundleContext,"webconsole");
        session = Mockito.mock(IHTTPSession.class);
        when(session.getMethod()).thenReturn(Method.GET);
    }

    @Test
    public void throws_NullPointerException_for_unknown_serviceId() {
        thrown.expect(NullPointerException.class);
        Mockito.when(bundleContext.getBundles()).thenReturn(new Bundle[0]);
        Mockito.when(session.getUri()).thenReturn("/services/6");

        serviceHandler.handle(session);
    }

    @Test
    public void test() throws InvalidSyntaxException {

        Bundle theBundle = TestUtils.mockBundle(0L, "symbolicName", "0.1.0");

        ServiceReference<?>[] serviceReferences = new ServiceReference[1];
        ServiceReference<?> serviceRef = Mockito.mock(ServiceReference.class);
        serviceReferences[0] = serviceRef;

        when(bundleContext.getAllServiceReferences(null, "(service.id=1)")).thenReturn(serviceReferences);
        when(session.getUri()).thenReturn("/services/1");
        Map<String, String> headers = new HashMap<>();
        headers.put("authorization", "webconsole");
        when(session.getHeaders()).thenReturn(headers);

        when(serviceRef.getProperty(Constants.SERVICE_ID)).thenReturn(1L);
        when(serviceRef.getProperty(Constants.OBJECTCLASS))
                .thenReturn(new String[] { "org.osgi.service.resolver.Resolver" });
        when(serviceRef.getBundle()).thenReturn(theBundle);
        when(serviceRef.getPropertyKeys()).thenReturn(new String[0]);

        Response response = serviceHandler.handle(session);

        assertThat(response.getStatus().getDescription(), is("200 OK"));
        assertThat(response.getMimeType().toString(), is("application/json"));
        String responseAsText = TestUtils.convertStreamToString(response.getData());
        //assertThat(responseAsText, containsString("\"version\":\"0.1.0\""));
        assertThat(responseAsText, containsString("\"id\":\"1\""));
        assertThat(responseAsText, containsString("\"objectClass\":\"org.osgi.service.resolver.Resolver\""));
    }

}
