import type { RoomsPageContent } from "@/lib/types/content";
import type { RoomPublicInfo } from "@/lib/types/hotel";

export const publicRoomInfo: RoomPublicInfo = {
  id: "standard-room",
  slug: "rooms",
  name: "Odalar",
  shortDescription:
    "Palmiye Nature Hotel & Yacht Club'da sade, sıcak ve konforlu butik oda deneyimi.",
  description:
    "Otelin 14 odalı sakin yapısı, doğaya ve marina atmosferine yakın, sade ve rahat bir konaklama hissi sunar.",
  capacityNote:
    "Kişi kapasitesi ve yatak düzeni rezervasyon sırasında otel tarafından teyit edilir.",
  amenities: [
    "Konforlu butik oda atmosferi",
    "Sakin konaklama hissi",
    "Restoran, pool bar ve teras bar alanlarına yakınlık",
    "Doğrudan iletişimle rezervasyon desteği",
  ],
  featuredImage: {
    src: "/images/rooms/boutique-room.jpg",
    alt: "Palmiye Nature Hotel içinde sade ve konforlu oda",
  },
  images: [
    {
      src: "/images/rooms/boutique-room.jpg",
      alt: "Palmiye Nature Hotel butik oda görünümü",
    },
    {
      src: "/images/rooms/room-detail.jpg",
      alt: "Palmiye Nature Hotel oda detayı",
    },
  ],
  cta: {
    label: "Müsaitlik Sor",
    href: "/contact",
    kind: "internal",
  },
};

export const roomsPageContent: RoomsPageContent = {
  seo: {
    title: "Odalar | Palmiye Nature Hotel & Yacht Club",
    description:
      "Palmiye Nature Hotel & Yacht Club'da 14 odalı butik ölçeğe uygun, sade ve konforlu oda deneyimi.",
    ogImage: "/images/rooms/boutique-room.jpg",
  },
  hero: {
    eyebrow: "Odalar",
    title: "Sakin bir butik konaklama için konforlu odalar.",
    subtitle:
      "Palmiye Nature odaları, otelin 14 odalı sakin yapısını ve marina atmosferine yakın konumunu destekleyen sade bir konaklama deneyimi sunar.",
    image: publicRoomInfo.featuredImage,
    primaryCta: publicRoomInfo.cta,
  },
  overview: {
    id: "rooms-overview",
    title: "Sade ve sakin oda atmosferi",
    description:
      "Misafirler için odak; otelin butik ölçeği, konforlu odaları ve doğrudan iletişimle net rezervasyon bilgisidir.",
    image: publicRoomInfo.featuredImage,
    cta: publicRoomInfo.cta,
  },
};
