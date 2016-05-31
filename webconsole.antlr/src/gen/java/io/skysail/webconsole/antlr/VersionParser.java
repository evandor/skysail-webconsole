// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Version.g4 by ANTLR 4.2.2
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
public class VersionParser extends Parser {
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__2=1, T__1=2, T__0=3, DIGIT=4, ALPHA=5;
	public static final String[] tokenNames = {
		"<INVALID>", "'_'", "'-'", "'.'", "DIGIT", "ALPHA"
	};
	public static final int
		RULE_v = 0, RULE_major = 1, RULE_minor = 2, RULE_micro = 3, RULE_qualifier = 4, 
		RULE_alphanum = 5, RULE_number = 6, RULE_token = 7;
	public static final String[] ruleNames = {
		"v", "major", "minor", "micro", "qualifier", "alphanum", "number", "token"
	};

	@Override
	public String getGrammarFileName() { return "Version.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public VersionParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class VContext extends ParserRuleContext {
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
		public VContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_v; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterV(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitV(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitV(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VContext v() throws RecognitionException {
		VContext _localctx = new VContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_v);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16); major();
			setState(27);
			_la = _input.LA(1);
			if (_la==3) {
				{
				setState(17); match(3);
				setState(18); minor();
				setState(25);
				_la = _input.LA(1);
				if (_la==3) {
					{
					setState(19); match(3);
					setState(20); micro();
					setState(23);
					_la = _input.LA(1);
					if (_la==3) {
						{
						setState(21); match(3);
						setState(22); qualifier();
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
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterMajor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitMajor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitMajor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MajorContext major() throws RecognitionException {
		MajorContext _localctx = new MajorContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_major);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29); number();
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
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterMinor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitMinor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitMinor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MinorContext minor() throws RecognitionException {
		MinorContext _localctx = new MinorContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_minor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31); number();
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
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterMicro(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitMicro(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitMicro(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MicroContext micro() throws RecognitionException {
		MicroContext _localctx = new MicroContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_micro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33); number();
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
		public List<AlphanumContext> alphanum() {
			return getRuleContexts(AlphanumContext.class);
		}
		public AlphanumContext alphanum(int i) {
			return getRuleContext(AlphanumContext.class,i);
		}
		public QualifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterQualifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitQualifier(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitQualifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final QualifierContext qualifier() throws RecognitionException {
		QualifierContext _localctx = new QualifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_qualifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(38);
				switch (_input.LA(1)) {
				case DIGIT:
				case ALPHA:
					{
					setState(35); alphanum();
					}
					break;
				case 1:
					{
					setState(36); match(1);
					}
					break;
				case 2:
					{
					setState(37); match(2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(40); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 1) | (1L << 2) | (1L << DIGIT) | (1L << ALPHA))) != 0) );
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

	public static class AlphanumContext extends ParserRuleContext {
		public TerminalNode DIGIT() { return getToken(VersionParser.DIGIT, 0); }
		public TerminalNode ALPHA() { return getToken(VersionParser.ALPHA, 0); }
		public AlphanumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alphanum; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterAlphanum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitAlphanum(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitAlphanum(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AlphanumContext alphanum() throws RecognitionException {
		AlphanumContext _localctx = new AlphanumContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_alphanum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			_la = _input.LA(1);
			if ( !(_la==DIGIT || _la==ALPHA) ) {
			_errHandler.recoverInline(this);
			}
			consume();
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

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode DIGIT(int i) {
			return getToken(VersionParser.DIGIT, i);
		}
		public List<TerminalNode> DIGIT() { return getTokens(VersionParser.DIGIT); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterNumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitNumber(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitNumber(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(44); match(DIGIT);
				}
				}
				setState(47); 
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

	public static class TokenContext extends ParserRuleContext {
		public List<AlphanumContext> alphanum() {
			return getRuleContexts(AlphanumContext.class);
		}
		public AlphanumContext alphanum(int i) {
			return getRuleContext(AlphanumContext.class,i);
		}
		public TokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_token; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).enterToken(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VersionListener ) ((VersionListener)listener).exitToken(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof VersionVisitor ) return ((VersionVisitor<? extends T>)visitor).visitToken(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TokenContext token() throws RecognitionException {
		TokenContext _localctx = new TokenContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_token);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(52);
				switch (_input.LA(1)) {
				case DIGIT:
				case ALPHA:
					{
					setState(49); alphanum();
					}
					break;
				case 1:
					{
					setState(50); match(1);
					}
					break;
				case 2:
					{
					setState(51); match(2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(54); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 1) | (1L << 2) | (1L << DIGIT) | (1L << ALPHA))) != 0) );
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\7;\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\5\2\32\n\2\5\2\34\n\2\5\2\36\n\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6"+
		"\3\6\3\6\6\6)\n\6\r\6\16\6*\3\7\3\7\3\b\6\b\60\n\b\r\b\16\b\61\3\t\3\t"+
		"\3\t\6\t\67\n\t\r\t\16\t8\3\t\2\2\n\2\4\6\b\n\f\16\20\2\3\3\2\6\7<\2\22"+
		"\3\2\2\2\4\37\3\2\2\2\6!\3\2\2\2\b#\3\2\2\2\n(\3\2\2\2\f,\3\2\2\2\16/"+
		"\3\2\2\2\20\66\3\2\2\2\22\35\5\4\3\2\23\24\7\5\2\2\24\33\5\6\4\2\25\26"+
		"\7\5\2\2\26\31\5\b\5\2\27\30\7\5\2\2\30\32\5\n\6\2\31\27\3\2\2\2\31\32"+
		"\3\2\2\2\32\34\3\2\2\2\33\25\3\2\2\2\33\34\3\2\2\2\34\36\3\2\2\2\35\23"+
		"\3\2\2\2\35\36\3\2\2\2\36\3\3\2\2\2\37 \5\16\b\2 \5\3\2\2\2!\"\5\16\b"+
		"\2\"\7\3\2\2\2#$\5\16\b\2$\t\3\2\2\2%)\5\f\7\2&)\7\3\2\2\')\7\4\2\2(%"+
		"\3\2\2\2(&\3\2\2\2(\'\3\2\2\2)*\3\2\2\2*(\3\2\2\2*+\3\2\2\2+\13\3\2\2"+
		"\2,-\t\2\2\2-\r\3\2\2\2.\60\7\6\2\2/.\3\2\2\2\60\61\3\2\2\2\61/\3\2\2"+
		"\2\61\62\3\2\2\2\62\17\3\2\2\2\63\67\5\f\7\2\64\67\7\3\2\2\65\67\7\4\2"+
		"\2\66\63\3\2\2\2\66\64\3\2\2\2\66\65\3\2\2\2\678\3\2\2\28\66\3\2\2\28"+
		"9\3\2\2\29\21\3\2\2\2\n\31\33\35(*\61\668";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}