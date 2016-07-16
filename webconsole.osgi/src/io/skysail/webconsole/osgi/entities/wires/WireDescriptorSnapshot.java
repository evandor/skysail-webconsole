package io.skysail.webconsole.osgi.entities.wires;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.osgi.framework.wiring.BundleWiring;

import lombok.Getter;

@Getter
public class WireDescriptorSnapshot {

    private Map<Long,Long> providedWires = new HashMap<>(); // key: bundleId using this wire, value: how many times
    private Map<Long,Long> requiredWires = new HashMap<>(); // key: bundleId used by this wire, value: how many times

    public WireDescriptorSnapshot(BundleWiring wiring) {
        if (wiring == null) {
            return;
        }

        providedWires = wiring.getProvidedWires(null).stream()
                .map(wire -> wire.getRequirer().getBundle().getBundleId())
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        requiredWires = wiring.getRequiredWires(null).stream()
                .map(wire -> wire.getProvider().getBundle().getBundleId())
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));


    }

}
