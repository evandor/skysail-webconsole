package io.skysail.webconsole.server.handler;

import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

import com.fasterxml.jackson.core.JsonProcessingException;

import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import io.skysail.webconsole.osgi.entities.services.ServiceDetails;

public class ServiceHandler extends AbstractHttpHandler { // NOSONAR

    private BundleContext bundleContext;

    public ServiceHandler(BundleContext bundleContext, String basicAuth) {
        super(basicAuth);
        this.bundleContext = bundleContext;
    }

    @Override
    String getResponse(IHTTPSession session) throws JsonProcessingException {
        String serviceId = session.getUri().substring(session.getUri().lastIndexOf("/") + 1);
        ServiceDetails details = getBundleDetails(serviceId);
        return mapper.writeValueAsString(details);
    }

    public ServiceDetails getBundleDetails(String serviceId) {
        try {
            ServiceReference<?>[] references = bundleContext
                    .getAllServiceReferences(null, "(service.id=" + serviceId + ")");
            if (references == null || references.length == 0) {
               // log.error("no service reference found for service.id = '{}'", serviceId);
            }
            return new ServiceDetails(references[0]);
        } catch (InvalidSyntaxException e) {
            //log.error(e.getMessage(), e);
        }
        return null;
    }

}
