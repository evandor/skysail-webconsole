package io.skysail.webconsole.osgi.entities.snapshots;

import java.util.List;

import io.skysail.webconsole.osgi.entities.Snapshot;
import io.skysail.webconsole.osgi.entities.bundles.BundleSnapshot;
import io.skysail.webconsole.osgi.entities.services.ServiceDescriptor;
import lombok.Getter;

@Getter
public class SnapshotDetails extends SnapshotDescriptor {

	private List<BundleSnapshot> bundles;

    private List<ServiceDescriptor> services;

	public SnapshotDetails(Snapshot s) {
		super(s);
		this.bundles = s.getBundles();
		this.services = s.getServices();
	}

}
