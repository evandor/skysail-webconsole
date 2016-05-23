package io.skysail.osgiagent.events;

import java.util.Date;

import org.osgi.framework.BundleEvent;

import lombok.Getter;

@Getter
public class AgentBundleEvent extends AgentEvent {

    private long date;
    private String bundle;
    private String type;
    private String origin;
    private String source;

    public AgentBundleEvent(BundleEvent event) {
        this.date = new Date().getTime();
        bundle = getBundleName(event.getBundle());
        this.type = mapType(event.getType());
        this.origin = getBundleName(event.getOrigin());
        source = event.getSource().getClass().getName();
    }

    private String mapType(int type) {
        switch (type) {
        case BundleEvent.INSTALLED:
            return "INSTALLED";
        case BundleEvent.LAZY_ACTIVATION:
            return "LAZY_ACTIVATION";
        case BundleEvent.RESOLVED:
            return "RESOLVED";
        case BundleEvent.STARTED:
            return "STARTED";
        case BundleEvent.STARTING:
            return "STARTING";
        case BundleEvent.STOPPED:
            return "STOPPED";
        case BundleEvent.STOPPING:
            return "STOPPING";
        case BundleEvent.UNINSTALLED:
            return "UNINSTALLED";
        case BundleEvent.UNRESOLVED:
            return "UNRESOLVED";
        case BundleEvent.UPDATED:
            return "UPDATED";
        default:
            return "OTHER";
        }
    }

}
