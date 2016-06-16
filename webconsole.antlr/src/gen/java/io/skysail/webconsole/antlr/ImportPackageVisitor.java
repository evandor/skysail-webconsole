// Generated from /home/carsten/.hudson/jobs/skysail-webconsole.antlr.release/workspace/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/ImportPackage.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link ImportPackageParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface ImportPackageVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link ImportPackageParser#parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameter(ImportPackageParser.ParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link ImportPackageParser#importPackage}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportPackage(ImportPackageParser.ImportPackageContext ctx);
	/**
	 * Visit a parse tree produced by {@link ImportPackageParser#importExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportExpr(ImportPackageParser.ImportExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link ImportPackageParser#packageNames}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPackageNames(ImportPackageParser.PackageNamesContext ctx);
	/**
	 * Visit a parse tree produced by {@link ImportPackageParser#packageName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPackageName(ImportPackageParser.PackageNameContext ctx);
}