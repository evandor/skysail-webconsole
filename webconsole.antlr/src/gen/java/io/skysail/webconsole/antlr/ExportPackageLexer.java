// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\io\skysail\webconsole\antlr\ExportPackage.g4 by ANTLR 4.5.3
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
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, Directive=3, Attribute=4, UniqueName=5, Ident=6, Extended=7, 
		Alphanum=8, ALPHA=9, DIGIT=10, Argument=11, WS=12;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "Directive", "Attribute", "QuotedString", "UniqueName", 
		"Ident", "JavaLetter", "JavaLetterOrDigit", "Extended", "Alphanum", "ALPHA", 
		"DIGIT", "Argument", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "','", "';'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, "Directive", "Attribute", "UniqueName", "Ident", "Extended", 
		"Alphanum", "ALPHA", "DIGIT", "Argument", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ExportPackageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ExportPackage.g4"; }

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
		case 4:
			return QuotedString_sempred((RuleContext)_localctx, predIndex);
		case 7:
			return JavaLetter_sempred((RuleContext)_localctx, predIndex);
		case 8:
			return JavaLetterOrDigit_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean QuotedString_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return Character.isJavaIdentifierPart(_input.LA(-1));
		}
		return true;
	}
	private boolean JavaLetter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return Character.isJavaIdentifierStart(_input.LA(-1));
		case 2:
			return Character.isJavaIdentifierStart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)));
		}
		return true;
	}
	private boolean JavaLetterOrDigit_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return Character.isJavaIdentifierPart(_input.LA(-1));
		case 4:
			return Character.isJavaIdentifierPart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)));
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\16r\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\7\6\64\n\6\f\6\16"+
		"\6\67\13\6\3\6\3\6\3\7\3\7\3\7\7\7>\n\7\f\7\16\7A\13\7\3\b\3\b\7\bE\n"+
		"\b\f\b\16\bH\13\b\3\t\3\t\3\t\3\t\3\t\3\t\5\tP\n\t\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\5\nX\n\n\3\13\3\13\6\13\\\n\13\r\13\16\13]\3\f\3\f\5\fb\n\f\3\r\3"+
		"\r\3\16\3\16\3\17\3\17\5\17j\n\17\3\20\6\20m\n\20\r\20\16\20n\3\20\3\20"+
		"\2\2\21\3\3\5\4\7\5\t\6\13\2\r\7\17\b\21\2\23\2\25\t\27\n\31\13\33\f\35"+
		"\r\37\16\3\2\r\5\2\2\2\f\f\17\17\4\2$$^^\6\2&&C\\aac|\4\2\2\u0081\ud802"+
		"\udc01\3\2\ud802\udc01\3\2\udc02\ue001\7\2&&\62;C\\aac|\4\2/\60aa\4\2"+
		"C\\c|\3\2\62;\5\2\13\f\16\17\"\"{\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2"+
		"\2\t\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3"+
		"\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\3!\3\2\2\2\5#\3\2\2\2\7"+
		"%\3\2\2\2\t+\3\2\2\2\13/\3\2\2\2\r:\3\2\2\2\17B\3\2\2\2\21O\3\2\2\2\23"+
		"W\3\2\2\2\25[\3\2\2\2\27a\3\2\2\2\31c\3\2\2\2\33e\3\2\2\2\35i\3\2\2\2"+
		"\37l\3\2\2\2!\"\7.\2\2\"\4\3\2\2\2#$\7=\2\2$\6\3\2\2\2%&\5\25\13\2&\'"+
		"\7<\2\2\'(\7?\2\2()\3\2\2\2)*\5\35\17\2*\b\3\2\2\2+,\5\25\13\2,-\7?\2"+
		"\2-.\5\35\17\2.\n\3\2\2\2/\65\7$\2\2\60\61\n\2\2\2\61\64\6\6\2\2\62\64"+
		"\t\3\2\2\63\60\3\2\2\2\63\62\3\2\2\2\64\67\3\2\2\2\65\63\3\2\2\2\65\66"+
		"\3\2\2\2\668\3\2\2\2\67\65\3\2\2\289\7$\2\29\f\3\2\2\2:?\5\17\b\2;<\7"+
		"\60\2\2<>\5\17\b\2=;\3\2\2\2>A\3\2\2\2?=\3\2\2\2?@\3\2\2\2@\16\3\2\2\2"+
		"A?\3\2\2\2BF\5\21\t\2CE\5\23\n\2DC\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3\2\2"+
		"\2G\20\3\2\2\2HF\3\2\2\2IP\t\4\2\2JK\n\5\2\2KP\6\t\3\2LM\t\6\2\2MN\t\7"+
		"\2\2NP\6\t\4\2OI\3\2\2\2OJ\3\2\2\2OL\3\2\2\2P\22\3\2\2\2QX\t\b\2\2RS\n"+
		"\5\2\2SX\6\n\5\2TU\t\6\2\2UV\t\7\2\2VX\6\n\6\2WQ\3\2\2\2WR\3\2\2\2WT\3"+
		"\2\2\2X\24\3\2\2\2Y\\\5\27\f\2Z\\\t\t\2\2[Y\3\2\2\2[Z\3\2\2\2\\]\3\2\2"+
		"\2][\3\2\2\2]^\3\2\2\2^\26\3\2\2\2_b\5\31\r\2`b\5\33\16\2a_\3\2\2\2a`"+
		"\3\2\2\2b\30\3\2\2\2cd\t\n\2\2d\32\3\2\2\2ef\t\13\2\2f\34\3\2\2\2gj\5"+
		"\25\13\2hj\5\13\6\2ig\3\2\2\2ih\3\2\2\2j\36\3\2\2\2km\t\f\2\2lk\3\2\2"+
		"\2mn\3\2\2\2nl\3\2\2\2no\3\2\2\2op\3\2\2\2pq\b\20\2\2q \3\2\2\2\16\2\63"+
		"\65?FOW[]ain\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}