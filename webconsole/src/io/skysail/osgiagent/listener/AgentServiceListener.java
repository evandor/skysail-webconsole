package io.skysail.osgiagent.listener;

import java.util.ArrayList;
import java.util.List;

import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceEvent;
import org.osgi.framework.ServiceListener;

import io.skysail.osgiagent.events.AgentServiceEvent;
import lombok.Getter;

public class AgentServiceListener implements ServiceListener {

    @Getter
    private List<AgentServiceEvent> serviceEvents = new ArrayList<>();

    public AgentServiceListener(BundleContext bundleContext) {
        bundleContext.addServiceListener(this);
    }

    @Override
    public void serviceChanged(ServiceEvent event) {
        serviceEvents.add(new AgentServiceEvent(event));
    }

}
