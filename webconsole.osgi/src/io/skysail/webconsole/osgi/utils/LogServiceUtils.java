package io.skysail.webconsole.osgi.utils;

import org.osgi.service.log.LogService;
import org.osgi.util.tracker.ServiceTracker;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class LogServiceUtils {

    public static synchronized void error(ServiceTracker<LogService, LogService> tracker, Exception e) {
        logMessage(tracker, LogService.LOG_ERROR, e.getMessage());
    }

    public static synchronized void info(ServiceTracker<LogService, LogService> tracker, String info) {
        logMessage(tracker, LogService.LOG_INFO, info);
    }

    public static synchronized void warn(ServiceTracker<LogService, LogService> tracker, String warning) {
        logMessage(tracker, LogService.LOG_WARNING, warning);
    }

    private static synchronized void logMessage(ServiceTracker<LogService, LogService> logServiceTracker, int level, String message) {
        LogService logService = logServiceTracker.getService();
        if (logService == null) {
            return;
        }
        logService.log(level, message);
    }

}
