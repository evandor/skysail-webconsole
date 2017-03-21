// Generated from /Users/carsten/git/skysail-webconsole/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/Version.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link VersionParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface VersionVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link VersionParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(VersionParser.NumberContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionParser#version}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVersion(VersionParser.VersionContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionParser#major}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMajor(VersionParser.MajorContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionParser#minor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMinor(VersionParser.MinorContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionParser#micro}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMicro(VersionParser.MicroContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionParser#qualifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQualifier(VersionParser.QualifierContext ctx);
}