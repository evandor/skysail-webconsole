package io.skysail.webconsole.osgi.utils;

import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.log.LogService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class LogServiceUtils {

	public static synchronized void error(BundleContext context, Exception e) {
		logMessage(context, LogService.LOG_ERROR, e.getMessage());
		log.error(e.getMessage(), e);
	}

	public static synchronized void info(BundleContext bundle, String info) {
		logMessage(bundle, LogService.LOG_INFO, info);
		log.info(info);
	}

	public static synchronized void warn(BundleContext bundle, String warning) {
		logMessage(bundle, LogService.LOG_WARNING, warning);
		log.info(warning);
	}

	private static synchronized void logMessage(BundleContext ctx, int level, String message) {
		ServiceReference<LogService> serviceReference = ctx.getServiceReference(LogService.class);
		if (serviceReference == null) {
			return;
		}
		LogService logService = ctx.getService(serviceReference);
		if (logService == null) {
			return;
		}
		logService.log(level, message);
		ctx.ungetService(serviceReference);
	}

}
