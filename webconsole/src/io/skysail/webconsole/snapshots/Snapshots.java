package io.skysail.webconsole.snapshots;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.javers.core.Javers;
import org.javers.core.JaversBuilder;
import org.javers.core.diff.Diff;
import org.javers.core.diff.changetype.ValueChange;

import io.skysail.webconsole.entities.bundles.BundleSnapshot;
import io.skysail.webconsole.services.OsgiService;
import lombok.Getter;

public class Snapshots {

    private OsgiService osgiService;

    private AtomicLong cnt = new AtomicLong(new Date().getTime());

    @Getter
    Map<Long, Snapshot> snapshots = new HashMap<>();

    private Map<String, Snapshot> snapshotsByTitle = new HashMap<>();

    public Snapshots(OsgiService osgiService) {
        this.osgiService = osgiService;
    }

    public Snapshot createSnapshot(String title) {
        long id = cnt.getAndIncrement();
        Snapshot snapshot = new Snapshot(osgiService, id, title);
        if (snapshotsByTitle.get(title) != null) {
            throw new IllegalStateException("snapshot with title " + title + " already exists");
        }
        snapshots.put(id, snapshot);
        snapshotsByTitle.put(snapshot.getTitle(), snapshot);
        return snapshot;
    }

    public List<ValueChange> compareBundles(String title1, String title2) {
        Snapshot first = snapshotsByTitle.get(title1);
        Snapshot second = snapshotsByTitle.get(title2);
        Javers javers = JaversBuilder.javers().build();
        Diff diff = javers.compareCollections(first.getBundles(), second.getBundles(), BundleSnapshot.class);
        return diff.getChangesByType(ValueChange.class);
    }

    public Snapshot getSnapshot(String snapshotId) {
        return snapshots.get(Long.parseLong(snapshotId));
    }

    public Snapshot getLatestSnapshot() {
        Long snapshotId = snapshots.keySet().stream().max((k1,k2)-> k1.compareTo(k2)).orElse(0L);
        return getSnapshot(snapshotId.toString());
    }

}
