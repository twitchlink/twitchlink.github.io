"use client";

import Link from "next/link";
import { Heart, Coffee, CreditCard, ExternalLink, Download, Star, GitFork } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import Image from "next/image";
import MacosInstallHelpImage from "@/assets/img/pages/donate/macos-install-help.png";
import { type PlatformType, type ReleaseBinaryInfo } from "@/types/types";
import { useReleaseNotes } from "@/hooks/use-release-notes";
import { useHref } from "@/hooks/use-href";

export default function Page() {
  const { T, language } = useLanguage();
  const { isValid } = useReleaseNotes();
  const [donationButtonClicked, setDonationButtonClicked] = useState(false);
  const searchParams = useSearchParams();
  const { createRouteHref } = useHref();
  const [downloadRequested] = useState<ReleaseBinaryInfo | null>(() => {
    const version = searchParams.get("download");
    const platform = searchParams.get("platform") as PlatformType;
    if (version && platform && isValid(version, platform)) {
      return {
        version: version,
        platform: platform,
      };
    }
    return null;
  });
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [repositoryInfo, setRepositoryInfo] = useState<{
    stargazersCount: number;
    forksCount: number;
  } | null>(null);
  const [isLoadingRepositoryInfo, setIsLoadingRepositoryInfo] = useState(true);
  const [showJustDownloadDialog, setShowJustDownloadDialog] = useState(false);
  const [showGitHubVisitDialog, setShowGitHubVisitDialog] = useState(false);
  const [showMacOsInstallHelpDialog, setShowMacOsInstallHelpDialog] = useState(false);

  const downloadFile = useCallback(() => {
    const versionCheck = downloadRequested?.version.split(".") || [];
    let fileName = "";
    if (versionCheck.length === 3 && versionCheck[0] === "1" && versionCheck[1] === "0") {
      fileName = `TwitchLink-${downloadRequested?.version}.exe`;
    } else {
      fileName = `TwitchLinkSetup-${downloadRequested?.version}.${downloadRequested?.platform === "macos" ? "dmg" : "exe"}`;
    }
    const downloadUrl = `${process.env.NEXT_PUBLIC_GITHUB_RELEASE_DOWNLOAD_URL}/${downloadRequested?.version}/${fileName}`;
    window.open(downloadUrl, "_self");
  }, [downloadRequested]);

  const startDownload = useCallback(() => {
    setDownloadStarted(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      downloadFile();
      if (downloadRequested?.platform === "macos") {
        setShowMacOsInstallHelpDialog(true);
      } else {
        setShowGitHubVisitDialog(true);
      }
    }, 3000);
  }, [downloadRequested, downloadFile]);

  useEffect(() => {
    const visibilityEventListener = () => {
      if (!document.hidden && donationButtonClicked && !downloadStarted) {
        startDownload();
      }
    };
    if (downloadRequested !== null) {
      document.addEventListener("visibilitychange", visibilityEventListener);
    }
    return () => {
      if (downloadRequested !== null) {
        document.removeEventListener("visibilitychange", visibilityEventListener);
      }
    };
  }, [donationButtonClicked, downloadStarted, startDownload, downloadRequested]);

  useEffect(() => {
    const fetchRepositoryStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_NAME}`);
        if (response.ok) {
          const data = await response.json();
          setRepositoryInfo({
            stargazersCount: data.stargazers_count,
            forksCount: data.forks_count,
          });
        }
      } catch {
        setRepositoryInfo(null);
      } finally {
        setIsLoadingRepositoryInfo(false);
      }
    };

    if (showGitHubVisitDialog) {
      fetchRepositoryStats();
    }
  }, [showGitHubVisitDialog]);

  return (
    <div className="flex-1 bg-gradient-to-b from-purple-50/90 via-purple-50/50 to-background">
      <Dialog open={showJustDownloadDialog} onOpenChange={setShowJustDownloadDialog}>
        <DialogContent className="max-w-xl">
          <DialogHeader className="space-y-3">
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Download className="h-6 w-6 text-primary" />
              {T({
                en: "Just Download",
                ko: "그냥 다운로드",
              })}
            </DialogTitle>
            <DialogDescription className="text-base">
              {T({
                en: "TwitchLink is an open source project. Your support helps us continue development.",
                ko: "TwitchLink는 오픈소스 프로젝트입니다. 여러분의 지원이 개발을 지속하는 데 도움이 됩니다.",
              })}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-6">
            <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-purple-50/50 to-background p-6 shadow-sm">
              <div className="absolute -right-4 -top-4 h-24 w-24 rotate-12 opacity-10">
                <Heart className="h-full w-full text-primary" />
              </div>
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">
                    {T({
                      en: "Why Support TwitchLink?",
                      ko: "왜 TwitchLink를 후원해야 할까요?",
                    })}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {T({
                    en: "Please consider donating to help us continue developing TwitchLink. Your support is a great help to our development.",
                    ko: "TwitchLink를 지속적으로 개발할 수 있도록 후원을 고려해 주세요. 여러분의 지원은 TwitchLink의 지속적인 개발에 큰 도움이 됩니다.",
                  })}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Coffee className="h-4 w-4" />
                {T({
                  en: "Your support enables:",
                  ko: "여러분의 후원으로 가능한 것들:",
                })}
              </div>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  {T({
                    en: "Continuous development and updates",
                    ko: "지속적인 개발과 업데이트",
                  })}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  {T({
                    en: "New features and improvements",
                    ko: "새로운 기능과 개선사항",
                  })}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  {T({
                    en: "Better user experience and support",
                    ko: "더 나은 사용자 경험과 지원",
                  })}
                </li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex-col gap-2">
            <DialogClose asChild>
              <Button variant="outline" onClick={startDownload} className="w-full gap-2 sm:w-auto">
                <Download className="h-4 w-4" />
                {T({
                  en: "Just Download",
                  ko: "그냥 다운로드",
                })}
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="w-full gap-2 sm:w-auto">
                <Heart className="h-4 w-4" />
                {T({
                  en: "Support Development",
                  ko: "개발 지원하기",
                })}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showMacOsInstallHelpDialog} onOpenChange={setShowMacOsInstallHelpDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {T({
                en: "Having Trouble?",
                ko: "문제가 생겼나요?",
              })}
            </DialogTitle>
            <DialogDescription>
              {T({
                en: "If you encounter the following message, check out how to resolve it.",
                ko: "다음 오류가 발생하나요? 해결책을 확인해 보세요.",
              })}
            </DialogDescription>
          </DialogHeader>
          <Image src={MacosInstallHelpImage} alt="macOS Installation Help" />
          <DialogFooter className="flex-col gap-2">
            <Button asChild>
              <Link href={createRouteHref("/docs", { platform: "macos" })} target="_blank">
                {T({
                  en: "Learn more",
                  ko: "문제 해결하기",
                })}
              </Link>
            </Button>
            <DialogClose asChild>
              <Button variant="outline">
                {T({
                  en: "Close",
                  ko: "닫기",
                })}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showGitHubVisitDialog} onOpenChange={setShowGitHubVisitDialog}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <SiGithub className="h-5 w-5" />
              {T({
                en: "Join Our GitHub Community",
                ko: "GitHub 커뮤니티에 참여하세요",
              })}
            </DialogTitle>
            <DialogDescription>
              {T({
                en: "Your support on GitHub helps us grow and improve TwitchLink.",
                ko: "GitHub에서의 지원은 TwitchLink의 성장과 개선에 도움이 됩니다.",
              })}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Link
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
              target="_blank"
              className="block cursor-pointer overflow-hidden rounded-lg border bg-card transition hover:shadow-lg hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
              tabIndex={0}
            >
              <div className="flex items-center gap-3 border-b bg-muted/50 p-4">
                <SiGithub className="h-5 w-5" />
                <div className="flex-1 truncate">
                  <div className="font-medium">{process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_NAME}</div>
                  <div className="text-wrap text-sm text-muted-foreground">{process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_DESCRIPTION}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-border p-4 text-sm">
                <div className="flex items-center gap-2 px-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span className="font-medium">Star</span>
                  </div>
                  <span className="text-muted-foreground">
                    {isLoadingRepositoryInfo ? (
                      <span className="inline-block h-4 w-12 animate-pulse rounded bg-muted" />
                    ) : (
                      (repositoryInfo?.stargazersCount.toLocaleString() ?? "-")
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4">
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span className="font-medium">Fork</span>
                  </div>
                  <span className="text-muted-foreground">
                    {isLoadingRepositoryInfo ? (
                      <span className="inline-block h-4 w-12 animate-pulse rounded bg-muted" />
                    ) : (
                      (repositoryInfo?.forksCount.toLocaleString() ?? "-")
                    )}
                  </span>
                </div>
              </div>
            </Link>
            <div className="space-y-2">
              <h4 className="font-medium">
                {T({
                  en: "🌟 Star the Repository",
                  ko: "🌟 Repository에 Star 남기기",
                })}
              </h4>
              <p className="text-sm text-muted-foreground">
                {T({
                  en: "Show your support by starring the repository. It helps increase visibility and encourages more developers to contribute.",
                  ko: "Repository에 Star를 남겨 지원해주세요. 이는 프로젝트의 가시성을 높이고 더 많은 개발자들의 기여를 이끌어냅니다.",
                })}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">
                {T({
                  en: "👥 Join the Community",
                  ko: "👥 커뮤니티 참여하기",
                })}
              </h4>
              <p className="text-sm text-muted-foreground">
                {T({
                  en: "Follow the project to stay updated with the latest features, bug fixes, and development news.",
                  ko: "프로젝트를 팔로우하여 최신 기능, 버그 수정, 개발 소식을 받아보세요.",
                })}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">
                {T({
                  en: "💡 Share Your Ideas",
                  ko: "💡 아이디어 공유하기",
                })}
              </h4>
              <p className="text-sm text-muted-foreground">
                {T({
                  en: "Have suggestions for new features or improvements? Open an issue or discussion to share your thoughts with the community.",
                  ko: "새로운 기능이나 개선 사항에 대한 제안이 있으신가요? 이슈나 토론을 열어 커뮤니티와 의견을 나눠보세요.",
                })}
              </p>
            </div>
          </div>
          <DialogFooter className="flex-col gap-2">
            <Button asChild className="w-full">
              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || ""} target="_blank">
                <SiGithub className="mr-2 h-4 w-4" />
                {T({
                  en: "Visit GitHub",
                  ko: "GitHub 방문하기",
                })}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <DialogClose asChild>
              <Button variant="outline">
                {T({
                  en: "Close",
                  ko: "닫기",
                })}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col space-y-8">
          {!downloadStarted && (
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tighter">
                {downloadRequested
                  ? T({
                      en: "Please contribute to the development of TwitchLink before downloading.",
                      ko: "다운로드 전 TwitchLink의 개발에 기여해 주세요.",
                    })
                  : T({
                      en: "Support TwitchLink",
                      ko: "TwitchLink 후원하기",
                    })}
              </h1>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {T({
                  en: "TwitchLink is a free and open-source project. Your donations help us maintain and improve the application.",
                  ko: "TwitchLink는 무료 오픈소스 프로젝트입니다. 여러분의 후원은 애플리케이션을 유지하고 개선하는 데 도움이 됩니다.",
                })}
              </p>
            </div>
          )}

          {downloadStarted && (
            <div className="text-center">
              <h1 className="mb-1 text-3xl font-bold tracking-tighter">
                {T({
                  en: "Thanks for using TwitchLink!",
                  ko: "TwitchLink를 이용해 주셔서 감사합니다!",
                })}
              </h1>
              <h1 className="mb-4 text-3xl font-bold tracking-tighter">
                {T({
                  en: "Your download will begin shortly.",
                  ko: "곧 다운로드가 시작됩니다.",
                })}
              </h1>
              <p className="mx-auto mb-5 max-w-2xl text-muted-foreground">
                {T({
                  en: "TwitchLink is a free and open-source project. Your donations help us maintain and improve the application.",
                  ko: "TwitchLink는 무료 오픈소스 프로젝트입니다. 여러분의 후원은 애플리케이션을 유지하고 개선하는 데 도움이 됩니다.",
                })}
              </p>
              <Button variant="outline" size="lg" onClick={startDownload} className="mb-16 max-w-full">
                <Download className="mr-2 h-4 w-4" />
                <div className="truncate">
                  {T({
                    en: "If the download doesn't start automatically, click here.",
                    ko: "다운로드가 자동으로 시작되지 않는다면 이곳을 클릭하세요.",
                  })}
                </div>
              </Button>
            </div>
          )}

          <div className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-amber-500" />
                  {T({
                    en: "Buy me a coffee",
                    ko: "커피 한 잔 사주기",
                  })}
                </CardTitle>
                <CardDescription>
                  {T({
                    en: "Support us with a small one-time donation.",
                    ko: "작은 일회성 기부로 지원해 주세요.",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <p className="mb-4 text-sm text-muted-foreground">
                  {T({
                    en: "Every little bit helps! Your contribution is a great help to the development of TwitchLink.",
                    ko: "작은 도움도 큰 힘이 됩니다! 귀하의 기여는 TwitchLink의 개발에 큰 도움이 됩니다.",
                  })}
                </p>
                <Link href={process.env.NEXT_PUBLIC_DONATE_BUY_ME_A_COFFEE_URL || ""} target="_blank">
                  <Button onClick={() => setDonationButtonClicked(true)} className="w-full bg-amber-500 text-white hover:bg-amber-600">
                    <Coffee className="mr-2 h-4 w-4" />
                    {T({
                      en: "Buy me a coffee",
                      ko: "커피 한 잔 사주기",
                    })}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  {T({
                    en: "Become a Patron",
                    ko: "후원자 되기",
                  })}
                </CardTitle>
                <CardDescription>
                  {T({
                    en: "Support us with a monthly donation.",
                    ko: "월간 기부로 지원해 주세요.",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <p className="mb-4 text-sm text-muted-foreground">
                  {T({
                    en: "Become a patron to help ensure the long-term sustainability of TwitchLink.",
                    ko: "TwitchLink의 장기적인 지속 가능성을 보장하기 위해 후원자가 되어주세요.",
                  })}
                </p>
                <Link href={process.env.NEXT_PUBLIC_DONATE_BUY_ME_A_COFFEE_URL || ""} target="_blank">
                  <Button onClick={() => setDonationButtonClicked(true)} className="w-full bg-red-500 text-white hover:bg-red-600">
                    <Heart className="mr-2 h-4 w-4" />
                    {T({
                      en: "Become a Patron",
                      ko: "후원자 되기",
                    })}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-500" />
                  {T({
                    en: "One-time Donation",
                    ko: "일회성 기부",
                  })}
                </CardTitle>
                <CardDescription>
                  {T({
                    en: "Make a custom donation of any amount.",
                    ko: "원하는 금액으로 맞춤형 기부를 하세요.",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <p className="mb-4 text-sm text-muted-foreground">
                  {T({
                    en: "Choose your own donation amount. All contributions are greatly appreciated and help us continue development.",
                    ko: "원하는 기부 금액을 선택하세요. 모든 기여에 깊이 감사드리며 개발을 계속할 수 있도록 도와줍니다.",
                  })}
                </p>
                <Link
                  href={(language === "en" ? process.env.NEXT_PUBLIC_DONATE_PAYPAL_URL : process.env.NEXT_PUBLIC_DONATE_TOONATION_URL) || ""}
                  target="_blank"
                >
                  <Button onClick={() => setDonationButtonClicked(true)} className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    {language === "en"
                      ? T({
                          en: "Donate via PayPal",
                          ko: "PayPal로 기부하기",
                        })
                      : T({
                          en: "Donate via Toonation",
                          ko: "Toonation으로 기부하기",
                        })}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>
                {T({
                  en: "Other Ways to Support",
                  ko: "지원하는 다른 방법",
                })}
              </CardTitle>
              <CardDescription>
                {T({
                  en: "There are many ways to help beyond financial contributions.",
                  ko: "재정적 기여 외에도 도울 수 있는 많은 방법이 있습니다.",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <SiGithub className="h-4 w-4" />
                    {T({
                      en: "Contribute to the Code",
                      ko: "코드에 기여하기",
                    })}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {T({
                      en: "If you're a developer, you can contribute to TwitchLink by submitting pull requests, fixing bugs, or adding new features.",
                      ko: "개발자라면 풀 리퀘스트를 제출하거나, 버그를 수정하거나, 새로운 기능을 추가하여 TwitchLink에 기여할 수 있습니다.",
                    })}
                  </p>
                  <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || ""} target="_blank" className="mt-2 inline-block text-sm text-purple-600 hover:underline">
                    <div className="flex items-center gap-1">
                      {T({
                        en: "View on GitHub",
                        ko: "GitHub에서 보기",
                      })}
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Link>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    <Heart className="h-4 w-4" />
                    {T({
                      en: "Spread the Word",
                      ko: "소문내기",
                    })}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {T({
                      en: "Help us grow by sharing TwitchLink with your friends, on social media, or in Twitch communities. More users means more resources for development.",
                      ko: "친구들, 소셜 미디어 또는 Twitch 커뮤니티에서 TwitchLink를 공유하여 성장을 도와주세요. 더 많은 사용자는 개발을 위한 더 많은 리소스를 의미합니다.",
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                {T({
                  en: "Thank you for supporting TwitchLink! Your contributions make this project possible.",
                  ko: "TwitchLink를 지원해 주셔서 감사합니다! 여러분의 기여가 이 프로젝트를 가능하게 합니다.",
                })}
              </p>
            </CardFooter>
          </Card>

          {downloadRequested && !downloadStarted ? (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>
                  {T({
                    en: "Download without donating",
                    ko: "후원 없이 다운로드",
                  })}
                </CardTitle>
                <CardDescription>
                  {T({
                    en: "If you prefer not to donate at this time, you can proceed directly to the download.",
                    ko: "후원을 원하지 않으시면 바로 다운로드하실 수 있습니다.",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowJustDownloadDialog(true)}
                  className="w-full max-w-full overflow-hidden truncate whitespace-nowrap"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {T({
                    en: "No thanks, just start my download.",
                    ko: "그냥 다운로드",
                  })}
                </Button>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
}
