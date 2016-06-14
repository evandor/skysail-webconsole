package io.skysail.webconsole.entities.antlr;

import java.util.ArrayList;
import java.util.List;

import io.skysail.webconsole.antlr.ImportPackageBaseVisitor;
import io.skysail.webconsole.antlr.ImportPackageParser.ImportExprContext;
import io.skysail.webconsole.antlr.ImportPackageParser.ImportPackageContext;
import io.skysail.webconsole.antlr.ImportPackageParser.PackageNameContext;
import io.skysail.webconsole.antlr.ImportPackageParser.ParameterContext;
import io.skysail.webconsole.entities.Resolution;
import io.skysail.webconsole.entities.packages.ImportPackageSnapshot;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ImportPackageSnapshotVisitor extends ImportPackageBaseVisitor<Void> {

    private List<ImportPackageSnapshot> importedPackages;
    private List<ImportPackageSnapshot> currentImportedPackages;

    public ImportPackageSnapshotVisitor(List<ImportPackageSnapshot> pkgs) {
        this.importedPackages = pkgs;
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
        	ImportPackageSnapshot pkg = new ImportPackageSnapshot(pkgName.getText());
            importedPackages.add(pkg);
            currentImportedPackages.add(pkg);
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
            }
        } else if (ctx.Attribute() != null) {
            String[] attribute = ctx.Attribute().getText().split("=");
            if ("version".equals(attribute[0])) {
                currentImportedPackages.stream().forEach(cep -> cep.setVersionRange(attribute[1]));
            }
        }
        return null;
    }

    private Resolution parseResolution(String resolutionString) {
        try {
            return Resolution.valueOf(resolutionString.toUpperCase());
        } catch (Exception e) {
            log.warn("could not parse resolution string '{}'", resolutionString);
            return Resolution.MANDATORY;
        }
    }

}
