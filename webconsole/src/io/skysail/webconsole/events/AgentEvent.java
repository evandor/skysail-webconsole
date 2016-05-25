package io.skysail.webconsole.events;

import org.osgi.framework.Bundle;

public class AgentEvent {

    protected String getBundleName(Bundle bundle) {
        return bundle.getSymbolicName() + "["+bundle.getVersion().toString()+"] #" + bundle.getBundleId();
    }

}
