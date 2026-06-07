"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { locales, type Locale } from "@/lib/i18n/config";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils/classNames";

const languageOptions = [
  { locale: "tr", labelKey: "turkish", shortLabel: "TR" },
  { locale: "en", labelKey: "english", shortLabel: "EN" },
] as const satisfies ReadonlyArray<{
  locale: Locale;
  labelKey: string;
  shortLabel: string;
}>;

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const activeLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("language");
  const activeOption = languageOptions.find(
    (option) => option.locale === activeLocale,
  );

  function handleLocaleChange(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  }

  return (
    <div className="relative inline-flex">
      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={t("selectLanguage")}
        className="inline-flex size-10 items-center justify-center rounded-full border border-[#123A32]/15 bg-[#EFE4D2] text-xs font-semibold text-[#123A32] shadow-sm transition hover:border-[#C47A55]/45 hover:bg-[#F4EBDC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A55]"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        {activeOption?.shortLabel ?? activeLocale.toUpperCase()}
      </button>

      {isOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
        >
          <button
            aria-label={t("close")}
            className="absolute inset-0 bg-[#0F2F2A]/35"
            type="button"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-sm rounded-2xl border border-[#123A32]/12 bg-[#F7F1E7] p-4 text-[#1F2421] shadow-[0_24px_80px_rgba(18,58,50,0.22)]">
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-xl font-medium text-[#123A32]">
                {t("selectLanguage")}
              </p>
              <button
                aria-label={t("close")}
                className="inline-flex size-9 items-center justify-center rounded-full border border-[#123A32]/12 text-lg text-[#123A32] hover:border-[#C47A55]/45 hover:text-[#8F4E3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A55]"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="mt-4 grid gap-2">
              {locales.map((locale) => {
                const option = languageOptions.find(
                  (item) => item.locale === locale,
                );
                const isCurrent = locale === activeLocale;

                return (
                  <button
                    aria-current={isCurrent ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C47A55]",
                      isCurrent
                        ? "border-[#C47A55]/45 bg-[#EFE4D2] text-[#123A32]"
                        : "border-[#123A32]/10 bg-[#FBF7EF] text-[#343A36] hover:border-[#C47A55]/35",
                    )}
                    key={locale}
                    type="button"
                    onClick={() => handleLocaleChange(locale)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#123A32] text-xs font-semibold text-[#FFF8EC]">
                        {option?.shortLabel ?? locale.toUpperCase()}
                      </span>
                      <span>{option ? t(option.labelKey) : locale}</span>
                    </span>
                    {isCurrent ? (
                      <span aria-hidden="true" className="text-[#C47A55]">
                        ✓
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
