"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function UrlHandler() {
  const router = useRouter();

  useEffect(() => {
    const checkUrl = new URL(window.location.href);
    const pageLocation = checkUrl.searchParams.get("location");
    if (pageLocation != null) {
      checkUrl.pathname = pageLocation;
      checkUrl.searchParams.delete("location");
      router.push(checkUrl.href);
    }
  }, [router]);

  return null;
}
