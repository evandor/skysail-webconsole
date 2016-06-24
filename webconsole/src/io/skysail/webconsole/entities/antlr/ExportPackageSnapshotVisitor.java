//package io.skysail.webconsole.entities.antlr;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import io.skysail.webconsole.antlr.ExportPackageBaseVisitor;
//import io.skysail.webconsole.antlr.ExportPackageParser.ExportContext;
//import io.skysail.webconsole.antlr.ExportPackageParser.ExportPackageContext;
//import io.skysail.webconsole.antlr.ExportPackageParser.PackageNameContext;
//import io.skysail.webconsole.antlr.ExportPackageParser.ParameterContext;
//import io.skysail.webconsole.entities.packages.ExportPackageSnapshot;
//import lombok.extern.slf4j.Slf4j;
//
//@Slf4j
//public class ExportPackageSnapshotVisitor extends ExportPackageBaseVisitor<Void> {
//
//	private List<ExportPackageSnapshot> exportedPackages;
//	private List<ExportPackageSnapshot> currentExportPackages;
//
//	public ExportPackageSnapshotVisitor(List<ExportPackageSnapshot> exportedPackages) {
//		this.exportedPackages = exportedPackages;
//	}
//
//	@Override
//	public Void visitExportPackage(ExportPackageContext ctx) {
//		ctx.export().forEach(this::visit);
//		return null;
//	}
//
//	@Override
//	public Void visitExport(ExportContext ctx) {
//		currentExportPackages = new ArrayList<>();
//		List<PackageNameContext> packageNames = ctx.packageNames().packageName();
//		packageNames.stream().forEach(pkgName -> {
//			ExportPackageSnapshot exportedPackage = new ExportPackageSnapshot(pkgName.getText());
//			exportedPackages.add(exportedPackage);
//			currentExportPackages.add(exportedPackage);
//		});
//		ctx.parameter().stream().forEach(this::visit);
//		return null;
//	}
//
//	@Override
//	public Void visitParameter(ParameterContext ctx) {
//		if (ctx.Directive() != null) {
//			String[] directive = ctx.Directive().getText().split(":=");
//			if ("mandatory".equals(directive[0])) {
//				currentExportPackages.stream().forEach(cep -> cep.setMandatory(directive[1]));
//			}
//		} else if (ctx.Attribute() != null) {
//			String[] attribute = ctx.Attribute().getText().split("=");
//			if ("version".equals(attribute[0])) {
//				currentExportPackages.stream().forEach(cep -> cep.setVersion(attribute[1]));
//			}
//		}
//		return null;
//	}
//
//}
