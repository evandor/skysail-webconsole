// Generated from /home/carsten/.hudson/jobs/skysail-webconsole.antlr.release/workspace/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/Version.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link VersionParser}.
 */
public interface VersionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link VersionParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(VersionParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(VersionParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionParser#version}.
	 * @param ctx the parse tree
	 */
	void enterVersion(VersionParser.VersionContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#version}.
	 * @param ctx the parse tree
	 */
	void exitVersion(VersionParser.VersionContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionParser#major}.
	 * @param ctx the parse tree
	 */
	void enterMajor(VersionParser.MajorContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#major}.
	 * @param ctx the parse tree
	 */
	void exitMajor(VersionParser.MajorContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionParser#minor}.
	 * @param ctx the parse tree
	 */
	void enterMinor(VersionParser.MinorContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#minor}.
	 * @param ctx the parse tree
	 */
	void exitMinor(VersionParser.MinorContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionParser#micro}.
	 * @param ctx the parse tree
	 */
	void enterMicro(VersionParser.MicroContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#micro}.
	 * @param ctx the parse tree
	 */
	void exitMicro(VersionParser.MicroContext ctx);
	/**
	 * Enter a parse tree produced by {@link VersionParser#qualifier}.
	 * @param ctx the parse tree
	 */
	void enterQualifier(VersionParser.QualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#qualifier}.
	 * @param ctx the parse tree
	 */
	void exitQualifier(VersionParser.QualifierContext ctx);
}