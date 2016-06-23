package io.skysail.webconsole.osgi.entities.antlr;

import java.util.ArrayList;
import java.util.List;

import io.skysail.webconsole.antlr.ImportPackageBaseVisitor;
import io.skysail.webconsole.antlr.ImportPackageParser.ImportExprContext;
import io.skysail.webconsole.antlr.ImportPackageParser.ImportPackageContext;
import io.skysail.webconsole.antlr.ImportPackageParser.PackageNameContext;
import io.skysail.webconsole.antlr.ImportPackageParser.ParameterContext;
import io.skysail.webconsole.osgi.entities.packages.ImportPackage;
import io.skysail.webconsole.osgi.entities.packages.Resolution;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ImportPackageVisitor extends ImportPackageBaseVisitor<Void> {

    private List<ImportPackage> importedPackages;
    private List<ImportPackage> currentImportedPackages;

    public ImportPackageVisitor(List<ImportPackage> exportedPackages) {
        this.importedPackages = exportedPackages;
    }

    @Override
    public Void visitImportPackage(ImportPackageContext ctx) {
        ctx.importExpr().forEach(this::visit);
        return null;
    }

    @Override
    public Void visitImportExpr(ImportExprContext ctx) {
        currentImportedPackages = new ArrayList<>();
        List<PackageNameContext> packageNames = ctx.packageNames().packageName();
        packageNames.stream().forEach(pkgName -> {
            ImportPackage exportedPackage = new ImportPackage(pkgName.getText());
            importedPackages.add(exportedPackage);
            currentImportedPackages.add(exportedPackage);
        });
        ctx.parameter().stream().forEach(this::visit);
        return null;
    }

    @Override
    public Void visitParameter(ParameterContext ctx) {
        if (ctx.Directive() != null) {
            String[] directive = ctx.Directive().getText().split(":=");
            if ("resolution".equals(directive[0])) {
                currentImportedPackages.stream().forEach(cep -> cep.setResolution(parseResolution(directive[1])));
            } else {
                log.warn("unknown directive {}", directive[0]);
            }
        } else if (ctx.Attribute() != null) {
            String[] attribute = ctx.Attribute().getText().split("=");
            if ("version".equals(attribute[0])) {
                currentImportedPackages.stream().forEach(cep -> cep.setVersionRange(attribute[1]));
            } else if ("specification-version".equals(attribute[0])) {
                    //ignore
            } else if ("bundle-symbolic-name".equals(attribute[0])) {
                currentImportedPackages.stream().forEach(cep -> cep.setBundleSymbolicName(attribute[1]));
            } else if ("bundle-version".equals(attribute[0])) {
                currentImportedPackages.stream().forEach(cep -> cep.setBundleVersion(attribute[1]));
            } else {
                currentImportedPackages.stream().forEach(cep -> cep.addAdditionalAttributes(attribute[0], attribute[1]));
            }
        }
        return null;
    }

    private Resolution parseResolution(String resolutionString) {
        try {
            return Resolution.valueOf(resolutionString.toUpperCase());
        } catch (Exception e) { // NOSONAR
            log.warn("could not parse resolution string '{}'", resolutionString);
            return Resolution.MANDATORY;
        }
    }

}
