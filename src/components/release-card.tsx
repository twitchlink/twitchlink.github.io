"use client";

import Link from "next/link";
import { useCallback, useMemo } from "react";
import { Copy, Code, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/use-language";
import { type ReleaseNote } from "@/types/types";
import { DownloadButton } from "@/components/download-button";
import { useToast } from "@/hooks/use-toast";

interface ReleaseCardProps {
  releaseNote: ReleaseNote;
  isLatest?: boolean;
  showActionButtons?: boolean;
}

export function ReleaseCard({ releaseNote, isLatest = false, showActionButtons = true }: ReleaseCardProps) {
  const { language, T } = useLanguage();
  const { toast } = useToast();

  const releaseNoteUrl = useMemo(() => `${process.env.NEXT_PUBLIC_GITHUB_RELEASE_TAG_URL}/${releaseNote.version}`, [releaseNote]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(releaseNoteUrl);
    toast({
      title: T({
        en: "Copied to clipboard",
        ko: "클립보드에 복사되었습니다",
      }),
      description: T({
        en: "The URL has been copied to your clipboard.",
        ko: "URL이 클립보드에 복사되었습니다.",
      }),
    });
  }, [releaseNoteUrl, toast, T]);

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-2xl font-bold">TwitchLink {releaseNote.version}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {releaseNote.date.toLocaleDateString(language === "en" ? "en-US" : "ko-KR", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {isLatest && (
              <Badge variant="default" className="w-fit">
                {T({
                  en: "Latest",
                  ko: "최신",
                })}
              </Badge>
            )}
            {releaseNote.isDeprecated && (
              <Badge variant="destructive" className="w-fit gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                {T({
                  en: "End of Support",
                  ko: "지원 종료",
                })}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            {T({
              en: "Release Note",
              ko: "업데이트 내역",
            })}
          </h3>
          <div className="space-y-2">
            <h4 className="font-medium">{releaseNote.content.title}</h4>
            <ul className="list-disc space-y-2">
              {releaseNote.content.items.map((item, index) => {
                if (typeof item === "string") {
                  return (
                    <li key={index} className="ml-5 text-muted-foreground">
                      {item}
                    </li>
                  );
                }
                if (item.type === "section") {
                  return (
                    <div key={index} className="pt-5 text-black">
                      {item.text}
                    </div>
                  );
                } else if (item.type === "sub-item") {
                  return (
                    <li key={index} className={`ml-5 list-none text-sm text-muted-foreground ${item.important ? "font-bold text-primary" : ""}`}>
                      - {typeof item === "string" ? item : item.text}
                    </li>
                  );
                } else if (item.type === "information") {
                  return (
                    <li key={index} className={`ml-5 list-none text-sm text-muted-foreground ${item.important ? "font-bold text-primary" : ""}`}>
                      * {item.text}
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className={`ml-5 text-muted-foreground ${item.important ? "font-bold text-primary" : ""}`}>
                      {item.text}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>

        {showActionButtons && (
          <>
            <div className="relative">
              <div className="overflow-x-auto rounded-md bg-muted/50 p-4">
                <code className="text-sm">
                  <Link href={releaseNoteUrl} target="_blank" className="hover:text-primary hover:underline">
                    {releaseNoteUrl}
                  </Link>
                </code>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={copyToClipboard}
                      className="absolute right-4 top-1/2 ml-2 h-8 w-8 -translate-y-1/2 shadow-sm"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {T({
                        en: "Copy to clipboard",
                        ko: "클립보드에 복사",
                      })}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9" onClick={copyToClipboard}>
                      <Copy className="mr-2 h-4 w-4" />
                      {T({
                        en: "Copy URL",
                        ko: "URL 복사",
                      })}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {T({
                        en: "Copy to clipboard",
                        ko: "클립보드에 복사",
                      })}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Link href={releaseNoteUrl} target="_blank">
                <Button variant="outline" size="sm" className="h-9">
                  <Code className="mr-2 h-4 w-4" />
                  {T({
                    en: "Source Code",
                    ko: "소스 코드",
                  })}
                </Button>
              </Link>

              <DownloadButton size="sm" binaries={releaseNote.binaries} version={releaseNote.version} />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
