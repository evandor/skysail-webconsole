package io.skysail.webconsole.osgi.entities.bundles.test;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Dictionary;
import java.util.Hashtable;

import org.junit.Before;
import org.junit.Test;
import org.osgi.framework.Bundle;
import org.osgi.framework.Constants;
import org.osgi.framework.ServiceReference;
import org.osgi.framework.startlevel.BundleStartLevel;

import io.skysail.webconsole.osgi.entities.bundles.BundleDetails;

public class BundleDetailsTest extends BundleDescriptorTest {

    private Dictionary<String, String> theHeaders;
    protected Bundle bundle;

    @Override
    @Before
    public void setUp() {
        super.setUp();
        bundle = mock(Bundle.class);
        theHeaders = new Hashtable<>();
        when(bundle.getHeaders(null)).thenReturn(theHeaders);
        when(bundle.getRegisteredServices()).thenReturn(new ServiceReference[0]);
        when(bundle.getServicesInUse()).thenReturn(new ServiceReference[0]);
        BundleStartLevel bsl = mock(BundleStartLevel.class);
        when(bsl.getStartLevel()).thenReturn(1);
        when(bundle.adapt(BundleStartLevel.class)).thenReturn(bsl);
    }

    @Test
    public void package_is_parsed() {
        theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail");
        BundleDetails bundleDetails = new BundleDetails(bundle,context);
        assertTrue(bundleDetails.getExportPackage().size() == 1);
        assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
    }

    @Test
    public void packages_separated_by_semicolon_are_parsed() {
        theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail;io.skysail.sub");
        BundleDetails bundleDetails = new BundleDetails(bundle,context);
        assertTrue(bundleDetails.getExportPackage().size() == 2);
        assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
        assertTrue(bundleDetails.getExportPackage().get(1).getPkgName().equals("io.skysail.sub"));
    }

    @Test
    public void packages_separated_by_semicolon_with_version_are_parsed() {
        theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail;io.skysail.sub;version=1.3");
        BundleDetails bundleDetails = new BundleDetails(bundle,context);
        assertTrue(bundleDetails.getExportPackage().size() == 2);
        assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
        assertTrue(bundleDetails.getExportPackage().get(1).getPkgName().equals("io.skysail.sub"));
    }

    @Test
    public void package_with_version_is_parsed() {
        theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail;version=1.3");
        BundleDetails bundleDetails = new BundleDetails(bundle,context);
        assertTrue(bundleDetails.getExportPackage().size() == 1);
        assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
        // assertTrue(bundleDetails.getExportPackage().get(0).getVersion().equals("1.3"));
    }

    @Test
    public void package_with_usesDirective_is_parsed() {
        theHeaders.put(Constants.EXPORT_PACKAGE, "io.com;uses:=\"a.b,c.d\"");
        BundleDetails bundleDetails = new BundleDetails(bundle,context);
        assertTrue(bundleDetails.getExportPackage().size() == 1);
        assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.com"));
        assertTrue(bundleDetails.getExportPackage().get(0).getUses().equals("\"a.b,c.d\""));
    }

    @Test
    public void multiple_packageExpressions_with_versions_are_parsed_and_sorted() {
        theHeaders.put(Constants.EXPORT_PACKAGE, "io.com;version=1.3,com.io;version=\"3.2\"");
        BundleDetails bundleDetails = new BundleDetails(bundle,context);
        assertTrue(bundleDetails.getExportPackage().size() == 2);
        assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("com.io"));
        assertTrue(bundleDetails.getExportPackage().get(0).getVersion().equals("\"3.2\""));
        assertTrue(bundleDetails.getExportPackage().get(1).getPkgName().equals("io.com"));
        assertTrue(bundleDetails.getExportPackage().get(1).getVersion().equals("1.3"));
    }

    @Test
    public void package_with_mandatoryDirective_is_parsed() {
        theHeaders.put(Constants.EXPORT_PACKAGE, "io.com;mandatory:=\"this,that\"");
        BundleDetails bundleDetails = new BundleDetails(bundle,context);
        assertTrue(bundleDetails.getExportPackage().size() == 1);
        assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.com"));
        assertTrue(bundleDetails.getExportPackage().get(0).getMandatory().equals("\"this,that\""));
    }

}
