# skysail-webconsole
an alternative to the (OSGi) felix webconsole

# Motivation
Although I like felix webconsole, more often than not I faced issues with integrating it with an existing codebase. OSGi is all about modularity, meaning (amongst others) that the OSGi framework makes sure that the runtime dependencies your code relies on are met. But, in the case of something like an OSGi webconsole, *any dependency* I have is too much. I want to install the webconsole in _any_ kind of environment, and I want it to work immediately. I do not want something like "Unresolved requirement: Import-Package: org.apache.commons.fileupload; version="[1.2.0,2.0.0)"", which is what I get if I put the felix webconsole into eclipse Mars.

So, this bundle is an effort to provide a single bundle, ready to be dropped into any (recent) OSGi runtime, starting up an embedded server which gives me an insight into my OSGi application - even if the application doesn't start up.
