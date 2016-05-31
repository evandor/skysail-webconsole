package io.skysail.webconsole.entities.test;

import static org.junit.Assert.*;

import java.util.Dictionary;
import java.util.Hashtable;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.framework.Bundle;
import org.osgi.framework.Constants;

import io.skysail.webconsole.entities.BundleDetails;

public class BundleDetailsTest {

	private Dictionary<String, String> theHeaders;
	private Bundle bundle;

	@Before
	public void setUp() {
		bundle = Mockito.mock(Bundle.class);
		theHeaders = new Hashtable<>();
		Mockito.when(bundle.getHeaders(null)).thenReturn(theHeaders);
	}
	
	@Test
	public void testName() {
		theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail");
		BundleDetails bundleDetails = new BundleDetails(bundle);
		assertTrue(bundleDetails.getExportPackage().size() == 1);
		assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
	}

	@Test
	public void packages_separated_by_semicolon_are_parsed() {
		theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail;io.skysail.sub");
		BundleDetails bundleDetails = new BundleDetails(bundle);
		assertTrue(bundleDetails.getExportPackage().size() == 2);
		assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
		assertTrue(bundleDetails.getExportPackage().get(1).getPkgName().equals("io.skysail.sub"));
	}

	@Test
	public void packages_separated_by_semicolon_with_version_are_parsed() {
		theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail;io.skysail.sub;version=1.3");
		BundleDetails bundleDetails = new BundleDetails(bundle);
		assertTrue(bundleDetails.getExportPackage().size() == 2);
		assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
		assertTrue(bundleDetails.getExportPackage().get(1).getPkgName().equals("io.skysail.sub"));
	}

	@Test
	public void package_with_version_is_parsed() {
		theHeaders.put(Constants.EXPORT_PACKAGE, "io.skysail;version=1.3");
		BundleDetails bundleDetails = new BundleDetails(bundle);
		assertTrue(bundleDetails.getExportPackage().size() == 1);
		assertTrue(bundleDetails.getExportPackage().get(0).getPkgName().equals("io.skysail"));
		assertTrue(bundleDetails.getExportPackage().get(0).getVersion().equals("1.3"));
	}

	// 	"org.osgi.service.log;uses:=\"org.osgi.framework\";version=\"1.3\",io.skysail;version=0.4.0"
}
