//package io.skysail.webconsole.entities.bundles;
//
//import org.osgi.framework.Bundle;
//import org.osgi.framework.wiring.BundleWiring;
//
//import io.skysail.webconsole.entities.wires.WireDescriptorSnapshot;
//import lombok.Getter;
//import lombok.Setter;
//
//@Getter
//@Setter
//public class BundleSnapshot extends BundleDescriptor {
//
//    private String exportService;
//    private WireDescriptorSnapshot wireDescriptor;
//
//    public BundleSnapshot(Bundle bundle) {
//        super(bundle);
//        wireDescriptor = new WireDescriptorSnapshot(bundle.adapt(BundleWiring.class));
//    }
//
//}
