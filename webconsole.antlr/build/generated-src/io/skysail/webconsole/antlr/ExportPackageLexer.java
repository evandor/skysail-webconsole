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
		T__8=1, T__7=2, T__6=3, T__5=4, T__4=5, T__3=6, T__2=7, T__1=8, T__0=9, 
		Identifier=10, WS=11, DIGIT=12, ALPHA=13;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] tokenNames = {
		"<INVALID>",
		"'uses:=\"'", "'.'", "','", "'_'", "'version=\"'", "'-'", "'version='", 
		"';'", "'\"'", "Identifier", "WS", "DIGIT", "ALPHA"
	};
	public static final String[] ruleNames = {
		"T__8", "T__7", "T__6", "T__5", "T__4", "T__3", "T__2", "T__1", "T__0", 
		"Identifier", "JavaLetter", "JavaLetterOrDigit", "WS", "DIGIT", "ALPHA"
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
		case 10: return JavaLetter_sempred((RuleContext)_localctx, predIndex);

		case 11: return JavaLetterOrDigit_sempred((RuleContext)_localctx, predIndex);
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\17j\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\7\13K\n\13\f\13\16\13N\13\13\3\f\3\f\3\f\3\f\3\f\3\f\5\fV\n\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\5\r^\n\r\3\16\6\16a\n\16\r\16\16\16b\3\16\3\16"+
		"\3\17\3\17\3\20\3\20\2\2\21\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25"+
		"\f\27\2\31\2\33\r\35\16\37\17\3\2\n\6\2&&C\\aac|\4\2\2\u0081\ud802\udc01"+
		"\3\2\ud802\udc01\3\2\udc02\ue001\7\2&&\62;C\\aac|\5\2\13\f\17\17\"\"\3"+
		"\2\62;\4\2C\\c|m\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\3!\3\2\2\2\5)\3\2\2\2\7+\3\2"+
		"\2\2\t-\3\2\2\2\13/\3\2\2\2\r9\3\2\2\2\17;\3\2\2\2\21D\3\2\2\2\23F\3\2"+
		"\2\2\25H\3\2\2\2\27U\3\2\2\2\31]\3\2\2\2\33`\3\2\2\2\35f\3\2\2\2\37h\3"+
		"\2\2\2!\"\7w\2\2\"#\7u\2\2#$\7g\2\2$%\7u\2\2%&\7<\2\2&\'\7?\2\2\'(\7$"+
		"\2\2(\4\3\2\2\2)*\7\60\2\2*\6\3\2\2\2+,\7.\2\2,\b\3\2\2\2-.\7a\2\2.\n"+
		"\3\2\2\2/\60\7x\2\2\60\61\7g\2\2\61\62\7t\2\2\62\63\7u\2\2\63\64\7k\2"+
		"\2\64\65\7q\2\2\65\66\7p\2\2\66\67\7?\2\2\678\7$\2\28\f\3\2\2\29:\7/\2"+
		"\2:\16\3\2\2\2;<\7x\2\2<=\7g\2\2=>\7t\2\2>?\7u\2\2?@\7k\2\2@A\7q\2\2A"+
		"B\7p\2\2BC\7?\2\2C\20\3\2\2\2DE\7=\2\2E\22\3\2\2\2FG\7$\2\2G\24\3\2\2"+
		"\2HL\5\27\f\2IK\5\31\r\2JI\3\2\2\2KN\3\2\2\2LJ\3\2\2\2LM\3\2\2\2M\26\3"+
		"\2\2\2NL\3\2\2\2OV\t\2\2\2PQ\n\3\2\2QV\6\f\2\2RS\t\4\2\2ST\t\5\2\2TV\6"+
		"\f\3\2UO\3\2\2\2UP\3\2\2\2UR\3\2\2\2V\30\3\2\2\2W^\t\6\2\2XY\n\3\2\2Y"+
		"^\6\r\4\2Z[\t\4\2\2[\\\t\5\2\2\\^\6\r\5\2]W\3\2\2\2]X\3\2\2\2]Z\3\2\2"+
		"\2^\32\3\2\2\2_a\t\7\2\2`_\3\2\2\2ab\3\2\2\2b`\3\2\2\2bc\3\2\2\2cd\3\2"+
		"\2\2de\b\16\2\2e\34\3\2\2\2fg\t\b\2\2g\36\3\2\2\2hi\t\t\2\2i \3\2\2\2"+
		"\7\2LU]b\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}