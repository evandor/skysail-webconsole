package io.skysail.webconsole.test;

import java.util.Dictionary;
import java.util.Hashtable;

import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.Constants;
import org.osgi.framework.ServiceReference;
import org.osgi.framework.Version;

public class TestUtils {

	public static Bundle mockBundle(Long bundleId, String symbolicName, String version) {
		Bundle bundle = Mockito.mock(Bundle.class);
		Mockito.when(bundle.getBundleId()).thenReturn(bundleId);
		Mockito.when(bundle.getSymbolicName()).thenReturn(symbolicName);
		Mockito.when(bundle.getVersion()).thenReturn(new Version(version));
		Dictionary<String, String> headers = new Hashtable<>();
		Mockito.when(bundle.getHeaders(null)).thenReturn(headers);
		return bundle;
	}

	public static ServiceReference<?> mockService(long serviceId, Bundle bundle) {
		ServiceReference<?> serviceRef = Mockito.mock(ServiceReference.class);
		Mockito.when(serviceRef.getProperty(Constants.SERVICE_ID)).thenReturn(serviceId);
		Mockito.when(serviceRef.getProperty(Constants.OBJECTCLASS)).thenReturn(new String[] {"org.osgi.service.resolver.Resolver"});
		Mockito.when(serviceRef.getBundle()).thenReturn(bundle);
		Mockito.when(serviceRef.getPropertyKeys()).thenReturn(new String[0]);
		return serviceRef;

	}

	public static String convertStreamToString(java.io.InputStream is) {
	    @SuppressWarnings("resource")
		java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
	    return s.hasNext() ? s.next() : "";
	}

}
