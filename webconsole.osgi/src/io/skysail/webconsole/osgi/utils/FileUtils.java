package io.skysail.webconsole.osgi.utils;

import java.io.File;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class FileUtils {

    public static final String REFERENCE_FILE = "reference:file:";

    public static String getCurrentDirectory() {
        return new File(".").getAbsolutePath();
    }
    public static long getSize(String location) {
        if (location.startsWith(REFERENCE_FILE)) {
            String filename = getBundleFilename(location);
            long size = new File(filename).length() / 1024;
            if (size == 0) {
                log.info("could not determine file size of '{}'", filename);
            }
            return size;
        } else {
            log.info("could not determine file size of {}", location);
        }
        return 0;
    }

    private static String getBundleFilename(String location) {
        return location.substring(REFERENCE_FILE.length()).replace("%25", "%");
    }

}
