package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.entities.LogEntryDescriptor;
import io.skysail.webconsole.services.LogService;

public class LogsHandler extends AbstractHttpHandler {

	private LogService logService;

	public LogsHandler(LogService logService) {
		this.logService = logService;
	}

	@Override
	String getResponse(IHTTPSession session) throws JsonProcessingException {
        List<LogEntryDescriptor> descriptors = logService.getLogEntries();
        return mapper.writeValueAsString(descriptors);
	}

}
