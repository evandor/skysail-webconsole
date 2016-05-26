package io.skysail.webconsole.snapshots;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.javers.core.Javers;
import org.javers.core.JaversBuilder;
import org.javers.core.diff.Diff;
import org.javers.core.diff.changetype.ValueChange;

import io.skysail.webconsole.entities.BundleDescriptor;
import io.skysail.webconsole.services.OsgiService;
import lombok.Getter;

public class Snapshots {

	private OsgiService osgiService;

	@Getter
	List<Snapshot> snapshots = new ArrayList<>();

	private Map<String, Snapshot> snapshotsByTitle = new HashMap<>();

	public Snapshots(OsgiService osgiService) {
		this.osgiService = osgiService;
	}

	public Snapshot createSnapshot(String title) {
		Snapshot snapshot = new Snapshot(osgiService, title);
		if (snapshotsByTitle.get(title) != null) {
			throw new IllegalStateException("snapshot with title " + title + " already exists");
		}
		snapshots.add(snapshot);
		snapshotsByTitle.put(snapshot.getTitle(), snapshot);
		return snapshot;
	}

	public List<ValueChange> compareBundles(String title1, String title2) {
		Snapshot first = snapshotsByTitle.get(title1);
		Snapshot second = snapshotsByTitle.get(title2);
		Javers javers = JaversBuilder.javers().build();
		Diff diff = javers.compareCollections(first.getBundles(), second.getBundles(), BundleDescriptor.class);
		return diff.getChangesByType(ValueChange.class);
	}

}
