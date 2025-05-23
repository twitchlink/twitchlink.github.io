import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "./use-language";
import { RouteList } from "@/types/types";

export function useHref() {
  const searchParams = useSearchParams();
  const { language, isDefaultLanguage } = useLanguage();

  const createRouteHref = useCallback(
    (path: RouteList, params?: { [key: string]: string }, options?: { disableDefaultParams?: boolean; preserveExistingParams?: boolean }) => {
      const urlSearchParams = new URLSearchParams(options?.preserveExistingParams ? searchParams.toString() : "");
      if (!options?.disableDefaultParams && !isDefaultLanguage(language)) {
        urlSearchParams.set("lang", language);
      }
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          urlSearchParams.set(key, value);
        });
      }
      return `${path}${urlSearchParams.toString() ? `?${urlSearchParams.toString()}` : ""}`;
    },
    [searchParams, language, isDefaultLanguage]
  );

  return {
    createRouteHref,
  };
}
