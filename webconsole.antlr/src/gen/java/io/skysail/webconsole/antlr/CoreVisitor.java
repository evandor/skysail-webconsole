// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Core.g4 by ANTLR 4.2.2
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.misc.NotNull;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link CoreParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface CoreVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link CoreParser#alphanum}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlphanum(@NotNull CoreParser.AlphanumContext ctx);

	/**
	 * Visit a parse tree produced by {@link CoreParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(@NotNull CoreParser.NumberContext ctx);

	/**
	 * Visit a parse tree produced by {@link CoreParser#token}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitToken(@NotNull CoreParser.TokenContext ctx);
}