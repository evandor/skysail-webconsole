package io.skysail.webconsole.services;

import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.BundleContext;

import io.skysail.webconsole.osgi.entities.snapshots.SnapshotDescriptor;
import io.skysail.webconsole.osgi.entities.snapshots.SnapshotDetails;
import io.skysail.webconsole.snapshots.Snapshots;

public class SnapshotsService {

    private Snapshots snapshots;

    public SnapshotsService(BundleContext bundleContext) {
        snapshots = new Snapshots(bundleContext);
    }

    public void createSnapshot() {
        snapshots.createSnapshot(null);
    }

    public List<SnapshotDescriptor> getSnapshotDescriptors() {
        return snapshots.getSnapshots().values().stream().map(s -> new SnapshotDescriptor(s))
                .collect(Collectors.toList());
    }

    public List<SnapshotDetails> getSnapshotDetails() {
        return snapshots.getSnapshots().values().stream().map(s -> new SnapshotDetails(s)).collect(Collectors.toList());
    }

    public SnapshotDetails getSnapshotDetails(String snapshotId) {
        return new SnapshotDetails(snapshots.getSnapshot(snapshotId));
    }

    public SnapshotDetails getLatestSnapshotDetails() {
        return new SnapshotDetails(snapshots.getLatestSnapshot());
    }

}
