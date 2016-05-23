package io.skysail.osgiagent.listener;

import java.util.ArrayList;
import java.util.List;

import org.osgi.framework.BundleContext;
import org.osgi.framework.FrameworkEvent;
import org.osgi.framework.FrameworkListener;

import io.skysail.osgiagent.events.AgentFrameworkEvent;
import lombok.Getter;

public class AgentFrameworkListener implements FrameworkListener {

    @Getter
    private List<AgentFrameworkEvent> frameworkEvents = new ArrayList<>();

    public AgentFrameworkListener(BundleContext bundleContext) {
        bundleContext.addFrameworkListener(this);
    }

    @Override
    public void frameworkEvent(FrameworkEvent event) {
        frameworkEvents.add(new AgentFrameworkEvent(event));
    }

}
