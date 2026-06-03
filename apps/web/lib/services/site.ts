import { physicalRoomUnits } from "@/content/shared/constants";
import { siteSettings as enSiteSettings } from "@/content/en/site";
import { siteSettings as trSiteSettings } from "@/content/tr/site";
import type { Locale } from "@/lib/i18n/config";
import type { LocaleContentMap } from "@/lib/types/content";
import type { PhysicalRoomUnit, SiteSettings } from "@/lib/types/hotel";

const siteSettingsByLocale: LocaleContentMap<SiteSettings> = {
  tr: trSiteSettings,
  en: enSiteSettings,
};

export async function getSiteSettings(
  locale: Locale,
): Promise<SiteSettings> {
  return siteSettingsByLocale[locale];
}

export async function getPhysicalRoomUnits(): Promise<PhysicalRoomUnit[]> {
  return physicalRoomUnits.map((room) => ({ ...room }));
}
