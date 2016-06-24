package io.skysail.webconsole.snapshots.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.Arrays;
import java.util.List;

import org.javers.core.diff.changetype.ValueChange;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;

import io.skysail.webconsole.osgi.entities.bundles.BundleSnapshot;
import io.skysail.webconsole.osgi.services.OsgiService;
import io.skysail.webconsole.snapshots.Snapshot;
import io.skysail.webconsole.snapshots.Snapshots;
import io.skysail.webconsole.test.TestUtils;

public class SnapshotsTest {

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    private Snapshots snapshots;
    private OsgiService osgiService;

    @Before
    public void setup() {
        osgiService = Mockito.mock(OsgiService.class);
        snapshots = new Snapshots(osgiService);
    }

    @Test
    public void has_no_snapshots_initially() {
        assertThat(snapshots.getSnapshots().size(), is(0));
    }

    @Test
    public void has_one_snapshot_with_provided_title_after_calling_create_snapshot_once() {
        Snapshot theSnapshot = snapshots.createSnapshot("title");
        assertThat(snapshots.getSnapshots().size(), is(1));
        assertThat(theSnapshot.getTitle(), is("title"));
        assertThat(theSnapshot.getBundles().size(), is(0));
        assertThat(theSnapshot.getServices().size(), is(0));
        // assertThat(theSnapshot.getTimestamp(), is(notNullValue()));
    }

    @Test
    public void creates_snapshot_with_default_title() {
        Snapshot theSnapshot = snapshots.createSnapshot(null);
        // assertThat(theSnapshot.getTitle(), is(notNullValue()));
    }

    @Test
    public void adding_two_snapshots_with_same_title_yields_Exception() {
        thrown.expect(IllegalStateException.class);
        snapshots.createSnapshot("same");
        snapshots.createSnapshot("same");
    }

    @Test
    public void snapshot_has_reference_to_bundles_if_provided_by_osgiService() {
        List<BundleSnapshot> bundleDescriptors = Arrays
                .asList(new BundleSnapshot(TestUtils.mockBundle(0L, "symbolicName", "0.1.0")));
        Mockito.when(osgiService.getBundleSnapshots()).thenReturn(bundleDescriptors);
        Snapshot theSnapshot = snapshots.createSnapshot("first");
        assertThat(theSnapshot.getBundles().size(), is(1));
    }

    @Test
    public void creates_bundle_diff_from_two_snapshots() {
        Bundle bundleBefore = TestUtils.mockBundle(0L, "symbolicName", "0.1.0");
        List<BundleSnapshot> bundleDescriptors = Arrays.asList(new BundleSnapshot(bundleBefore));
        Mockito.when(osgiService.getBundleSnapshots()).thenReturn(bundleDescriptors);
        snapshots.createSnapshot("first");

        Bundle bundleAfter = TestUtils.mockBundle(0L, "symbolicName", "0.1.1");
        bundleDescriptors = Arrays.asList(new BundleSnapshot(bundleAfter));
        Mockito.when(osgiService.getBundleSnapshots()).thenReturn(bundleDescriptors);
        snapshots.createSnapshot("second");

        List<ValueChange> changes = snapshots.compareBundles("first", "second");

        assertThat(changes.size(), is(1));
        assertThat(changes.get(0).getPropertyName(), is("version"));
        assertThat(changes.get(0).getLeft(), is("0.1.0"));
        assertThat(changes.get(0).getRight(), is("0.1.1"));

    }
}
