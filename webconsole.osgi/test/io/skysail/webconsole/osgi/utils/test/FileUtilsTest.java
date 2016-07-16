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
    @Ignore
    public void testName() {
        System.out.println(FileUtils.getCurrentDirectory());
        long size = FileUtils.getSize("reference:file:build.gradle");
        assertThat(size, is(7L));
    }

}
