"use client";

import { useLanguage } from "@/hooks/use-language";
import { ReleaseCard } from "@/components/release-card";
import { useReleaseNotes } from "@/hooks/use-release-notes";

export default function Page() {
  const { T } = useLanguage();
  const { releaseNotes, getLatestVersion } = useReleaseNotes();
  return (
    <div className="flex-1 bg-gradient-to-b from-purple-50/90 via-purple-50/50 to-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tighter">
              {T({
                en: "Releases",
                ko: "배포 목록",
              })}
            </h1>
            <p className="text-muted-foreground">
              {T({
                en: "Download the latest version of TwitchLink or check out previous releases.",
                ko: "TwitchLink의 최신 버전을 다운로드하거나 이전 배포를 확인하세요.",
              })}
            </p>
          </div>

          {releaseNotes.map((releaseNote) => (
            <ReleaseCard key={releaseNote.version} releaseNote={releaseNote} isLatest={releaseNote.version === getLatestVersion()} />
          ))}
        </div>
      </div>
    </div>
  );
}
