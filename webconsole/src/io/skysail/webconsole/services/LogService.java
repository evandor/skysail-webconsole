package io.skysail.webconsole.services;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.log.LogEntry;
import org.osgi.service.log.LogReaderService;

import io.skysail.webconsole.log.LogRepository;
import io.skysail.webconsole.osgi.entities.LogEntryDescriptor;

public class LogService {

    private LogRepository logRepository;

    public LogService(BundleContext bundleContext) {
        logRepository = new LogRepository();
        ServiceReference<?> ref = bundleContext.getServiceReference(LogReaderService.class.getName());
        if (ref != null) {
            LogReaderService reader = (LogReaderService) bundleContext.getService(ref);
            reader.addLogListener(logRepository);
        }
    }

    public List<LogEntryDescriptor> getLogEntries() {
        return (logRepository != null ? logRepository.getLogs() : Collections.emptyList()).stream()
                .map(LogEntry.class::cast)
                .map(entry -> new LogEntryDescriptor(entry))
                .collect(Collectors.toList());
    }

}
