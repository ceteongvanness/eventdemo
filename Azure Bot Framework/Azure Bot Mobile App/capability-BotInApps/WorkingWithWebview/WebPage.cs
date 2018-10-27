namespace WorkingWithWebview
{
    using Xamarin.Forms;

    public class WebPage : ContentPage
    {
        public WebPage()
        {
            var browser = new WebView();

            browser.Source = "https://webchat.botframework.com/embed/etdemobot?s=evr56s4zHLE.cwA.sY0.CSL_fVJpTrhMr8JeFqOXMsfNi8sFNSW3_Pcud8_kuYw";
            //browser.Source = "https://webchat.botframework.com/embed/<INCLUDE YOUR BOT WEBCHAT URL>";

            this.Content = browser;
        }
    }
}