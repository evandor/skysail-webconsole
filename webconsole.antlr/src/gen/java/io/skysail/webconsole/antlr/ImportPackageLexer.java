// Generated from /home/carsten/.hudson/jobs/skysail-webconsole.antlr.release/workspace/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/ImportPackage.g4 by ANTLR 4.5.3
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
public class ImportPackageLexer extends Lexer {
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


	public ImportPackageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ImportPackage.g4"; }

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
		case 7:
			return JavaLetter_sempred((RuleContext)_localctx, predIndex);
		case 8:
			return JavaLetterOrDigit_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean JavaLetter_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return Character.isJavaIdentifierStart(_input.LA(-1));
		case 1:
			return Character.isJavaIdentifierStart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)));
		}
		return true;
	}
	private boolean JavaLetterOrDigit_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return Character.isJavaIdentifierPart(_input.LA(-1));
		case 3:
			return Character.isJavaIdentifierPart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)));
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\16p\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\7\6\62\n\6\f\6\16\6\65\13"+
		"\6\3\6\3\6\3\7\3\7\3\7\7\7<\n\7\f\7\16\7?\13\7\3\b\3\b\7\bC\n\b\f\b\16"+
		"\bF\13\b\3\t\3\t\3\t\3\t\3\t\3\t\5\tN\n\t\3\n\3\n\3\n\3\n\3\n\3\n\5\n"+
		"V\n\n\3\13\3\13\6\13Z\n\13\r\13\16\13[\3\f\3\f\5\f`\n\f\3\r\3\r\3\16\3"+
		"\16\3\17\3\17\5\17h\n\17\3\20\6\20k\n\20\r\20\16\20l\3\20\3\20\2\2\21"+
		"\3\3\5\4\7\5\t\6\13\2\r\7\17\b\21\2\23\2\25\t\27\n\31\13\33\f\35\r\37"+
		"\16\3\2\f\3\2$$\6\2&&C\\aac|\4\2\2\u0081\ud802\udc01\3\2\ud802\udc01\3"+
		"\2\udc02\ue001\7\2&&\62;C\\aac|\4\2/\60aa\4\2C\\c|\3\2\62;\5\2\13\f\16"+
		"\17\"\"x\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\r\3\2\2\2\2"+
		"\17\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3"+
		"\2\2\2\2\37\3\2\2\2\3!\3\2\2\2\5#\3\2\2\2\7%\3\2\2\2\t+\3\2\2\2\13/\3"+
		"\2\2\2\r8\3\2\2\2\17@\3\2\2\2\21M\3\2\2\2\23U\3\2\2\2\25Y\3\2\2\2\27_"+
		"\3\2\2\2\31a\3\2\2\2\33c\3\2\2\2\35g\3\2\2\2\37j\3\2\2\2!\"\7.\2\2\"\4"+
		"\3\2\2\2#$\7=\2\2$\6\3\2\2\2%&\5\25\13\2&\'\7<\2\2\'(\7?\2\2()\3\2\2\2"+
		")*\5\35\17\2*\b\3\2\2\2+,\5\25\13\2,-\7?\2\2-.\5\35\17\2.\n\3\2\2\2/\63"+
		"\7$\2\2\60\62\n\2\2\2\61\60\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64"+
		"\3\2\2\2\64\66\3\2\2\2\65\63\3\2\2\2\66\67\7$\2\2\67\f\3\2\2\28=\5\17"+
		"\b\29:\7\60\2\2:<\5\17\b\2;9\3\2\2\2<?\3\2\2\2=;\3\2\2\2=>\3\2\2\2>\16"+
		"\3\2\2\2?=\3\2\2\2@D\5\21\t\2AC\5\23\n\2BA\3\2\2\2CF\3\2\2\2DB\3\2\2\2"+
		"DE\3\2\2\2E\20\3\2\2\2FD\3\2\2\2GN\t\3\2\2HI\n\4\2\2IN\6\t\2\2JK\t\5\2"+
		"\2KL\t\6\2\2LN\6\t\3\2MG\3\2\2\2MH\3\2\2\2MJ\3\2\2\2N\22\3\2\2\2OV\t\7"+
		"\2\2PQ\n\4\2\2QV\6\n\4\2RS\t\5\2\2ST\t\6\2\2TV\6\n\5\2UO\3\2\2\2UP\3\2"+
		"\2\2UR\3\2\2\2V\24\3\2\2\2WZ\5\27\f\2XZ\t\b\2\2YW\3\2\2\2YX\3\2\2\2Z["+
		"\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2\\\26\3\2\2\2]`\5\31\r\2^`\5\33\16\2_]\3"+
		"\2\2\2_^\3\2\2\2`\30\3\2\2\2ab\t\t\2\2b\32\3\2\2\2cd\t\n\2\2d\34\3\2\2"+
		"\2eh\5\25\13\2fh\5\13\6\2ge\3\2\2\2gf\3\2\2\2h\36\3\2\2\2ik\t\13\2\2j"+
		"i\3\2\2\2kl\3\2\2\2lj\3\2\2\2lm\3\2\2\2mn\3\2\2\2no\b\20\2\2o \3\2\2\2"+
		"\r\2\63=DMUY[_gl\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}