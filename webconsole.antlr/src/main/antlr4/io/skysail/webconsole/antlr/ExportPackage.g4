grammar ExportPackage;


// ===============================================
// Packages

// -----------------------------------------------
// Export-Package:

parameter : Directive | Attribute ;

exportPackage  : export ( ',' export)* ;

export
    : packageNames (';'parameter )*
    ;

packageNames : packageName ( ';' packageName )* ;

packageName : UniqueName ;


Directive : Extended ':=' Argument ; // -> pushMode(PARAMETER) ;

Attribute : Extended '=' Argument ; //-> pushMode(PARAMETER);

fragment
QuotedString
    : '"' ~["]* '"' ;

UniqueName : Ident ( '.' Ident )* ;

Ident
    : JavaLetter JavaLetterOrDigit *;

fragment
JavaLetter
    :   [a-zA-Z$_] // these are the "java letters" below 0x7F
    |   // covers all characters above 0x7F which are not a surrogate
        ~[\u0000-\u007F\uD800-\uDBFF]
        {Character.isJavaIdentifierStart(_input.LA(-1))}?
    |   // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
        [\uD800-\uDBFF] [\uDC00-\uDFFF]
        {Character.isJavaIdentifierStart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)))}?
    ;

fragment
JavaLetterOrDigit
    :   [a-zA-Z0-9$_] // these are the "java letters or digits" below 0x7F
    |   // covers all characters above 0x7F which are not a surrogate
        ~[\u0000-\u007F\uD800-\uDBFF]
        {Character.isJavaIdentifierPart(_input.LA(-1))}?
    |   // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
        [\uD800-\uDBFF] [\uDC00-\uDFFF]
        {Character.isJavaIdentifierPart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)))}?
    ;

Extended : ( Alphanum | '_' | '-' | '.' )+ ;

Alphanum : ALPHA | DIGIT;

ALPHA : [a-zA-Z] ;

DIGIT : [0-9] ;

Argument : Extended | QuotedString ;

// -----------------------------------------------

WS  :  [ \t\r\n\u000C]+ -> skip ;
