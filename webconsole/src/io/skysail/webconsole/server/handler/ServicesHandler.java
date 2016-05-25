package io.skysail.webconsole.server.handler;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.entities.ServiceDescriptor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ServicesHandler extends AbstractHttpHandler { // NOSONAR

    private BundleContext bundleContext;

    public ServicesHandler(BundleContext bundleContext) {
        this.bundleContext = bundleContext;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        List<ServiceDescriptor> descriptors = getServiceDescriptors();
        return mapper.writeValueAsString(descriptors);
    }

    public List<ServiceDescriptor> getServiceDescriptors() {
        if (bundleContext == null) {
            log.warn("bundleContext not available");
            return Collections.emptyList();
        }
        try {
            ServiceReference<?>[] references =bundleContext.getAllServiceReferences(null, null);
            return Arrays.stream(references) // NOSONAR
                    .map(s -> new ServiceDescriptor(s))
                    .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                    .collect(Collectors.toList());
        } catch (InvalidSyntaxException e) {
            log.error(e.getMessage(), e);
        }
        return Collections.emptyList();
    }

}
