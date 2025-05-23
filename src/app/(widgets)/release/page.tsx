"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useReleaseNotes } from "@/hooks/use-release-notes";
import { useLanguage } from "@/hooks/use-language";
import { useHref } from "@/hooks/use-href";
import { ReleaseCard } from "@/components/release-card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const searchParams = useSearchParams();
  const { T } = useLanguage();
  const { createRouteHref } = useHref();
  const releaseVersion = searchParams.get("version");
  const { releaseNotes, getLatestVersion } = useReleaseNotes();

  const findReleaseNote = useCallback(
    (version: string) => {
      return releaseNotes.find((note) => note.version === version);
    },
    [releaseNotes]
  );

  if (releaseVersion) {
    const releaseNote = findReleaseNote(releaseVersion);

    if (releaseNote) {
      return (
        <div className="flex-1 bg-gradient-to-b from-purple-50/90 via-purple-50/50 to-background">
          <div className="container px-4 py-12 md:px-6">
            <ReleaseCard releaseNote={releaseNote} isLatest={releaseNote.version === getLatestVersion()} showActionButtons={false} />
          </div>
        </div>
      );
    }

    return (
      <div className="container px-4 py-12 md:px-6">
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>
            {T({
              en: "Release note not found",
              ko: "업데이트 내역을 찾을 수 없습니다",
            })}
          </AlertTitle>
          <AlertDescription>
            {T({
              en: `The release note for the requested version (${releaseVersion}) does not exist.`,
              ko: `요청하신 버전(${releaseVersion})의 업데이트 내역이 존재하지 않습니다.`,
            })}
          </AlertDescription>
        </Alert>
        <div className="flex justify-center">
          <Button asChild variant="destructive">
            <Link href={createRouteHref("/releases")}>
              {T({
                en: "View all release notes",
                ko: "모든 업데이트 내역 보기",
              })}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <Alert className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>
          {T({
            en: "Version information is required",
            ko: "버전 정보가 필요합니다",
          })}
        </AlertTitle>
        <AlertDescription>
          {T({
            en: "To view the release note, you need version information.",
            ko: "업데이트 내역을 보려면 버전 정보가 필요합니다.",
          })}
        </AlertDescription>
      </Alert>
      <div className="flex justify-center">
        <Button asChild variant="outline">
          <Link href={createRouteHref("/releases")}>
            {T({
              en: "View all release notes",
              ko: "모든 업데이트 내역 보기",
            })}
          </Link>
        </Button>
      </div>
    </div>
  );
}
