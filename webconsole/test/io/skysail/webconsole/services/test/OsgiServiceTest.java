package io.skysail.webconsole.services.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import io.skysail.webconsole.services.OsgiService;
import io.skysail.webconsole.test.TestUtils;

public class OsgiServiceTest {

	@Test
	public void testName() {
		BundleContext bundleContext = Mockito.mock(BundleContext.class);
		Bundle mockedBundle = TestUtils.mockBundle(0L, "symbolicName", "0.1.0");
		Mockito.when(bundleContext.getBundles()).thenReturn(new Bundle[]{mockedBundle});

		OsgiService osgiService = new OsgiService(bundleContext);

		assertThat(osgiService.getBundleDescriptors().size(), is(1));
		assertThat(osgiService.getBundleDescriptors().get(0).getId(),is("0"));
	}
}
