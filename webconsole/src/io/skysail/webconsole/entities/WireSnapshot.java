package io.skysail.webconsole.entities;

import org.osgi.framework.wiring.BundleWire;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class WireSnapshot {

    private long providerBundleId;
    private long requirerBundleId;

    public WireSnapshot(BundleWire wire) {
        providerBundleId = wire.getProvider().getBundle().getBundleId();
        requirerBundleId = wire.getRequirer().getBundle().getBundleId();
    }

}
