package io.skysail.webconsole.server;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Base64;

import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import fi.iki.elonen.NanoHTTPD;
import io.skysail.webconsole.listener.AgentBundleListener;
import io.skysail.webconsole.listener.AgentFrameworkListener;
import io.skysail.webconsole.listener.AgentServiceListener;
import io.skysail.webconsole.server.handler.BundleContentsHandler;
import io.skysail.webconsole.server.handler.BundleFileContentHandler;
import io.skysail.webconsole.server.handler.BundleHandler;
import io.skysail.webconsole.server.handler.BundleListenerHandler;
import io.skysail.webconsole.server.handler.BundleServicesHandler;
import io.skysail.webconsole.server.handler.BundlesHandler;
import io.skysail.webconsole.server.handler.FrameworkHandler;
import io.skysail.webconsole.server.handler.FrameworkListenerHandler;
import io.skysail.webconsole.server.handler.LogsHandler;
import io.skysail.webconsole.server.handler.PackageHandler;
import io.skysail.webconsole.server.handler.PackagesHandler;
import io.skysail.webconsole.server.handler.RuntimeConfigHandler;
import io.skysail.webconsole.server.handler.ServiceHandler;
import io.skysail.webconsole.server.handler.ServiceListenerHandler;
import io.skysail.webconsole.server.handler.ServicesHandler;
import io.skysail.webconsole.server.handler.SnapshotHandler;
import io.skysail.webconsole.server.handler.SnapshotsHandler;
import io.skysail.webconsole.server.handler.StaticFilesHandler;
import io.skysail.webconsole.server.handler.VersionHandler;
import io.skysail.webconsole.services.LogService;
import io.skysail.webconsole.services.OsgiServiceTracker;
import io.skysail.webconsole.services.SnapshotsService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Server extends NanoHTTPD {

    private static final String BACKEND = "/backend/";
    private static final String VERSION = "v1/";

    private static final String BACKEND_BUNDLES = BACKEND + VERSION + "bundles/";
    private static final String BACKEND_SERVICES = BACKEND + VERSION + "services/";

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
    private PackageHandler packageHandler;

    private SnapshotsHandler snapshotsHandler;
    private SnapshotHandler snapshotHandler;

    private LogsHandler logsHandler;

    private ServiceListenerHandler serviceListenerHandler;
    private BundleListenerHandler bundleListenerHandler;
    private FrameworkListenerHandler frameworkListenerHandler;

    private VersionHandler versionHandler;

    private RuntimeConfigHandler runtimeConfigHandler;

    private SnapshotsService snapshotsService;

    private LogService logService;

    private BundleServicesHandler bundleServicesHandler;
    private BundleContentsHandler bundleContentsHandler;
    private BundleFileContentHandler bundleFileContentHandler;

    public Server(BundleContext bundleContext, OsgiServiceTracker osgiServiceTracker, int port, String httpBasicPassword) throws IOException {
        super(port);

        //String basicAuth = "Basic " + DatatypeConverter.printBase64Binary(("websonsole" + ":" + httpBasicPassword).getBytes());

        String basicAuth = "Basic " + new String(Base64.getEncoder().encode(("webconsole" + ":" + httpBasicPassword).getBytes()), Charset.forName("UTF-8"));

        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);

        snapshotsService = new SnapshotsService(bundleContext);
        logService = new LogService(bundleContext);

        bundleListener = new AgentBundleListener(bundleContext);
        serviceListener = new AgentServiceListener(bundleContext);
        frameworkListener = new AgentFrameworkListener(bundleContext);

        bundlesHandler = new BundlesHandler(osgiServiceTracker, basicAuth);
        bundleServicesHandler = new BundleServicesHandler(osgiServiceTracker, basicAuth);
        bundleContentsHandler = new BundleContentsHandler(osgiServiceTracker, basicAuth);
        bundleFileContentHandler = new BundleFileContentHandler(osgiServiceTracker, basicAuth);

        servicesHandler = new ServicesHandler(osgiServiceTracker, basicAuth);
        packagesHandler = new PackagesHandler(osgiServiceTracker, basicAuth);
        packageHandler = new PackageHandler(osgiServiceTracker, basicAuth);

        snapshotsHandler = new SnapshotsHandler(snapshotsService, basicAuth);
        snapshotHandler = new SnapshotHandler(snapshotsService, basicAuth);

        logsHandler = new LogsHandler(logService, basicAuth);
        frameworkHandler = new FrameworkHandler(bundleContext, basicAuth);

        bundleHandler = new BundleHandler(osgiServiceTracker, basicAuth);
        serviceHandler = new ServiceHandler(bundleContext, basicAuth);

        bundleListenerHandler = new BundleListenerHandler(bundleListener, basicAuth);
        serviceListenerHandler = new ServiceListenerHandler(serviceListener, basicAuth);
        frameworkListenerHandler = new FrameworkListenerHandler(frameworkListener, basicAuth);

        runtimeConfigHandler = new RuntimeConfigHandler(basicAuth);

        Bundle clientBundle = Arrays.stream(bundleContext.getBundles())
                .filter(b -> b.getSymbolicName().equals(WEBCONSOLE_CLIENT)).findFirst()
                .orElse(bundleContext.getBundle());

        log.info("using client bundle '{}' [{}]", clientBundle.getSymbolicName(), clientBundle.getVersion());

        versionHandler = new VersionHandler(clientBundle, basicAuth);
        staticFilesHandler = new StaticFilesHandler(clientBundle);

        /*
         * SocketWorker socketWorker = new SocketWorker(8088);
         * socketWorker.start();
         *
         * TimerTask timerTask = new TimerTask() {
         *
         * @Override public void run() { WebSocket webSocket =
         * socketWorker.getWebSocket(); if (webSocket != null) { try {
         * webSocket.send("payload"); } catch (IOException e) {
         * e.printStackTrace(); } }
         *
         * } }; Timer timer = new Timer(true);
         * timer.scheduleAtFixedRate(timerTask, 1000, 10*1000);
         * System.out.println(socketWorker);
         */

        snapshotsService.createSnapshot();
    }

    /**
     * TODO: replace this ugliness with AppNanolets once the next nanohttpd
     * release is out
     */
    @Override
    public Response serve(IHTTPSession session) {
        log.debug("processing {} on uri '{}'", session.getMethod(), session.getUri());

        // --- POSTS ---------------------------------
        if (session.getMethod().equals(Method.POST) && "/backend/snapshots/".equals(session.getUri())) {
            return snapshotsHandler.handle(session);
        }

        // --- GETS ----------------------------------
        if ("/backend/framework".equals(session.getUri())) {
            return frameworkHandler.handle(session);
        }

        if ((BACKEND + VERSION + "bundles").equals(session.getUri())) {
            return bundlesHandler.handle(session);
        }
        if (session.getUri().startsWith(BACKEND_BUNDLES) && session.getUri().endsWith("/services")) {
            return bundleServicesHandler.handle(session);
        }
        if (session.getUri().startsWith(BACKEND_BUNDLES) && session.getUri().contains("/contents/")) {
            return bundleFileContentHandler.handle(session);
        }
        if (session.getUri().startsWith(BACKEND_BUNDLES) && session.getUri().endsWith("/contents")) {
            return bundleContentsHandler.handle(session);
        }
        if (session.getUri().startsWith(BACKEND_BUNDLES)) {
            return bundleHandler.handle(session);
        }

        if ((BACKEND + VERSION + "services").equals(session.getUri())) {
            return servicesHandler.handle(session);
        }
        if (session.getUri().startsWith(BACKEND_SERVICES)) {
            return serviceHandler.handle(session);
        }

        if (session.getUri().startsWith("/backend/v1/packages/")) {
            return packageHandler.handle(session);
        }
        if (session.getUri().equals("/backend/v1/packages")) {
            return packagesHandler.handle(session);
        }

        if ("/backend/v1/snapshots".equals(session.getUri())) {
            return snapshotsHandler.handle(session);
        }
        if (session.getUri().startsWith("/backend/v1/snapshotdetails/")) {
            return snapshotHandler.handle(session);
        }
        if ("/backend/v1/snapshotdetails".equals(session.getUri())) {
            return snapshotsHandler.handle(session);
        }

        if ("/backend/v1/logs".equals(session.getUri())) {
            return logsHandler.handle(session);
        }

        if ("/backend/v1/bundlelistener".equals(session.getUri())) {
            return bundleListenerHandler.handle(session);
        }
        if ("/backend/v1/frameworklistener".equals(session.getUri())) {
            return frameworkListenerHandler.handle(session);
        }
        if ("/backend/v1/servicelistener".equals(session.getUri())) {
            return serviceListenerHandler.handle(session);
        }
        if ("/backend/v1/client/version".equals(session.getUri())) {
            return versionHandler.handle(session);
        }
        if ("/backend/v1/runtimeconfig".equals(session.getUri())) {
            return runtimeConfigHandler.handle(session);
        }
        if (session.getUri().equals("") || session.getUri().equals("/")) {
            Response res = newFixedLengthResponse(Response.Status.REDIRECT, NanoHTTPD.MIME_HTML, "");
            res.addHeader("Location", "/index.html");
            return res;
        }
        return staticFilesHandler.handle(session);
    }

    public void createSnapshot() {
        this.snapshotsService.createSnapshot();
    }
}