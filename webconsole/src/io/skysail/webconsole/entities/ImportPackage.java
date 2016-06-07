package io.skysail.webconsole.entities;

import java.util.ArrayList;
import java.util.List;

import org.osgi.service.packageadmin.ExportedPackage;

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

    private List<PackageResolvingCandidate> packageResolvingCandidates = new ArrayList<>();

    public ImportPackage(String pkgName) {
        super(pkgName);
    }

    public void addCandidate(ExportedPackage export) {
        packageResolvingCandidates.add(new PackageResolvingCandidate(export));
    }

}
