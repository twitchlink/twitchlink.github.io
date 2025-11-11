import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || ""}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      {/* End Of Google AdSense */}
    </>
  );
}
