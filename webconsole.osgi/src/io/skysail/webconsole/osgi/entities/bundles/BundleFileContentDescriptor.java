package io.skysail.webconsole.osgi.entities.bundles;

import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import lombok.Getter;
import lombok.Setter;

public class BundleFileContentDescriptor extends BundleDescriptor {

    @Getter
    @Setter
    private String code;

    public BundleFileContentDescriptor(Bundle bundle, BundleContext context) {
        super(bundle, context);
    }


}
