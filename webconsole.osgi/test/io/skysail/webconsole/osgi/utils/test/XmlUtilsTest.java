package io.skysail.webconsole.osgi.utils.test;

import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.util.tracker.ServiceTracker;

import io.skysail.webconsole.osgi.utils.XmlUtils;

public class XmlUtilsTest {

	private String input = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
			+ "<scr:component xmlns:scr=\"http://www.osgi.org/xmlns/scr/v1.1.0\" name=\"io.skysail.api.features.FeatureContext\" immediate=\"true\">\n"
			+ "<implementation class=\"io.skysail.api.features.FeatureContext\"/>\n"
	  + "<reference name=\"FeaturesStateRepository\" cardinality=\"0..n\" policy=\"dynamic\" interface=\"io.skysail.api.features.FeatureStateRepository\" bind=\"addFeaturesStateRepository\" unbind=\"removeFeaturesStateRepository\"/>\n"
	+ "</scr:component>\n";

	@Test
	public void testName() throws Exception {
	    ServiceTracker tracker = Mockito.mock(ServiceTracker.class);
		XmlUtils.parse(input, tracker);
	}

}
