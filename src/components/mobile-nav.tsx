"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/hooks/use-language";
import { useHref } from "@/hooks/use-href";
import { RouteList } from "@/types/types";
import Logo from "@/assets/icons/logo.svg";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const { T } = useLanguage();
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href={createRouteHref("/")} className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Logo className="h-6 w-6" />
            <span className="text-xl font-bold">TwitchLink</span>
          </Link>
        </div>
        <div className="mt-8 px-7">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={pathname === item.href ? "" : createRouteHref(item.href)}
                className={`font-medium transition-colors hover:text-primary ${pathname === item.href ? "" : "text-muted-foreground"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
