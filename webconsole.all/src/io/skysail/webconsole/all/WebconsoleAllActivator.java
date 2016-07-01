package io.skysail.webconsole.all;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

import io.skysail.webconsole.AgentActivator;
import io.skysail.webconsole.osgi.services.OsgiService;

public class WebconsoleAllActivator  implements BundleActivator {

	private AgentActivator agentActivator;
	private OsgiService osgiService;

	@Override
	public void start(BundleContext context) throws Exception {
		agentActivator = new AgentActivator();
		agentActivator.start(context);
		
		osgiService = new OsgiService();
		osgiService.start(context);
	}

	@Override
	public void stop(BundleContext context) throws Exception {
		osgiService.stop(context);
		agentActivator.stop(context);
	}

}
