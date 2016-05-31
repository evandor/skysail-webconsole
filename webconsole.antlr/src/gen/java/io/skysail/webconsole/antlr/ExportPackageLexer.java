// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\ExportPackage.g4 by ANTLR 4.2.2
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
public class ExportPackageLexer extends Lexer {
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__9=1, T__8=2, T__7=3, T__6=4, T__5=5, T__4=6, T__3=7, T__2=8, T__1=9, 
		T__0=10, Identifier=11, WS=12, DIGIT=13, ALPHA=14;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] tokenNames = {
		"<INVALID>",
		"'_'", "'version=\"'", "'\"'", "'mandatory:='", "'version='", "'uses:='", 
		"';'", "','", "'-'", "'.'", "Identifier", "WS", "DIGIT", "ALPHA"
	};
	public static final String[] ruleNames = {
		"T__9", "T__8", "T__7", "T__6", "T__5", "T__4", "T__3", "T__2", "T__1", 
		"T__0", "Identifier", "JavaLetter", "JavaLetterOrDigit", "WS", "DIGIT", 
		"ALPHA"
	};


	public ExportPackageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ExportPackage.g4"; }

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

	@Override
	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 11: return JavaLetter_sempred((RuleContext)_localctx, predIndex);

		case 12: return JavaLetterOrDigit_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean JavaLetterOrDigit_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2: return Character.isJavaIdentifierPart(_input.LA(-1));

		case 3: return Character.isJavaIdentifierPart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)));
		}
		return true;
	}
	private boolean JavaLetter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0: return Character.isJavaIdentifierStart(_input.LA(-1));

		case 1: return Character.isJavaIdentifierStart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)));
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\20w\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\7\fX\n\f"+
		"\f\f\16\f[\13\f\3\r\3\r\3\r\3\r\3\r\3\r\5\rc\n\r\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\5\16k\n\16\3\17\6\17n\n\17\r\17\16\17o\3\17\3\17\3\20\3\20\3"+
		"\21\3\21\2\2\22\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\2\33\2\35\16\37\17!\20\3\2\n\6\2&&C\\aac|\4\2\2\u0081\ud802\udc01\3\2"+
		"\ud802\udc01\3\2\udc02\ue001\7\2&&\62;C\\aac|\5\2\13\f\17\17\"\"\3\2\62"+
		";\4\2C\\c|z\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\3#\3\2\2\2\5%\3\2\2\2\7"+
		"/\3\2\2\2\t\61\3\2\2\2\13=\3\2\2\2\rF\3\2\2\2\17M\3\2\2\2\21O\3\2\2\2"+
		"\23Q\3\2\2\2\25S\3\2\2\2\27U\3\2\2\2\31b\3\2\2\2\33j\3\2\2\2\35m\3\2\2"+
		"\2\37s\3\2\2\2!u\3\2\2\2#$\7a\2\2$\4\3\2\2\2%&\7x\2\2&\'\7g\2\2\'(\7t"+
		"\2\2()\7u\2\2)*\7k\2\2*+\7q\2\2+,\7p\2\2,-\7?\2\2-.\7$\2\2.\6\3\2\2\2"+
		"/\60\7$\2\2\60\b\3\2\2\2\61\62\7o\2\2\62\63\7c\2\2\63\64\7p\2\2\64\65"+
		"\7f\2\2\65\66\7c\2\2\66\67\7v\2\2\678\7q\2\289\7t\2\29:\7{\2\2:;\7<\2"+
		"\2;<\7?\2\2<\n\3\2\2\2=>\7x\2\2>?\7g\2\2?@\7t\2\2@A\7u\2\2AB\7k\2\2BC"+
		"\7q\2\2CD\7p\2\2DE\7?\2\2E\f\3\2\2\2FG\7w\2\2GH\7u\2\2HI\7g\2\2IJ\7u\2"+
		"\2JK\7<\2\2KL\7?\2\2L\16\3\2\2\2MN\7=\2\2N\20\3\2\2\2OP\7.\2\2P\22\3\2"+
		"\2\2QR\7/\2\2R\24\3\2\2\2ST\7\60\2\2T\26\3\2\2\2UY\5\31\r\2VX\5\33\16"+
		"\2WV\3\2\2\2X[\3\2\2\2YW\3\2\2\2YZ\3\2\2\2Z\30\3\2\2\2[Y\3\2\2\2\\c\t"+
		"\2\2\2]^\n\3\2\2^c\6\r\2\2_`\t\4\2\2`a\t\5\2\2ac\6\r\3\2b\\\3\2\2\2b]"+
		"\3\2\2\2b_\3\2\2\2c\32\3\2\2\2dk\t\6\2\2ef\n\3\2\2fk\6\16\4\2gh\t\4\2"+
		"\2hi\t\5\2\2ik\6\16\5\2jd\3\2\2\2je\3\2\2\2jg\3\2\2\2k\34\3\2\2\2ln\t"+
		"\7\2\2ml\3\2\2\2no\3\2\2\2om\3\2\2\2op\3\2\2\2pq\3\2\2\2qr\b\17\2\2r\36"+
		"\3\2\2\2st\t\b\2\2t \3\2\2\2uv\t\t\2\2v\"\3\2\2\2\7\2Ybjo\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}