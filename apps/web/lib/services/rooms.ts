import { publicRoomInfo as enPublicRoomInfo } from "@/content/en/rooms";
import { publicRoomInfo as trPublicRoomInfo } from "@/content/tr/rooms";
import type { Locale } from "@/lib/i18n/config";
import type { LocaleContentMap } from "@/lib/types/content";
import type { RoomPublicInfo } from "@/lib/types/hotel";

const publicRoomInfoByLocale: LocaleContentMap<RoomPublicInfo> = {
  tr: trPublicRoomInfo,
  en: enPublicRoomInfo,
};

export async function getPublicRoomInfo(
  locale: Locale,
): Promise<RoomPublicInfo> {
  return publicRoomInfoByLocale[locale];
}
