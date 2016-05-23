package io.skysail.osgiagent.events;

import java.util.Date;

import org.osgi.framework.FrameworkEvent;

import lombok.Getter;

@Getter
public class AgentFrameworkEvent extends AgentEvent {

    private long date;
    private String source;
    private String type;
    private String serviceRef;
    private String bundle;
    private String throwableMessage;

    public AgentFrameworkEvent(FrameworkEvent event) {
        this.date = new Date().getTime();
        source = event.getSource().getClass().getName();
        this.type = mapType(event.getType());
        this.bundle = getBundleName(event.getBundle());
        this.source = event.getSource().toString();
        throwableMessage = event.getThrowable().getMessage();
    }

    private String mapType(int type) {
        switch (type) {
        case FrameworkEvent.ERROR:
            return "ERROR";
        case FrameworkEvent.INFO:
            return "INFO";
        case FrameworkEvent.PACKAGES_REFRESHED:
            return "PACKAGES_REFRESHED";
        case FrameworkEvent.STARTED:
            return "STARTED";
        case FrameworkEvent.STARTLEVEL_CHANGED:
            return "STARTLEVEL_CHANGED";
        case FrameworkEvent.STOPPED:
            return "STOPPED";
        case FrameworkEvent.STOPPED_BOOTCLASSPATH_MODIFIED:
            return "STOPPED_BOOTCLASSPATH_MODIFIED";
        case FrameworkEvent.STOPPED_UPDATE:
            return "STOPPED_UPDATE";
        case FrameworkEvent.WAIT_TIMEDOUT:
            return "WAIT_TIMEDOUT";
        case FrameworkEvent.WARNING:
            return "WARNING";
        default:
            return "UNKNOWN";
        }
    }

}
