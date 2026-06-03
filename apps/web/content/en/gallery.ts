import type { GalleryImage } from "@/lib/types/hotel";

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
    alt: "Restaurant area in front of the hotel",
    category: "restaurant",
    sortOrder: 40,
  },
  {
    id: "pool-bar-area",
    src: "/images/gallery/pool-bar-area.jpg",
    alt: "Pool bar area beside the pool",
    category: "pool",
    sortOrder: 50,
  },
  {
    id: "rooftop-terrace",
    src: "/images/gallery/rooftop-terrace.jpg",
    alt: "Top-floor rooftop terrace bar atmosphere",
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
