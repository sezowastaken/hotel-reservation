import type { GalleryPageContent } from "@/lib/types/content";
import type { GalleryImage } from "@/lib/types/hotel";

export const galleryPageContent: GalleryPageContent = {
  seo: {
    title: "Gallery | Palmiye Nature Hotel & Yacht Club",
    description:
      "Photos from Palmiye Nature Hotel & Yacht Club, including rooms, nature, marina atmosphere, pool bar and terrace views.",
    ogImage: "/images/gallery/marina-sunset.jpg",
  },
  hero: {
    eyebrow: "Gallery",
    title: "A closer look at the hotel's calm coastal atmosphere.",
    subtitle:
      "Browse room, nature, marina and social-space images from Palmiye Nature Hotel & Yacht Club.",
    image: {
      src: "/images/gallery/marina-sunset.jpg",
      alt: "Sunset view over the marina near Palmiye Nature Hotel",
    },
    primaryCta: {
      label: "Contact Us",
      href: "/contact",
      kind: "internal",
    },
  },
};

export const galleryImages: GalleryImage[] = [
  {
    id: "marina-sunset",
    src: "/images/gallery/marina-sunset.jpg",
    alt: "Sunset view over the marina",
    category: "marina",
    featured: true,
    sortOrder: 10,
  },
  {
    id: "nature-around-hotel",
    src: "/images/gallery/nature-around-hotel.jpg",
    alt: "Nature around Palmiye Nature Hotel",
    category: "nature",
    featured: true,
    sortOrder: 20,
  },
  {
    id: "boutique-room",
    src: "/images/gallery/boutique-room.jpg",
    alt: "Comfortable boutique room at Palmiye Nature Hotel",
    category: "rooms",
    featured: true,
    sortOrder: 30,
  },
  {
    id: "restaurant-area",
    src: "/images/gallery/restaurant-area.jpg",
    alt: "Social garden area near the front of the hotel",
    category: "restaurant",
    sortOrder: 40,
  },
  {
    id: "pool-bar-area",
    src: "/images/gallery/pool-bar-area.jpg",
    alt: "Aerial view of the hotel surroundings and pool area",
    category: "pool",
    sortOrder: 50,
  },
  {
    id: "rooftop-terrace",
    src: "/images/gallery/rooftop-terrace.jpg",
    alt: "Sunset view over the bay near the rooftop terrace atmosphere",
    category: "rooftop",
    sortOrder: 60,
  },
  {
    id: "hotel-exterior",
    src: "/images/gallery/hotel-exterior.jpg",
    alt: "Exterior view of Palmiye Nature Hotel",
    category: "exterior",
    sortOrder: 70,
  },
];
