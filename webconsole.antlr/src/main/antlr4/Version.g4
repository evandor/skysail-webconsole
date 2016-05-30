grammar Version;

v : major( '.' minor ( '.' micro ( '.' qualifier )? )? )? ;

major       : number ;
minor       : number ;
micro       : number ;

qualifier   : ( alphanum | '_' | '-' )+ ;

number : DIGIT+ ;

alphanum : ALPHA | DIGIT ;

DIGIT : [0-9] ;
ALPHA : [a-zA-Z] ;