// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Simple.g4 by ANTLR 4.2.2
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.misc.NotNull;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SimpleParser}.
 */
public interface SimpleListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SimpleParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(@NotNull SimpleParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(@NotNull SimpleParser.NumberContext ctx);

	/**
	 * Enter a parse tree produced by {@link SimpleParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(@NotNull SimpleParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(@NotNull SimpleParser.ExprContext ctx);

	/**
	 * Enter a parse tree produced by {@link SimpleParser#calc}.
	 * @param ctx the parse tree
	 */
	void enterCalc(@NotNull SimpleParser.CalcContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleParser#calc}.
	 * @param ctx the parse tree
	 */
	void exitCalc(@NotNull SimpleParser.CalcContext ctx);
}