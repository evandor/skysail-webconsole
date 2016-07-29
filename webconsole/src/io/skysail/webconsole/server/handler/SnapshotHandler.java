package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.services.SnapshotsService;

public class SnapshotHandler extends AbstractHttpHandler { // NOSONAR

    private SnapshotsService snapshotsService;

    public SnapshotHandler(SnapshotsService snapshotsService, String basicAuth) {
        super(basicAuth);
        this.snapshotsService = snapshotsService;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        if (session.getUri().equals("/backend/v1/snapshotdetails/latest")) {
            return mapper.writeValueAsString(snapshotsService.getLatestSnapshotDetails());
        }
        String snapshotId = session.getUri().substring(session.getUri().lastIndexOf("/") + 1);
        return mapper.writeValueAsString(snapshotsService.getSnapshotDetails(snapshotId));
    }
}
