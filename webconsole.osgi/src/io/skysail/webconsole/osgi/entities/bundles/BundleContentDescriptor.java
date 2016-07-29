package io.skysail.webconsole.osgi.entities.bundles;

import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;

import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import lombok.Getter;

@Getter
public class BundleContentDescriptor extends BundleDescriptor {

    private static final String OSGI_INF = "OSGI-INF";
    private static final String OSGI_OPT = "OSGI-OPT";

    private List<String> infPaths = new ArrayList<>();
    private List<String> sourcePaths = new ArrayList<>();
    private List<String> contentPaths = new ArrayList<>();

    public BundleContentDescriptor(Bundle bundle, BundleContext context) {
        super(bundle, context);
    }

    public void addPath(ZipEntry e) {
        if (e.getName().startsWith(OSGI_INF)) {
            infPaths.add(e.getName());
        } else if (e.getName().startsWith(OSGI_OPT)) {
            sourcePaths .add(e.getName());
        } else {
            contentPaths.add(e.getName());
        }
    }

}
