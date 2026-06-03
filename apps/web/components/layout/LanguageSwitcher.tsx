"use client";

import { useLocale, useTranslations } from "next-intl";
import { locales, type Locale } from "@/lib/i18n/config";
import { usePathname, useRouter } from "@/lib/i18n/navigation";

const languageOptions = [
  { locale: "tr", labelKey: "turkish" },
  { locale: "en", labelKey: "english" },
] as const satisfies ReadonlyArray<{
  locale: Locale;
  labelKey: string;
}>;

export function LanguageSwitcher() {
  const activeLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("language");

  function handleLocaleChange(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <label className="inline-flex items-center gap-2 text-sm text-stone-700">
      <span className="sr-only">{t("selectLanguage")}</span>
      <select
        aria-label={t("selectLanguage")}
        className="min-h-10 rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
        value={activeLocale}
        onChange={(event) => handleLocaleChange(event.target.value as Locale)}
      >
        {locales.map((locale) => {
          const option = languageOptions.find((item) => item.locale === locale);

          return (
            <option key={locale} value={locale}>
              {option ? t(option.labelKey) : locale}
            </option>
          );
        })}
      </select>
    </label>
  );
}
