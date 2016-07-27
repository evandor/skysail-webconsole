package io.skysail.webconsole.it;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.osgi.framework.BundleContext;
import org.osgi.framework.FrameworkUtil;

//@RunWith(MockitoJUnitRunner.class)
public class BackendBundlesTest {

    private final BundleContext context = FrameworkUtil.getBundle(BackendBundlesTest.class).getBundleContext();
    private Browser browser;

    @Before
    public void before() {
        browser = new Browser();
    }

    @Test
    public void webconsole_bundle_is_running() {
        assertThat(context.getBundle(1).getSymbolicName(), is("webconsole"));
        assertThat(context.getBundle(1).getState(), is(32));
    }

    @Test
    @Ignore
    public void testName() throws Exception {
        String bundlespage = browser.getBundles();
        System.out.println(bundlespage);
    }
}