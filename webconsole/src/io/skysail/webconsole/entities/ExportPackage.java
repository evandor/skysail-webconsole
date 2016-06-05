package io.skysail.webconsole.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ExportPackage extends PackageDescriptor {

    private String uses;
    private String version;
    private String mandatory;
    private String include;
    private String exclude;

    public ExportPackage(String pkgName) {
        super(pkgName);
    }



}