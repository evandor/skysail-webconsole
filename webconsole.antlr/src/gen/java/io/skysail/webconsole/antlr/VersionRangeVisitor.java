// Generated from /home/carsten/.hudson/jobs/skysail-webconsole.bundle.release/workspace/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/VersionRange.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link VersionRangeParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface VersionRangeVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(VersionRangeParser.NumberContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#versionRange}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVersionRange(VersionRangeParser.VersionRangeContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#interval}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInterval(VersionRangeParser.IntervalContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#atleast}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAtleast(VersionRangeParser.AtleastContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#floor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFloor(VersionRangeParser.FloorContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#ceiling}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCeiling(VersionRangeParser.CeilingContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#version}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVersion(VersionRangeParser.VersionContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#major}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMajor(VersionRangeParser.MajorContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#minor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMinor(VersionRangeParser.MinorContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#micro}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMicro(VersionRangeParser.MicroContext ctx);
	/**
	 * Visit a parse tree produced by {@link VersionRangeParser#qualifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQualifier(VersionRangeParser.QualifierContext ctx);
}