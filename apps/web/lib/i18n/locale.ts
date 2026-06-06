import { notFound } from "next/navigation";
import { isSupportedLocale, type Locale } from "@/lib/i18n/config";

export type LocaleRouteParams = Promise<{
  locale: string;
}>;

export async function getValidatedLocale(
  params: LocaleRouteParams,
): Promise<Locale> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return locale;
}
