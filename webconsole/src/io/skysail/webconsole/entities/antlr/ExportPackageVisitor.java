package io.skysail.webconsole.entities.antlr;

import java.util.ArrayList;
import java.util.List;

import io.skysail.webconsole.antlr.ExportPackageBaseVisitor;
import io.skysail.webconsole.antlr.ExportPackageParser.ExportContext;
import io.skysail.webconsole.antlr.ExportPackageParser.ExportPackageContext;
import io.skysail.webconsole.antlr.ExportPackageParser.PackageNameContext;
import io.skysail.webconsole.antlr.ExportPackageParser.ParameterContext;
import io.skysail.webconsole.entities.ExportPackage;
import lombok.extern.slf4j.Slf4j;

@Slf4j
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

    @Override
    public Void visitParameter(ParameterContext ctx) {
        if (ctx.Directive() != null) {
            String[] directive = ctx.Directive().getText().split(":=");
            if ("uses".equals(directive[0])) {
                currentExportPackages.stream().forEach(cep -> cep.setUses(directive[1]));
            } else if ("mandatory".equals(directive[0])) {
                currentExportPackages.stream().forEach(cep -> cep.setMandatory(directive[1]));
            } else if ("exclude".equals(directive[0])) {
                currentExportPackages.stream().forEach(cep -> cep.setExclude(directive[1]));
            } else if ("include".equals(directive[0])) {
                currentExportPackages.stream().forEach(cep -> cep.setInclude(directive[1]));
            } else {
                log.warn("unknown directive");
            }
        } else if (ctx.Attribute() != null) {
            String[] attribute = ctx.Attribute().getText().split("=");
            if ("version".equals(attribute[0])) {
                currentExportPackages.stream().forEach(cep -> cep.setVersion(attribute[1]));
            } else if ("specification-version".equals(attribute[0])) {
                    //ignore
            } else {
                currentExportPackages.stream().forEach(cep -> cep.addAdditionalAttributes(attribute[0], attribute[1]));
            }

        }
        // currentExportPackages.stream().forEach(cep -> cep.setUses(uses));
        return null;
    }

}
