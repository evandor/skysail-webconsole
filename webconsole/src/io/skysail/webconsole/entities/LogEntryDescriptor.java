package io.skysail.webconsole.entities;

import org.osgi.service.log.LogEntry;
import org.osgi.service.log.LogService;

import lombok.Getter;

@Getter
public class LogEntryDescriptor {

	private BundleDescriptor bundleDescriptor;
	private String message;
	private String level;

	public LogEntryDescriptor(LogEntry entry) {
		message = entry.getMessage();
		level = mapLevel(entry.getLevel());
		bundleDescriptor = new BundleDescriptor(entry.getBundle());
	}

	private String mapLevel(int level) {
		switch (level) {
		case LogService.LOG_DEBUG:
			return "DEBUG";
		case LogService.LOG_ERROR:
			return "ERROR";
		case LogService.LOG_INFO:
			return "INFO";
		case LogService.LOG_WARNING:
			return "WARNING";
		default:
			return "UNKNOWN";
		}
	}

}
