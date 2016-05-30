// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Version.g4 by ANTLR 4.2.2
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.misc.NotNull;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link VersionParser}.
 */
public interface VersionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link VersionParser#v}.
	 * @param ctx the parse tree
	 */
	void enterV(@NotNull VersionParser.VContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#v}.
	 * @param ctx the parse tree
	 */
	void exitV(@NotNull VersionParser.VContext ctx);

	/**
	 * Enter a parse tree produced by {@link VersionParser#micro}.
	 * @param ctx the parse tree
	 */
	void enterMicro(@NotNull VersionParser.MicroContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#micro}.
	 * @param ctx the parse tree
	 */
	void exitMicro(@NotNull VersionParser.MicroContext ctx);

	/**
	 * Enter a parse tree produced by {@link VersionParser#minor}.
	 * @param ctx the parse tree
	 */
	void enterMinor(@NotNull VersionParser.MinorContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#minor}.
	 * @param ctx the parse tree
	 */
	void exitMinor(@NotNull VersionParser.MinorContext ctx);

	/**
	 * Enter a parse tree produced by {@link VersionParser#alphanum}.
	 * @param ctx the parse tree
	 */
	void enterAlphanum(@NotNull VersionParser.AlphanumContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#alphanum}.
	 * @param ctx the parse tree
	 */
	void exitAlphanum(@NotNull VersionParser.AlphanumContext ctx);

	/**
	 * Enter a parse tree produced by {@link VersionParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(@NotNull VersionParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(@NotNull VersionParser.NumberContext ctx);

	/**
	 * Enter a parse tree produced by {@link VersionParser#qualifier}.
	 * @param ctx the parse tree
	 */
	void enterQualifier(@NotNull VersionParser.QualifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#qualifier}.
	 * @param ctx the parse tree
	 */
	void exitQualifier(@NotNull VersionParser.QualifierContext ctx);

	/**
	 * Enter a parse tree produced by {@link VersionParser#major}.
	 * @param ctx the parse tree
	 */
	void enterMajor(@NotNull VersionParser.MajorContext ctx);
	/**
	 * Exit a parse tree produced by {@link VersionParser#major}.
	 * @param ctx the parse tree
	 */
	void exitMajor(@NotNull VersionParser.MajorContext ctx);
}