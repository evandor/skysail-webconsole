package io.skysail.osgiagent.server;

import java.io.IOException;

import org.osgi.framework.BundleContext;

import fi.iki.elonen.NanoHTTPD;
import io.skysail.osgiagent.listener.AgentBundleListener;
import io.skysail.osgiagent.listener.AgentFrameworkListener;
import io.skysail.osgiagent.listener.AgentServiceListener;
import io.skysail.osgiagent.server.handler.BundleListenerHandler;
import io.skysail.osgiagent.server.handler.BundlesHandler;
import io.skysail.osgiagent.server.handler.FrameworkListenerHandler;
import io.skysail.osgiagent.server.handler.ServiceListenerHandler;
import io.skysail.osgiagent.server.handler.StaticFilesHandler;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Server extends NanoHTTPD {

    private AgentBundleListener bundleListener;
    private AgentServiceListener serviceListener;
    private AgentFrameworkListener frameworkListener;
    private StaticFilesHandler staticFilesHandler;

    private BundlesHandler bundlesHandler;
    private ServiceListenerHandler serviceListenerHandler;
    private BundleListenerHandler bundleListenerHandler;
    private FrameworkListenerHandler frameworkListenerHandler;

    public Server(BundleContext bundleContext) throws IOException {
        super(2002);
        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);

        bundleListener = new AgentBundleListener(bundleContext);
        serviceListener = new AgentServiceListener(bundleContext);
        frameworkListener = new AgentFrameworkListener(bundleContext);

        bundlesHandler = new BundlesHandler(bundleContext);
        bundleListenerHandler = new BundleListenerHandler(bundleListener);
        serviceListenerHandler = new ServiceListenerHandler(serviceListener);
        frameworkListenerHandler = new FrameworkListenerHandler(frameworkListener);
        staticFilesHandler = new StaticFilesHandler(bundleContext.getBundle());

    }

    @Override
    public Response serve(IHTTPSession session) {
        log.info("processing uri '{}'", session.getUri());
        if ("/backend/bundles".equals(session.getUri())) {
            return bundlesHandler.handle(session);
        }
        if ("/backend/bundlelistener".equals(session.getUri())) {
            return bundleListenerHandler.handle(session);
        }
        if ("/backend/frameworklistener".equals(session.getUri())) {
            return frameworkListenerHandler.handle(session);
        }
        if ("/backend/servicelistener".equals(session.getUri())) {
            return serviceListenerHandler.handle(session);
        }
        if (session.getUri().equals("") || session.getUri().equals("/")) {
            Response res =  newFixedLengthResponse(Response.Status.REDIRECT, NanoHTTPD.MIME_HTML, "");
            res.addHeader("Location", "/index.html");
            return res;
        }
        //if (session.getUri().startsWith("")) {
        return staticFilesHandler.handle(session);
        //return newFixedLengthResponse("no route matched, try \"/index.html\", or \"/bundles\"...");
    }
}