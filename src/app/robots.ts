import { MetadataRoute } from "next";

export const dynamic = "force-static"; // Static generation for GitHub Pages

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
