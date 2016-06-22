package io.skysail.webconsole.osgi.entities.snapshots;

import io.skysail.webconsole.osgi.entities.Snapshot;
import lombok.Getter;

@Getter
public class SnapshotDescriptor {

    protected long id;
    protected String title;
    protected int bundleCount;
    protected int serviceCount;

    public SnapshotDescriptor(Snapshot s) {
        this.id = s.getId();
        this.title = s.getTitle();
        this.bundleCount = s.getBundles().size();
        this.serviceCount = s.getServices().size();
    }

}
