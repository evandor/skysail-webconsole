package io.skysail.webconsole.entities;

import java.util.ArrayList;
import java.util.List;

import io.skysail.webconsole.antlr.ExportPackageBaseVisitor;
import io.skysail.webconsole.antlr.ExportPackageParser.ExportContext;
import io.skysail.webconsole.antlr.ExportPackageParser.PackageNameContext;
import io.skysail.webconsole.antlr.ExportPackageParser.VersionContext;

public class ExportPackageVisitor extends ExportPackageBaseVisitor<Void> {

	private List<ExportPackage> exportedPackages;
	
	private List<ExportPackage> currentExportPackages;

	public ExportPackageVisitor(List<ExportPackage> exportedPackages) {
		this.exportedPackages = exportedPackages;
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
	
	@Override
	public Void visitVersion(VersionContext ctx) {
		String version = ctx.v().getText();
		currentExportPackages.stream().forEach(cep -> {
			cep.setVersion(version);
		});
		return null;
	}

}
