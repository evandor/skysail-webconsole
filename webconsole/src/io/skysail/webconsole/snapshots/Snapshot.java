package io.skysail.webconsole.snapshots;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import io.skysail.webconsole.entities.BundleDescriptor;
import io.skysail.webconsole.entities.ServiceDescriptor;
import io.skysail.webconsole.services.OsgiService;
import lombok.Getter;
import lombok.NonNull;

@Getter
public class Snapshot {

	private String title;

	private List<BundleDescriptor> bundles = new ArrayList<>();
	private List<ServiceDescriptor> services;
	private OsgiService osgiService;

	private long timestamp;

	public Snapshot(@NonNull OsgiService osgiService) {
		this(osgiService, null);
	}

	public Snapshot(@NonNull OsgiService osgiService, String title) {
		this.timestamp = System.currentTimeMillis();
		this.osgiService = osgiService;
		if (title == null || title.trim().length() == 0) {
			this.title = new Date().toString();
		} else {
			this.title = title;
		}
		bundles = osgiService.getBundleDescriptors();
		services = osgiService.getServiceDescriptors();
	}


}
