"use client";

import Link from "next/link";
import { useCallback } from "react";
import { MessageSquare, Bug, Mail } from "lucide-react";
import { SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { useHref } from "@/hooks/use-href";

export default function Page() {
  const { T } = useLanguage();
  const { createRouteHref } = useHref();
  const { toast } = useToast();

  const copyToClipboard = useCallback(
    (value: string) => {
      navigator.clipboard.writeText(value);
      toast({
        title: T({
          en: "Copied to clipboard",
          ko: "클립보드에 복사되었습니다",
        }),
        description: value,
      });
    },
    [toast, T]
  );

  const copyEmailAddress = useCallback(() => {
    copyToClipboard(process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "");
  }, [copyToClipboard]);

  return (
    <div className="flex-1 bg-gradient-to-b from-purple-50/90 via-purple-50/50 to-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tighter">
              {T({
                en: "Support",
                ko: "문제 해결",
              })}
            </h1>
            <p className="text-muted-foreground">
              {T({
                en: "Get help with TwitchLink or report issues you encounter.",
                ko: "TwitchLink에 대한 도움을 받거나 발생한 문제를 보고하세요.",
              })}
            </p>
          </div>

          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="faq">
                {T({
                  en: "FAQ",
                  ko: "자주 묻는 질문",
                })}
              </TabsTrigger>
              <TabsTrigger value="issues">
                {T({
                  en: "Report Issues",
                  ko: "문제 보고",
                })}
              </TabsTrigger>
              <TabsTrigger value="contact">
                {T({
                  en: "Contact",
                  ko: "연락처",
                })}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {T({
                      en: "Frequently Asked Questions",
                      ko: "자주 묻는 질문",
                    })}
                  </CardTitle>
                  <CardDescription>
                    {T({
                      en: "Answers to common questions about TwitchLink.",
                      ko: "TwitchLink에 대한 일반적인 질문에 대한 답변.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "Is TwitchLink free to use?",
                          ko: "TwitchLink는 무료로 사용할 수 있나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "Yes, TwitchLink is completely free and open-source. You can use all features without any cost.",
                          ko: "네, TwitchLink는 완전히 무료이며 오픈 소스입니다. 모든 기능을 비용 없이 사용할 수 있습니다.",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "Can I download subscriber-only content?",
                          ko: "구독자 전용 콘텐츠를 다운로드할 수 있나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "Yes, TwitchLink supports downloading subscriber-only content if you have an active subscription to the channel and are logged in with your Twitch account.",
                          ko: "네, 채널에 활성 구독이 있고 Twitch 계정으로 로그인한 경우 TwitchLink는 구독자 전용 콘텐츠 다운로드를 지원합니다.",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "Can I download multiple streams simultaneously?",
                          ko: "여러 생방송을 동시에 다운로드할 수 있나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "Yes, TwitchLink supports downloading multiple streams or videos simultaneously. The number of concurrent downloads may affect performance based on your system resources and internet connection.",
                          ko: "네, TwitchLink는 여러 생방송이나 비디오를 동시에 다운로드하는 것을 지원합니다. 동시 다운로드 수는 시스템 리소스와 인터넷 연결에 따라 성능에 영향을 미칠 수 있습니다.",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "How does live broadcast downloading work?",
                          ko: "생방송 다운로드는 어떻게 작동하나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "TwitchLink's live download feature allows you to download broadcasts in real-time, even for streams without replays. This ensures you capture all content, including audio that might be affected by soundtrack settings in replays.",
                          ko: "TwitchLink의 실시간 다운로드 기능을 사용하면 리플레이가 없는 생방송도 실시간으로 다운로드할 수 있습니다. 이를 통해 리플레이에서 사운드트랙 설정으로 인해 영향을 받을 수 있는 오디오를 포함한 모든 콘텐츠를 확실하게 캡처할 수 있습니다.",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "What if my video is muted?",
                          ko: "비디오가 음소거되었다면 어떻게 하나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "TwitchLink includes an unmute feature that attempts to recover the original audio from muted sections. While results may vary, it's worth trying if you need to restore muted content.",
                          ko: "TwitchLink는 음소거된 섹션에서 원본 오디오를 복구하려고 시도하는 음소거 해제 기능을 포함하고 있습니다. 결과는 다를 수 있지만, 음소거된 콘텐츠를 복원해야 하는 경우 시도해볼 가치가 있습니다.",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "Can I automate my downloads?",
                          ko: "다운로드를 자동화할 수 있나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "Yes! TwitchLink offers scheduled downloads that can automatically start when a live broadcast begins. This is perfect for content creators and editors who need to regularly capture streams.",
                          ko: "네! TwitchLink는 생방송이 시작될 때 자동으로 시작되는 예약 다운로드를 제공합니다. 이는 정기적으로 생방송을 캡처해야 하는 콘텐츠 제작자와 편집자에게 완벽한 기능입니다.",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "How can I optimize download speeds?",
                          ko: "다운로드 속도를 최적화하려면 어떻게 해야 하나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "For large video downloads, you can adjust the download speed in TwitchLink's settings to find the optimal balance between speed and system performance.",
                          ko: "대용량 비디오 다운로드의 경우, TwitchLink 설정에서 다운로드 속도를 조정하여 속도와 시스템 성능 사이의 최적의 균형을 찾을 수 있습니다.",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "Is there a way to quickly access my favorite channels?",
                          ko: "즐겨찾는 채널에 빠르게 접근할 수 있는 방법이 있나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "Absolutely! TwitchLink's bookmark feature lets you save your favorite channels for quick access. No more searching for channels every time - just click and go!",
                          ko: "물론입니다! TwitchLink의 북마크 기능을 사용하면 즐겨찾는 채널을 저장하여 빠르게 접근할 수 있습니다. 더 이상 매번 채널을 검색할 필요가 없습니다 - 클릭하고 바로 이동하세요!",
                        })}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "How do I update TwitchLink?",
                          ko: "TwitchLink를 어떻게 업데이트하나요?",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "TwitchLink will notify you when updates are available. You can also check for updates manually by visiting our",
                          ko: "TwitchLink는 업데이트가 가능할 때 알림을 표시합니다. 또한 우리의",
                        })}{" "}
                        <Link href={createRouteHref("/releases")} target="_blank" className="text-purple-600 hover:underline">
                          {T({
                            en: "releases page",
                            ko: "배포 목록 페이지",
                          })}
                        </Link>
                        {T({
                          en: ".",
                          ko: "를 방문하여 수동으로 업데이트를 확인할 수 있습니다.",
                        })}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="issues" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {T({
                      en: "Report Issues on GitHub",
                      ko: "GitHub에서 문제 보고",
                    })}
                  </CardTitle>
                  <CardDescription>
                    {T({
                      en: "Found a bug or have a feature request? Let us know on GitHub.",
                      ko: "버그를 발견했거나 기능 요청이 있으신가요? GitHub에서 알려주세요.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {T({
                      en: "If you encounter any issues with TwitchLink or have suggestions for improvements, please report them on our GitHub repository. This helps us track and resolve problems efficiently.",
                      ko: "TwitchLink에 문제가 발생하거나 개선 제안이 있으시면 GitHub 저장소에 보고해 주세요. 이를 통해 문제를 효율적으로 추적하고 해결할 수 있습니다.",
                    })}
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Link href={process.env.NEXT_PUBLIC_GITHUB_CREATE_ISSUE_URL || ""} target="_blank">
                      <Button variant="outline" className="w-full">
                        <Bug className="mr-2 h-4 w-4" />
                        {T({
                          en: "Report a Bug",
                          ko: "버그 보고",
                        })}
                      </Button>
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_GITHUB_FEATURE_REQUEST_URL || ""} target="_blank">
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {T({
                          en: "Request a Feature",
                          ko: "기능 요청",
                        })}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    {T({
                      en: "Please include as much detail as possible in your reports, including steps to reproduce the issue, expected behavior, and your system information.",
                      ko: "보고서에 문제를 재현하는 단계, 예상 동작 및 시스템 정보를 포함하여 가능한 한 많은 세부 정보를 포함해 주세요.",
                    })}
                  </p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {T({
                      en: "Common Issues",
                      ko: "일반적인 문제",
                    })}
                  </CardTitle>
                  <CardDescription>
                    {T({
                      en: "Quick solutions to frequently reported problems.",
                      ko: "자주 보고되는 문제에 대한 빠른 해결책.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "Download Fails or Crashes",
                          ko: "다운로드 실패 또는 충돌",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "If downloads fail or the application crashes during download, try the following:",
                          ko: "다운로드가 실패하거나 다운로드 중 애플리케이션이 충돌하는 경우 다음을 시도해 보세요:",
                        })}
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                        <li>
                          {T({
                            en: "Ensure you have a stable internet connection",
                            ko: "안정적인 인터넷 연결이 있는지 확인하세요",
                          })}
                        </li>
                        <li>
                          {T({
                            en: "Check if the Twitch stream/video is still available",
                            ko: "Twitch 생방송/비디오가 여전히 사용 가능한지 확인하세요",
                          })}
                        </li>
                        <li>
                          {T({
                            en: "Restart the application and try again",
                            ko: "애플리케이션을 다시 시작하고 다시 시도하세요",
                          })}
                        </li>
                        <li>
                          {T({
                            en: "Update to the latest version of TwitchLink",
                            ko: "TwitchLink를 최신 버전으로 업데이트하세요",
                          })}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {T({
                          en: "Installation Problems",
                          ko: "설치 문제",
                        })}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {T({
                          en: "If you're having trouble installing TwitchLink:",
                          ko: "TwitchLink 설치에 문제가 있는 경우:",
                        })}
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                        <li>
                          {T({
                            en: "Make sure you have administrator privileges",
                            ko: "관리자 권한이 있는지 확인하세요",
                          })}
                        </li>
                        <li>
                          {T({
                            en: "Temporarily disable antivirus software",
                            ko: "일시적으로 바이러스 백신 소프트웨어를 비활성화하세요",
                          })}
                        </li>
                        <li>
                          {T({
                            en: "Try downloading the installer again",
                            ko: "설치 프로그램을 다시 다운로드해 보세요",
                          })}
                        </li>
                        <li>
                          {T({
                            en: "Check our",
                            ko: "자세한 지침은",
                          })}{" "}
                          <Link href={createRouteHref("/docs")} target="_blank" className="text-purple-600 hover:underline">
                            {T({
                              en: "installation guide",
                              ko: "설치 가이드",
                            })}
                          </Link>
                          {T({
                            en: " for detailed instructions",
                            ko: "를 확인하세요",
                          })}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {T({
                      en: "Contact Us",
                      ko: "연락하기",
                    })}
                  </CardTitle>
                  <CardDescription>
                    {T({
                      en: "Get in touch with the TwitchLink team.",
                      ko: "TwitchLink 팀에 연락하세요.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {T({
                      en: "If you need assistance or have questions that aren't covered in our documentation, you can reach out to us through the following channels:",
                      ko: "도움이 필요하거나 문서에서 다루지 않은 질문이 있는 경우, 다음 채널을 통해 연락할 수 있습니다:",
                    })}
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Link href={process.env.NEXT_PUBLIC_GITHUB_DISCUSSIONS_URL || ""} target="_blank">
                      <Button variant="outline" className="w-full">
                        <SiGithub className="mr-2 h-4 w-4" />
                        {T({
                          en: "GitHub Discussions",
                          ko: "GitHub 토론",
                        })}
                      </Button>
                    </Link>
                    <Link href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`} target="_blank" onClick={copyEmailAddress}>
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        {T({
                          en: "Email Support",
                          ko: "이메일 지원",
                        })}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    {T({
                      en: "As this is an open-source project maintained by volunteers, responses may take some time depending on contributors' availability. We appreciate your patience and understanding.",
                      ko: "이 프로젝트는 자원봉사자들이 유지 관리하는 오픈소스 프로젝트이기 때문에, 기여자의 여건에 따라 응답이 다소 지연될 수 있습니다. 너른 양해 부탁드립니다.",
                    })}
                  </p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {T({
                      en: "Community Resources",
                      ko: "커뮤니티 리소스",
                    })}
                  </CardTitle>
                  <CardDescription>
                    {T({
                      en: "Connect with other TwitchLink users.",
                      ko: "다른 TwitchLink 사용자와 연결하세요.",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {T({
                      en: "Join our community to get help from other users, share tips, and stay updated on the latest developments:",
                      ko: "커뮤니티에 참여하여 다른 사용자로부터 도움을 받고, 팁을 공유하고, 최신 개발 소식을 받아보세요:",
                    })}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <Link href={process.env.NEXT_PUBLIC_SUPPORT_DISCORD_URL || ""} target="_blank">
                      <Button variant="outline" className="w-full">
                        <SiDiscord className="mr-2 h-4 w-4" />
                        {T({
                          en: "Discord Community",
                          ko: "Discord 커뮤니티",
                        })}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
