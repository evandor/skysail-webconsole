package io.skysail.osgiagent;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

import io.skysail.osgiagent.server.Server;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class AgentActivator implements BundleActivator{

    private Thread loggerThread;
    private BundleContext context;
    private Server server;

    @Override
    public void start(BundleContext context) throws Exception {
        this.context = context;
        startAgent();
    }

    @Override
    public void stop(BundleContext context) throws Exception {
        this.context = null;
        try {
            server.stop();
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
            server = new io.skysail.osgiagent.server.Server(context);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }

}
