package io.skysail.webconsole.osgi.entities.bundles;

import org.osgi.framework.Bundle;

import lombok.Getter;
import lombok.Setter;

public class BundleFileContentDescriptor extends BundleDescriptor {

    @Getter
    @Setter
    private String code;

    public BundleFileContentDescriptor(Bundle bundle) {
        super(bundle);
    }


}
