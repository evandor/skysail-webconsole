package io.skysail.webconsole.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ImportPackage extends PackageDescriptor {

    private Resolution resolution = Resolution.MANDATORY;
    private String versionRange;
    private String bundleSymbolicName;
    private String bundleVersion;

    public ImportPackage(String pkgName) {
        super(pkgName);
    }

}
