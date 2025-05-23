"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  const { T } = useLanguage();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
        <h2 className="text-2xl font-semibold tracking-tight">
          {T({
            en: "Page Not Found",
            ko: "페이지를 찾을 수 없습니다",
          })}
        </h2>
        <p className="text-muted-foreground">
          {T({
            en: "The page you are looking for does not exist or has been moved.",
            ko: "찾으시는 페이지가 존재하지 않거나 이동되었습니다.",
          })}
        </p>
      </div>
      <Button asChild>
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          {T({
            en: "Back to Home",
            ko: "홈으로 돌아가기",
          })}
        </Link>
      </Button>
    </div>
  );
}
