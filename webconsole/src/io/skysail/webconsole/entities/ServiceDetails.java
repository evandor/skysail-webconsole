package io.skysail.webconsole.entities;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.osgi.framework.Bundle;
import org.osgi.framework.Constants;
import org.osgi.framework.ServiceReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServiceDetails extends ServiceDescriptor {

	private BundleDescriptor bundle;

	private Map<String,Object> properties;

	private List<BundleDescriptor> usingBundles;

	public ServiceDetails(ServiceReference<?> service) {
		super(service);
		this.bundle = new BundleDescriptor(service.getBundle());
		this.properties = Arrays.stream(service.getPropertyKeys())
			.filter(key -> !key.equals(Constants.SERVICE_ID) && !key.equals(Constants.OBJECTCLASS))
			.filter(key -> { return service.getProperty(key) != null;})
			.collect(Collectors.toMap(Function.identity(), e -> service.getProperty(e)));
		this.usingBundles = Arrays.stream(service.getUsingBundles() != null ? service.getUsingBundles() : new Bundle[0])
			.map((Bundle b) -> new BundleDescriptor(b))
			.collect(Collectors.toList());
	}

}
