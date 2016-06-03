// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\io\skysail\webconsole\antlr\ExportPackage.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link ExportPackageParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface ExportPackageVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameter(ExportPackageParser.ParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#exportPackage}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExportPackage(ExportPackageParser.ExportPackageContext ctx);
	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#export}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExport(ExportPackageParser.ExportContext ctx);
	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#packageNames}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPackageNames(ExportPackageParser.PackageNamesContext ctx);
	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#packageName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPackageName(ExportPackageParser.PackageNameContext ctx);
}