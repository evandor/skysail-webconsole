package io.skysail.webconsole.entities;

import io.skysail.webconsole.snapshots.Snapshot;
import lombok.Getter;

@Getter
public class SnapshotDescriptor {

	private String title;

	private int bundleCount;

	public SnapshotDescriptor(Snapshot s) {
		this.title = s.getTitle();
		this.bundleCount = s.getBundles().size();
	}

}
