package io.skysail.webconsole.osgi.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import io.skysail.webconsole.osgi.entities.bundles.BundleSnapshot;
import lombok.Getter;

@Getter
public class Snapshot {

    private long id;
    private String title;

    private List<BundleSnapshot> bundles = new ArrayList<>();
    private List<ServiceDescriptor> services = new ArrayList<>();
   // private OsgiService osgiService;

    private long timestamp;


    public Snapshot(long id) {
        this(id, null);
    }

    public Snapshot(long id, String title) {
        this.id = id;
        this.timestamp = System.currentTimeMillis();
        if (title == null || title.trim().length() == 0) {
            this.title = new Date().toString();
        } else {
            this.title = title;
        }
        //bundles = osgiService.getBundleSnapshots();
        //services = osgiService.getServiceDescriptors();
    }

}
