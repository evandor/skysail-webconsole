package io.skysail.webconsole.osgi.it;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.osgi.framework.BundleContext;
import org.osgi.framework.FrameworkUtil;
import org.osgi.framework.ServiceReference;

import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;

@RunWith(MockitoJUnitRunner.class)
public class OsgiServiceTest {

    private final BundleContext context = FrameworkUtil.getBundle(OsgiServiceTest.class).getBundleContext();

    private OsgiService osgiService;

    @Before
    public void before() {
        ServiceReference<OsgiService> serviceReference = context.getServiceReference(OsgiService.class);
        osgiService = context.getService(serviceReference);
    }

    @Test
    public void osgiService_exists() {
        assertThat(osgiService, is(notNullValue()));
    }

    @Test
    public void osgiService_provides_bundleDescriptors() {
        List<BundleDescriptor> bundleDescriptors = osgiService.getBundleDescriptors();
        assertTrue(bundleDescriptors.size() > 10);
    }
}
