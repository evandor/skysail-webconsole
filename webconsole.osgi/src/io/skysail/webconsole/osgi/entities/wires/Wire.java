package io.skysail.webconsole.osgi.entities.wires;

import org.osgi.framework.wiring.BundleWire;

import io.skysail.webconsole.osgi.entities.Capability;
import io.skysail.webconsole.osgi.entities.Requirement;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class Wire {

    private long providerBundleId;
    private long requirerBundleId;
    private Requirement requirement;
    private Capability capability;

    public Wire(BundleWire wire) {
        providerBundleId = wire.getProvider().getBundle().getBundleId();
        requirerBundleId = wire.getRequirer().getBundle().getBundleId();
        requirement = new Requirement(wire.getRequirement());
        capability = new Capability(wire.getCapability());
    }

}
