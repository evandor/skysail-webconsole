package io.skysail.osgiagent.server.handler;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.BundleContext;

import com.fasterxml.jackson.core.JsonProcessingException;

import io.skysail.osgiagent.entities.BundleDescriptor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class BundlesHandler extends AbstractHttpHandler { // NOSONAR

    private BundleContext bundleContext;

    public BundlesHandler(BundleContext bundleContext) {
        this.bundleContext = bundleContext;
    }

    @Override
    String getResponse() throws JsonProcessingException {
        List<BundleDescriptor> bundleDescriptors = getBundleDescriptors();
        return mapper.writeValueAsString(bundleDescriptors);
    }

    public List<BundleDescriptor> getBundleDescriptors() {
        if (bundleContext == null) {
            log.warn("bundleContext not available");
            return Collections.emptyList();
        }
        return Arrays.stream(bundleContext.getBundles()) // NOSONAR
                .map(b -> new BundleDescriptor(b))
                .sorted((b1, b2) -> Integer.valueOf(b1.getId()).compareTo(Integer.valueOf(b2.getId())))
                .collect(Collectors.toList());
    }

}
