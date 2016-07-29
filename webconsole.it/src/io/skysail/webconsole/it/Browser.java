package io.skysail.webconsole.it;

public class Browser {

    private String baseUrl;
    //private WebClient webClient;

    public Browser() {
        baseUrl = "http://localhost:2002/";
//        webClient = new WebClient(BrowserVersion.CHROME);
//        webClient.setAjaxController(new NicelyResynchronizingAjaxController());
//        webClient.setCssErrorHandler(new SilentCssErrorHandler());
//
//        webClient.getOptions().setCssEnabled(true);
//        webClient.getOptions().setRedirectEnabled(false);
//        webClient.getOptions().setAppletEnabled(false);
//        webClient.getOptions().setJavaScriptEnabled(true);
//        webClient.getOptions().setPopupBlockerEnabled(true);
//        webClient.getOptions().setTimeout(10000);
//
//        webClient.getOptions().setThrowExceptionOnFailingStatusCode(true);
//        webClient.getOptions().setThrowExceptionOnScriptError(true);
//        webClient.getOptions().setPrintContentOnFailingStatusCode(true);

    }

    public String getBundles() throws Exception {
        //HtmlPage page = webClient.getPage(baseUrl);
        return "";//page.asXml();
    }




}
