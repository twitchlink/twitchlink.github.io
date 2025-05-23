"use client";

import { useCallback } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Info, Mail, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";

export default function Page() {
  const { T } = useLanguage();
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
      <div className="px-4 py-12">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tighter">
            {T({
              en: "Report Bugs",
              ko: "버그 신고",
            })}
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {T({
              en: "TwitchLink is a free and open-source project. Your bug reports help us improve the application.",
              ko: "TwitchLink는 무료 오픈소스 프로젝트입니다. 여러분의 버그 제보는 애플리케이션을 개선하는 데 큰 도움이 됩니다.",
            })}
          </p>
        </div>
        <div className="container px-4 py-12 md:px-6">
          <Card className="overflow-hidden rounded-xl border bg-white/90 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="mb-2 text-xl font-bold">
                {T({
                  en: "Sorry for the inconvenience.",
                  ko: "불편을 드려 죄송합니다.",
                })}
              </CardTitle>
              <CardDescription className="text-base">
                {T({
                  en: "To fix the bug and improve the program, please inform us about this error using the method below.",
                  ko: "버그를 수정하고 프로그램을 개선하기 위해 아래 방법을 사용하여 이 오류에 대해 알려주세요.",
                })}
                <br />
                {T({
                  en: "We would be grateful if you could provide detailed information, such as how to reproduce the bug or the circumstances under which it occurred.",
                  ko: "버그를 재현하는 방법이나 발생한 상황 등 부가적인 정보를 상세히 제공해 주시면 감사하겠습니다.",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="mb-2 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50/80 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <div>
                  <div className="mb-1 font-semibold text-blue-900">
                    {T({
                      en: "Bug Report Guide",
                      ko: "버그 신고 안내",
                    })}
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
                    <li>
                      {T({
                        en: "Describe what you were doing when the bug occurred.",
                        ko: "버그가 발생했을 때 어떤 작업을 하고 있었는지 설명해 주세요.",
                      })}
                    </li>
                    <li>
                      {T({
                        en: "Explain the steps to reproduce the bug, if possible.",
                        ko: "가능하다면 버그를 재현하는 방법을 알려주세요.",
                      })}
                    </li>
                    <li>
                      {T({
                        en: "Include any error messages or screenshots if available.",
                        ko: "오류 메시지나 스크린샷이 있다면 첨부해 주세요.",
                      })}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-2 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
                <div className="text-sm font-medium text-destructive">
                  {T({
                    en: "Please attach the log file provided by the program.",
                    ko: "프로그램에서 제공하는 로그 파일을 첨부해주세요.",
                  })}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <a
                  href={process.env.NEXT_PUBLIC_GITHUB_CREATE_ISSUE_URL}
                  target="_blank"
                  className="relative flex flex-col items-start rounded-lg border bg-white p-5 transition hover:shadow-lg hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <ExternalLink className="absolute right-3 top-3 z-10 h-4 w-4 text-muted-foreground opacity-70" />
                  <div className="mb-2 flex items-center gap-2 font-semibold">
                    <SiGithub className="h-5 w-5" />
                    {T({
                      en: "GitHub Issues",
                      ko: "GitHub 이슈 등록",
                    })}
                  </div>
                  <div className="mb-2 text-sm text-muted-foreground">
                    {T({
                      en: "Submit a bug report or feature request on GitHub.",
                      ko: "GitHub에서 버그 리포트나 기능 요청을 남겨주세요.",
                    })}
                  </div>
                  <span className="mt-auto text-xs font-medium text-primary underline underline-offset-2">
                    {process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_NAME}
                  </span>
                </a>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
                  target="_blank"
                  onClick={copyEmailAddress}
                  className="relative flex flex-col items-start rounded-lg border bg-white p-5 transition hover:shadow-lg hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <ExternalLink className="absolute right-3 top-3 z-10 h-4 w-4 text-muted-foreground opacity-70" />
                  <div className="mb-2 flex items-center gap-2 font-semibold">
                    <Mail className="h-5 w-5" />
                    {T({
                      en: "Email Support",
                      ko: "이메일 문의",
                    })}
                  </div>
                  <div className="mb-2 text-sm text-muted-foreground">
                    {T({
                      en: "Send us an email with your bug details and log file.",
                      ko: "버그 상세 내용과 로그 파일을 이메일로 보내주세요.",
                    })}
                  </div>
                  <span className="mt-auto text-xs font-medium text-primary underline underline-offset-2">{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</span>
                </a>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                {T({
                  en: "Thank you for helping us make TwitchLink better!",
                  ko: "TwitchLink 개선에 도움을 주셔서 감사합니다!",
                })}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
