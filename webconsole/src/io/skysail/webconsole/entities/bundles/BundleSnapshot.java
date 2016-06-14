package io.skysail.webconsole.entities.bundles;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Dictionary;
import java.util.List;
import java.util.stream.Collectors;

import org.antlr.v4.runtime.CommonTokenStream;
import org.osgi.framework.Bundle;
import org.osgi.framework.Constants;

import io.skysail.webconsole.antlr.ExportPackageLexer;
import io.skysail.webconsole.antlr.ExportPackageParser;
import io.skysail.webconsole.antlr.ExportPackageParser.ExportPackageContext;
import io.skysail.webconsole.antlr.ImportPackageLexer;
import io.skysail.webconsole.antlr.ImportPackageParser;
import io.skysail.webconsole.antlr.ImportPackageParser.ImportPackageContext;
import io.skysail.webconsole.entities.antlr.ExportPackageSnapshotVisitor;
import io.skysail.webconsole.entities.antlr.ExportPackageVisitor;
import io.skysail.webconsole.entities.antlr.ImportPackageSnapshotVisitor;
import io.skysail.webconsole.entities.antlr.ImportPackageVisitor;
import io.skysail.webconsole.entities.packages.ExportPackage;
import io.skysail.webconsole.entities.packages.ExportPackageSnapshot;
import io.skysail.webconsole.entities.packages.ImportPackage;
import io.skysail.webconsole.entities.packages.ImportPackageSnapshot;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BundleSnapshot extends BundleDescriptor {

    private List<ExportPackageSnapshot> exportPackage = new ArrayList<>();
    private List<ImportPackageSnapshot> importPackage = new ArrayList<>();
    private String exportService;

    public BundleSnapshot(Bundle bundle) {
        super(bundle);

        Dictionary<?, ?> headers = bundle.getHeaders(null);
        if (headers != null) {
            this.exportPackage = getExportedPackages(bundle, headers);
            this.importPackage = getImportedPackages(headers);
        }
    }
  
    private List<ExportPackageSnapshot> getExportedPackages(Bundle bundle, Dictionary<?, ?> headers) {
        String rawValue = (String) headers.get(Constants.EXPORT_PACKAGE);
        if (rawValue == null || rawValue.trim().length() == 0) {
            return Collections.emptyList();
        }

        ExportPackageParser parser = parseExport(rawValue);
        ExportPackageContext tree = parser.exportPackage();

        List<ExportPackageSnapshot> result = new ArrayList<>();
        ExportPackageSnapshotVisitor packageVisitor = new ExportPackageSnapshotVisitor(result);
        packageVisitor.visit(tree);

        return result.stream() // NOSONAR
                .sorted((p1, p2) -> p1.getPkgName().compareTo(p2.getPkgName()))
                .collect(Collectors.toList());
    }

    private List<ImportPackageSnapshot> getImportedPackages(Dictionary<?, ?> headers) {
        String rawValue = (String) headers.get(Constants.IMPORT_PACKAGE);
        if (rawValue == null || rawValue.trim().length() == 0) {
            return Collections.emptyList();
        }

        ImportPackageParser parser = parseImport(rawValue);
        ImportPackageContext tree = parser.importPackage();

        List<ImportPackageSnapshot> result = new ArrayList<>();
        ImportPackageSnapshotVisitor importPackageVisitor = new ImportPackageSnapshotVisitor(result);
        importPackageVisitor.visit(tree);

        return result.stream() // NOSONAR
                .sorted((p1, p2) -> p1.getPkgName().compareTo(p2.getPkgName()))
                .collect(Collectors.toList());
    }

    private ImportPackageParser parseImport(String inputString) {
        org.antlr.v4.runtime.CharStream input = new org.antlr.v4.runtime.ANTLRInputStream(inputString);
        return new ImportPackageParser(new CommonTokenStream(new ImportPackageLexer(input)));
    }

    private ExportPackageParser parseExport(String inputString) {
        org.antlr.v4.runtime.CharStream input = new org.antlr.v4.runtime.ANTLRInputStream(inputString);
        return new ExportPackageParser(new CommonTokenStream(new ExportPackageLexer(input)));
    }

}
