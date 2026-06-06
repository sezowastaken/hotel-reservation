import type { Experience } from "@/lib/types/hotel";

export const experiences: Experience[] = [
  {
    id: "restaurant",
    slug: "restaurant",
    type: "restaurant",
    title: "Restaurant",
    shortDescription:
      "A relaxed front-of-hotel space for meals and easy gatherings during the day.",
    description:
      "The restaurant area completes the social side of Palmiye Nature in front of the hotel. It offers a relaxed and welcoming atmosphere for meals that fit the rhythm of the day.",
    image: {
      src: "/images/restaurant/restaurant-front.jpg",
      alt: "Social garden area near the front of Palmiye Nature Hotel",
    },
    galleryImages: [
      {
        src: "/images/restaurant/restaurant-front.jpg",
        alt: "Front garden and social area near the hotel",
      },
    ],
    cta: {
      label: "View Restaurant",
      href: "/restaurant",
      kind: "internal",
    },
    seo: {
      title: "Restaurant | Palmiye Nature Hotel & Yacht Club",
      description:
        "The restaurant in front of Palmiye Nature Hotel adds a relaxed meal and gathering space to the boutique hotel atmosphere.",
      ogImage: "/images/restaurant/restaurant-front.jpg",
    },
  },
  {
    id: "marina",
    slug: "marina",
    type: "marina",
    title: "Marina and Yacht Club Atmosphere",
    shortDescription:
      "The marina feeling in front of the hotel adds a coastal and boat-side rhythm to the stay.",
    description:
      "The marina and yacht club atmosphere is one of the strongest feelings around Palmiye Nature. Boat views, calm bay air and sunset light support the hotel's boutique character.",
    image: {
      src: "/images/marina/marina-view.jpg",
      alt: "Marina view near Palmiye Nature Hotel",
    },
    galleryImages: [
      {
        src: "/images/marina/marina-view.jpg",
        alt: "Marina and boat atmosphere",
      },
    ],
    cta: {
      label: "Explore Marina",
      href: "/marina",
      kind: "internal",
    },
    seo: {
      title: "Marina | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel offers a calm boutique stay close to marina and yacht club atmosphere.",
      ogImage: "/images/marina/marina-view.jpg",
    },
  },
  {
    id: "pool-bar",
    slug: "pool-bar",
    type: "pool-bar",
    title: "Pool Bar",
    shortDescription:
      "A relaxed meeting point by the pool for cooling down and slowing the day.",
    description:
      "The pool and pool bar area behind the hotel creates a comfortable daytime atmosphere for guests who want to rest, refresh and stay close to the hotel.",
    image: {
      src: "/images/pool/pool-bar.jpg",
      alt: "Aerial view of the hotel surroundings and pool area",
    },
    galleryImages: [
      {
        src: "/images/pool/pool-bar.jpg",
        alt: "Hotel surroundings with pool area visible",
      },
    ],
    cta: {
      label: "View Pool Bar",
      href: "/pool-bar",
      kind: "internal",
    },
    seo: {
      title: "Pool Bar | Palmiye Nature Hotel & Yacht Club",
      description:
        "The pool bar at Palmiye Nature Hotel offers a calm and relaxed atmosphere beside the pool.",
      ogImage: "/images/pool/pool-bar.jpg",
    },
  },
  {
    id: "rooftop-terrace",
    slug: "rooftop-terrace",
    type: "rooftop-terrace",
    title: "Rooftop Terrace Bar",
    shortDescription:
      "A top-floor terrace bar shaped by evening atmosphere, sunset light and views.",
    description:
      "The rooftop terrace bar is a relaxed top-floor gathering space for guests who want a calm view and sunset atmosphere at the end of the day.",
    image: {
      src: "/images/rooftop/terrace-bar.jpg",
      alt: "Sunset view over the bay near Palmiye Nature Hotel",
    },
    galleryImages: [
      {
        src: "/images/rooftop/terrace-bar.jpg",
        alt: "Bay sunset atmosphere near the rooftop terrace",
      },
    ],
    cta: {
      label: "View Terrace",
      href: "/rooftop-terrace",
      kind: "internal",
    },
    seo: {
      title: "Rooftop Terrace Bar | Palmiye Nature Hotel & Yacht Club",
      description:
        "The rooftop terrace bar at Palmiye Nature Hotel offers a calm top-floor sunset and view atmosphere.",
      ogImage: "/images/rooftop/terrace-bar.jpg",
    },
  },
];
