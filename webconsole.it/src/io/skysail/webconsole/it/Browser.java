package io.skysail.webconsole.it;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

public class Browser {

    private String baseUrl;
    private WebClient webClient;

    public Browser() {
        baseUrl = "http://localhost:2002/";
        webClient = new WebClient(BrowserVersion.CHROME);
    }

    public String getBundles() throws Exception {
        HtmlPage page = webClient.getPage(baseUrl);
        return page.asXml();
    }




}
