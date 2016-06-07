package io.skysail.webconsole.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.osgi.framework.wiring.BundleWiring;

import io.skysail.webconsole.ui.Alert;
import io.skysail.webconsole.ui.Alert.Level;
import lombok.Getter;

@Getter
public class WireDescriptor {

    private List<Alert> alerts = new ArrayList<>();

    private List<Capability> capabilities;
    private List<Requirement> requirements;

    public WireDescriptor(BundleWiring wiring) {
        if (wiring == null) {
            alerts.add(new Alert("no bundle wiring available, probably due to bundles state", Level.WARNING));
            return;
        }

        capabilities = wiring.getCapabilities(null).stream()
                .map(cap -> new Capability(cap))
                .sorted((c1,c2) -> c1.getNamespace().compareTo(c2.getNamespace()))
                .collect(Collectors.toList());

        requirements = wiring.getRequirements(null).stream()
                .map(req -> new Requirement(req))
                .sorted((r1,r2) -> r1.getNamespace().compareTo(r2.getNamespace()))
                .collect(Collectors.toList());
    }

}
