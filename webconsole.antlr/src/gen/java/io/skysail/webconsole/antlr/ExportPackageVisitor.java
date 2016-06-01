// Generated from /Users/carsten/git/skysail-webconsole/webconsole.antlr/src/main/antlr4/ExportPackage.g4 by ANTLR 4.2.2
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.misc.NotNull;
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
	 * Visit a parse tree produced by {@link ExportPackageParser#minor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMinor(@NotNull ExportPackageParser.MinorContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#packageNames}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPackageNames(@NotNull ExportPackageParser.PackageNamesContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#version}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVersion(@NotNull ExportPackageParser.VersionContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#mandatory}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMandatory(@NotNull ExportPackageParser.MandatoryContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#token}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitToken(@NotNull ExportPackageParser.TokenContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#alphanum}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlphanum(@NotNull ExportPackageParser.AlphanumContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(@NotNull ExportPackageParser.NumberContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#r}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitR(@NotNull ExportPackageParser.RContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#uniqueName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUniqueName(@NotNull ExportPackageParser.UniqueNameContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#major}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMajor(@NotNull ExportPackageParser.MajorContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#micro}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMicro(@NotNull ExportPackageParser.MicroContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#v}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitV(@NotNull ExportPackageParser.VContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameter(@NotNull ExportPackageParser.ParameterContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#usedPackages}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUsedPackages(@NotNull ExportPackageParser.UsedPackagesContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#qualifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQualifier(@NotNull ExportPackageParser.QualifierContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#uses}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUses(@NotNull ExportPackageParser.UsesContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#packageName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPackageName(@NotNull ExportPackageParser.PackageNameContext ctx);

	/**
	 * Visit a parse tree produced by {@link ExportPackageParser#export}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExport(@NotNull ExportPackageParser.ExportContext ctx);
}