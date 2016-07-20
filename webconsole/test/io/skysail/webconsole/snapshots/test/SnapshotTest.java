package io.skysail.webconsole.snapshots.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.Arrays;
import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.ServiceReference;

import io.skysail.webconsole.osgi.entities.Snapshot;
import io.skysail.webconsole.osgi.entities.bundles.BundleSnapshot;
import io.skysail.webconsole.osgi.entities.services.ServiceDetails;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.test.TestUtils;

@Ignore
public class SnapshotTest {

    private Bundle mockedBundle = TestUtils.mockBundle(0L, "name", "0.1.0");
    private ServiceReference<?> mockedService = TestUtils.mockService(0L, mockedBundle);

    @Test
    public void provides_list_of_bundles() {
        OsgiService osgiService = Mockito.mock(OsgiService.class);
        List<BundleSnapshot> bundleDescriptors = Arrays.asList(new BundleSnapshot(mockedBundle));

        Mockito.when(osgiService.getBundleSnapshots()).thenReturn(bundleDescriptors);
        Snapshot snapshot = new Snapshot(osgiService, 1l, "title");
        assertThat(snapshot.getBundles().size(), is(1));
    }

    @Test
    public void provides_list_of_services() {
        OsgiService osgiService = Mockito.mock(OsgiService.class);
        List<ServiceDetails> serviceDetails = Arrays.asList(new ServiceDetails(mockedService));

        Mockito.when(osgiService.getServiceDetails()).thenReturn(serviceDetails);
        Snapshot snapshot = new Snapshot(osgiService, 1l, "title");
        assertThat(snapshot.getServices().size(), is(1));
    }
}
