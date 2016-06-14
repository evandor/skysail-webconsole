package io.skysail.webconsole.entities;

import org.osgi.framework.wiring.BundleWire;

public class Wire {

	public Wire(BundleWire wire) {
		System.out.println("Provider: " + wire.getProvider());
		System.out.println("Requirer: " + wire.getRequirer());
	}

}
