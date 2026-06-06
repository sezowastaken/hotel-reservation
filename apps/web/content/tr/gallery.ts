import type { GalleryPageContent } from "@/lib/types/content";
import type { GalleryImage } from "@/lib/types/hotel";

export const galleryPageContent: GalleryPageContent = {
  seo: {
    title: "Galeri | Palmiye Nature Hotel & Yacht Club",
    description:
      "Palmiye Nature Hotel & Yacht Club icinden odalar, doga, marina atmosferi, pool bar ve teras manzaralarina ait fotograflar.",
    ogImage: "/images/gallery/marina-sunset.jpg",
  },
  hero: {
    eyebrow: "Galeri",
    title: "Otelin sakin sahil atmosferine yakindan bak.",
    subtitle:
      "Palmiye Nature Hotel & Yacht Club oda, doga, marina ve sosyal alan fotograflarini inceleyin.",
    image: {
      src: "/images/gallery/marina-sunset.jpg",
      alt: "Palmiye Nature Hotel yakininda marina uzerinde gun batimi",
    },
    primaryCta: {
      label: "Iletisime Gec",
      href: "/contact",
      kind: "internal",
    },
  },
};

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
    alt: "Otelin on tarafina yakin sosyal bahce alani",
    category: "restaurant",
    sortOrder: 40,
  },
  {
    id: "pool-bar-area",
    src: "/images/gallery/pool-bar-area.jpg",
    alt: "Otel cevresi ve havuz alanini gosteren havadan manzara",
    category: "pool",
    sortOrder: 50,
  },
  {
    id: "rooftop-terrace",
    src: "/images/gallery/rooftop-terrace.jpg",
    alt: "Teras atmosferine yakin koy uzerinde gun batimi manzarasi",
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
