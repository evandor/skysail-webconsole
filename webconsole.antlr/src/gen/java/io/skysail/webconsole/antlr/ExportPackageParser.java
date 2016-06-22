// Generated from /home/carsten/.hudson/jobs/skysail-webconsole.bundle.release/workspace/webconsole.antlr/src/main/antlr4/io/skysail/webconsole/antlr/ExportPackage.g4 by ANTLR 4.5.3
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
public class ExportPackageParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, Directive=3, Attribute=4, UniqueName=5, Ident=6, Extended=7, 
		Alphanum=8, ALPHA=9, DIGIT=10, Argument=11, WS=12;
	public static final int
		RULE_parameter = 0, RULE_exportPackage = 1, RULE_export = 2, RULE_packageNames = 3, 
		RULE_packageName = 4;
	public static final String[] ruleNames = {
		"parameter", "exportPackage", "export", "packageNames", "packageName"
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

	@Override
	public String getGrammarFileName() { return "ExportPackage.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ExportPackageParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ParameterContext extends ParserRuleContext {
		public TerminalNode Directive() { return getToken(ExportPackageParser.Directive, 0); }
		public TerminalNode Attribute() { return getToken(ExportPackageParser.Attribute, 0); }
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitParameter(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitParameter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			_la = _input.LA(1);
			if ( !(_la==Directive || _la==Attribute) ) {
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

	public static class ExportPackageContext extends ParserRuleContext {
		public List<ExportContext> export() {
			return getRuleContexts(ExportContext.class);
		}
		public ExportContext export(int i) {
			return getRuleContext(ExportContext.class,i);
		}
		public ExportPackageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exportPackage; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterExportPackage(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitExportPackage(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitExportPackage(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExportPackageContext exportPackage() throws RecognitionException {
		ExportPackageContext _localctx = new ExportPackageContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_exportPackage);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			export();
			setState(17);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(13);
				match(T__0);
				setState(14);
				export();
				}
				}
				setState(19);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class ExportContext extends ParserRuleContext {
		public PackageNamesContext packageNames() {
			return getRuleContext(PackageNamesContext.class,0);
		}
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public ExportContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_export; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterExport(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitExport(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitExport(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExportContext export() throws RecognitionException {
		ExportContext _localctx = new ExportContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_export);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			packageNames();
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(21);
				match(T__1);
				setState(22);
				parameter();
				}
				}
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class PackageNamesContext extends ParserRuleContext {
		public List<PackageNameContext> packageName() {
			return getRuleContexts(PackageNameContext.class);
		}
		public PackageNameContext packageName(int i) {
			return getRuleContext(PackageNameContext.class,i);
		}
		public PackageNamesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageNames; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterPackageNames(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitPackageNames(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitPackageNames(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PackageNamesContext packageNames() throws RecognitionException {
		PackageNamesContext _localctx = new PackageNamesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_packageNames);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			packageName();
			setState(33);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(29);
					match(T__1);
					setState(30);
					packageName();
					}
					} 
				}
				setState(35);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
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

	public static class PackageNameContext extends ParserRuleContext {
		public TerminalNode UniqueName() { return getToken(ExportPackageParser.UniqueName, 0); }
		public PackageNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterPackageName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitPackageName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitPackageName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PackageNameContext packageName() throws RecognitionException {
		PackageNameContext _localctx = new PackageNameContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_packageName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			match(UniqueName);
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\16)\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\3\3\3\3\3\7\3\22\n\3\f\3\16\3\25"+
		"\13\3\3\4\3\4\3\4\7\4\32\n\4\f\4\16\4\35\13\4\3\5\3\5\3\5\7\5\"\n\5\f"+
		"\5\16\5%\13\5\3\6\3\6\3\6\2\2\7\2\4\6\b\n\2\3\3\2\5\6&\2\f\3\2\2\2\4\16"+
		"\3\2\2\2\6\26\3\2\2\2\b\36\3\2\2\2\n&\3\2\2\2\f\r\t\2\2\2\r\3\3\2\2\2"+
		"\16\23\5\6\4\2\17\20\7\3\2\2\20\22\5\6\4\2\21\17\3\2\2\2\22\25\3\2\2\2"+
		"\23\21\3\2\2\2\23\24\3\2\2\2\24\5\3\2\2\2\25\23\3\2\2\2\26\33\5\b\5\2"+
		"\27\30\7\4\2\2\30\32\5\2\2\2\31\27\3\2\2\2\32\35\3\2\2\2\33\31\3\2\2\2"+
		"\33\34\3\2\2\2\34\7\3\2\2\2\35\33\3\2\2\2\36#\5\n\6\2\37 \7\4\2\2 \"\5"+
		"\n\6\2!\37\3\2\2\2\"%\3\2\2\2#!\3\2\2\2#$\3\2\2\2$\t\3\2\2\2%#\3\2\2\2"+
		"&\'\7\7\2\2\'\13\3\2\2\2\5\23\33#";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}