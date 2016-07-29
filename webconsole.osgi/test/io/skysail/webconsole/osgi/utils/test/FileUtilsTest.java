package io.skysail.webconsole.osgi.utils.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Ignore;
import org.junit.Test;

import io.skysail.webconsole.osgi.utils.FileUtils;

public class FileUtilsTest {

    @Test
    public void undefined_location_yields_zero_size() {
        long size = FileUtils.getSize("someundefinedlocation");
        assertThat(size, is(0L));
    }

    @Test
    public void window_style_path_starting_with_file() {
       //assertThat(FileUtils.normalizeBundleLocation("file:/C:/webconsole.jar"),is("C:\\webconsole.jar"));
    }

    @Test
    @Ignore
    public void testName() {
        long size = FileUtils.getSize("reference:file:build.gradle");
        assertThat(size, is(7L));
    }

}
