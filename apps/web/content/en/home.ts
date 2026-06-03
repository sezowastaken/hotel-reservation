import type { HomePageContent } from "@/lib/types/content";

export const homePageContent: HomePageContent = {
  seo: {
    title: "Palmiye Nature Hotel & Yacht Club | Marmaris Boutique Hotel",
    description:
      "A calm boutique hotel in Marmaris with nature, marina atmosphere, restaurant, pool bar and rooftop terrace.",
    ogImage: "/images/hero/palmiye-marina-sunset.jpg",
  },
  hero: {
    eyebrow: "Boutique stay in Marmaris",
    title: "A calm boutique hotel by nature, marina and sunset.",
    subtitle:
      "Palmiye Nature Hotel & Yacht Club offers a peaceful 14-room boutique stay with restaurant, pool bar and rooftop terrace atmosphere.",
    image: {
      src: "/images/hero/palmiye-marina-sunset.jpg",
      alt: "Sunset over the marina near Palmiye Nature Hotel",
    },
    primaryCta: {
      label: "Book via WhatsApp",
      href: "/contact",
      kind: "internal",
    },
    secondaryCta: {
      label: "Explore the Hotel",
      href: "/gallery",
      kind: "internal",
    },
  },
  highlights: [
    {
      id: "boutique-scale",
      title: "14-room boutique scale",
      description:
        "The small scale keeps the stay calm, simple and close to the feeling of a boutique coastal hotel.",
    },
    {
      id: "marina-atmosphere",
      title: "Marina atmosphere",
      description:
        "The marina and yacht club feeling in front of the hotel brings a relaxed coastal rhythm to the day.",
    },
    {
      id: "social-spaces",
      title: "Restaurant, pool bar and terrace",
      description:
        "The restaurant, pool bar and top-floor terrace bar create different places to slow down throughout the day.",
    },
  ],
  sections: [
    {
      id: "rooms",
      eyebrow: "Rooms",
      title: "Simple and comfortable rooms",
      description:
        "All rooms are presented as one general stay experience: calm, warm and suited to the hotel's boutique scale.",
      image: {
        src: "/images/rooms/boutique-room.jpg",
        alt: "Comfortable boutique room at Palmiye Nature Hotel",
      },
      cta: {
        label: "View Rooms",
        href: "/rooms",
        kind: "internal",
      },
    },
    {
      id: "experiences",
      eyebrow: "Experiences",
      title: "Different atmospheres through the day",
      description:
        "Restaurant, marina, pool bar and rooftop terrace are the main spaces that shape a calm stay close to nature.",
      image: {
        src: "/images/gallery/palmiye-social-areas.jpg",
        alt: "Social areas at Palmiye Nature Hotel",
      },
      cta: {
        label: "View Gallery",
        href: "/gallery",
        kind: "internal",
      },
    },
  ],
  reservationCta: {
    title: "Plan your stay",
    description:
      "Contact the hotel directly for availability and reservation information.",
    primaryCta: {
      label: "Ask Availability",
      href: "/contact",
      kind: "internal",
    },
    whatsappMessage:
      "Hello, I would like to get availability and reservation information for Palmiye Nature Hotel & Yacht Club.",
  },
};
