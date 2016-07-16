package io.skysail.webconsole.osgi.entities.bundles;

import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;

import org.osgi.framework.Bundle;

import lombok.Getter;

@Getter
public class BundleContentDescriptor extends BundleDescriptor {

    private static final String OSGI_OPT = "OSGI-OPT";

    private List<String> sourcePaths = new ArrayList<>();
    private List<String> contentPaths = new ArrayList<>();

    public BundleContentDescriptor(Bundle bundle) {
        super(bundle);
    }

    public void addPath(ZipEntry e) {
        if (e.getName().startsWith(OSGI_OPT)) {
            sourcePaths .add(e.getName());
        } else {
            contentPaths.add(e.getName());
        }
    }

}
