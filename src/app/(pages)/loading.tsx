"use client";

import { Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Loading() {
  const { T } = useLanguage();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">
        {T({
          en: "Loading...",
          ko: "불러오는 중...",
        })}
      </p>
    </div>
  );
}
