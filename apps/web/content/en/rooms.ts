import type { RoomsPageContent } from "@/lib/types/content";
import type { RoomPublicInfo } from "@/lib/types/hotel";

export const publicRoomInfo: RoomPublicInfo = {
  id: "standard-room",
  slug: "rooms",
  name: "Rooms",
  shortDescription:
    "A simple, warm and comfortable boutique room experience at Palmiye Nature Hotel & Yacht Club.",
  description:
    "The hotel's 14 rooms are currently presented as one general stay experience. The rooms offer a calm and comfortable base for guests who want to stay close to nature, the marina atmosphere and the hotel's boutique scale.",
  capacityNote:
    "Guest capacity and bed setup are confirmed directly by the hotel during the reservation inquiry.",
  amenities: [
    "Comfortable boutique room atmosphere",
    "Calm stay experience",
    "Close to restaurant, pool bar and terrace bar areas",
    "Direct reservation support through hotel contact",
  ],
  featuredImage: {
    src: "/images/rooms/boutique-room.jpg",
    alt: "Simple and comfortable room at Palmiye Nature Hotel",
  },
  images: [
    {
      src: "/images/rooms/boutique-room.jpg",
      alt: "Boutique room view at Palmiye Nature Hotel",
    },
    {
      src: "/images/rooms/room-detail.jpg",
      alt: "Room detail at Palmiye Nature Hotel",
    },
  ],
  cta: {
    label: "Ask Availability",
    href: "/contact",
    kind: "internal",
  },
};

export const roomsPageContent: RoomsPageContent = {
  seo: {
    title: "Rooms | Palmiye Nature Hotel & Yacht Club",
    description:
      "A simple and comfortable room experience shaped around the 14-room boutique scale of Palmiye Nature Hotel & Yacht Club.",
    ogImage: "/images/rooms/boutique-room.jpg",
  },
  hero: {
    eyebrow: "Rooms",
    title: "Comfortable rooms for a calm boutique stay.",
    subtitle:
      "Palmiye Nature rooms support a simple stay close to the marina atmosphere, nature and the calm rhythm of the hotel.",
    image: publicRoomInfo.featuredImage,
    primaryCta: publicRoomInfo.cta,
  },
  overview: {
    id: "rooms-overview",
    title: "One public room experience",
    description:
      "The public website does not split rooms into separate categories for now. The focus is the hotel's boutique scale, comfortable rooms and direct reservation communication.",
    image: publicRoomInfo.featuredImage,
    cta: publicRoomInfo.cta,
  },
};
