package io.skysail.webconsole.services;

import java.util.List;
import java.util.stream.Collectors;

import io.skysail.webconsole.entities.SnapshotDescriptor;
import io.skysail.webconsole.snapshots.Snapshots;

public class SnapshotsService {

	private Snapshots snapshots;

	public SnapshotsService(OsgiService osgiService) {
		snapshots = new Snapshots(osgiService);
	}

	public void createSnapshot() {
		snapshots.createSnapshot(null);
	}

	public List<SnapshotDescriptor> getSnapshots() {
		return snapshots.getSnapshots().stream().map(s -> new SnapshotDescriptor(s)).collect(Collectors.toList());
	}

}
