"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { type LanguageType } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";

type LanguageContextType = {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  isSupportedLanguage: (language: LanguageType) => boolean;
  getSupportedLanguages: () => LanguageType[];
  isDefaultLanguage: (language: LanguageType) => boolean;
  getLanguageDisplayName: (language: LanguageType) => string;
  T: (props: { [key in LanguageType]: string }) => string;
};

const SUPPORTED_LANGUAGES: LanguageType[] = ["en", "ko"];

const LANGUAGE_DISPLAY_NAMES: { [key in LanguageType]: string } = {
  en: "English",
  ko: "한국어",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState<LanguageType>(() => {
    const requestedLanguage = searchParams.get("lang") as LanguageType;
    if (requestedLanguage && SUPPORTED_LANGUAGES.includes(requestedLanguage)) {
      return requestedLanguage;
    }
    return SUPPORTED_LANGUAGES[0];
  });

  const getClientPreferredLanguage = useCallback(() => {
    const requestedLanguage = searchParams.get("lang") as LanguageType;
    if (requestedLanguage && SUPPORTED_LANGUAGES.includes(requestedLanguage)) {
      return requestedLanguage;
    }
    const savedLanguage = localStorage.getItem("language") as LanguageType;
    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }
    const browserLang = navigator.language.split("-")[0] as LanguageType;
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }
    return SUPPORTED_LANGUAGES[0];
  }, [searchParams]);

  useEffect(() => {
    setLanguage(getClientPreferredLanguage());
  }, [getClientPreferredLanguage]);

  const isSupportedLanguage = useCallback((language: LanguageType) => {
    return SUPPORTED_LANGUAGES.includes(language);
  }, []);

  const getSupportedLanguages = useCallback(() => {
    return SUPPORTED_LANGUAGES;
  }, []);

  const isDefaultLanguage = useCallback((language: LanguageType) => {
    return language === SUPPORTED_LANGUAGES[0];
  }, []);

  const getLanguageDisplayName = useCallback((language: LanguageType) => {
    return LANGUAGE_DISPLAY_NAMES[language];
  }, []);

  const T = useCallback(
    (props: { [key in LanguageType]: string }): string => {
      return props[language];
    },
    [language]
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (language === SUPPORTED_LANGUAGES[0]) {
      params.delete("lang");
    } else {
      params.set("lang", language);
    }
    router.replace(`?${params.toString()}`, { scroll: false });
    localStorage.setItem("language", language);
  }, [language, router, searchParams]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isSupportedLanguage, getSupportedLanguages, isDefaultLanguage, getLanguageDisplayName, T }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
