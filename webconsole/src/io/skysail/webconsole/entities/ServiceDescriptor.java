package io.skysail.webconsole.entities;

import java.util.Arrays;
import java.util.stream.Collectors;

import org.osgi.framework.Constants;
import org.osgi.framework.ServiceReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServiceDescriptor {

	private String id;

	private String objectClass;

	private String pid;

	private String ranking;

	private long bundleId;

	public ServiceDescriptor(ServiceReference<?> ref) {
		id = Long.toString((Long)ref.getProperty(Constants.SERVICE_ID));
		objectClass = Arrays.stream((String[])ref.getProperty(Constants.OBJECTCLASS)).collect(Collectors.joining(", "));
		pid = (String)ref.getProperty(Constants.SERVICE_PID);
		ranking = ref.getProperty(Constants.SERVICE_RANKING) != null ? ref.getProperty(Constants.SERVICE_RANKING).toString() : "";
		this.bundleId = ref.getBundle().getBundleId();
	}


}
