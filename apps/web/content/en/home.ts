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
      label: "Plan Your Stay",
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
      id: "story",
      eyebrow: "The rhythm of Palmiye",
      title: "Small in scale, warm in feeling, close to the marina.",
      description:
        "The day moves gently between the marina atmosphere, the restaurant, the quiet pool area and sunset moments on the terrace.",
      image: {
        src: "/images/gallery/palmiye-social-areas.jpg",
        alt: "Warm evening atmosphere in the social areas at Palmiye Nature Hotel",
      },
    },
    {
      id: "rooms",
      eyebrow: "Rooms",
      title: "Simple and comfortable rooms",
      description:
        "A simple, warm room experience for a calm stay close to nature and the marina atmosphere.",
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
    title: "Contact the hotel directly",
    description:
      "Contact the hotel directly for availability and reservation information.",
    primaryCta: {
      label: "Contact Us",
      href: "/contact",
      kind: "internal",
    },
    whatsappMessage:
      "Hello, I would like to get availability and reservation information for Palmiye Nature Hotel & Yacht Club.",
  },
  finalCta: {
    title: "Ready for a calm Marmaris stay? Talk to Palmiye.",
    description:
      "For dates, guest details and reservation questions, the clearest next step is direct contact with the hotel.",
    primaryCta: {
      label: "Plan Your Stay",
      href: "/contact",
      kind: "internal",
    },
  },
};
