//package io.skysail.webconsole.entities.wires;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.osgi.framework.wiring.BundleWiring;
//
//import lombok.Getter;
//
//@Getter
//public class WireDescriptorSnapshot {
//
//    private List<WireSnapshot> providedWires = new ArrayList<>();
//    private List<WireSnapshot> requiredWires = new ArrayList<>();
//
//    public WireDescriptorSnapshot(BundleWiring wiring) {
//        if (wiring == null) {
//            return;
//        }
//
//        providedWires = wiring.getProvidedWires(null).stream()
//                .map(wire -> new WireSnapshot(wire))
//                // .sorted((r1,r2) ->
//                // r1.getNamespace().compareTo(r2.getNamespace()))
//                .collect(Collectors.toList());
//
//        requiredWires = wiring.getRequiredWires(null).stream()
//                .map(wire -> new WireSnapshot(wire))
//                // .sorted((r1,r2) ->
//                // r1.getNamespace().compareTo(r2.getNamespace()))
//                .collect(Collectors.toList());
//
//    }
//
//}
