package io.skysail.webconsole.osgi.entities.packages;

import java.util.HashMap;
import java.util.Map;

import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ExportPackage extends PackageDescriptor {

    private String version;
    private String uses;
    private String mandatory;
    private String include;
    private String exclude;

    private Map<String, String> additionalAttributes = new HashMap<>();

    private BundleDescriptor exportingBundle;

    public ExportPackage(String pkgName) {
        super(pkgName);
    }

    public void addAdditionalAttributes(String key, String value) {
        this.additionalAttributes.put(key, value);
    }


}