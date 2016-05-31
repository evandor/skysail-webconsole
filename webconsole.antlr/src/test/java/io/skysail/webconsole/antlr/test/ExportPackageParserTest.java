package io.skysail.webconsole.antlr.test;

import static org.junit.Assert.assertTrue;

import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.junit.Test;

import io.skysail.webconsole.antlr.ExportPackageLexer;
import io.skysail.webconsole.antlr.ExportPackageParser;
import io.skysail.webconsole.antlr.ExportPackageParser.RContext;

public class ExportPackageParserTest {

	@Test
	public void testSimplestPackage() {
		ExportPackageParser parser = parse("io");
		RContext tree = parser.r();
		assertTrue(parser.getNumberOfSyntaxErrors() == 0);
		System.out.println(tree.toStringTree(parser)); // print LISP-style tree
	}

	@Test
	public void testSimplePackageWithDot() {
		ExportPackageParser parser = parse("io.skysail");
		RContext tree = parser.r();
		assertTrue(parser.getNumberOfSyntaxErrors() == 0);
		System.out.println(tree.toStringTree(parser)); // print LISP-style tree
	}

	@Test
	public void testTwoSimplePackages() {
		ExportPackageParser parser = parse("io,io.skysail");
		RContext tree = parser.r();
		assertTrue(parser.getNumberOfSyntaxErrors() == 0);
		System.out.println(tree.toStringTree(parser)); // print LISP-style tree
	}

	@Test
	public void testPackageWithVersion() {
		ExportPackageParser parser = parse("com.fasterxml;version=1.3");
		RContext tree = parser.r();
		assertTrue(parser.getNumberOfSyntaxErrors() == 0);
		System.out.println(tree.toStringTree(parser)); // print LISP-style tree
	}

	@Test
	public void testPackageWithVersionInBrackets() {
		ExportPackageParser parser = parse("com.fasterxml;version=\"2.9\"");
		RContext tree = parser.r();
		assertTrue(parser.getNumberOfSyntaxErrors() == 0);
		System.out.println(tree.toStringTree(parser)); // print LISP-style tree
	}
	
	@Test
	public void testPackageWithSingleUsesWithoutBrackets() {
		ExportPackageParser parser = parse("jackson.core;uses:=com.fasterxml.jackson.core.format");
		RContext tree = parser.r();
		assertTrue(parser.getNumberOfSyntaxErrors() == 0);
		System.out.println(tree.toStringTree(parser)); // print LISP-style tree
	}

	@Test
	public void testPackageWithMultipleUses() {
		ExportPackageParser parser = parse("jackson.core;uses:=\"com.fasterxml.jackson.core.format,com.fasterxml.jackson.core.io\"");
		RContext tree = parser.r();
		assertTrue(parser.getNumberOfSyntaxErrors() == 0);
		System.out.println(tree.toStringTree(parser)); // print LISP-style tree
	}


	private ExportPackageParser parse(String inputString) {
		CharStream input = new ANTLRInputStream(inputString);
		ExportPackageLexer lexer = new ExportPackageLexer(input);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		return new ExportPackageParser(tokens);
	}
}
