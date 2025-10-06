import { MetadataRoute } from "next";
import type { RouteList } from "@/types";

export const dynamic = "force-static"; // Static generation for GitHub Pages

const routes: RouteList[] = ["/", "/releases", "/docs", "/support", "/donate"];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    sitemap.push({
      url: `${process.env.NEXT_PUBLIC_URL}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: route === "/" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_URL}${route === "/" ? "" : route}`,
          ko: `${process.env.NEXT_PUBLIC_URL}${route === "/" ? "" : route}?lang=ko`,
        },
      },
    });
  }

  return sitemap;
}
