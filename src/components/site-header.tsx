"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MobileNav } from "@/components/mobile-nav";
import { useLanguage } from "@/hooks/use-language";
import { useHref } from "@/hooks/use-href";
import Logo from "@/assets/icons/logo.svg";
import type { RouteList } from "@/types";
export function SiteHeader() {
  const { language, setLanguage, getSupportedLanguages, getLanguageDisplayName, T } = useLanguage();
  const pathname = usePathname();
  const { createRouteHref } = useHref();

  const navItems: { href: RouteList; label: string }[] = [
    {
      href: "/",
      label: T({
        en: "TwitchLink",
        ko: "TwitchLink",
      }),
    },
    {
      href: "/releases",
      label: T({
        en: "Releases",
        ko: "배포 목록",
      }),
    },
    {
      href: "/docs",
      label: T({
        en: "Docs",
        ko: "도움말",
      }),
    },
    {
      href: "/support",
      label: T({
        en: "Support",
        ko: "문제 해결",
      }),
    },
    {
      href: "/donate",
      label: T({
        en: "Donate",
        ko: "후원하기",
      }),
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <Link href={createRouteHref("/")} className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <span className="text-xl font-bold">TwitchLink</span>
            </Link>
          </div>
          <MobileNav />
        </div>
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={pathname === item.href ? "" : createRouteHref(item.href)}
              className={`font-medium transition-colors hover:text-primary ${pathname === item.href ? "" : "text-muted-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {getSupportedLanguages().map((lang) => (
                <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)} className="flex items-center gap-2">
                  <div className="w-4">{language === lang && <Check className="h-4 w-4" />}</div>
                  <span>{getLanguageDisplayName(lang)}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
