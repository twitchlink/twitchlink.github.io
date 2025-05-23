"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { ExternalLink } from "lucide-react";

export function SiteFooter() {
  const { T } = useLanguage();

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_DEVELOPER_NAME}.
        </p>
        <div className="flex flex-col items-center gap-1 md:items-end">
          <p className="text-xs text-muted-foreground">
            {T({
              en: `${process.env.NEXT_PUBLIC_APP_NAME} is not owned or operated by Twitch`,
              ko: `${process.env.NEXT_PUBLIC_APP_NAME}은(는) Twitch가 소유하거나 운영하지 않습니다`,
            })}
          </p>
          <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || ""} target="_blank" className="text-sm text-muted-foreground hover:text-foreground">
            <div className="flex items-center gap-1">
              {T({
                en: "GitHub",
                ko: "GitHub",
              })}
              <ExternalLink className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
