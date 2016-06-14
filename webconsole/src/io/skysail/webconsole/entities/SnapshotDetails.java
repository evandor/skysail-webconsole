package io.skysail.webconsole.entities;

import java.util.List;

import io.skysail.webconsole.entities.bundles.BundleSnapshot;
import io.skysail.webconsole.snapshots.Snapshot;
import lombok.Getter;

@Getter
public class SnapshotDetails extends SnapshotDescriptor {

	private List<BundleSnapshot> bundles;

	public SnapshotDetails(Snapshot s) {
		super(s);
		this.bundles = s.getBundles();
	}

}
