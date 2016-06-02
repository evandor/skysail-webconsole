package io.skysail.webconsole.antlr.test;

import static org.junit.Assert.assertTrue;

import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.junit.Test;

import io.skysail.webconsole.antlr.VersionLexer;
import io.skysail.webconsole.antlr.VersionParser;
import io.skysail.webconsole.antlr.VersionParser.VersionContext;

public class VersionParserTest {

    @Test
    public void majorVersion_is_parsed() {
        VersionParser parser = parse("5");
        VersionContext tree = parser.version();
        assertTrue(parser.getNumberOfSyntaxErrors() == 0);
        System.out.println(tree.toStringTree(parser)); // print LISP-style tree
    }

    @Test
    public void majorAndMinorVersion_is_parsed() {
        VersionParser parser = parse("5.3");
        VersionContext tree = parser.version();
        assertTrue(parser.getNumberOfSyntaxErrors() == 0);
        System.out.println(tree.toStringTree(parser)); // print LISP-style tree
    }

    @Test
    public void majorAndMinorAndMicroVersion_is_parsed() {
        VersionParser parser = parse("5.3.8");
        VersionContext tree = parser.version();
        assertTrue(parser.getNumberOfSyntaxErrors() == 0);
        System.out.println(tree.toStringTree(parser)); // print LISP-style tree
    }

    @Test
    public void majorAndMinorAndMicroAndQualifierVersion_is_parsed() {
        VersionParser parser = parse("5.3.8.something");
        VersionContext tree = parser.version();
        assertTrue(parser.getNumberOfSyntaxErrors() == 0);
        System.out.println(tree.toStringTree(parser)); // print LISP-style tree
    }

    private VersionParser parse(String inputString) {
        VersionLexer lexer = new VersionLexer(new ANTLRInputStream(inputString));
        return new VersionParser(new CommonTokenStream(lexer));
    }
}
