package io.skysail.webconsole.osgi.entities.wires;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.wiring.BundleWiring;

import io.skysail.webconsole.osgi.entities.Capability;
import io.skysail.webconsole.osgi.entities.Requirement;
import io.skysail.webconsole.osgi.messages.Alert;
import io.skysail.webconsole.osgi.messages.Alert.Level;
import lombok.Getter;

@Getter
public class WireDescriptor {

    private List<Capability> capabilities;
    private List<Requirement> requirements;
    private List<Wire> providedWires;
    private List<Wire> requiredWires;
    private List<Alert> alerts = new ArrayList<>();

    public WireDescriptor(BundleWiring wiring) {
        if (wiring == null) {
            alerts.add(new Alert("no bundle wiring available, probably due to bundles state", Level.WARNING));
            return;
        }

        capabilities = wiring.getCapabilities(null).stream()
                .map(cap -> new Capability(cap))
                .sorted((c1, c2) -> c1.getNamespace().compareTo(c2.getNamespace()))
                .collect(Collectors.toList());

        requirements = wiring.getRequirements(null).stream()
                .map(req -> new Requirement(req))
                .sorted((r1, r2) -> r1.getNamespace().compareTo(r2.getNamespace()))
                .collect(Collectors.toList());

        providedWires = wiring.getProvidedWires(null).stream()
                .map(wire -> new Wire(wire))
                .sorted((r1,r2) -> r1.getCapability().getNamespace().compareTo(r2.getCapability().getNamespace()))
                .collect(Collectors.toList());

        requiredWires = wiring.getRequiredWires(null).stream()
                .map(wire -> new Wire(wire))
                // .sorted((r1,r2) ->
                // r1.getNamespace().compareTo(r2.getNamespace()))
                .collect(Collectors.toList());

    }

}
