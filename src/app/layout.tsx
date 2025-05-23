import { Suspense, type ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { LanguageProvider } from "@/hooks/use-language";
import { Toaster } from "@/components/ui/toaster";
import { Loader2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#9147FF",
};

export const metadata: Metadata = {
  title: "TwitchLink",
  description:
    "Twitch Stream/Video/Clip Downloader. Download Twitch.tv Streams & Videos & Clips to your device. Download, Record, Crop Twitch Streams, Videos, Clips. Download Sub-Only VODs. Unmute VODs. Super Fast Download. Free & Open Source.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ""),
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "TwitchLink",
    description:
      "Twitch Stream/Video/Clip Downloader. Download Twitch.tv Streams & Videos & Clips to your device. Download, Record, Crop Twitch Streams, Videos, Clips. Download Sub-Only VODs. Unmute VODs. Super Fast Download. Free & Open Source.",
    images: "/favicon.ico",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/`,
    languages: {
      en: `${process.env.NEXT_PUBLIC_URL}/`,
      ko: `${process.env.NEXT_PUBLIC_URL}/?lang=ko`,
      "x-default": `${process.env.NEXT_PUBLIC_URL}/`,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense
          fallback={
            <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          }
        >
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">{children}</div>
          </LanguageProvider>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
