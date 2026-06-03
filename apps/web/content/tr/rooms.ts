import type { RoomsPageContent } from "@/lib/types/content";
import type { RoomPublicInfo } from "@/lib/types/hotel";

export const publicRoomInfo: RoomPublicInfo = {
  id: "standard-room",
  slug: "rooms",
  name: "Odalar",
  shortDescription:
    "Palmiye Nature Hotel & Yacht Club'da sade, sicak ve konforlu butik oda deneyimi.",
  description:
    "Otelin 14 odasi su an tek bir genel konaklama deneyimi olarak sunulur. Odalar; dogaya, marina atmosferine ve otelin sakin butik olcegine yakin kalmak isteyen misafirler icin rahat bir temel olusturur.",
  capacityNote:
    "Kisi kapasitesi ve yatak duzeni rezervasyon sirasinda otel tarafindan teyit edilir.",
  amenities: [
    "Konforlu butik oda atmosferi",
    "Sakin konaklama hissi",
    "Restoran, pool bar ve teras bar alanlarina yakinlik",
    "Dogrudan iletisimle rezervasyon destegi",
  ],
  featuredImage: {
    src: "/images/rooms/boutique-room.jpg",
    alt: "Palmiye Nature Hotel icinde sade ve konforlu oda",
  },
  images: [
    {
      src: "/images/rooms/boutique-room.jpg",
      alt: "Palmiye Nature Hotel butik oda gorunumu",
    },
    {
      src: "/images/rooms/room-detail.jpg",
      alt: "Palmiye Nature Hotel oda detayi",
    },
  ],
  cta: {
    label: "Musaitlik Sor",
    href: "/contact",
    kind: "internal",
  },
};

export const roomsPageContent: RoomsPageContent = {
  seo: {
    title: "Odalar | Palmiye Nature Hotel & Yacht Club",
    description:
      "Palmiye Nature Hotel & Yacht Club'da 14 odali butik olcege uygun, sade ve konforlu oda deneyimi.",
    ogImage: "/images/rooms/boutique-room.jpg",
  },
  hero: {
    eyebrow: "Odalar",
    title: "Sakin bir butik konaklama icin konforlu odalar.",
    subtitle:
      "Palmiye Nature odalari, otelin 14 odali sakin yapisini ve marina atmosferine yakin konumunu destekleyen sade bir konaklama deneyimi sunar.",
    image: publicRoomInfo.featuredImage,
    primaryCta: publicRoomInfo.cta,
  },
  overview: {
    id: "rooms-overview",
    title: "Tek genel oda deneyimi",
    description:
      "Su an odalar kamuya acik sitede ayri kategorilere bolunmez. Misafirler icin odak, otelin butik olcegi, konforlu odalari ve dogrudan iletisimle net rezervasyon bilgisidir.",
    image: publicRoomInfo.featuredImage,
    cta: publicRoomInfo.cta,
  },
};
