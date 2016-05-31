grammar ArrayInit;


init : '{' value (',' value)* '}' ; // must match at least one value

value : init
| INT
;

INT : [0-9]+ ; // Define token INT as one or more digits
WS : [ \t\r\n]+ -> skip ; // Define whitespace rule, toss it out