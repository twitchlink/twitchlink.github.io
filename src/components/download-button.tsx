"use client";

import { useState, useEffect, useCallback, useRef, HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import { Monitor, ChevronDown } from "lucide-react";
import { SiApple } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { usePlatform } from "@/hooks/use-platform";
import { type PlatformType } from "@/types/types";
import { useReleaseNotes } from "@/hooks/use-release-notes";
import { useHref } from "@/hooks/use-href";

interface DownloadButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  binaries?: PlatformType[];
  version?: string;
  showAppName?: boolean;
  fullWidth?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export function DownloadButton({
  className = "",
  size = "default",
  showIcon = true,
  binaries = [],
  version,
  showAppName = false,
  fullWidth = false,
  target = "_self",
}: DownloadButtonProps) {
  const { T } = useLanguage();
  const { createRouteHref } = useHref();
  const { getLatestVersion } = useReleaseNotes();
  const { currentPlatform, getPlatformDisplayName } = usePlatform();
  const [platforms, setPlatforms] = useState<PlatformType[]>(() => {
    const items: PlatformType[] = binaries.length === 0 ? ["windows", "macos"] : [...binaries];
    const current = currentPlatform as PlatformType;
    const index = items.indexOf(current);
    if (index > -1) {
      items.splice(index, 1);
      items.unshift(current);
    }
    return items;
  });
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getPlatformIcon = useCallback(
    (downloadPlatform: PlatformType) => {
      switch (downloadPlatform) {
        case "windows":
          return <Monitor className={size === "sm" ? "mr-2 h-4 w-4" : "mr-2 h-5 w-5"} />;
        case "macos":
          return <SiApple className={size === "sm" ? "mr-2 h-4 w-4" : "mr-2 h-5 w-5"} />;
        default:
          return null;
      }
    },
    [size]
  );

  const getPlatformDownloadUrl = useCallback(
    (downloadPlatform: PlatformType, version?: string) => {
      return createRouteHref("/donate", { download: version || getLatestVersion(), platform: downloadPlatform || "windows" });
    },
    [getLatestVersion, createRouteHref]
  );

  const getButtonText = useCallback(
    (platform: PlatformType) => {
      const items = [];
      if (showAppName) {
        items.push(
          T({
            en: `Download TwitchLink for ${getPlatformDisplayName(platform)}`,
            ko: `${getPlatformDisplayName(platform)}용 TwitchLink 다운로드`,
          })
        );
      } else {
        items.push(
          T({
            en: `Download for ${getPlatformDisplayName(platform)}`,
            ko: `${getPlatformDisplayName(platform)}용 다운로드`,
          })
        );
      }
      if (version) {
        items.push(version);
      }
      return items.join(" ");
    },
    [showAppName, version, getPlatformDisplayName, T]
  );

  return (
    <div className={`relative ${className} ${fullWidth ? "w-full" : ""}`} ref={menuRef}>
      <div className={`flex overflow-hidden rounded-md ${fullWidth ? "w-full" : ""}`}>
        <Link href={getPlatformDownloadUrl(platforms[0], version)} target={target} className={`flex ${fullWidth ? "w-full" : ""}`}>
          <Button className={`rounded-none bg-green-500 text-white hover:bg-green-600 ${fullWidth ? "flex-grow" : ""}`} size={size}>
            {showIcon && getPlatformIcon(platforms[0])}
            {getButtonText(platforms[0])}
          </Button>
        </Link>

        {platforms.length > 1 && (
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-none border-l border-green-600/50 bg-green-500 px-2 text-white hover:bg-green-600"
            size={size}
          >
            <ChevronDown className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 w-64 overflow-hidden rounded-md border border-border bg-white shadow-lg animate-in fade-in-0 zoom-in-95 dark:bg-gray-800">
          <div className="py-1">
            {platforms.map((platform: PlatformType) => (
              <Link
                key={platform}
                href={getPlatformDownloadUrl(platform, version)}
                target={target}
                className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {platform === "windows" && <Monitor className="mr-2 h-4 w-4" />}
                {platform === "macos" && <SiApple className="mr-2 h-4 w-4" />}
                {T({
                  en: `Download for ${getPlatformDisplayName(platform)}`,
                  ko: `${getPlatformDisplayName(platform)}용 다운로드`,
                })}
              </Link>
            ))}

            {binaries.length === 0 && (
              <>
                <div className="my-1 border-t border-border"></div>
                <Link
                  href={createRouteHref("/releases")}
                  className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronDown className="mr-2 h-4 w-4" />
                  {T({
                    en: "View Other Versions",
                    ko: "다른 버전 보기",
                  })}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
