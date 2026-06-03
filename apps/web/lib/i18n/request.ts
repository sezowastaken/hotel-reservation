import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n/config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !isSupportedLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
