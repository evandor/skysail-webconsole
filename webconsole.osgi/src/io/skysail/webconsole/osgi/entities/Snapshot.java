package io.skysail.webconsole.osgi.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import io.skysail.webconsole.osgi.entities.bundles.BundleSnapshot;
import io.skysail.webconsole.osgi.entities.services.ServiceDescriptor;
import io.skysail.webconsole.osgi.services.OsgiService;
import lombok.Getter;

@Getter
public class Snapshot {

    private long id;
    private String title;

    private List<BundleSnapshot> bundles = new ArrayList<>();
    private List<ServiceDescriptor> services = new ArrayList<>();

    private long timestamp;


    public Snapshot(OsgiService osgiService, long id) {
        this(osgiService, id, null);
    }

    public Snapshot(OsgiService osgiService, long id, String title) {
        this.id = id;
        this.timestamp = System.currentTimeMillis();
        if (title == null || title.trim().length() == 0) {
            this.title = new Date().toString();
        } else {
            this.title = title;
        }
        bundles = osgiService.getBundleSnapshots();
        services = osgiService.getServiceDescriptors();
    }

}
