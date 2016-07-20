package io.skysail.webconsole.services;

import java.util.Collections;
import java.util.List;

import io.skysail.webconsole.osgi.entities.services.ServiceDetails;
import io.skysail.webconsole.osgi.services.OsgiService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class NopOsgiService extends OsgiService {

    @Override
    public List<ServiceDetails> getServiceDetails() {
        log.warn("OsgiService not available, falling back to NOP");
        return Collections.emptyList();
    }
}
