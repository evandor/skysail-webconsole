package io.skysail.webconsole.osgi.services.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;

public class OsgiServiceTest {

    private OsgiService osgiService;
    private BundleContext bundleContext;
    private Bundle theBundle;
    private Bundle[] bundles;

    @Before
    public void setup() throws Exception {
        theBundle = Mockito.mock(Bundle.class);
        osgiService = new OsgiService();
        bundleContext = Mockito.mock(BundleContext.class);
        osgiService.start(bundleContext);
        bundles = new Bundle[1];
        bundles[0] = theBundle;
    }

    @Test
    public void getBundleDescriptors() {
        Mockito.when(bundleContext.getBundles()).thenReturn(bundles);
        List<BundleDescriptor> bundleDescriptors = osgiService.getBundleDescriptors();
        assertThat(bundleDescriptors.size(),is(1));
    }
}
