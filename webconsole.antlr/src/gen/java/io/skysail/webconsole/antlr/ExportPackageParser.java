// Generated from C:\git\skysail-webconsole\webconsole.antlr\src\main\antlr4\ExportPackage.g4 by ANTLR 4.2.2
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
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__9=1, T__8=2, T__7=3, T__6=4, T__5=5, T__4=6, T__3=7, T__2=8, T__1=9, 
		T__0=10, Identifier=11, WS=12, DIGIT=13, ALPHA=14;
	public static final String[] tokenNames = {
		"<INVALID>", "'_'", "'version=\"'", "'\"'", "'mandatory:='", "'version='", 
		"'uses:='", "';'", "','", "'-'", "'.'", "Identifier", "WS", "DIGIT", "ALPHA"
	};
	public static final int
		RULE_r = 0, RULE_export = 1, RULE_packageNames = 2, RULE_packageName = 3, 
		RULE_parameter = 4, RULE_version = 5, RULE_uses = 6, RULE_mandatory = 7, 
		RULE_usedPackages = 8, RULE_uniqueName = 9, RULE_v = 10, RULE_major = 11, 
		RULE_minor = 12, RULE_micro = 13, RULE_qualifier = 14, RULE_alphanum = 15, 
		RULE_number = 16, RULE_token = 17;
	public static final String[] ruleNames = {
		"r", "export", "packageNames", "packageName", "parameter", "version", 
		"uses", "mandatory", "usedPackages", "uniqueName", "v", "major", "minor", 
		"micro", "qualifier", "alphanum", "number", "token"
	};

	@Override
	public String getGrammarFileName() { return "ExportPackage.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

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
	public static class RContext extends ParserRuleContext {
		public List<ExportContext> export() {
			return getRuleContexts(ExportContext.class);
		}
		public ExportContext export(int i) {
			return getRuleContext(ExportContext.class,i);
		}
		public RContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_r; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterR(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitR(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitR(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RContext r() throws RecognitionException {
		RContext _localctx = new RContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_r);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36); export();
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==8) {
				{
				{
				setState(37); match(8);
				setState(38); export();
				}
				}
				setState(43);
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
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public PackageNamesContext packageNames() {
			return getRuleContext(PackageNamesContext.class,0);
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
		enterRule(_localctx, 2, RULE_export);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44); packageNames();
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==7) {
				{
				{
				setState(45); match(7);
				setState(46); parameter();
				}
				}
				setState(51);
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
		public PackageNameContext packageName(int i) {
			return getRuleContext(PackageNameContext.class,i);
		}
		public List<PackageNameContext> packageName() {
			return getRuleContexts(PackageNameContext.class);
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
		enterRule(_localctx, 4, RULE_packageNames);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(52); packageName();
			setState(57);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(53); match(7);
					setState(54); packageName();
					}
					} 
				}
				setState(59);
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
		public UniqueNameContext uniqueName() {
			return getRuleContext(UniqueNameContext.class,0);
		}
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
		enterRule(_localctx, 6, RULE_packageName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60); uniqueName();
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

	public static class ParameterContext extends ParserRuleContext {
		public VersionContext version() {
			return getRuleContext(VersionContext.class,0);
		}
		public MandatoryContext mandatory() {
			return getRuleContext(MandatoryContext.class,0);
		}
		public UsesContext uses() {
			return getRuleContext(UsesContext.class,0);
		}
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
		enterRule(_localctx, 8, RULE_parameter);
		try {
			setState(65);
			switch (_input.LA(1)) {
			case 2:
			case 5:
				enterOuterAlt(_localctx, 1);
				{
				setState(62); version();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 2);
				{
				setState(63); uses();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 3);
				{
				setState(64); mandatory();
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

	public static class VersionContext extends ParserRuleContext {
		public VContext v() {
			return getRuleContext(VContext.class,0);
		}
		public VersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_version; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterVersion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitVersion(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitVersion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VersionContext version() throws RecognitionException {
		VersionContext _localctx = new VersionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_version);
		try {
			setState(73);
			switch (_input.LA(1)) {
			case 2:
				enterOuterAlt(_localctx, 1);
				{
				setState(67); match(2);
				setState(68); v();
				setState(69); match(3);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 2);
				{
				setState(71); match(5);
				setState(72); v();
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

	public static class UsesContext extends ParserRuleContext {
		public UsedPackagesContext usedPackages(int i) {
			return getRuleContext(UsedPackagesContext.class,i);
		}
		public PackageNameContext packageName() {
			return getRuleContext(PackageNameContext.class,0);
		}
		public List<UsedPackagesContext> usedPackages() {
			return getRuleContexts(UsedPackagesContext.class);
		}
		public UsesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uses; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterUses(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitUses(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitUses(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UsesContext uses() throws RecognitionException {
		UsesContext _localctx = new UsesContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_uses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(75); match(6);
				}
				}
				setState(78); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==6 );
			setState(93);
			switch (_input.LA(1)) {
			case Identifier:
				{
				setState(80); packageName();
				}
				break;
			case 3:
				{
				setState(82); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(81); match(3);
					}
					}
					setState(84); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==3 );
				setState(87); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(86); usedPackages();
					}
					}
					setState(89); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Identifier );
				setState(91); match(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public static class MandatoryContext extends ParserRuleContext {
		public UsedPackagesContext usedPackages(int i) {
			return getRuleContext(UsedPackagesContext.class,i);
		}
		public PackageNameContext packageName() {
			return getRuleContext(PackageNameContext.class,0);
		}
		public List<UsedPackagesContext> usedPackages() {
			return getRuleContexts(UsedPackagesContext.class);
		}
		public MandatoryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mandatory; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterMandatory(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitMandatory(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitMandatory(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MandatoryContext mandatory() throws RecognitionException {
		MandatoryContext _localctx = new MandatoryContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_mandatory);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(95); match(4);
				}
				}
				setState(98); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==4 );
			setState(113);
			switch (_input.LA(1)) {
			case Identifier:
				{
				setState(100); packageName();
				}
				break;
			case 3:
				{
				setState(102); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(101); match(3);
					}
					}
					setState(104); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==3 );
				setState(107); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(106); usedPackages();
					}
					}
					setState(109); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Identifier );
				setState(111); match(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public static class UsedPackagesContext extends ParserRuleContext {
		public PackageNameContext packageName(int i) {
			return getRuleContext(PackageNameContext.class,i);
		}
		public List<PackageNameContext> packageName() {
			return getRuleContexts(PackageNameContext.class);
		}
		public UsedPackagesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usedPackages; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterUsedPackages(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitUsedPackages(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitUsedPackages(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UsedPackagesContext usedPackages() throws RecognitionException {
		UsedPackagesContext _localctx = new UsedPackagesContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_usedPackages);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115); packageName();
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==8) {
				{
				{
				setState(116); match(8);
				setState(117); packageName();
				}
				}
				setState(122);
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

	public static class UniqueNameContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(ExportPackageParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(ExportPackageParser.Identifier, i);
		}
		public UniqueNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uniqueName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterUniqueName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitUniqueName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitUniqueName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UniqueNameContext uniqueName() throws RecognitionException {
		UniqueNameContext _localctx = new UniqueNameContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_uniqueName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123); match(Identifier);
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==10) {
				{
				{
				setState(124); match(10);
				setState(125); match(Identifier);
				}
				}
				setState(130);
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
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterV(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitV(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitV(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VContext v() throws RecognitionException {
		VContext _localctx = new VContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_v);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131); major();
			setState(142);
			_la = _input.LA(1);
			if (_la==10) {
				{
				setState(132); match(10);
				setState(133); minor();
				setState(140);
				_la = _input.LA(1);
				if (_la==10) {
					{
					setState(134); match(10);
					setState(135); micro();
					setState(138);
					_la = _input.LA(1);
					if (_la==10) {
						{
						setState(136); match(10);
						setState(137); qualifier();
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
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterMajor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitMajor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitMajor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MajorContext major() throws RecognitionException {
		MajorContext _localctx = new MajorContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_major);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144); number();
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
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterMinor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitMinor(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitMinor(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MinorContext minor() throws RecognitionException {
		MinorContext _localctx = new MinorContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_minor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146); number();
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
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterMicro(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitMicro(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitMicro(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MicroContext micro() throws RecognitionException {
		MicroContext _localctx = new MicroContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_micro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148); number();
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
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterQualifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitQualifier(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitQualifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final QualifierContext qualifier() throws RecognitionException {
		QualifierContext _localctx = new QualifierContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_qualifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(153);
				switch (_input.LA(1)) {
				case DIGIT:
				case ALPHA:
					{
					setState(150); alphanum();
					}
					break;
				case 1:
					{
					setState(151); match(1);
					}
					break;
				case 9:
					{
					setState(152); match(9);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(155); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 1) | (1L << 9) | (1L << DIGIT) | (1L << ALPHA))) != 0) );
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
		public TerminalNode DIGIT() { return getToken(ExportPackageParser.DIGIT, 0); }
		public TerminalNode ALPHA() { return getToken(ExportPackageParser.ALPHA, 0); }
		public AlphanumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alphanum; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterAlphanum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitAlphanum(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitAlphanum(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AlphanumContext alphanum() throws RecognitionException {
		AlphanumContext _localctx = new AlphanumContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_alphanum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
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
			return getToken(ExportPackageParser.DIGIT, i);
		}
		public List<TerminalNode> DIGIT() { return getTokens(ExportPackageParser.DIGIT); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterNumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitNumber(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitNumber(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(159); match(DIGIT);
				}
				}
				setState(162); 
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
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).enterToken(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ExportPackageListener ) ((ExportPackageListener)listener).exitToken(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ExportPackageVisitor ) return ((ExportPackageVisitor<? extends T>)visitor).visitToken(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TokenContext token() throws RecognitionException {
		TokenContext _localctx = new TokenContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_token);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(167);
				switch (_input.LA(1)) {
				case DIGIT:
				case ALPHA:
					{
					setState(164); alphanum();
					}
					break;
				case 1:
					{
					setState(165); match(1);
					}
					break;
				case 9:
					{
					setState(166); match(9);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(169); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 1) | (1L << 9) | (1L << DIGIT) | (1L << ALPHA))) != 0) );
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\20\u00ae\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\3\2\7\2*\n\2\f\2\16\2-\13\2\3\3\3\3\3\3\7\3\62\n\3"+
		"\f\3\16\3\65\13\3\3\4\3\4\3\4\7\4:\n\4\f\4\16\4=\13\4\3\5\3\5\3\6\3\6"+
		"\3\6\5\6D\n\6\3\7\3\7\3\7\3\7\3\7\3\7\5\7L\n\7\3\b\6\bO\n\b\r\b\16\bP"+
		"\3\b\3\b\6\bU\n\b\r\b\16\bV\3\b\6\bZ\n\b\r\b\16\b[\3\b\3\b\5\b`\n\b\3"+
		"\t\6\tc\n\t\r\t\16\td\3\t\3\t\6\ti\n\t\r\t\16\tj\3\t\6\tn\n\t\r\t\16\t"+
		"o\3\t\3\t\5\tt\n\t\3\n\3\n\3\n\7\ny\n\n\f\n\16\n|\13\n\3\13\3\13\3\13"+
		"\7\13\u0081\n\13\f\13\16\13\u0084\13\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5"+
		"\f\u008d\n\f\5\f\u008f\n\f\5\f\u0091\n\f\3\r\3\r\3\16\3\16\3\17\3\17\3"+
		"\20\3\20\3\20\6\20\u009c\n\20\r\20\16\20\u009d\3\21\3\21\3\22\6\22\u00a3"+
		"\n\22\r\22\16\22\u00a4\3\23\3\23\3\23\6\23\u00aa\n\23\r\23\16\23\u00ab"+
		"\3\23\2\2\24\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$\2\3\3\2\17\20"+
		"\u00b5\2&\3\2\2\2\4.\3\2\2\2\6\66\3\2\2\2\b>\3\2\2\2\nC\3\2\2\2\fK\3\2"+
		"\2\2\16N\3\2\2\2\20b\3\2\2\2\22u\3\2\2\2\24}\3\2\2\2\26\u0085\3\2\2\2"+
		"\30\u0092\3\2\2\2\32\u0094\3\2\2\2\34\u0096\3\2\2\2\36\u009b\3\2\2\2 "+
		"\u009f\3\2\2\2\"\u00a2\3\2\2\2$\u00a9\3\2\2\2&+\5\4\3\2\'(\7\n\2\2(*\5"+
		"\4\3\2)\'\3\2\2\2*-\3\2\2\2+)\3\2\2\2+,\3\2\2\2,\3\3\2\2\2-+\3\2\2\2."+
		"\63\5\6\4\2/\60\7\t\2\2\60\62\5\n\6\2\61/\3\2\2\2\62\65\3\2\2\2\63\61"+
		"\3\2\2\2\63\64\3\2\2\2\64\5\3\2\2\2\65\63\3\2\2\2\66;\5\b\5\2\678\7\t"+
		"\2\28:\5\b\5\29\67\3\2\2\2:=\3\2\2\2;9\3\2\2\2;<\3\2\2\2<\7\3\2\2\2=;"+
		"\3\2\2\2>?\5\24\13\2?\t\3\2\2\2@D\5\f\7\2AD\5\16\b\2BD\5\20\t\2C@\3\2"+
		"\2\2CA\3\2\2\2CB\3\2\2\2D\13\3\2\2\2EF\7\4\2\2FG\5\26\f\2GH\7\5\2\2HL"+
		"\3\2\2\2IJ\7\7\2\2JL\5\26\f\2KE\3\2\2\2KI\3\2\2\2L\r\3\2\2\2MO\7\b\2\2"+
		"NM\3\2\2\2OP\3\2\2\2PN\3\2\2\2PQ\3\2\2\2Q_\3\2\2\2R`\5\b\5\2SU\7\5\2\2"+
		"TS\3\2\2\2UV\3\2\2\2VT\3\2\2\2VW\3\2\2\2WY\3\2\2\2XZ\5\22\n\2YX\3\2\2"+
		"\2Z[\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2\\]\3\2\2\2]^\7\5\2\2^`\3\2\2\2_R\3\2"+
		"\2\2_T\3\2\2\2`\17\3\2\2\2ac\7\6\2\2ba\3\2\2\2cd\3\2\2\2db\3\2\2\2de\3"+
		"\2\2\2es\3\2\2\2ft\5\b\5\2gi\7\5\2\2hg\3\2\2\2ij\3\2\2\2jh\3\2\2\2jk\3"+
		"\2\2\2km\3\2\2\2ln\5\22\n\2ml\3\2\2\2no\3\2\2\2om\3\2\2\2op\3\2\2\2pq"+
		"\3\2\2\2qr\7\5\2\2rt\3\2\2\2sf\3\2\2\2sh\3\2\2\2t\21\3\2\2\2uz\5\b\5\2"+
		"vw\7\n\2\2wy\5\b\5\2xv\3\2\2\2y|\3\2\2\2zx\3\2\2\2z{\3\2\2\2{\23\3\2\2"+
		"\2|z\3\2\2\2}\u0082\7\r\2\2~\177\7\f\2\2\177\u0081\7\r\2\2\u0080~\3\2"+
		"\2\2\u0081\u0084\3\2\2\2\u0082\u0080\3\2\2\2\u0082\u0083\3\2\2\2\u0083"+
		"\25\3\2\2\2\u0084\u0082\3\2\2\2\u0085\u0090\5\30\r\2\u0086\u0087\7\f\2"+
		"\2\u0087\u008e\5\32\16\2\u0088\u0089\7\f\2\2\u0089\u008c\5\34\17\2\u008a"+
		"\u008b\7\f\2\2\u008b\u008d\5\36\20\2\u008c\u008a\3\2\2\2\u008c\u008d\3"+
		"\2\2\2\u008d\u008f\3\2\2\2\u008e\u0088\3\2\2\2\u008e\u008f\3\2\2\2\u008f"+
		"\u0091\3\2\2\2\u0090\u0086\3\2\2\2\u0090\u0091\3\2\2\2\u0091\27\3\2\2"+
		"\2\u0092\u0093\5\"\22\2\u0093\31\3\2\2\2\u0094\u0095\5\"\22\2\u0095\33"+
		"\3\2\2\2\u0096\u0097\5\"\22\2\u0097\35\3\2\2\2\u0098\u009c\5 \21\2\u0099"+
		"\u009c\7\3\2\2\u009a\u009c\7\13\2\2\u009b\u0098\3\2\2\2\u009b\u0099\3"+
		"\2\2\2\u009b\u009a\3\2\2\2\u009c\u009d\3\2\2\2\u009d\u009b\3\2\2\2\u009d"+
		"\u009e\3\2\2\2\u009e\37\3\2\2\2\u009f\u00a0\t\2\2\2\u00a0!\3\2\2\2\u00a1"+
		"\u00a3\7\17\2\2\u00a2\u00a1\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a2\3"+
		"\2\2\2\u00a4\u00a5\3\2\2\2\u00a5#\3\2\2\2\u00a6\u00aa\5 \21\2\u00a7\u00aa"+
		"\7\3\2\2\u00a8\u00aa\7\13\2\2\u00a9\u00a6\3\2\2\2\u00a9\u00a7\3\2\2\2"+
		"\u00a9\u00a8\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ab\u00ac"+
		"\3\2\2\2\u00ac%\3\2\2\2\31+\63;CKPV[_djosz\u0082\u008c\u008e\u0090\u009b"+
		"\u009d\u00a4\u00a9\u00ab";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}