package io.skysail.webconsole.log.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.service.log.LogEntry;

import io.skysail.webconsole.log.LogRepository;

public class LogRepositoryTest {

	@Test
	public void testBehavior() {
		LogRepository logRepository = new LogRepository();
		assertThat(logRepository.getLogs().size(),is(0));
		logRepository.logged(Mockito.mock(LogEntry.class));
		assertThat(logRepository.getLogs().size(),is(1));
	}
}
