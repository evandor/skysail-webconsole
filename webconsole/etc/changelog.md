new in 

0.1.2
-----

 * moved "client" code (i.e. all angular files) into project of its own (webconsole.client) to improve build time
 * if started with webconsole.client, the client code from that bundle will be used, otherwise the static reference 
   (to the older client version) will be used.