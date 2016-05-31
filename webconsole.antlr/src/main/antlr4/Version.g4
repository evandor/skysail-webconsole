grammar Version;

import Core;

v : major( '.' minor ( '.' micro ( '.' qualifier )? )? )? ;

major       : number ;
minor       : number ;
micro       : number ;

qualifier   : ( alphanum | '_' | '-' )+ ;
