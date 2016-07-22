// Generated from /home/carsten/.hudson/jobs/skysail-webconsole.bundle.release/workspace/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/ImportPackage.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ImportPackageParser}.
 */
public interface ImportPackageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ImportPackageParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(ImportPackageParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ImportPackageParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(ImportPackageParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link ImportPackageParser#importPackage}.
	 * @param ctx the parse tree
	 */
	void enterImportPackage(ImportPackageParser.ImportPackageContext ctx);
	/**
	 * Exit a parse tree produced by {@link ImportPackageParser#importPackage}.
	 * @param ctx the parse tree
	 */
	void exitImportPackage(ImportPackageParser.ImportPackageContext ctx);
	/**
	 * Enter a parse tree produced by {@link ImportPackageParser#importExpr}.
	 * @param ctx the parse tree
	 */
	void enterImportExpr(ImportPackageParser.ImportExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ImportPackageParser#importExpr}.
	 * @param ctx the parse tree
	 */
	void exitImportExpr(ImportPackageParser.ImportExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ImportPackageParser#packageNames}.
	 * @param ctx the parse tree
	 */
	void enterPackageNames(ImportPackageParser.PackageNamesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ImportPackageParser#packageNames}.
	 * @param ctx the parse tree
	 */
	void exitPackageNames(ImportPackageParser.PackageNamesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ImportPackageParser#packageName}.
	 * @param ctx the parse tree
	 */
	void enterPackageName(ImportPackageParser.PackageNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ImportPackageParser#packageName}.
	 * @param ctx the parse tree
	 */
	void exitPackageName(ImportPackageParser.PackageNameContext ctx);
}