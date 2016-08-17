package io.skysail.webconsole.test;

import org.junit.Test;
import org.mockito.Mockito;
import org.osgi.framework.BundleContext;

import io.skysail.webconsole.AgentActivator;

public class AgentActivatorTest {

    @Test
    public void testName() throws Exception {
        AgentActivator activator = new AgentActivator();
        BundleContext context = Mockito.mock(BundleContext.class);
        activator.start(context);
    }
}
