import { useCallback, useMemo } from "react";
import { type PlatformType } from "@/types/types";

export function usePlatform() {
  const detectPlatform = useCallback((): PlatformType | null => {
    if (typeof window === "undefined") {
      return null;
    }
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("win") !== -1) {
      return "windows";
    } else if (userAgent.indexOf("mac") !== -1) {
      return "macos";
    } else {
      return null;
    }
  }, []);

  const getPlatformDisplayName = useCallback((platform: PlatformType): string => {
    switch (platform) {
      case "windows":
        return "Windows";
      case "macos":
        return "macOS";
      default:
        return "Unknown";
    }
  }, []);

  const currentPlatform = useMemo(() => detectPlatform(), [detectPlatform]);

  return {
    currentPlatform,
    getPlatformDisplayName,
  };
}
