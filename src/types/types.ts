export type PlatformType = "windows" | "macos";

export type LanguageType = "en" | "ko";

export type ReleaseBinaryInfo = {
  version: string;
  platform: PlatformType;
};

export type ReleaseNote = {
  version: string;
  date: Date;
  isDeprecated?: boolean;
  binaries: PlatformType[];
  content: {
    title: string;
    items: (string | { text: string; type?: "section" | "sub-item" | "information"; important?: boolean })[];
  };
};

export type RouteList = "/" | "/releases" | "/docs" | "/support" | "/donate" | "/report" | "/release";
