package io.skysail.webconsole.server.handler;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.entities.SnapshotDescriptor;
import io.skysail.webconsole.services.SnapshotsService;

public class SnapshotsHandler extends AbstractHttpHandler { // NOSONAR

	private SnapshotsService snapshotsService;

	public SnapshotsHandler(SnapshotsService snapshotsService) {
		this.snapshotsService = snapshotsService;
	}

	@Override
	String getResponse(IHTTPSession session) throws JsonProcessingException {
		List<SnapshotDescriptor> descriptors = snapshotsService.getSnapshots();
		return mapper.writeValueAsString(descriptors);
	}

	@Override
	protected String post(IHTTPSession session) throws JsonProcessingException {
		snapshotsService.createSnapshot();
		return "done";
	}

}
