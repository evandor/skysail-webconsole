package io.skysail.webconsole;

import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.resolver.Resolver;

import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.server.Server;
import io.skysail.webconsole.services.OsgiServiceTracker;
import lombok.extern.slf4j.Slf4j;

/**
 * Using an activator so that we don't depend on any DS implementation in the
 * runtime framework.
 *
 * The activator starts the server in a new thread.
 */
@Slf4j
public class AgentActivator implements BundleActivator {

    private Thread loggerThread;
    private BundleContext context;
    private Server server;
    private ServiceReference<Resolver> resolverReference;
    private OsgiServiceTracker osgiServiceTracker;

    @Override
    public void start(BundleContext context) throws Exception {
        log.info("starting webconsole plugin");
        this.context = context;
        osgiServiceTracker = new OsgiServiceTracker(context, OsgiService.class, null);
        osgiServiceTracker.open();
        startAgent();
        //server.createSnapshot();
        // openBrowser();
    }

    @Override
    public void stop(BundleContext context) throws Exception {
        log.info("stopping webconsole plugin");
        this.context = null;
        osgiServiceTracker.close();
        try {
            server.stop();
            if (resolverReference != null) {
                context.ungetService(resolverReference);
                resolverReference = null;
            }
            loggerThread.interrupt();
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }

    private void startAgent() {
        loggerThread = new Thread(this::createServer);
        loggerThread.start();
    }

    private void createServer() { // NOSONAR
        try {
            int port = 2002;
            log.info("starting intern webconsole server on port {}", port);
            server = new io.skysail.webconsole.server.Server(context, osgiServiceTracker, port );
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }

    private void openBrowser() {
        String url = "http://localhost:2002";
        try {
            if (Desktop.isDesktopSupported()) {
                Desktop.getDesktop().browse(new URI(url));
            } else {
                Runtime runtime = Runtime.getRuntime();
                runtime.exec("/usr/bin/firefox -new-window " + url);
            }
        } catch (IOException | URISyntaxException e) {
            log.error(e.getMessage(), e);
        }
    }

}
