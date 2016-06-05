package io.skysail.webconsole;

import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.resolver.Resolver;

import io.skysail.webconsole.server.Server;
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

    @Override
    public void start(BundleContext context) throws Exception {
        this.context = context;
        startAgent();
        // openBrowser();
    }

    @Override
    public void stop(BundleContext context) throws Exception {
        this.context = null;
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
            server = new io.skysail.webconsole.server.Server(context, resolverReference);
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
