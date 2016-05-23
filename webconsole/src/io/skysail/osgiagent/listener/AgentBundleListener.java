package io.skysail.osgiagent.listener;

import java.util.ArrayList;
import java.util.List;

import org.osgi.framework.BundleContext;
import org.osgi.framework.BundleEvent;
import org.osgi.framework.BundleListener;

import io.skysail.osgiagent.events.AgentBundleEvent;
import lombok.Getter;

public class AgentBundleListener implements BundleListener {

    @Getter
    private List<AgentBundleEvent> bundleEvents = new ArrayList<>();

    public AgentBundleListener(BundleContext bundleContext) {
        bundleContext.addBundleListener(this);
    }

    @Override
    public void bundleChanged(BundleEvent event) {
        bundleEvents.add(new AgentBundleEvent(event));
    }

}
