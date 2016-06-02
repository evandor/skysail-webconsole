grammar Version;


DIGIT : [0-9] ;

ALPHA : [a-zA-Z] ;

number : DIGIT+ ;


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
