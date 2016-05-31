// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Simple.g4 by ANTLR 4.2.2
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SimpleLexer extends Lexer {
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PLUS=1, MINUS=2, TIMES=3, DIV=4, NUMBER=5, BR_OPEN=6, BR_CLOSE=7, WS=8;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] tokenNames = {
		"<INVALID>",
		"PLUS", "MINUS", "TIMES", "DIV", "NUMBER", "'('", "')'", "WS"
	};
	public static final String[] ruleNames = {
		"PLUS", "MINUS", "TIMES", "DIV", "NUMBER", "BR_OPEN", "BR_CLOSE", "WS"
	};


	public SimpleLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Simple.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\nC\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\3\2\3\2\3\2\3\2"+
		"\3\2\5\2\31\n\2\3\3\3\3\3\3\3\3\3\3\3\3\5\3!\n\3\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\5\4)\n\4\3\5\3\5\3\5\3\5\5\5/\n\5\3\6\5\6\62\n\6\3\6\6\6\65\n\6\r\6"+
		"\16\6\66\3\7\3\7\3\b\3\b\3\t\6\t>\n\t\r\t\16\t?\3\t\3\t\2\2\n\3\3\5\4"+
		"\7\5\t\6\13\7\r\b\17\t\21\n\3\2\4\3\2\62;\5\2\13\f\17\17\"\"I\2\3\3\2"+
		"\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17"+
		"\3\2\2\2\2\21\3\2\2\2\3\30\3\2\2\2\5 \3\2\2\2\7(\3\2\2\2\t.\3\2\2\2\13"+
		"\61\3\2\2\2\r8\3\2\2\2\17:\3\2\2\2\21=\3\2\2\2\23\24\7r\2\2\24\25\7n\2"+
		"\2\25\26\7w\2\2\26\31\7u\2\2\27\31\7-\2\2\30\23\3\2\2\2\30\27\3\2\2\2"+
		"\31\4\3\2\2\2\32\33\7o\2\2\33\34\7k\2\2\34\35\7p\2\2\35\36\7w\2\2\36!"+
		"\7u\2\2\37!\7/\2\2 \32\3\2\2\2 \37\3\2\2\2!\6\3\2\2\2\"#\7v\2\2#$\7k\2"+
		"\2$%\7o\2\2%&\7g\2\2&)\7u\2\2\')\7,\2\2(\"\3\2\2\2(\'\3\2\2\2)\b\3\2\2"+
		"\2*+\7f\2\2+,\7k\2\2,/\7x\2\2-/\7\61\2\2.*\3\2\2\2.-\3\2\2\2/\n\3\2\2"+
		"\2\60\62\7/\2\2\61\60\3\2\2\2\61\62\3\2\2\2\62\64\3\2\2\2\63\65\t\2\2"+
		"\2\64\63\3\2\2\2\65\66\3\2\2\2\66\64\3\2\2\2\66\67\3\2\2\2\67\f\3\2\2"+
		"\289\7*\2\29\16\3\2\2\2:;\7+\2\2;\20\3\2\2\2<>\t\3\2\2=<\3\2\2\2>?\3\2"+
		"\2\2?=\3\2\2\2?@\3\2\2\2@A\3\2\2\2AB\b\t\2\2B\22\3\2\2\2\n\2\30 (.\61"+
		"\66?\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}