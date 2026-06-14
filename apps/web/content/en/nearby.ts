import type { NearbySectionContent } from "@/components/sections/NearbySection";

export const nearbySectionContent: NearbySectionContent = {
  eyebrow: "Nearby",
  title: "Quiet routes starting from Orhaniye",
  body: "Palmiye Nature Hotel & Yacht Club is more than a place to stay. Its location near the calm coastal atmosphere of Hisarönü Gulf makes it a warm starting point for discovering the slower, more natural side of Marmaris.",
  bodySecond:
    "Kızkumu, Turgut Waterfall, Selimiye, Bozburun, and Söğüt complete the Palmiye experience with coastal stops, nature breaks, and sunset routes.",
  highlights: [
    { label: "Coastal routes" },
    { label: "Nature breaks" },
    { label: "Sunset stops" },
  ],
  cta: {
    label: "Explore Nearby",
    href: "/nearby",
  },
  mapImage: {
    src: "/images/general/palmiye-coastline-map.png",
    alt: "Decorative coastline map showing Hisarönü Gulf and surrounding area",
  },
};
