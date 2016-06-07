package io.skysail.webconsole.entities;

import org.osgi.service.packageadmin.ExportedPackage;

import lombok.Getter;

@Getter
public class PackageResolvingCandidate {

    private BundleDescriptor exportingBundle;
    private String name;
    private String version;

    @SuppressWarnings("deprecation")
    public PackageResolvingCandidate(ExportedPackage export) {
        exportingBundle = new BundleDescriptor(export.getExportingBundle());
        name = export.getName();
        version = export.getVersion().toString();
    }

}
