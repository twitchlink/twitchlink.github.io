"use client";

import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { DownloadButton } from "@/components/download-button";
import Logo from "@/assets/icons/logo.svg";
import { FeatureCard } from "@/components/feature-card";

export default function Page() {
  const { T } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-b from-purple-50/90 via-purple-50/50 to-background py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.16)]">
              <Logo className="h-14 w-14" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {T({
                en: "TwitchLink",
                ko: "TwitchLink",
              })}{" "}
              <span className="text-purple-600">3.4.0</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {T({
                en: "Twitch Stream/Video/Clip Downloader",
                ko: "Twitch 생방송/비디오/클립 다운로더",
              })}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <DownloadButton size="lg" />

              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || ""} target="_blank">
                <Button variant="outline" size="lg">
                  <SiGithub className="mr-2 h-5 w-5" />
                  {T({
                    en: "Source Code",
                    ko: "소스 코드",
                  })}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-12 md:px-6 md:py-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tighter sm:text-3xl">
          {T({
            en: "Features",
            ko: "기능",
          })}
        </h2>

        {/* Downloads Section */}
        <div className="mb-12">
          <h3 className="mb-4 border-b pb-2 text-xl font-semibold">
            {T({
              en: "Downloads",
              ko: "다운로드",
            })}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title={T({
                en: "Stream Downloads",
                ko: "생방송 다운로드",
              })}
              description={T({
                en: "Download live streams from Twitch",
                ko: "Twitch 생방송 다운로드",
              })}
            />
            <FeatureCard
              title={T({
                en: "Video Downloads",
                ko: "비디오 다운로드",
              })}
              description={T({
                en: "Save VODs and past broadcasts",
                ko: "VOD 및 지난 방송 저장",
              })}
            />
            <FeatureCard
              title={T({
                en: "Clip Downloads",
                ko: "클립 다운로드",
              })}
              description={T({
                en: "Download short clips from any channel",
                ko: "모든 채널에서 짧은 클립 다운로드",
              })}
            />
            <FeatureCard
              title={T({
                en: "Subscriber-Only Video Downloads",
                ko: "구독자 전용 비디오 다운로드",
              })}
              description={T({
                en: "Download subscriber-exclusive content",
                ko: "구독자 전용 콘텐츠 다운로드",
              })}
            />
            <FeatureCard
              title={T({
                en: "Scheduled Downloads",
                ko: "예약 다운로드",
              })}
              description={T({
                en: "Download live streams when your favorite channels go live",
                ko: "즐겨찾는 채널이 생방송을 시작하면 생방송 다운로드",
              })}
            />
            <FeatureCard
              title={T({
                en: "Thumbnail Downloads",
                ko: "썸네일 다운로드",
              })}
              description={T({
                en: "Save video thumbnails",
                ko: "비디오 썸네일 저장",
              })}
            />
            <FeatureCard
              title={T({
                en: "Audio-Only Downloads",
                ko: "오디오 전용 다운로드",
              })}
              description={T({
                en: "Extract just the audio from streams and videos",
                ko: "생방송 및 비디오에서 오디오만 추출",
              })}
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-12">
          <h3 className="mb-4 border-b pb-2 text-xl font-semibold">
            {T({
              en: "Tools",
              ko: "도구",
            })}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title={T({
                en: "Video Unmuting",
                ko: "비디오 음소거 해제",
              })}
              description={T({
                en: "Restore audio in muted VOD sections",
                ko: "음소거된 VOD 섹션의 오디오 복원",
              })}
            />
            <FeatureCard
              title={T({
                en: "Video Cropping",
                ko: "비디오 자르기",
              })}
              description={T({
                en: "Trim and crop videos to your needs",
                ko: "필요에 맞게 비디오 트리밍 및 자르기",
              })}
            />
            <FeatureCard
              title={T({
                en: "Channel Bookmarks",
                ko: "채널 북마크",
              })}
              description={T({
                en: "Save your favorite channels for quick access",
                ko: "빠른 접근을 위해 즐겨찾는 채널 저장",
              })}
            />
            <FeatureCard
              title={T({
                en: "Customizable Filename Templates",
                ko: "사용자 정의 파일명 템플릿",
              })}
              description={T({
                en: "Define your own naming conventions for downloads",
                ko: "다운로드를 위한 자신만의 이름 지정 규칙 정의",
              })}
            />
          </div>
        </div>

        {/* Others Section */}
        <div>
          <h3 className="mb-4 border-b pb-2 text-xl font-semibold">
            {T({
              en: "Others",
              ko: "기타",
            })}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title={T({
                en: "User-Friendly UI",
                ko: "사용자 친화적 UI",
              })}
              description={T({
                en: "Clean and intuitive interface",
                ko: "깔끔하고 직관적인 인터페이스",
              })}
            />
            <FeatureCard
              title={T({
                en: "Language and Time Zone Settings",
                ko: "언어 및 시간대 설정",
              })}
              description={T({
                en: "Customize to your region and preferences",
                ko: "지역 및 선호도에 맞게 사용자 정의",
              })}
            />
            <FeatureCard
              title={T({
                en: "Free and Open Source",
                ko: "무료 및 오픈 소스",
              })}
              description={T({
                en: "No cost, with full access to the source code",
                ko: "비용 없이 소스 코드에 완전히 접근 가능",
              })}
            />
          </div>
        </div>
      </section>
    </>
  );
}
