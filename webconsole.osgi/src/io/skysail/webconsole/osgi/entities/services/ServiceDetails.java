package io.skysail.webconsole.osgi.entities.services;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.osgi.framework.Bundle;
import org.osgi.framework.Constants;
import org.osgi.framework.ServiceReference;

import io.skysail.webconsole.osgi.entities.bundles.BundleDescriptor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServiceDetails extends ServiceDescriptor {

	private Map<String,Object> properties;

	private List<BundleDescriptor> usingBundles;

	public ServiceDetails(ServiceReference<?> service) {
		super(service);
		this.properties = Arrays.stream(service.getPropertyKeys())
			.filter(key -> !key.equals(Constants.SERVICE_ID) && !key.equals(Constants.OBJECTCLASS))
			.filter(key -> service.getProperty(key) != null)
			.collect(Collectors.toMap(Function.identity(), service::getProperty));
		this.usingBundles = Arrays.stream(service.getUsingBundles() != null ? service.getUsingBundles() : new Bundle[0])
			.map((Bundle b) -> new BundleDescriptor(b,null))
			.collect(Collectors.toList());
	}

}
