package io.skysail.webconsole.server;

import java.io.IOException;

import org.osgi.framework.BundleContext;

import fi.iki.elonen.NanoHTTPD;
import io.skysail.webconsole.listener.AgentBundleListener;
import io.skysail.webconsole.listener.AgentFrameworkListener;
import io.skysail.webconsole.listener.AgentServiceListener;
import io.skysail.webconsole.server.handler.BundleHandler;
import io.skysail.webconsole.server.handler.BundleListenerHandler;
import io.skysail.webconsole.server.handler.BundlesHandler;
import io.skysail.webconsole.server.handler.FrameworkListenerHandler;
import io.skysail.webconsole.server.handler.ServiceListenerHandler;
import io.skysail.webconsole.server.handler.ServicesHandler;
import io.skysail.webconsole.server.handler.StaticFilesHandler;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Server extends NanoHTTPD {

    private AgentBundleListener bundleListener;
    private AgentServiceListener serviceListener;
    private AgentFrameworkListener frameworkListener;
    private StaticFilesHandler staticFilesHandler;

    private BundlesHandler bundlesHandler;
    private ServicesHandler servicesHandler;

    private ServiceListenerHandler serviceListenerHandler;
    private BundleListenerHandler bundleListenerHandler;
    private FrameworkListenerHandler frameworkListenerHandler;
	private BundleHandler bundleHandler;

    public Server(BundleContext bundleContext) throws IOException {
        super(2002);
        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);

        bundleListener = new AgentBundleListener(bundleContext);
        serviceListener = new AgentServiceListener(bundleContext);
        frameworkListener = new AgentFrameworkListener(bundleContext);

        bundlesHandler = new BundlesHandler(bundleContext);
        bundleHandler = new BundleHandler(bundleContext);
        servicesHandler = new ServicesHandler(bundleContext);

        bundleListenerHandler = new BundleListenerHandler(bundleListener);
        serviceListenerHandler = new ServiceListenerHandler(serviceListener);
        frameworkListenerHandler = new FrameworkListenerHandler(frameworkListener);
        staticFilesHandler = new StaticFilesHandler(bundleContext.getBundle());

    }

    /**
     * TODO: replace this ugliness with AppNanolets once the next nanohttpd
     * release is out
     */
    @Override
    public Response serve(IHTTPSession session) {
        log.error("processing uri '{}'", session.getUri());
        if ("/backend/bundles".equals(session.getUri())) {
            return bundlesHandler.handle(session);
        }
        if (session.getUri().startsWith("/backend/bundles/")) {
            return bundleHandler.handle(session);
        }
        if ("/backend/services".equals(session.getUri())) {
            return servicesHandler.handle(session);
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
        return staticFilesHandler.handle(session);
    }
}