// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\io\skysail\webconsole\antlr\VersionRange.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link VersionRangeParser}.
 */
public interface VersionRangeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(VersionRangeParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(VersionRangeParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#versionRange}.
	 * @param ctx the parse tree
	 */
	void enterVersionRange(VersionRangeParser.VersionRangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#versionRange}.
	 * @param ctx the parse tree
	 */
	void exitVersionRange(VersionRangeParser.VersionRangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#interval}.
	 * @param ctx the parse tree
	 */
	void enterInterval(VersionRangeParser.IntervalContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#interval}.
	 * @param ctx the parse tree
	 */
	void exitInterval(VersionRangeParser.IntervalContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#atleast}.
	 * @param ctx the parse tree
	 */
	void enterAtleast(VersionRangeParser.AtleastContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#atleast}.
	 * @param ctx the parse tree
	 */
	void exitAtleast(VersionRangeParser.AtleastContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#floor}.
	 * @param ctx the parse tree
	 */
	void enterFloor(VersionRangeParser.FloorContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#floor}.
	 * @param ctx the parse tree
	 */
	void exitFloor(VersionRangeParser.FloorContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#ceiling}.
	 * @param ctx the parse tree
	 */
	void enterCeiling(VersionRangeParser.CeilingContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#ceiling}.
	 * @param ctx the parse tree
	 */
	void exitCeiling(VersionRangeParser.CeilingContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#version}.
	 * @param ctx the parse tree
	 */
	void enterVersion(VersionRangeParser.VersionContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#version}.
	 * @param ctx the parse tree
	 */
	void exitVersion(VersionRangeParser.VersionContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#major}.
	 * @param ctx the parse tree
	 */
	void enterMajor(VersionRangeParser.MajorContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#major}.
	 * @param ctx the parse tree
	 */
	void exitMajor(VersionRangeParser.MajorContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#minor}.
	 * @param ctx the parse tree
	 */
	void enterMinor(VersionRangeParser.MinorContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#minor}.
	 * @param ctx the parse tree
	 */
	void exitMinor(VersionRangeParser.MinorContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#micro}.
	 * @param ctx the parse tree
	 */
	void enterMicro(VersionRangeParser.MicroContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#micro}.
	 * @param ctx the parse tree
	 */
	void exitMicro(VersionRangeParser.MicroContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionRangeParser#qualifier}.
	 * @param ctx the parse tree
	 */
	void enterQualifier(VersionRangeParser.QualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionRangeParser#qualifier}.
	 * @param ctx the parse tree
	 */
	void exitQualifier(VersionRangeParser.QualifierContext ctx);
}