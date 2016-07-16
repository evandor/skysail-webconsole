package io.skysail.webconsole.osgi.entities.bundles.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.mockito.Mockito;
import org.osgi.framework.wiring.BundleRevision;
import org.osgi.framework.wiring.BundleWire;
import org.osgi.framework.wiring.BundleWiring;

import io.skysail.webconsole.osgi.entities.bundles.BundleSnapshot;

public class BundleSnapshotTest extends BundleDetailsTest {

	@Override
    @Before
	public void setUp() {
		super.setUp();
	}

	public void testName() {
		BundleWiring wiring = Mockito.mock(BundleWiring.class);
		List<BundleWire> someWires = new ArrayList<>();
		BundleWire aWire = Mockito.mock(BundleWire.class);
		BundleRevision revision = Mockito.mock(BundleRevision.class);
		Mockito.when(revision.getBundle()).thenReturn(bundle);
		Mockito.when(aWire.getProvider()).thenReturn(revision);
		Mockito.when(aWire.getRequirer()).thenReturn(revision);

		someWires.add(aWire);
		Mockito.when(wiring.getProvidedWires(null)).thenReturn(someWires);
		Mockito.when(wiring.getRequiredWires(null)).thenReturn(someWires);
		Mockito.when(bundle.adapt(BundleWiring.class)).thenReturn(wiring);

		BundleSnapshot bundleSnapshot = new BundleSnapshot(bundle);

		assertThat(bundleSnapshot.getWireDescriptor().getProvidedWires().size(),is(1));
		assertThat(bundleSnapshot.getWireDescriptor().getRequiredWires().size(),is(1));
	}
}
