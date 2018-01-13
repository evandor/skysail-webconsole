package io.skysail.webconsole.osgi.entities.services;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import io.skysail.webconsole.osgi.entities.Entity;
import org.osgi.framework.ServiceReference;

import lombok.Getter;
import lombok.Setter;

@Getter
public class ServiceReferenceDescriptor implements Entity {

    @Setter
    @Getter
    private String id; // service id

    private Map<String, Object> properties = new HashMap<>();
    private String objectClass;
    private String bundleId;

    public ServiceReferenceDescriptor(ServiceReference<?> serviceRef) {
        Arrays.stream(serviceRef.getPropertyKeys()).forEach(key -> {
            if ("service.id".equals(key)) {
                this.id = serviceRef.getProperty(key).toString();
            } else if ("objectClass".equals(key) && serviceRef.getProperty(key) != null) {
                this.objectClass = Arrays.stream((String[]) serviceRef.getProperty(key))
                        .collect(Collectors.joining(","));
            } else if ("service.bundleid".equals(key)) {
                this.bundleId = serviceRef.getProperty(key).toString();
            } else {
                properties.put(key, serviceRef.getProperty(key).toString());
            }
        });

    }

    @Override
    public String getId() {
        return id;
    }
}
