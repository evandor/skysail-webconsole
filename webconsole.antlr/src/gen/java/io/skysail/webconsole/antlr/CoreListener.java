// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Core.g4 by ANTLR 4.2.2
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.misc.NotNull;
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
	void enterAlphanum(@NotNull CoreParser.AlphanumContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreParser#alphanum}.
	 * @param ctx the parse tree
	 */
	void exitAlphanum(@NotNull CoreParser.AlphanumContext ctx);

	/**
	 * Enter a parse tree produced by {@link CoreParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(@NotNull CoreParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(@NotNull CoreParser.NumberContext ctx);

	/**
	 * Enter a parse tree produced by {@link CoreParser#token}.
	 * @param ctx the parse tree
	 */
	void enterToken(@NotNull CoreParser.TokenContext ctx);
	/**
	 * Exit a parse tree produced by {@link CoreParser#token}.
	 * @param ctx the parse tree
	 */
	void exitToken(@NotNull CoreParser.TokenContext ctx);
}