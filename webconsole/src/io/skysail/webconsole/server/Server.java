package io.skysail.webconsole.server;

import java.io.IOException;
import java.util.Arrays;
import java.util.Timer;
import java.util.TimerTask;

import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.resolver.Resolver;

import fi.iki.elonen.NanoHTTPD;
import fi.iki.elonen.NanoWSD.WebSocket;
import io.skysail.webconsole.listener.AgentBundleListener;
import io.skysail.webconsole.listener.AgentFrameworkListener;
import io.skysail.webconsole.listener.AgentServiceListener;
import io.skysail.webconsole.server.handler.BundleHandler;
import io.skysail.webconsole.server.handler.BundleListenerHandler;
import io.skysail.webconsole.server.handler.BundleServicesHandler;
import io.skysail.webconsole.server.handler.BundlesHandler;
import io.skysail.webconsole.server.handler.FrameworkHandler;
import io.skysail.webconsole.server.handler.FrameworkListenerHandler;
import io.skysail.webconsole.server.handler.LogsHandler;
import io.skysail.webconsole.server.handler.PackagesHandler;
import io.skysail.webconsole.server.handler.ServiceHandler;
import io.skysail.webconsole.server.handler.ServiceListenerHandler;
import io.skysail.webconsole.server.handler.ServicesHandler;
import io.skysail.webconsole.server.handler.SnapshotsHandler;
import io.skysail.webconsole.server.handler.StaticFilesHandler;
import io.skysail.webconsole.server.handler.VersionHandler;
import io.skysail.webconsole.services.LogService;
import io.skysail.webconsole.services.OsgiService;
import io.skysail.webconsole.services.SnapshotsService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Server extends NanoHTTPD {

	private static final String BACKEND_BUNDLES = "/backend/bundles/";

	private static final String WEBCONSOLE_CLIENT = "webconsole.client";

    private AgentBundleListener bundleListener;
    private AgentServiceListener serviceListener;
    private AgentFrameworkListener frameworkListener;
    private StaticFilesHandler staticFilesHandler;

    private BundlesHandler bundlesHandler;
    private BundleHandler bundleHandler;
    private FrameworkHandler frameworkHandler;

    private ServicesHandler servicesHandler;
    private ServiceHandler serviceHandler;

    private PackagesHandler packagesHandler;

    private SnapshotsHandler snapshotsHandler;

    private LogsHandler logsHandler;

    private ServiceListenerHandler serviceListenerHandler;
    private BundleListenerHandler bundleListenerHandler;
    private FrameworkListenerHandler frameworkListenerHandler;

	private VersionHandler versionHandler;

	private OsgiService osgiService;

	private SnapshotsService snapshotsService;

	private LogService logService;

    private ServiceReference<Resolver> resolverReference;

	private BundleServicesHandler bundleServicesHandler;


    public Server(BundleContext bundleContext, ServiceReference<Resolver> resolverReference) throws IOException {
        super(2002);
        this.resolverReference = resolverReference;
        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);

        osgiService = new OsgiService(bundleContext);
        snapshotsService = new SnapshotsService(osgiService);
        logService = new LogService(bundleContext);

        bundleListener = new AgentBundleListener(bundleContext);
        serviceListener = new AgentServiceListener(bundleContext);
        frameworkListener = new AgentFrameworkListener(bundleContext);

        bundlesHandler = new BundlesHandler(osgiService);
        bundleServicesHandler = new BundleServicesHandler(osgiService);
        servicesHandler = new ServicesHandler(osgiService);
        packagesHandler = new PackagesHandler(osgiService);
        snapshotsHandler = new SnapshotsHandler(snapshotsService);
        logsHandler = new LogsHandler(logService);
        frameworkHandler = new FrameworkHandler(bundleContext);

        bundleHandler = new BundleHandler(bundleContext, osgiService);
        serviceHandler = new ServiceHandler(bundleContext);

        bundleListenerHandler = new BundleListenerHandler(bundleListener);
        serviceListenerHandler = new ServiceListenerHandler(serviceListener);
        frameworkListenerHandler = new FrameworkListenerHandler(frameworkListener);

        Bundle clientBundle = Arrays.stream(bundleContext.getBundles())
				.filter(b -> b.getSymbolicName().equals(WEBCONSOLE_CLIENT)).findFirst().orElse(bundleContext.getBundle());

        log.info("using client bundle '{}' [{}]", clientBundle.getSymbolicName(), clientBundle.getVersion());

        versionHandler = new VersionHandler(clientBundle);
        staticFilesHandler = new StaticFilesHandler(clientBundle);

       /* SocketWorker socketWorker = new SocketWorker(8088);
        socketWorker.start();

        TimerTask timerTask = new TimerTask() {

			@Override
			public void run() {
				WebSocket webSocket = socketWorker.getWebSocket();
				if (webSocket != null) {
					try {
						webSocket.send("payload");
					} catch (IOException e) {
						e.printStackTrace();
					}
				}

			}
		};
		Timer timer = new Timer(true);
        timer.scheduleAtFixedRate(timerTask, 1000, 10*1000);
        System.out.println(socketWorker);*/
    }

    /**
     * TODO: replace this ugliness with AppNanolets once the next nanohttpd
     * release is out
     */
    @Override
    public Response serve(IHTTPSession session) {
        log.info("processing {} on uri '{}'", session.getMethod(), session.getUri());

        // --- POSTS ---------------------------------
        if (session.getMethod().equals(Method.POST) && "/backend/snapshots/".equals(session.getUri())) {
        	return snapshotsHandler.handle(session);
        }

        // --- GETS ----------------------------------
        if ("/backend/framework".equals(session.getUri())) {
            return frameworkHandler.handle(session);
        }

        if ("/backend/bundles".equals(session.getUri())) {
            return bundlesHandler.handle(session);
        }
        if (session.getUri().startsWith(BACKEND_BUNDLES) && session.getUri().endsWith("/services")) {
            return bundleServicesHandler.handle(session);
        }
        if (session.getUri().startsWith(BACKEND_BUNDLES)) {
            return bundleHandler.handle(session);
        }

        if ("/backend/services".equals(session.getUri())) {
            return servicesHandler.handle(session);
        }
        if (session.getUri().startsWith("/backend/services/")) {
            return serviceHandler.handle(session);
        }

        if ("/backend/packages".equals(session.getUri())) {
            return packagesHandler.handle(session);
        }

        if ("/backend/snapshots".equals(session.getUri())) {
            return snapshotsHandler.handle(session);
        }

        if ("/backend/logs".equals(session.getUri())) {
            return logsHandler.handle(session);
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
        if ("/client/version".equals(session.getUri())) {
            return versionHandler.handle(session);
        }
        if (session.getUri().equals("") || session.getUri().equals("/")) {
            Response res =  newFixedLengthResponse(Response.Status.REDIRECT, NanoHTTPD.MIME_HTML, "");
            res.addHeader("Location", "/index.html");
            return res;
        }
        return staticFilesHandler.handle(session);
    }
}