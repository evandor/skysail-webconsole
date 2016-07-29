package io.skysail.webconsole.server.handler;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.services.SnapshotsService;

public class SnapshotsHandler extends AbstractHttpHandler { // NOSONAR

    private SnapshotsService snapshotsService;

    public SnapshotsHandler(SnapshotsService snapshotsService, String basicAuth) {
        super(basicAuth);
        this.snapshotsService = snapshotsService;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        if ("/backend/snapshotdetails".equals(session.getUri())) {
            return mapper.writeValueAsString(snapshotsService.getSnapshotDetails());
        }
        return mapper.writeValueAsString(snapshotsService.getSnapshotDescriptors());
    }

    @Override
    protected synchronized String post(IHTTPSession session) throws JsonProcessingException {
        snapshotsService.createSnapshot();
        return "done";
    }

}
