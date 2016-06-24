//package io.skysail.webconsole.entities.wires;
//
//import org.osgi.framework.wiring.BundleWire;
//
//import lombok.Getter;
//import lombok.ToString;
//
//@ToString
//@Getter
//public class WireSnapshot {
//
//    private long pId; // provider bundle Id, abbreviated to make serialization smaller
//    private long rId; // requirer bundle Id
//
//    public WireSnapshot(BundleWire wire) {
//        pId = wire.getProvider().getBundle().getBundleId();
//        rId = wire.getRequirer().getBundle().getBundleId();
//    }
//
//}
