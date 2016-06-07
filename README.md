# skysail-webconsole
an alternative to the (OSGi) felix webconsole

# Motivation
Although I like the felix webconsole, more often than not I faced issues with integrating it with an existing codebase. OSGi is all about modularity, meaning (amongst others) that the OSGi framework makes sure that the runtime dependencies your code relies on are met. But, in the case of something like an OSGi webconsole, __any dependency__ I have is too much. I want to install the webconsole in _any_ kind of OSGi environment, and I want it to work immediately. I do not want something like "Unresolved requirement: Import-Package: org.apache.commons.fileupload; version="[1.2.0,2.0.0)"", which is what I get if I put the felix webconsole into eclipse Mars.

So, this bundle is an effort to provide a single bundle, ready to be dropped into any (recent) OSGi runtime, starting up an embedded server which gives me an insight into my OSGi application - even if the application doesn't start up.

# Status

just started, needs serious polishing, internally and visually... - just a prove of concept.

# Version 

0.3.0

# Screenshot

![screenshot](http://jenkins.twentyeleven.de/job/skysail-webconsole/ws/webconsole/etc/docs/webconsole_0.3.0.png)

# Demo

[this link](85.25.22.126:2002/index.html) should be working most of the time.

# Limitations

* currently, the internal server will always start on port 2002.
* please be aware that there is no security concept applied yet.
* the bundle is way bigger than it needs to be, sorry, will fix.

# Features List

| Category      | Feature                  | State / in Version |
| ------------- | ------------------------ | ------------------ |
| Bundles       |                          |                    |
|               | Bundles Overview         | 0.1.1              |
|               | Bundle Detail Overview   | 0.1.1              |
|               | Bundle Exported Packages | 0.3.0              |
|               | Bundle Imported Packages | 0.3.0              |
|               | Bundle Imported Pkgs. Resolution | planned for 0.4.0              |
|               | Bundle Capabilities      | 0.3.0              |
|               | Bundle Requirements      | 0.3.0              |
|               | Bundle Manifest View     | 0.3.0              |
| Services      |                          |                    |
|               | Services Overview        | 0.1.1              |
|               | Service Detail Overview  | 0.3.0              |
| Packages      |                          |                    |
|               | Packages Overview        | 0.3.0              |
| Logs          |                          |                    |
|               | Overview                 | 0.3.0              |

# Try it

* Start an OSGi framework where you have access to the console (e.g. ./eclipse -console)
* to use the current build, run "install http://jenkins.twentyeleven.de/job/skysail-webconsole/ws/cnf/release/webconsole/webconsole-0.3.0.jar" in the console
* get the bundle id of the new webconsole bundle (e.g. by running "ss" (equinox) or "lb" (felix)
* start the bundle: "start &lt;bundleId&gt;"
* point your browser to "http://localhost:2002" (sorry, port is fixed for now)
