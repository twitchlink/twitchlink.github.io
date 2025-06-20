import { useCallback, useMemo } from "react";
import { useLanguage } from "@/hooks/use-language";
import { type PlatformType, type ReleaseNote } from "@/types/types";

export const useReleaseNotes = () => {
  const { T } = useLanguage();

  const getReleaseNotes = useCallback((): ReleaseNote[] => {
    return [
      {
        version: "3.5.0",
        date: new Date("2025-06-19"),
        binaries: ["windows", "macos"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Due to an update from Twitch, fixed an issue where downloading a replay during a live stream would continue downloading until the live stream ended.",
              ko: "Twitch의 업데이트로 인해 생방송 중에 다시보기를 다운로드할 때 생방송이 종료될 때까지 다운로드가 계속되던 문제를 수정했습니다.",
            }),
            T({
              en: "Due to an update from Twitch, fixed an issue that caused errors when downloading certain live streams and videos.",
              ko: "Twitch의 업데이트로 인해 일부 생방송 및 비디오 다운로드에 오류가 발생하던 문제를 수정하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.4.0",
        date: new Date("2025-04-21"),
        binaries: ["windows", "macos"],
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            T({
              en: "Fixed an issue where certain network path locations were not properly recognized.",
              ko: "일부 네트워크 위치 경로를 올바르게 인식하지 못하던 문제를 수정하였습니다.",
            }),
            T({
              en: "Added support for importing user accounts from active browser sessions.",
              ko: "브라우저 연동 로그인 기능이 추가되었습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.3.0",
        date: new Date("2024-12-28"),
        binaries: ["windows", "macos"],
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            {
              text: T({
                en: "Now available on macOS!",
                ko: "이제 macOS를 지원합니다.",
              }),
              important: true,
            },
            T({
              en: "Fixed an issue where the channel subscription status could not be verified correctly.",
              ko: "채널 구독 상태를 올바르게 확인하지 못하던 문제를 수정하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.2.1",
        date: new Date("2024-12-12"),
        isDeprecated: false,
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Resolved an issue where the login feature was incompatible due to internal changes of Twitch.",
              ko: "Twitch 내부 변경사항으로 인해 로그인 기능이 호환되지 않던 문제를 해결하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.2.0",
        date: new Date("2024-06-28"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            {
              text: T({
                en: "Dark Mode is here!",
                ko: "이제 다크 모드를 사용할 수 있습니다.",
              }),
              important: true,
            },
            T({
              en: "Added 'UNIX time' variable to filename template.",
              ko: "파일명 생성 규칙에 'UNIX 시간' 변수가 추가되었습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.1.3",
        date: new Date("2023-09-24"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Resolved an issue where the login feature was incompatible due to internal changes of Twitch.",
              ko: "Twitch 내부 변경사항으로 인해 로그인 기능이 호환되지 않던 문제를 해결하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.1.2",
        date: new Date("2023-09-04"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Addressed an intermittent issue where the temporary folder was not being deleted.",
              ko: "임시 폴더가 간헐적으로 삭제되지 않는 오류를 수정하였습니다.",
            }),
            T({
              en: "Resolved an issue where downloads wouldn't correctly stop when stream authentication expired. (This issue commonly arises when downloading live broadcasts for more than 24 hours.)",
              ko: "콘텐츠 접근에 대한 인증이 만료되는 경우 다운로드가 올바르게 중단되지 않는 문제를 해결하였습니다. (주로 생방송 다운로드를 24시간 이상 진행할 시 발생)",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.1.1",
        date: new Date("2023-08-27"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.1.0",
        date: new Date("2023-08-25"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            {
              text: T({
                en: "Added ability to select option to skip ads.",
                ko: "광고 건너뛰기 옵션을 선택할 수 있는 기능을 추가하였습니다.",
              }),
              important: true,
            },
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.0.4",
        date: new Date("2023-08-24"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.0.3",
        date: new Date("2023-08-22"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Fixed an issue that caused the app to crash intermittently when the network was unstable.",
              ko: "네트워크가 불안정할 때 간헐적으로 앱이 충돌하는 문제를 수정하였습니다.",
            }),
            T({
              en: "The download will not be interrupted even if there is a connection error.",
              ko: "연결 오류가 발생하여도 다운로드를 중단하지 않습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.0.2",
        date: new Date("2023-08-22"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Fixed an issue where timezone settings were not being applied to filename templates.",
              ko: "파일명 변수에 시간대 설정이 적용되지 않는 문제를 해결하였습니다.",
            }),
            T({
              en: "Fixed an issue that caused the app to crash intermittently when the network was unstable.",
              ko: "네트워크가 불안정할 때 간헐적으로 앱이 충돌하는 문제를 수정하였습니다.",
            }),
            T({
              en: "Improved to retain data from versions prior to 3.0.0.",
              ko: "3.0.0 이전 하위 버전의 데이터를 유지하도록 개선하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.0.1",
        date: new Date("2023-08-21"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Bug Fixes",
            ko: "버그 수정",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
          ],
        },
      },
      {
        version: "3.0.0",
        date: new Date("2023-08-21"),
        binaries: ["windows"],
        content: {
          title: T({
            en: "Massive Update",
            ko: "대규모 업데이트",
          }),
          items: [
            {
              text: T({
                en: "[General]",
                ko: "[일반]",
              }),
              type: "section",
            },
            {
              text: T({
                en: "We've redesigned the entire core of the application.",
                ko: "기존 애플리케이션의 핵심 구조를 전면 재설계하였습니다.",
              }),
              important: true,
            },
            T({
              en: "Optimized memory usage.",
              ko: "메모리 사용을 최적화하였습니다.",
            }),
            T({
              en: "Software optimized and stabilized.",
              ko: "소프트웨어 최적화 및 안정화를 진행하였습니다.",
            }),
            {
              text: T({
                en: "[Download]",
                ko: "[다운로드]",
              }),
              type: "section",
            },
            {
              text: T({
                en: "Rebuilt the whole download engine from scratch.",
                ko: "다운로드 엔진을 처음부터 재설계하였습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Various problems in downloads and scheduled downloads have been resolved or improved.",
                ko: "다운로드 및 예약 다운로드에서 발생하던 다양한 문제들이 해결되거나 개선되었습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Problems with not recognizing live broadcasts or recognizing them slowly.",
                ko: "생방송 인식을 하지 못하거나 느리게 인식하던 현상",
              }),
              type: "sub-item",
            },
            {
              text: T({
                en: "Issue of scheduled downloaded files being split.",
                ko: "예약 다운로드의 파일이 분할되는 현상",
              }),
              type: "sub-item",
            },
            {
              text: T({
                en: "Occasionally re-downloading the last 30 seconds of the live broadcast to a separate file after the live broadcast ended.",
                ko: "낮은 확률로 생방송이 종료된 이후 별도의 파일에 생방송의 마지막 30초를 다시 다운로드하던 현상",
              }),
              type: "sub-item",
            },
            {
              text: T({
                en: "Problem of live downloads halting midway at a low probability.",
                ko: "낮은 확률로 실시간 다운로드가 도중에 멈추는 현상",
              }),
              type: "sub-item",
            },
            {
              text: T({
                en: "Problem of an empty file being additionally generated along with the actual file in scheduled downloads at a low probability.",
                ko: "낮은 확률로 예약 다운로드에서 실제 파일과 함께 빈 파일이 추가로 생성되는 현상",
              }),
              type: "sub-item",
            },
            T({
              en: "Secured stability of live downloads.",
              ko: "실시간 다운로드의 안정성을 확보하였습니다.",
            }),
            T({
              en: "Network resilience has been improved.",
              ko: "네트워크 회복 기능이 강화되었습니다.",
            }),
            {
              text: T({
                en: "If a problem occurs with the network during the download, there will be no loss if the recovery happens within about 30 seconds.",
                ko: "다운로드 도중 네트워크에 문제가 발생하여도 약 30초 이내에 복구가 이루어진다면 손실이 발생하지 않습니다.",
              }),
              important: true,
            },
            T({
              en: "The probability of loss in live downloads is minimized, and detailed information is displayed if the file has loss due to network problems.",
              ko: "실시간 다운로드의 손실 확률을 최소화하였으며 네트워크 등의 문제로 생방송에 손실이 있다면 실시간으로 세부 정보를 표시합니다.",
            }),
            T({
              en: "Live download automatically blocks ads, and you can view the number and duration of the ads that have been blocked. (In previous versions, an alternative screen was displayed, but now the alternative screen is no longer displayed.)",
              ko: "이제 실시간 다운로드가 자동으로 생방송 광고를 차단하며 차단된 광고의 구간 수와 길이를 확인할 수 있습니다. (이전 버전에서는 광고 대체화면이 표시되었으나 이제 대체화면이 표시되지 않습니다.)",
            }),
            {
              text: T({
                en: "However, the video while the advertisement is running is not downloaded and the video may appear to be cut off in the middle.",
                ko: "단, 광고가 송출되는 시간 동안의 영상은 다운로드되지 않으며 영상이 중간에 끊어진 것처럼 보일 수 있습니다.",
              }),
              type: "information",
            },
            {
              text: T({
                en: "To prevent this from happening, log in with an account that has subscribed to the channel or an account with advertising benefits such as Twitch Turbo.",
                ko: "이러한 현상을 방지하려면 채널을 구독한 계정 또는 Twitch Turbo 등의 광고 혜택이 있는 계정으로 로그인하세요.",
              }),
              type: "information",
            },
          ],
        },
      },
      {
        version: "2.4.0",
        date: new Date("2023-06-01"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            T({
              en: "Added ability to run in the background (Minimize to system tray).",
              ko: "앱을 백그라운드에서 실행할 수 있습니다.(시스템 트레이로 최소화)",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.3.2",
        date: new Date("2023-02-20"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.3.1",
        date: new Date("2023-02-08"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.3.0",
        date: new Date("2023-02-06"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            {
              text: T({
                en: "'Scheduled downloads' has been added.(You can now schedule the download to start automatically when the live broadcast begins.)",
                ko: "'예약 다운로드' 기능이 추가되었습니다.(이제 생방송이 시작되면 자동으로 다운로드하도록 설정할 수 있습니다.)",
              }),
              important: true,
            },
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.2.3",
        date: new Date("2022-12-05"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            {
              text: T({
                en: "'Clipping Mode' has been added.",
                ko: "비디오 자르기 기능에 '클립 생성 모드'가 추가되었습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Improved content management features for streamers.",
                ko: "스트리머의 콘텐츠 관리 기능이 개선되었습니다.",
              }),
              important: true,
            },
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.2.2",
        date: new Date("2022-11-10"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.2.1",
        date: new Date("2022-09-23"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            {
              text: T({
                en: "You can view the number and length of segments that failed to unmute.",
                ko: "음소거 해제에 실패한 구간 수와 길이를 확인할 수 있습니다.",
              }),
              important: true,
            },
            T({
              en: "Fixed an issue where the length was not displayed correctly after cropping the video.",
              ko: "비디오 자르기 길이가 올바르게 표시되지 않는 문제를 해결하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.2.0",
        date: new Date("2022-08-30"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "New Features and Bug Fixes",
            ko: "신규 기능 및 버그 수정",
          }),
          items: [
            {
              text: T({
                en: "Added a new feature that allows you to quickly download with the previous option without opening the download menu.(Useful when doing a lot of downloads.)",
                ko: "다운로드 메뉴 창을 열지 않고 이전 옵션으로 빠르게 다운로드할 수 있는 기능이 추가되었습니다.(대량의 다운로드를 진행할 때 유용합니다.)",
              }),
              important: true,
            },
            {
              text: T({
                en: "You can retry a failed or canceled download.",
                ko: "실패하거나 취소한 다운로드를 다시 시도할 수 있습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "You can now view and manage your download history.",
                ko: "다운로드 기록을 보고 관리할 수 있습니다.",
              }),
              important: true,
            },
            T({
              en: "You can start a new download based on your download history.",
              ko: "다운로드 기록을 바탕으로 새 다운로드를 시작할 수 있습니다.",
            }),
            T({
              en: "Improved Update Tracking mode.",
              ko: "업데이트 추적 모드가 개선되었습니다.",
            }),
            T({
              en: "Improved video cropping.",
              ko: "비디오 자르기 기능이 개선되었습니다.",
            }),
            {
              text: T({
                en: "You can optimize your video.(Lowers the video quality but reduces the file size.)",
                ko: "비디오를 최적화할 수 있습니다.(비디오의 화질을 낮추지만 파일 용량이 크게 줄어듭니다.)",
              }),
              important: true,
            },
            T({
              en: "Fixed an issue where the app would crash under certain situations.",
              ko: "특정 상황에서 앱이 강제 종료되는 문제를 해결하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.1.0",
        date: new Date("2022-07-02"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "New Features and Bug Fixes",
            ko: "신규 기능 및 버그 수정",
          }),
          items: [
            T({
              en: "A new feature 'Smart Search' has been added.",
              ko: "통합 검색 기능이 추가되었습니다.",
            }),
            T({
              en: "Fixed an issue where the app would crash under certain situations.",
              ko: "특정 상황에서 앱이 강제 종료되는 문제를 해결하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.0.2",
        date: new Date("2022-06-19"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Several variables related to date/time have been added to the filename template.",
              ko: "파일명 생성 규칙에 날짜/시간과 관련된 여러 변수가 추가되었습니다.",
            }),
            T({
              en: "Fixed an issue where the app would crash under certain situations.",
              ko: "특정 상황에서 앱이 강제 종료되는 문제를 해결하였습니다.",
            }),
            T({
              en: "Fixed automatic app shutdown and automatic system shutdown not working under certain situations.",
              ko: "앱 자동 종료와 시스템 자동 종료가 특정 상황에서 작동하지 않는 문제점을 해결하였습니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.0.1",
        date: new Date("2022-05-11"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "2.0.0",
        date: new Date("2022-05-09"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Massive Update",
            ko: "대규모 업데이트",
          }),
          items: [
            {
              text: T({
                en: "[General]",
                ko: "[일반]",
              }),
              type: "section",
            },
            T({
              en: "Network speed has been improved.",
              ko: "네트워크 속도가 향상되었습니다.",
            }),
            T({
              en: "You can view detailed logs.",
              ko: "상세한 로그 기록을 볼 수 있습니다.",
            }),
            {
              text: T({
                en: "Fixed an issue with excessive memory(RAM) usage.",
                ko: "메모리(RAM)가 과도하게 사용되는 문제를 해결하였습니다.",
              }),
              important: true,
            },
            T({
              en: "Software optimized and stabilized.",
              ko: "소프트웨어 최적화 및 안정화를 진행하였습니다.",
            }),
            {
              text: T({
                en: "[Search]",
                ko: "[검색]",
              }),
              type: "section",
            },
            T({
              en: "You can refresh the search results.",
              ko: "검색 결과를 새로고침할 수 있습니다.",
            }),
            {
              text: T({
                en: "You can keep multiple search results in tabs.",
                ko: "여러 검색 결과를 탭으로 유지할 수 있습니다.",
              }),
              important: true,
            },
            T({
              en: "Fixed an issue where the search function would not correctly distinguish between video IDs and clip IDs under certain conditions.",
              ko: "특정 조건에서 검색 기능이 비디오 아이디와 클립 아이디를 올바르게 구별하지 못하는 문제를 해결하였습니다.",
            }),
            {
              text: T({
                en: "[Settings]",
                ko: "[설정]",
              }),
              type: "section",
            },
            T({
              en: "Fixed an issue where data was not saved correctly under certain conditions.",
              ko: "특정 조건에서 데이터가 올바르게 저장되지 않는 문제를 해결하였습니다.",
            }),
            {
              text: T({
                en: "[Download]",
                ko: "[다운로드]",
              }),
              type: "section",
            },
            {
              text: T({
                en: "Supports parallel downloads.",
                ko: "동시에 여러 다운로드를 진행할 수 있습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "You can set the download priority.",
                ko: "다운로드 우선순위를 설정할 수 있습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Fixed an issue where downloads could not be completed in a probability(mostly stuck at 99%).",
                ko: "확률적으로 다운로드가 완료되지 않는 문제(주로 99%에서 멈추는 문제)를 해결하였습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "You can view the number and length of missing segments.",
                ko: "누락된 구간 수와 길이를 확인할 수 있습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Live download blocks ads.",
                ko: "실시간 다운로드가 생방송 광고를 차단하여 다운로드합니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Secured stability of live downloads.",
                ko: "실시간 다운로드의 안정성을 확보하였습니다.",
              }),
              important: true,
            },
            T({
              en: "Keeps previously used folders, extensions, and additional options depending on the file type.",
              ko: "파일 형식에 따라 이전에 사용한 폴더, 확장자, 추가 옵션을 유지합니다.",
            }),
            T({
              en: "You can schedule an action to take place after all downloads are complete.",
              ko: "다운로드 완료 이후 수행할 작업을 예약할 수 있습니다.",
            }),
          ],
        },
      },
      {
        version: "1.1.1",
        date: new Date("2022-01-02"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes",
            ko: "버그 수정",
          }),
          items: [
            T({
              en: "Fixed an issue where the program crashed when downloading clips.",
              ko: "클립 다운로드 시 프로그램이 강제 종료되는 문제를 해결하였습니다.",
            }),
          ],
        },
      },
      {
        version: "1.1.0",
        date: new Date("2022-01-01"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Massive Update",
            ko: "대규모 업데이트",
          }),
          items: [
            {
              text: T({
                en: "[General]",
                ko: "[일반]",
              }),
              type: "section",
            },
            {
              text: T({
                en: "Fixed UI not displaying correctly on some devices and resolutions.",
                ko: "일부 장치 및 해상도에서 UI가 올바르게 표시되지 않는 문제를 해결하였습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "You can now freely resize the window.",
                ko: "이제 자유로운 창 크기 조절이 가능합니다.",
              }),
              important: true,
            },
            T({
              en: "Fixed 'Program not responding' issue.",
              ko: "네트워크 대기 중 응답 없음 상태가 되는 문제를 해결하였습니다.",
            }),
            T({
              en: "Temporary files that were not deleted due to abnormal termination are deleted in the next execution.",
              ko: "비정상 종료로 지워지지 않은 임시파일들은 다음 실행에 삭제됩니다.",
            }),
            T({
              en: "A software security patch has been applied.",
              ko: "소프트웨어 보안 패치를 적용하였습니다.",
            }),
            T({
              en: "Software optimized and stabilized.",
              ko: "소프트웨어 최적화 및 안정화를 진행하였습니다.",
            }),
            {
              text: T({
                en: "[Search]",
                ko: "[검색]",
              }),
              type: "section",
            },
            {
              text: T({
                en: "Improved channel search speed.",
                ko: "채널 검색 속도를 향상하였습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "URL Search now recognizes more various URLs.",
                ko: "이제 URL 검색에서 더 많은 URL을 인식합니다.",
              }),
              important: true,
            },
            T({
              en: "You can now view previous broadcast history in Channel tab.",
              ko: "이제 채널 정보에서 이전 방송 기록을 볼 수 있습니다.",
            }),
            T({
              en: "Fixed UI freezing while loading video list.",
              ko: "비디오 목록을 불러올 때 UI가 멈추는 문제를 해결하였습니다.",
            }),
            {
              text: T({
                en: "You can save thumbnails.",
                ko: "썸네일 이미지를 저장할 수 있습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "[Settings]",
                ko: "[설정]",
              }),
              type: "section",
            },
            {
              text: T({
                en: "Removed file extension restrictions.",
                ko: "파일 확장자 제한을 해제하였습니다.",
              }),
              important: true,
            },
            T({
              en: "Several variables have been added to the filename template, including 'resolution'.",
              ko: "파일명 생성 규칙에 resolution(해상도)을 포함한 여러 변수가 추가되었습니다.",
            }),
            {
              text: T({
                en: "[Download]",
                ko: "[다운로드]",
              }),
              type: "section",
            },
            {
              text: T({
                en: "You can now adjust the download speed.",
                ko: "이제 다운로드 속도 조절이 가능합니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Downloads can be paused.",
                ko: "이제 다운로드 일시정지가 가능합니다.",
              }),
              important: true,
            },
            T({
              en: "You can choose whether to unmute the video.",
              ko: "이제 음소거 해제 여부를 선택할 수 있습니다.",
            }),
            {
              text: T({
                en: "Temporary storage is no longer required for video downloads.",
                ko: "이제 비디오 다운로드에 임시 저장용량이 필요하지 않습니다.",
              }),
              important: true,
            },
            T({
              en: "You can now see the waiting time of Update Tracking mode.",
              ko: "이제 업데이트 추적 모드의 다운로드 대기 시간이 표시됩니다.",
            }),
            T({
              en: "You can now skip waiting in Update Tracking mode.",
              ko: "이제 업데이트 추적 모드의 다운로드 대기를 건너뛸 수 있습니다.",
            }),
            T({
              en: "Now you can skip directly to encoding during download.",
              ko: "이제 다운로드 도중 인코딩 작업으로 건너뛸 수 있습니다.",
            }),
            {
              text: T({
                en: "You can now see the download status directly in the taskbar.",
                ko: "이제 작업표시줄에서 다운로드 상태를 바로 볼 수 있습니다.",
              }),
              important: true,
            },
            T({
              en: "Improved video cropping.",
              ko: "비디오 자르기 기능이 개선되었습니다.",
            }),
            T({
              en: "You can now see exactly how long and cropped the video you are downloading.",
              ko: "이제 다운로드 중인 비디오 길이 및 자르기 범위를 정확하게 확인할 수 있습니다.",
            }),
            T({
              en: "Audio Only resolutions are now saved as audio files.",
              ko: "이제 Audio Only 해상도는 오디오 파일로 저장됩니다.",
            }),
            {
              text: T({
                en: "Fixed an issue where the program freezes when downloading some long videos.",
                ko: "일부 길이가 긴 비디오를 다운로드할 때 프로그램이 멈추는 문제를 해결하였습니다.",
              }),
              important: true,
            },
            {
              text: T({
                en: "Fixed an issue where mp4 files would not play if interrupted while downloading.",
                ko: "mp4 파일로 다운로드 도중 중단하면 파일이 재생되지 않는 문제를 해결하였습니다.",
              }),
              important: true,
            },
          ],
        },
      },
      {
        version: "1.0.4",
        date: new Date("2021-06-12"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes",
            ko: "버그 수정",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
          ],
        },
      },
      {
        version: "1.0.3",
        date: new Date("2021-02-18"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
            T({
              en: "Some features were improved.",
              ko: "일부 기능이 개선되었습니다.",
            }),
          ],
        },
      },
      {
        version: "1.0.2",
        date: new Date("2021-02-13"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "New Features and Improvements",
            ko: "새로운 기능 및 개선 사항",
          }),
          items: [
            {
              text: T({
                en: "You can log in or change your account immediately if you do not have permissions to download subscriber only videos.",
                ko: "이제 구독자 전용 비디오 다운로드 시 권한이 부족하면 바로 로그인하거나 계정을 변경할 수 있습니다.",
              }),
              important: true,
            },
            T({
              en: "Improved Update Tracking mode.",
              ko: "업데이트 추적 모드가 개선되었습니다.",
            }),
            {
              text: T({
                en: "New feature has been added to protect the rights of streamers.",
                ko: "스트리머의 권리 보호를 위한 기능이 추가되었습니다.",
              }),
              important: true,
            },
          ],
        },
      },
      {
        version: "1.0.1",
        date: new Date("2021-02-04"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "Bug Fixes and Improvements",
            ko: "버그 수정 및 개선 사항",
          }),
          items: [
            T({
              en: "The download screen displays details of the crop feature.",
              ko: "다운로드 화면에서 자르기 기능의 세부사항을 표시합니다.",
            }),
            T({
              en: "Future updates will show update notes.",
              ko: "이제 업데이트 노트가 표시됩니다.",
            }),
            T({
              en: "Some bugs were fixed.",
              ko: "일부 버그가 수정되었습니다.",
            }),
          ],
        },
      },
      {
        version: "1.0.0",
        date: new Date("2020-02-01"),
        binaries: ["windows"],
        isDeprecated: true,
        content: {
          title: T({
            en: "New Features",
            ko: "신규 기능",
          }),
          items: [
            T({
              en: "Stream Download Support",
              ko: "생방송 다운로드 지원",
            }),
            T({
              en: "Video Download Support",
              ko: "비디오 다운로드 지원",
            }),
            T({
              en: "Clip Download Support",
              ko: "클립 다운로드 지원",
            }),
            {
              text: T({
                en: "Subscribers-Only Video Download Support",
                ko: "구독자 전용 다시보기 다운로드 지원",
              }),
              important: true,
            },
            {
              text: T({
                en: "Video Unmute Support",
                ko: "음소거 해제 지원",
              }),
              important: true,
            },
            {
              text: T({
                en: "Video Cropping Support",
                ko: "비디오 부분 다운로드 지원",
              }),
              important: true,
            },
          ],
        },
      },
    ];
  }, [T]);

  const releaseNotes = useMemo(() => getReleaseNotes(), [getReleaseNotes]);

  const getLatestVersion = useCallback(() => {
    return releaseNotes[0].version;
  }, [releaseNotes]);

  const isValid = useCallback(
    (version: string, type: PlatformType) => {
      return releaseNotes.some((release) => release.version === version && release.binaries.includes(type));
    },
    [releaseNotes]
  );

  return {
    releaseNotes,
    getLatestVersion,
    isValid,
  };
};
