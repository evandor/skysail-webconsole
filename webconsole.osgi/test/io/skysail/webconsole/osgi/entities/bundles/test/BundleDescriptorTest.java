package io.skysail.webconsole.osgi.entities.bundles.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.Version;

import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;

public class BundleDescriptorTest {

    protected Bundle bundle;

    @Before
    public void setUp() {
        bundle = setUpDefaultBundle();
    }

    @Test
    public void captures_simple_bundle() {
        BundleDescriptor descriptor = new BundleDescriptor(bundle,null);

        assertThat(descriptor.getId(), is("7"));
        assertThat(descriptor.getState(), is("ACTIVE"));
        assertThat(descriptor.getSymbolicName(), is("symbolic.name"));
        assertThat(descriptor.getVersion(), is("1.0.0"));
    }

    @Test
    public void captures_bundles_size() {
        BundleDescriptor descriptor = new BundleDescriptor(bundle,null);

        //assertThat(descriptor.getSize(), is("7"));
    }

    protected Bundle setUpDefaultBundle() {
        bundle = Mockito.mock(Bundle.class);
        Mockito.when(bundle.getBundleId()).thenReturn(7L);
        Mockito.when(bundle.getLocation()).thenReturn("reference:file:.");
        Mockito.when(bundle.getState()).thenReturn(32);
        Mockito.when(bundle.getSymbolicName()).thenReturn("symbolic.name");
        Mockito.when(bundle.getVersion()).thenReturn(new Version("1.0.0"));
        return bundle;
    }

}
