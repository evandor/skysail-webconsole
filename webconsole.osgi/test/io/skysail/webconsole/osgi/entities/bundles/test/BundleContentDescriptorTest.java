package io.skysail.webconsole.osgi.entities.bundles.test;

import static org.hamcrest.Matchers.hasItems;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.zip.ZipEntry;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.osgi.framework.Bundle;

import io.skysail.webconsole.osgi.entities.bundles.BundleContentDescriptor;

@RunWith(MockitoJUnitRunner.class)
public class BundleContentDescriptorTest {

    @Mock
    private Bundle bundle;

    private BundleContentDescriptor bundleContentDescriptor;

    @Before
    public void setup() {
        bundleContentDescriptor = new BundleContentDescriptor(bundle,null);
    }

    @Test
    public void provides_added_content_path()  {
        ZipEntry zipEntry = mock(ZipEntry.class);
        when(zipEntry.getName()).thenReturn("theName");

        bundleContentDescriptor.addPath(zipEntry);

        assertThat(bundleContentDescriptor.getContentPaths(), hasItems("theName"));
    }

    @Test
    public void provides_added_source_path()  {
        ZipEntry zipEntry = mock(ZipEntry.class);
        when(zipEntry.getName()).thenReturn("OSGI-OPT/theName");

        bundleContentDescriptor.addPath(zipEntry);

        assertThat(bundleContentDescriptor.getSourcePaths(), hasItems("OSGI-OPT/theName"));
    }

}
