// Generated from /Users/carsten/git/skysail-webconsole/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/Core.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CoreParser}.
 */
public interface CoreListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CoreParser#alphanum}.
	 * @param ctx the parse tree
	 */
	void enterAlphanum(CoreParser.AlphanumContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreParser#alphanum}.
	 * @param ctx the parse tree
	 */
	void exitAlphanum(CoreParser.AlphanumContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(CoreParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(CoreParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link CoreParser#extended}.
	 * @param ctx the parse tree
	 */
	void enterExtended(CoreParser.ExtendedContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreParser#extended}.
	 * @param ctx the parse tree
	 */
	void exitExtended(CoreParser.ExtendedContext ctx);
}