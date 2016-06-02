package io.skysail.webconsole.entities.antlr;

import java.util.ArrayList;
import java.util.List;

import io.skysail.webconsole.antlr.ExportPackageBaseVisitor;
import io.skysail.webconsole.antlr.ExportPackageParser.ExportContext;
import io.skysail.webconsole.antlr.ExportPackageParser.ExportPackageContext;
import io.skysail.webconsole.antlr.ExportPackageParser.PackageNameContext;
import io.skysail.webconsole.antlr.ExportPackageParser.ParameterContext;
import io.skysail.webconsole.entities.ExportPackage;

public class ExportPackageVisitor extends ExportPackageBaseVisitor<Void> {

    private List<ExportPackage> exportedPackages;

    private List<ExportPackage> currentExportPackages;

    public ExportPackageVisitor(List<ExportPackage> exportedPackages) {
        this.exportedPackages = exportedPackages;
    }

    @Override
    public Void visitExportPackage(ExportPackageContext ctx) {
        ctx.export().forEach(e -> visit(e));
        return null;
    }

    @Override
    public Void visitExport(ExportContext ctx) {
        System.out.println("ExportContext: " + ctx.getText());
        currentExportPackages = new ArrayList<>();
        List<PackageNameContext> packageNames = ctx.packageNames().packageName();
        packageNames.stream().forEach(pkgName -> {
            ExportPackage exportedPackage = new ExportPackage(pkgName.getText());
            exportedPackages.add(exportedPackage);
            currentExportPackages.add(exportedPackage);
        });
        ctx.parameter().stream().forEach(p -> visit(p));
        return null;
    }

    // @Override
    // public Void visitVersion(VersionContext ctx) {
    // String version = ctx.v().getText();
    // currentExportPackages.stream().forEach(cep -> {
    // cep.setVersion(version);
    // });
    // return null;
    // }
    //
    // @Override
    // public Void visitUses(UsesContext ctx) {
    // PackageNameContext packageName = ctx.packageName();
    // String uses;
    // if (packageName != null && !packageName.isEmpty()) {
    // uses = packageName.getText();
    // } else if (ctx.usedPackages() != null) {
    // uses = ctx.usedPackages().stream().map(up ->
    // up.getText()).collect(Collectors.joining(","));
    // }
    // currentExportPackages.stream().forEach(cep -> cep.setUses(uses));
    // return null;
    // }

    @Override
    public Void visitParameter(ParameterContext ctx) {
        if (ctx.Directive() != null) {

        } else if (ctx.Attribute() != null) {

        }
        // currentExportPackages.stream().forEach(cep -> cep.setUses(uses));
        return null;
    }

}
