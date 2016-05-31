// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Version.g4 by ANTLR 4.2.2
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.misc.NotNull;
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
	 * Visit a parse tree produced by {@link VersionParser#alphanum}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAlphanum(@NotNull VersionParser.AlphanumContext ctx);

	/**
	 * Visit a parse tree produced by {@link VersionParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(@NotNull VersionParser.NumberContext ctx);

	/**
	 * Visit a parse tree produced by {@link VersionParser#major}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMajor(@NotNull VersionParser.MajorContext ctx);

	/**
	 * Visit a parse tree produced by {@link VersionParser#minor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMinor(@NotNull VersionParser.MinorContext ctx);

	/**
	 * Visit a parse tree produced by {@link VersionParser#micro}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMicro(@NotNull VersionParser.MicroContext ctx);

	/**
	 * Visit a parse tree produced by {@link VersionParser#v}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitV(@NotNull VersionParser.VContext ctx);

	/**
	 * Visit a parse tree produced by {@link VersionParser#qualifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQualifier(@NotNull VersionParser.QualifierContext ctx);

	/**
	 * Visit a parse tree produced by {@link VersionParser#token}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitToken(@NotNull VersionParser.TokenContext ctx);
}