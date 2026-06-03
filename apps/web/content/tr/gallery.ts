import type { GalleryImage } from "@/lib/types/hotel";

export const galleryImages: GalleryImage[] = [
  {
    id: "marina-sunset",
    src: "/images/gallery/marina-sunset.jpg",
    alt: "Marina uzerinde gun batimi manzarasi",
    category: "marina",
    featured: true,
    sortOrder: 10,
  },
  {
    id: "nature-around-hotel",
    src: "/images/gallery/nature-around-hotel.jpg",
    alt: "Palmiye Nature Hotel cevresindeki doga",
    category: "nature",
    featured: true,
    sortOrder: 20,
  },
  {
    id: "boutique-room",
    src: "/images/gallery/boutique-room.jpg",
    alt: "Palmiye Nature Hotel icinde konforlu butik oda",
    category: "rooms",
    featured: true,
    sortOrder: 30,
  },
  {
    id: "restaurant-area",
    src: "/images/gallery/restaurant-area.jpg",
    alt: "Otel onundeki restoran alani",
    category: "restaurant",
    sortOrder: 40,
  },
  {
    id: "pool-bar-area",
    src: "/images/gallery/pool-bar-area.jpg",
    alt: "Havuz kenarindaki pool bar alani",
    category: "pool",
    sortOrder: 50,
  },
  {
    id: "rooftop-terrace",
    src: "/images/gallery/rooftop-terrace.jpg",
    alt: "Ust kattaki teras bar atmosferi",
    category: "rooftop",
    sortOrder: 60,
  },
  {
    id: "hotel-exterior",
    src: "/images/gallery/hotel-exterior.jpg",
    alt: "Palmiye Nature Hotel dis gorunumu",
    category: "exterior",
    sortOrder: 70,
  },
];
