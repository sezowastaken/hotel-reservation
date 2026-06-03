import { contactPageContent as enContactPageContent } from "@/content/en/contact";
import { homePageContent as enHomePageContent } from "@/content/en/home";
import { roomsPageContent as enRoomsPageContent } from "@/content/en/rooms";
import { contactPageContent as trContactPageContent } from "@/content/tr/contact";
import { homePageContent as trHomePageContent } from "@/content/tr/home";
import { roomsPageContent as trRoomsPageContent } from "@/content/tr/rooms";
import type { Locale } from "@/lib/i18n/config";
import type {
  ContactPageContent,
  HomePageContent,
  LocaleContentMap,
  RoomsPageContent,
} from "@/lib/types/content";

const homePageContentByLocale: LocaleContentMap<HomePageContent> = {
  tr: trHomePageContent,
  en: enHomePageContent,
};

const roomsPageContentByLocale: LocaleContentMap<RoomsPageContent> = {
  tr: trRoomsPageContent,
  en: enRoomsPageContent,
};

const contactPageContentByLocale: LocaleContentMap<ContactPageContent> = {
  tr: trContactPageContent,
  en: enContactPageContent,
};

export async function getHomePageContent(
  locale: Locale,
): Promise<HomePageContent> {
  return homePageContentByLocale[locale];
}

export async function getRoomsContent(
  locale: Locale,
): Promise<RoomsPageContent> {
  return roomsPageContentByLocale[locale];
}

export async function getContactContent(
  locale: Locale,
): Promise<ContactPageContent> {
  return contactPageContentByLocale[locale];
}
