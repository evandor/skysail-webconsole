package io.skysail.webconsole.osgi.entities.packages;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    private Map<String, String> additionalAttributes = new HashMap<>();

    public ImportPackage(String pkgName) {
        super(pkgName);
    }

    public void addCandidate(ExportedPackage export) {
        packageResolvingCandidates.add(new PackageResolvingCandidate(export));
    }

    public void addAdditionalAttributes(String key, String value) {
        this.additionalAttributes.put(key, value);
    }

}
