// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\Core.g4 by ANTLR 4.2.2
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
public class CoreParser extends Parser {
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__1=1, T__0=2, DIGIT=3, ALPHA=4;
	public static final String[] tokenNames = {
		"<INVALID>", "'_'", "'-'", "DIGIT", "ALPHA"
	};
	public static final int
		RULE_alphanum = 0, RULE_number = 1, RULE_token = 2;
	public static final String[] ruleNames = {
		"alphanum", "number", "token"
	};

	@Override
	public String getGrammarFileName() { return "Core.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CoreParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class AlphanumContext extends ParserRuleContext {
		public TerminalNode DIGIT() { return getToken(CoreParser.DIGIT, 0); }
		public TerminalNode ALPHA() { return getToken(CoreParser.ALPHA, 0); }
		public AlphanumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alphanum; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CoreListener ) ((CoreListener)listener).enterAlphanum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CoreListener ) ((CoreListener)listener).exitAlphanum(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof CoreVisitor ) return ((CoreVisitor<? extends T>)visitor).visitAlphanum(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AlphanumContext alphanum() throws RecognitionException {
		AlphanumContext _localctx = new AlphanumContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_alphanum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(6);
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
			return getToken(CoreParser.DIGIT, i);
		}
		public List<TerminalNode> DIGIT() { return getTokens(CoreParser.DIGIT); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CoreListener ) ((CoreListener)listener).enterNumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CoreListener ) ((CoreListener)listener).exitNumber(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof CoreVisitor ) return ((CoreVisitor<? extends T>)visitor).visitNumber(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(9); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(8); match(DIGIT);
				}
				}
				setState(11); 
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
			if ( listener instanceof CoreListener ) ((CoreListener)listener).enterToken(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CoreListener ) ((CoreListener)listener).exitToken(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof CoreVisitor ) return ((CoreVisitor<? extends T>)visitor).visitToken(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TokenContext token() throws RecognitionException {
		TokenContext _localctx = new TokenContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_token);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(16);
				switch (_input.LA(1)) {
				case DIGIT:
				case ALPHA:
					{
					setState(13); alphanum();
					}
					break;
				case 1:
					{
					setState(14); match(1);
					}
					break;
				case 2:
					{
					setState(15); match(2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(18); 
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\6\27\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\3\2\3\2\3\3\6\3\f\n\3\r\3\16\3\r\3\4\3\4\3\4\6\4\23\n\4\r"+
		"\4\16\4\24\3\4\2\2\5\2\4\6\2\3\3\2\5\6\27\2\b\3\2\2\2\4\13\3\2\2\2\6\22"+
		"\3\2\2\2\b\t\t\2\2\2\t\3\3\2\2\2\n\f\7\5\2\2\13\n\3\2\2\2\f\r\3\2\2\2"+
		"\r\13\3\2\2\2\r\16\3\2\2\2\16\5\3\2\2\2\17\23\5\2\2\2\20\23\7\3\2\2\21"+
		"\23\7\4\2\2\22\17\3\2\2\2\22\20\3\2\2\2\22\21\3\2\2\2\23\24\3\2\2\2\24"+
		"\22\3\2\2\2\24\25\3\2\2\2\25\7\3\2\2\2\5\r\22\24";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}