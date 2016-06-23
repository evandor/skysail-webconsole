// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\io\skysail\webconsole\antlr\ExportPackage.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ExportPackageParser}.
 */
public interface ExportPackageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ExportPackageParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(ExportPackageParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExportPackageParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(ExportPackageParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExportPackageParser#exportPackage}.
	 * @param ctx the parse tree
	 */
	void enterExportPackage(ExportPackageParser.ExportPackageContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExportPackageParser#exportPackage}.
	 * @param ctx the parse tree
	 */
	void exitExportPackage(ExportPackageParser.ExportPackageContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExportPackageParser#export}.
	 * @param ctx the parse tree
	 */
	void enterExport(ExportPackageParser.ExportContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExportPackageParser#export}.
	 * @param ctx the parse tree
	 */
	void exitExport(ExportPackageParser.ExportContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExportPackageParser#packageNames}.
	 * @param ctx the parse tree
	 */
	void enterPackageNames(ExportPackageParser.PackageNamesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExportPackageParser#packageNames}.
	 * @param ctx the parse tree
	 */
	void exitPackageNames(ExportPackageParser.PackageNamesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExportPackageParser#packageName}.
	 * @param ctx the parse tree
	 */
	void enterPackageName(ExportPackageParser.PackageNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExportPackageParser#packageName}.
	 * @param ctx the parse tree
	 */
	void exitPackageName(ExportPackageParser.PackageNameContext ctx);
}