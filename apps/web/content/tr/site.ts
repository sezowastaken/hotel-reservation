import { defaultLocale, locales } from "@/lib/i18n/config";
import {
  HOTEL_NAME,
  HOTEL_SHORT_NAME,
  PUBLIC_ROOM_COUNT,
} from "@/content/shared/constants";
import type { SiteSettings } from "@/lib/types/hotel";

export const siteSettings: SiteSettings = {
  hotelName: HOTEL_NAME,
  shortName: HOTEL_SHORT_NAME,
  defaultLocale,
  supportedLocales: locales,
  publicRoomCount: PUBLIC_ROOM_COUNT,
  contact: {
    phone: "+90 506 464 55 91",
    email: "info@palmiyenature.com",
    whatsappNumber: "905064645591",
    needsOwnerConfirmation: false,
  },
  socialLinks: [
    {
      platform: "instagram",
      url: null,
      needsOwnerConfirmation: true,
    },
  ],
  location: {
    address: null,
    mapUrl: null,
    mapEmbedUrl: null,
    needsOwnerConfirmation: true,
  },
  reservation: {
    whatsappEnabled: true,
    defaultWhatsappMessage:
      "Merhaba, Palmiye Nature Hotel & Yacht Club icin musaitlik ve rezervasyon bilgisi almak istiyorum.",
  },
};
