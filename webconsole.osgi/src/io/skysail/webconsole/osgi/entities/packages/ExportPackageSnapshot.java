package io.skysail.webconsole.osgi.entities.packages;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ExportPackageSnapshot extends PackageDescriptor {

    private String version;
    private String mandatory;

    public ExportPackageSnapshot(String pkgName) {
        super(pkgName);
    }


}