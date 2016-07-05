// Generated from /Users/carsten/git/skysail-webconsole/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/VersionRange.g4 by ANTLR 4.5.3
package io.skysail.webconsole.antlr;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class VersionRangeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, DIGIT=9, 
		ALPHA=10, WS=11;
	public static final int
		RULE_number = 0, RULE_versionRange = 1, RULE_interval = 2, RULE_atleast = 3, 
		RULE_floor = 4, RULE_ceiling = 5, RULE_version = 6, RULE_major = 7, RULE_minor = 8, 
		RULE_micro = 9, RULE_qualifier = 10;
	public static final String[] ruleNames = {
		"number", "versionRange", "interval", "atleast", "floor", "ceiling", "version", 
		"major", "minor", "micro", "qualifier"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'['", "'('", "','", "']'", "')'", "'.'", "'_'", "'-'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, "DIGIT", "ALPHA", 
		"WS"
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

	@Override
	public String getGrammarFileName() { return "VersionRange.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public VersionRangeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class NumberContext extends ParserRuleContext {
		public List<TerminalNode> DIGIT() { return getTokens(VersionRangeParser.DIGIT); }
		public TerminalNode DIGIT(int i) {
			return getToken(VersionRangeParser.DIGIT, i);
		}
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterNumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitNumber(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitNumber(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(22);
				match(DIGIT);
				}
				}
				setState(25); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIGIT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VersionRangeContext extends ParserRuleContext {
		public IntervalContext interval() {
			return getRuleContext(IntervalContext.class,0);
		}
		public AtleastContext atleast() {
			return getRuleContext(AtleastContext.class,0);
		}
		public VersionRangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_versionRange; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterVersionRange(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitVersionRange(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitVersionRange(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VersionRangeContext versionRange() throws RecognitionException {
		VersionRangeContext _localctx = new VersionRangeContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_versionRange);
		try {
			setState(29);
			switch (_input.LA(1)) {
			case T__0:
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(27);
				interval();
				}
				break;
			case DIGIT:
				enterOuterAlt(_localctx, 2);
				{
				setState(28);
				atleast();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntervalContext extends ParserRuleContext {
		public FloorContext floor() {
			return getRuleContext(FloorContext.class,0);
		}
		public CeilingContext ceiling() {
			return getRuleContext(CeilingContext.class,0);
		}
		public IntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interval; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterInterval(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitInterval(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitInterval(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IntervalContext interval() throws RecognitionException {
		IntervalContext _localctx = new IntervalContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_interval);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==T__1) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			setState(32);
			floor();
			setState(33);
			match(T__2);
			setState(34);
			ceiling();
			setState(35);
			_la = _input.LA(1);
			if ( !(_la==T__3 || _la==T__4) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtleastContext extends ParserRuleContext {
		public VersionContext version() {
			return getRuleContext(VersionContext.class,0);
		}
		public AtleastContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atleast; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterAtleast(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitAtleast(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitAtleast(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AtleastContext atleast() throws RecognitionException {
		AtleastContext _localctx = new AtleastContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_atleast);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			version();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FloorContext extends ParserRuleContext {
		public VersionContext version() {
			return getRuleContext(VersionContext.class,0);
		}
		public FloorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterFloor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitFloor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitFloor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FloorContext floor() throws RecognitionException {
		FloorContext _localctx = new FloorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_floor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			version();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CeilingContext extends ParserRuleContext {
		public VersionContext version() {
			return getRuleContext(VersionContext.class,0);
		}
		public CeilingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ceiling; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterCeiling(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitCeiling(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitCeiling(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CeilingContext ceiling() throws RecognitionException {
		CeilingContext _localctx = new CeilingContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ceiling);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			version();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VersionContext extends ParserRuleContext {
		public MajorContext major() {
			return getRuleContext(MajorContext.class,0);
		}
		public MinorContext minor() {
			return getRuleContext(MinorContext.class,0);
		}
		public MicroContext micro() {
			return getRuleContext(MicroContext.class,0);
		}
		public QualifierContext qualifier() {
			return getRuleContext(QualifierContext.class,0);
		}
		public VersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_version; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterVersion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitVersion(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitVersion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VersionContext version() throws RecognitionException {
		VersionContext _localctx = new VersionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_version);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			major();
			setState(54);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(44);
				match(T__5);
				setState(45);
				minor();
				setState(52);
				_la = _input.LA(1);
				if (_la==T__5) {
					{
					setState(46);
					match(T__5);
					setState(47);
					micro();
					setState(50);
					_la = _input.LA(1);
					if (_la==T__5) {
						{
						setState(48);
						match(T__5);
						setState(49);
						qualifier();
						}
					}

					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MajorContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public MajorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_major; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterMajor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitMajor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitMajor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MajorContext major() throws RecognitionException {
		MajorContext _localctx = new MajorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_major);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MinorContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public MinorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_minor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterMinor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitMinor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitMinor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MinorContext minor() throws RecognitionException {
		MinorContext _localctx = new MinorContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_minor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MicroContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public MicroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_micro; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterMicro(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitMicro(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitMicro(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MicroContext micro() throws RecognitionException {
		MicroContext _localctx = new MicroContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_micro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			number();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifierContext extends ParserRuleContext {
		public List<TerminalNode> ALPHA() { return getTokens(VersionRangeParser.ALPHA); }
		public TerminalNode ALPHA(int i) {
			return getToken(VersionRangeParser.ALPHA, i);
		}
		public List<TerminalNode> DIGIT() { return getTokens(VersionRangeParser.DIGIT); }
		public TerminalNode DIGIT(int i) {
			return getToken(VersionRangeParser.DIGIT, i);
		}
		public QualifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).enterQualifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionRangeListener ) ((VersionRangeListener)listener).exitQualifier(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionRangeVisitor ) return ((VersionRangeVisitor<? extends T>)visitor).visitQualifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final QualifierContext qualifier() throws RecognitionException {
		QualifierContext _localctx = new QualifierContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_qualifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(62);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << DIGIT) | (1L << ALPHA))) != 0)) ) {
				_errHandler.recoverInline(this);
				} else {
					consume();
				}
				}
				}
				setState(65); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << DIGIT) | (1L << ALPHA))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\rF\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\3\2\6\2\32\n\2\r\2\16\2\33\3\3\3\3\5\3 \n\3\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\65\n\b\5"+
		"\b\67\n\b\5\b9\n\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\6\fB\n\f\r\f\16\fC\3"+
		"\f\2\2\r\2\4\6\b\n\f\16\20\22\24\26\2\5\3\2\3\4\3\2\6\7\3\2\t\f@\2\31"+
		"\3\2\2\2\4\37\3\2\2\2\6!\3\2\2\2\b\'\3\2\2\2\n)\3\2\2\2\f+\3\2\2\2\16"+
		"-\3\2\2\2\20:\3\2\2\2\22<\3\2\2\2\24>\3\2\2\2\26A\3\2\2\2\30\32\7\13\2"+
		"\2\31\30\3\2\2\2\32\33\3\2\2\2\33\31\3\2\2\2\33\34\3\2\2\2\34\3\3\2\2"+
		"\2\35 \5\6\4\2\36 \5\b\5\2\37\35\3\2\2\2\37\36\3\2\2\2 \5\3\2\2\2!\"\t"+
		"\2\2\2\"#\5\n\6\2#$\7\5\2\2$%\5\f\7\2%&\t\3\2\2&\7\3\2\2\2\'(\5\16\b\2"+
		"(\t\3\2\2\2)*\5\16\b\2*\13\3\2\2\2+,\5\16\b\2,\r\3\2\2\2-8\5\20\t\2./"+
		"\7\b\2\2/\66\5\22\n\2\60\61\7\b\2\2\61\64\5\24\13\2\62\63\7\b\2\2\63\65"+
		"\5\26\f\2\64\62\3\2\2\2\64\65\3\2\2\2\65\67\3\2\2\2\66\60\3\2\2\2\66\67"+
		"\3\2\2\2\679\3\2\2\28.\3\2\2\289\3\2\2\29\17\3\2\2\2:;\5\2\2\2;\21\3\2"+
		"\2\2<=\5\2\2\2=\23\3\2\2\2>?\5\2\2\2?\25\3\2\2\2@B\t\4\2\2A@\3\2\2\2B"+
		"C\3\2\2\2CA\3\2\2\2CD\3\2\2\2D\27\3\2\2\2\b\33\37\64\668C";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}