package io.skysail.webconsole.log;

import java.util.ArrayList;
import java.util.List;

import org.osgi.service.log.LogEntry;
import org.osgi.service.log.LogListener;

import lombok.Getter;

public class LogRepository implements LogListener {

	@Getter
	private List<LogEntry> logs = new ArrayList<>();

	@Override
	public void logged(LogEntry entry) {
		logs.add(entry);
	}

}
