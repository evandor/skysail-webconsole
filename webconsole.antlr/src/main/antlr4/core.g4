grammar Core;

DIGIT : [0-9] ;

ALPHA : [a-zA-Z] ;

alphanum : ALPHA | DIGIT;

number : DIGIT+ ;

token : ( alphanum | '_' | '-' )+ ;