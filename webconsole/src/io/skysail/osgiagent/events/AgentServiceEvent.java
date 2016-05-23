package io.skysail.osgiagent.events;

import java.util.Date;

import org.osgi.framework.ServiceEvent;

import lombok.Getter;

@Getter
public class AgentServiceEvent {

    private long date;
    private String source;
    private String type;
    private String serviceRef;

    public AgentServiceEvent(ServiceEvent event) {
        this.date = new Date().getTime();
        source = event.getSource().getClass().getName();
        this.type = mapType(event.getType());
        serviceRef = event.getServiceReference().toString();
    }

    private String mapType(int type) {
        switch (type) {
        case ServiceEvent.MODIFIED:
            return "MODIFIED";
        case ServiceEvent.MODIFIED_ENDMATCH:
            return "MODIFIED_ENDMATCH";
        case ServiceEvent.REGISTERED:
            return "REGISTERED";
        case ServiceEvent.UNREGISTERING:
            return "UNREGISTERING";
        default:
            return "UNKNOWN";
        }
    }

}
