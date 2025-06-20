"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Monitor, AlertTriangle, Info, ExternalLink, ArrowUp } from "lucide-react";
import { SiApple, SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useLanguage } from "@/hooks/use-language";
import { useReleaseNotes } from "@/hooks/use-release-notes";
import { DownloadButton } from "@/components/download-button";
import Logo from "@/assets/icons/logo.svg";
import { usePlatform } from "@/hooks/use-platform";
import { useHref } from "@/hooks/use-href";
import { type PlatformType } from "@/types/types";

import Image from "next/image";

import ManualWindowsInstallationMicrosoftDefenderImage from "@/assets/img/pages/docs/manual_windows/installation/microsoftDefender.png";
import ManualWindowsInstallationMicrosoftDefenderMoreInfoImage from "@/assets/img/pages/docs/manual_windows/installation/microsoftDefenderMoreInfo.png";
import ManualWindowsInstallationInstallationImage from "@/assets/img/pages/docs/manual_windows/installation/installation.png";

import ManualWindowsLiveDownloadMainMenuImage from "@/assets/img/pages/docs/manual_windows/liveDownload/mainMenu.png";
import ManualWindowsLiveDownloadChannelImage from "@/assets/img/pages/docs/manual_windows/liveDownload/channel.png";

import ManualWindowsVideoDownloadMainMenuImage from "@/assets/img/pages/docs/manual_windows/videoDownload/mainMenu.png";
import ManualWindowsVideoDownloadChannelImage from "@/assets/img/pages/docs/manual_windows/videoDownload/channel.png";
import ManualWindowsVideoDownloadVideoListImage from "@/assets/img/pages/docs/manual_windows/videoDownload/videoList.png";

import ManualWindowsClipDownloadMainMenuImage from "@/assets/img/pages/docs/manual_windows/clipDownload/mainMenu.png";
import ManualWindowsClipDownloadChannelImage from "@/assets/img/pages/docs/manual_windows/clipDownload/channel.png";
import ManualWindowsClipDownloadClipListImage from "@/assets/img/pages/docs/manual_windows/clipDownload/clipList.png";

import ManualMacOSInstallationNotOpenedImage from "@/assets/img/pages/docs/manual_macos/installation/notOpened.png";
import ManualMacOSInstallationSystemSettingsImage from "@/assets/img/pages/docs/manual_macos/installation/systemSettings.png";
import ManualMacOSInstallationOpenAnywayImage from "@/assets/img/pages/docs/manual_macos/installation/openAnyway.png";

import ManualMacOSLiveDownloadMainMenuImage from "@/assets/img/pages/docs/manual_macos/liveDownload/mainMenu.png";
import ManualMacOSLiveDownloadChannelImage from "@/assets/img/pages/docs/manual_macos/liveDownload/channel.png";

import ManualMacOSVideoDownloadMainMenuImage from "@/assets/img/pages/docs/manual_macos/videoDownload/mainMenu.png";
import ManualMacOSVideoDownloadChannelImage from "@/assets/img/pages/docs/manual_macos/videoDownload/channel.png";
import ManualMacOSVideoDownloadVideoListImage from "@/assets/img/pages/docs/manual_macos/videoDownload/videoList.png";

import ManualMacOSClipDownloadMainMenuImage from "@/assets/img/pages/docs/manual_macos/clipDownload/mainMenu.png";
import ManualMacOSClipDownloadChannelImage from "@/assets/img/pages/docs/manual_macos/clipDownload/channel.png";
import ManualMacOSClipDownloadClipListImage from "@/assets/img/pages/docs/manual_macos/clipDownload/clipList.png";

export default function Page() {
  const [textOnly, setTextOnly] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { T } = useLanguage();
  const { getLatestVersion } = useReleaseNotes();
  const { currentPlatform } = usePlatform();
  const searchParams = useSearchParams();
  const { createRouteHref } = useHref();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<PlatformType>(() => {
    const requestedPlatform = searchParams.get("platform") as PlatformType;
    if (requestedPlatform === "windows" || requestedPlatform === "macos") {
      return requestedPlatform;
    }
    return currentPlatform || "windows";
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("platform", activeTab);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [activeTab, router, searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex-1 bg-gradient-to-b from-purple-50/90 via-purple-50/50 to-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tighter">
              {T({
                en: "Documentation",
                ko: "도움말",
              })}
            </h1>
            <p className="text-muted-foreground">
              {T({
                en: "Learn how to install and use TwitchLink on your preferred platform.",
                ko: "선호하는 플랫폼에서 TwitchLink를 설치하고 사용하는 방법을 알아보세요.",
              })}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.16)]">
              <Logo className="h-9 w-9" />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter">
              TwitchLink <span className="text-purple-600">{getLatestVersion()}</span>
            </h2>
            <p className="text-muted-foreground">
              {T({
                en: "Getting Started",
                ko: "시작하기",
              })}
            </p>
          </div>

          <div className="flex items-center justify-end gap-2">
            <span className="text-sm text-muted-foreground">
              {T({
                en: "Text Only",
                ko: "텍스트만 표시",
              })}
            </span>
            <Switch checked={textOnly} onCheckedChange={setTextOnly} />
          </div>

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PlatformType)} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="windows" className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                {T({
                  en: "Help for Windows",
                  ko: "Windows용 도움말",
                })}
              </TabsTrigger>
              <TabsTrigger value="macos" className="flex items-center gap-2">
                <SiApple className="h-4 w-4" />
                {T({
                  en: "Help for macOS",
                  ko: "macOS용 도움말",
                })}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="windows" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Install TwitchLink for Windows",
                        ko: "Windows용 TwitchLink 설치",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#TwitchLink Installation",
                        ko: "#TwitchLink 설치",
                      })}
                    </Badge>
                    {T({
                      en: "How to install TwitchLink.",
                      ko: "TwitchLink 설치 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1. TwitchLink Download",
                        ko: "1. TwitchLink 다운로드",
                      })}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {T({
                        en: "Download TwitchLink.",
                        ko: "TwitchLink를 다운로드하세요.",
                      })}
                    </p>
                    <DownloadButton binaries={["windows"]} showAppName fullWidth target="_blank" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. TwitchLink Installation",
                        ko: "2. TwitchLink 설치",
                      })}
                    </h3>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {T({
                          en: "Run your TwitchLink Installer.",
                          ko: "TwitchLink 설치 프로그램을 실행하세요.",
                        })}
                      </p>
                      <p className="text-muted-foreground">
                        {T({
                          en: "Click 'More info' and 'Run anyway' if Microsoft Defender appears.",
                          ko: "Microsoft Defender가 나타나면 '추가 정보'와 '실행'을 클릭하세요.",
                        })}
                      </p>

                      {!textOnly && (
                        <>
                          <Image priority src={ManualWindowsInstallationMicrosoftDefenderImage} alt="Installation Microsoft Defender" />
                          <Image priority src={ManualWindowsInstallationMicrosoftDefenderMoreInfoImage} alt="Installation Microsoft Defender More Info" />
                        </>
                      )}
                    </div>
                  </div>
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Important",
                        ko: "중요",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "TwitchLink is safe to use, but since it's an open-source application that hasn't been registered with Microsoft, Windows may display a security warning.",
                        ko: "TwitchLink는 사용하기에 안전하지만, Microsoft에 등록되지 않은 오픈 소스 애플리케이션이기 때문에 Windows에서 보안 경고를 표시할 수 있습니다.",
                      })}
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "3. Complete Installation",
                        ko: "3. 설치 완료",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Follow the installation wizard to complete the setup process.",
                        ko: "설치 마법사를 따라 설정 과정을 완료하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsInstallationInstallationImage} alt="Installation Installation" />}
                  </div>

                  <Accordion type="multiple">
                    <AccordionItem value="faq-1">
                      <AccordionTrigger className="text-left">
                        {T({
                          en: "Why am I seeing security warnings?",
                          ko: "보안 경고가 표시되는 이유는 무엇인가요?",
                        })}
                      </AccordionTrigger>
                      <AccordionContent>
                        {T({
                          en: "Windows displays security warnings for applications that aren't signed by Microsoft or don't have a large user base. TwitchLink is safe to use, but as an open-source application, it may trigger these warnings.",
                          ko: "Windows는 Microsoft에서 서명하지 않았거나 대규모 사용자 기반이 없는 애플리케이션에 대해 보안 경고를 표시합니다. TwitchLink는 사용하기에 안전하지만, 오픈 소스 애플리케이션으로서 이러한 경고를 발생시킬 수 있습니다.",
                        })}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                      <AccordionTrigger className="text-left">
                        {T({
                          en: "Is TwitchLink safe to use?",
                          ko: "TwitchLink는 사용하기에 안전한가요?",
                        })}
                      </AccordionTrigger>
                      <AccordionContent>
                        {T({
                          en: "Yes, TwitchLink is safe to use. It's an open-source application, which means its code is publicly available for review. You can check the source code on GitHub to verify its safety.",
                          ko: "네, TwitchLink는 사용하기에 안전합니다. 오픈 소스 애플리케이션이므로 코드가 공개적으로 검토 가능합니다. GitHub에서 소스 코드를 확인하여 안전성을 검증할 수 있습니다.",
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Stream Download",
                        ko: "생방송 다운로드",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Twitch Live Stream",
                        ko: "#Twitch 생방송 다운로드",
                      })}
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Live Recording",
                        ko: "#실시간 녹화",
                      })}
                    </Badge>
                    {T({
                      en: "How to record and download Twitch Streams.",
                      ko: "Twitch 생방송 실시간 다운로드 및 녹화 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1. Channel Search",
                        ko: "1. 채널 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Search for channels by channel ID or channel link.",
                        ko: "채널 ID 또는 채널 링크로 채널을 검색하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsLiveDownloadMainMenuImage} alt="Live Download Main Menu" />}
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. Download",
                        ko: "2. 다운로드",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "If the channel is online, the Download button appears with the preview image.",
                        ko: "채널이 온라인 상태이면 미리보기 이미지와 함께 다운로드 버튼이 나타납니다.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsLiveDownloadChannelImage} alt="Live Download Channel" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Click the button to download.",
                        ko: "버튼을 눌러 다운로드를 진행합니다.",
                      })}
                    </p>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Note",
                        ko: "참고",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "Live streams are downloaded in real-time. Make sure you have a stable internet connection for the best experience.",
                        ko: "생방송은 실시간으로 다운로드됩니다. 최상의 경험을 위해 안정적인 인터넷 연결이 필요합니다.",
                      })}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Video Download",
                        ko: "비디오 다운로드",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Twitch Videos",
                        ko: "#Twitch 비디오 다운로드",
                      })}
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Sub-Only Videos",
                        ko: "#구독자 전용 다시보기 다운로드",
                      })}
                    </Badge>
                    {T({
                      en: "How to download Twitch Videos, including Subscriber-Only Videos.",
                      ko: "Twitch 다시보기 및 구독자 전용 다시보기 다운로드 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-A. Search Video in Channel",
                        ko: "1-A. 채널에서 비디오 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Search for the channels and click the Video/Clip tab.",
                        ko: "채널을 검색하고 비디오/클립 탭을 클릭하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsVideoDownloadChannelImage} alt="Video Download Channel" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Select the type of video you want to search through the filter on the top right.",
                        ko: "오른쪽 상단의 필터를 통해 검색하려는 비디오 유형을 선택하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsVideoDownloadVideoListImage} alt="Video Download Video List" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Find the video you want to download.",
                        ko: "비디오 목록이 표시되면 다운로드할 비디오를 찾으세요.",
                      })}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-B. Search Video by Video ID",
                        ko: "1-B. 비디오 ID로 비디오 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Or search for videos by video ID or video link.",
                        ko: "또는 비디오 ID나 비디오 링크로 비디오를 검색하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsVideoDownloadMainMenuImage} alt="Video Download Main Menu" />}
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. Download",
                        ko: "2. 다운로드",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "The download button appears with the preview image.",
                        ko: "미리보기 이미지와 함께 다운로드 버튼이 나타납니다.",
                      })}
                    </p>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Click the button to download.",
                        ko: "버튼을 눌러 다운로드를 진행합니다.",
                      })}
                    </p>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Note",
                        ko: "참고",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "Videos are downloaded in the highest available quality. The download speed depends on your internet connection and the video's length.",
                        ko: "비디오는 사용 가능한 최고 품질로 다운로드됩니다. 다운로드 속도는 인터넷 연결 상태와 비디오 길이에 따라 달라집니다.",
                      })}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Clip Download",
                        ko: "클립 다운로드",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Twitch Clips",
                        ko: "#Twitch 클립 다운로드",
                      })}
                    </Badge>
                    {T({
                      en: "How to download Twitch Clips.",
                      ko: "Twitch 클립 다운로드 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-A. Search Clip in Channel",
                        ko: "1-A. 채널에서 클립 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Search for the channels and click the Video/Clip tab.",
                        ko: "채널을 검색하고 비디오/클립 탭을 클릭하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsClipDownloadChannelImage} alt="Clip Download Channel" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Select 'Clips' from the filter on the top right.",
                        ko: "오른쪽 상단의 필터에서 '클립'을 선택하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsClipDownloadClipListImage} alt="Clip Download Clip List" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Find the clip you want to download.",
                        ko: "클립 목록이 표시되면 다운로드할 클립을 찾으세요.",
                      })}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-B. Search Clip by Clip ID",
                        ko: "1-B. 클립 ID로 클립 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Or search for clips by clip ID or clip link.",
                        ko: "또는 클립 ID나 클립 링크로 클립을 검색하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualWindowsClipDownloadMainMenuImage} alt="Clip Download Main Menu" />}
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. Download",
                        ko: "2. 다운로드",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "The download button appears with the preview image.",
                        ko: "미리보기 이미지와 함께 다운로드 버튼이 나타납니다.",
                      })}
                    </p>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Click the button to download.",
                        ko: "버튼을 눌러 다운로드를 진행합니다.",
                      })}
                    </p>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Note",
                        ko: "참고",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "Clips are downloaded in the highest available quality.",
                        ko: "클립은 사용 가능한 최고 품질로 다운로드됩니다.",
                      })}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="macos" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <SiApple className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Install TwitchLink for macOS",
                        ko: "macOS용 TwitchLink 설치",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#TwitchLink Installation",
                        ko: "#TwitchLink 설치",
                      })}
                    </Badge>
                    {T({
                      en: "How to install TwitchLink.",
                      ko: "TwitchLink 설치 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1. TwitchLink Download",
                        ko: "1. TwitchLink 다운로드",
                      })}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {T({
                        en: "Download TwitchLink.",
                        ko: "TwitchLink를 다운로드하세요.",
                      })}
                    </p>
                    <DownloadButton binaries={["macos"]} showAppName fullWidth target="_blank" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. TwitchLink Installation",
                        ko: "2. TwitchLink 설치",
                      })}
                    </h3>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {T({
                          en: "Run your TwitchLink Installer.",
                          ko: "TwitchLink 설치 프로그램을 실행하세요.",
                        })}
                      </p>
                      <p className="text-muted-foreground">
                        {T({
                          en: "If the following warning appears, click 'Done' and proceed with the instructions provided.",
                          ko: "다음 경고가 나타나면 '완료'를 클릭하고 제공된 지침에 따라 진행하세요.",
                        })}
                      </p>

                      {!textOnly && <Image priority src={ManualMacOSInstallationNotOpenedImage} alt="Installation Not Opened" />}
                    </div>
                  </div>
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Important",
                        ko: "중요",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "TwitchLink is safe to use, but since it's an open-source application that hasn't been registered with Apple, macOS may display a security warning.",
                        ko: "TwitchLink는 사용하기에 안전하지만, Apple에 등록되지 않은 오픈 소스 애플리케이션이기 때문에 macOS에서 보안 경고를 표시할 수 있습니다.",
                      })}
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "3. Security Settings",
                        ko: "3. 보안 설정",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "If macOS prevents the app from opening, follow these steps:",
                        ko: "macOS가 앱이 열리는 것을 방지하는 경우 다음 단계를 따르세요:",
                      })}
                    </p>
                    <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
                      <li>
                        {T({
                          en: "Open 'System Settings'",
                          ko: "'시스템 설정' 열기",
                        })}
                      </li>
                      <li>
                        {T({
                          en: "Go to 'Privacy & Security'",
                          ko: "'개인정보 보호 및 보안'으로 이동",
                        })}
                      </li>
                      <li>
                        {T({
                          en: "Scroll down to the 'Security' section",
                          ko: "'보안' 섹션으로 이동",
                        })}
                      </li>
                      <li>
                        {T({
                          en: "Click 'Open Anyway' next to the message indicating that 'TwitchLink.app' was blocked",
                          ko: "'TwitchLink.app'이 차단되었다는 알림 옆의 '그래도 열기' 클릭",
                        })}
                      </li>
                      {!textOnly && <Image priority src={ManualMacOSInstallationSystemSettingsImage} alt="Installation System Settings" />}
                      <li>
                        {T({
                          en: "Confirm by clicking 'Open Anyway' in the dialog that appears",
                          ko: "대화 상자에서 '그래도 열기'를 클릭하여 진행",
                        })}
                      </li>
                      {!textOnly && <Image priority src={ManualMacOSInstallationOpenAnywayImage} alt="Installation Open Anyway" />}
                    </ol>
                  </div>

                  <Accordion type="multiple">
                    <AccordionItem value="faq-1">
                      <AccordionTrigger className="text-left">
                        {T({
                          en: "Why am I seeing this message?",
                          ko: "이 메시지가 표시되는 이유는 무엇인가요?",
                        })}
                      </AccordionTrigger>
                      <AccordionContent>
                        {T({
                          en: "macOS has security features that warn users when opening applications not downloaded from the App Store or from identified developers. Since TwitchLink is an open-source application, it may trigger these warnings, but it's safe to use.",
                          ko: "macOS에는 App Store에서 다운로드하지 않았거나 식별된 개발자로부터 다운로드하지 않은 애플리케이션을 열 때 사용자에게 경고하는 보안 기능이 있습니다. TwitchLink는 오픈 소스 애플리케이션이므로 이러한 경고를 발생시킬 수 있지만 사용하기에 안전합니다.",
                        })}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                      <AccordionTrigger className="text-left">
                        {T({
                          en: "Is TwitchLink safe for macOS?",
                          ko: "TwitchLink는 macOS에서 사용하기에 안전한가요?",
                        })}
                      </AccordionTrigger>
                      <AccordionContent>
                        {T({
                          en: "Yes, TwitchLink is safe to use on macOS. It's an open-source application, which means its code is publicly available for review. You can check the source code on GitHub to verify its safety.",
                          ko: "네, TwitchLink는 macOS에서 사용하기에 안전합니다. 오픈 소스 애플리케이션이므로 코드가 공개적으로 검토 가능합니다. GitHub에서 소스 코드를 확인하여 안전성을 검증할 수 있습니다.",
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <SiApple className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Stream Download",
                        ko: "생방송 다운로드",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Twitch Live Stream",
                        ko: "#Twitch 생방송 다운로드",
                      })}
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Live Recording",
                        ko: "#실시간 녹화",
                      })}
                    </Badge>
                    {T({
                      en: "How to record and download Twitch Streams.",
                      ko: "Twitch 생방송 실시간 다운로드 및 녹화 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1. Channel Search",
                        ko: "1. 채널 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Search for channels by channel ID or channel link.",
                        ko: "채널 ID 또는 채널 링크로 채널을 검색하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSLiveDownloadMainMenuImage} alt="Live Download Main Menu" />}
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. Download",
                        ko: "2. 다운로드",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "If the channel is online, the Download button appears with the preview image.",
                        ko: "채널이 온라인 상태이면 미리보기 이미지와 함께 다운로드 버튼이 나타납니다.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSLiveDownloadChannelImage} alt="Live Download Channel" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Click the button to download.",
                        ko: "버튼을 눌러 다운로드를 진행합니다.",
                      })}
                    </p>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Note",
                        ko: "참고",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "Live streams are downloaded in real-time. Make sure you have a stable internet connection for the best experience.",
                        ko: "생방송은 실시간으로 다운로드됩니다. 최상의 경험을 위해 안정적인 인터넷 연결이 필요합니다.",
                      })}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <SiApple className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Video Download",
                        ko: "비디오 다운로드",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Twitch Videos",
                        ko: "#Twitch 비디오 다운로드",
                      })}
                    </Badge>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Sub-Only Videos",
                        ko: "#구독자 전용 다시보기 다운로드",
                      })}
                    </Badge>
                    {T({
                      en: "How to download Twitch Videos, including Subscriber-Only Videos.",
                      ko: "Twitch 다시보기 및 구독자 전용 다시보기 다운로드 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-A. Search Video in Channel",
                        ko: "1-A. 채널에서 비디오 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Search for the channels and click the Video/Clip tab.",
                        ko: "채널을 검색하고 비디오/클립 탭을 클릭하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSVideoDownloadChannelImage} alt="Video Download Channel" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Select the type of video you want to search through the filter on the top right.",
                        ko: "오른쪽 상단의 필터를 통해 검색하려는 비디오 유형을 선택하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSVideoDownloadVideoListImage} alt="Video Download Video List" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Find the video you want to download.",
                        ko: "비디오 목록이 표시되면 다운로드할 비디오를 찾으세요.",
                      })}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-B. Search Video by Video ID",
                        ko: "1-B. 비디오 ID로 비디오 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Or search for videos by video ID or video link.",
                        ko: "또는 비디오 ID나 비디오 링크로 비디오를 검색하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSVideoDownloadMainMenuImage} alt="Video Download Main Menu" />}
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. Download",
                        ko: "2. 다운로드",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "The download button appears with the preview image.",
                        ko: "미리보기 이미지와 함께 다운로드 버튼이 나타납니다.",
                      })}
                    </p>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Click the button to download.",
                        ko: "버튼을 눌러 다운로드를 진행합니다.",
                      })}
                    </p>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Note",
                        ko: "참고",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "Videos are downloaded in the highest available quality. The download speed depends on your internet connection and the video's length.",
                        ko: "비디오는 사용 가능한 최고 품질로 다운로드됩니다. 다운로드 속도는 인터넷 연결 상태와 비디오 길이에 따라 달라집니다.",
                      })}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <SiApple className="h-5 w-5" />
                    <CardTitle>
                      {T({
                        en: "Clip Download",
                        ko: "클립 다운로드",
                      })}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className="mr-2">
                      {T({
                        en: "#Download Twitch Clips",
                        ko: "#Twitch 클립 다운로드",
                      })}
                    </Badge>
                    {T({
                      en: "How to download Twitch Clips.",
                      ko: "Twitch 클립 다운로드 방법.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-A. Search Clip in Channel",
                        ko: "1-A. 채널에서 클립 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Search for the channels and click the Video/Clip tab.",
                        ko: "채널을 검색하고 비디오/클립 탭을 클릭하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSClipDownloadChannelImage} alt="Clip Download Channel" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Select 'Clips' from the filter on the top right.",
                        ko: "오른쪽 상단의 필터에서 '클립'을 선택하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSClipDownloadClipListImage} alt="Clip Download Clip List" />}
                    <p className="text-muted-foreground">
                      {T({
                        en: "Find the clip you want to download.",
                        ko: "클립 목록이 표시되면 다운로드할 클립을 찾으세요.",
                      })}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "1-B. Search Clip by Clip ID",
                        ko: "1-B. 클립 ID로 클립 검색",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Or search for clips by clip ID or clip link.",
                        ko: "또는 클립 ID나 클립 링크로 클립을 검색하세요.",
                      })}
                    </p>
                    {!textOnly && <Image priority src={ManualMacOSClipDownloadMainMenuImage} alt="Clip Download Main Menu" />}
                  </div>

                  <div className="space-y-4">
                    <h3 className="border-b pb-2 text-lg font-semibold">
                      {T({
                        en: "2. Download",
                        ko: "2. 다운로드",
                      })}
                    </h3>
                    <p className="text-muted-foreground">
                      {T({
                        en: "The download button appears with the preview image.",
                        ko: "미리보기 이미지와 함께 다운로드 버튼이 나타납니다.",
                      })}
                    </p>
                    <p className="text-muted-foreground">
                      {T({
                        en: "Click the button to download.",
                        ko: "버튼을 눌러 다운로드를 진행합니다.",
                      })}
                    </p>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>
                      {T({
                        en: "Note",
                        ko: "참고",
                      })}
                    </AlertTitle>
                    <AlertDescription>
                      {T({
                        en: "Clips are downloaded in the highest available quality.",
                        ko: "클립은 사용 가능한 최고 품질로 다운로드됩니다.",
                      })}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>
                {T({
                  en: "Additional Resources",
                  ko: "추가 리소스",
                })}
              </CardTitle>
              <CardDescription>
                {T({
                  en: "Find more help and information about using TwitchLink.",
                  ko: "TwitchLink 사용에 대한 더 많은 도움말과 정보를 찾아보세요.",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Link href={createRouteHref("/support")} target="_blank">
                <Button variant="outline" className="w-full justify-start">
                  <Info className="mr-2 h-4 w-4" />
                  {T({
                    en: "Support & Issues",
                    ko: "지원 및 문제",
                  })}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || ""} target="_blank">
                <Button variant="outline" className="w-full justify-start">
                  <SiGithub className="mr-2 h-4 w-4" />
                  {T({
                    en: "Visit GitHub",
                    ko: "GitHub 방문",
                  })}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        disabled={!showScrollTop}
        className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 ${
          showScrollTop ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
        }`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
}
