grammar VersionRange;


DIGIT : [0-9] ;

ALPHA : [a-zA-Z] ;

number : DIGIT+ ;

versionRange : interval | atleast ;

interval : ( '[' | '(' ) floor ',' ceiling ( ']' | ')' ) ;
atleast : version ;
floor : version ;
ceiling : version ;

// ===============================================
// Versions

// -----------------------------------------------
// simple versions:

version : major( '.' minor ( '.' micro ( '.' qualifier )? )? )? ;

major       : number ;
minor       : number ;
micro       : number ;

qualifier   : ( ALPHA | DIGIT | '_' | '-' )+;


WS  :  [ \t\r\n\u000C]+ -> skip ;
