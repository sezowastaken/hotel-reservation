import { defineRouting } from "next-intl/routing";

export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const pathnames = {
  "/": "/",
  "/rooms": "/rooms",
  "/restaurant": "/restaurant",
  "/marina": "/marina",
  "/pool-bar": "/pool-bar",
  "/rooftop-terrace": "/rooftop-terrace",
  "/gallery": "/gallery",
  "/contact": "/contact",
} as const;

export type PublicPathname = keyof typeof pathnames;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  pathnames,
});

export function isSupportedLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
