package io.skysail.webconsole.osgi.entities.packages;

import java.util.ArrayList;
import java.util.List;

import org.osgi.service.packageadmin.ExportedPackage;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ImportPackageSnapshot extends PackageDescriptor {

    private Resolution resolution = Resolution.MANDATORY;
    private String versionRange;

    private List<PackageResolvingCandidate> packageResolvingCandidates = new ArrayList<>();

    public ImportPackageSnapshot(String pkgName) {
        super(pkgName);
    }

    public void addCandidate(ExportedPackage export) {
        packageResolvingCandidates.add(new PackageResolvingCandidate(export));
    }

}
