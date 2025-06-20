import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      {/* Google Analytics */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
      {/* End Of Google Analytics */}
      {/* Google AdSense */}
      <script
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || ""}
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      {/* End Of Google AdSense */}
    </>
  );
}
