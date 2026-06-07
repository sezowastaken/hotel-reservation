import type { GalleryPageContent } from "@/lib/types/content";
import type { GalleryImage } from "@/lib/types/hotel";

export const galleryPageContent: GalleryPageContent = {
  seo: {
    title: "Galeri | Palmiye Nature Hotel & Yacht Club",
    description:
      "Palmiye Nature Hotel & Yacht Club içinden odalar, doğa, marina atmosferi, pool bar ve teras manzaralarına ait fotoğraflar.",
    ogImage: "/images/gallery/marina-sunset.jpg",
  },
  hero: {
    eyebrow: "Galeri",
    title: "Otelin sakin sahil atmosferine yakından bak.",
    subtitle:
      "Palmiye Nature Hotel & Yacht Club oda, doğa, marina ve sosyal alan fotoğraflarını inceleyin.",
    image: {
      src: "/images/gallery/marina-sunset.jpg",
      alt: "Palmiye Nature Hotel yakınında marina üzerinde gün batımı",
    },
    primaryCta: {
      label: "İletişime Geç",
      href: "/contact",
      kind: "internal",
    },
  },
};

export const galleryImages: GalleryImage[] = [
  {
    id: "marina-sunset",
    src: "/images/gallery/marina-sunset.jpg",
    alt: "Marina üzerinde gün batımı manzarası",
    category: "marina",
    featured: true,
    sortOrder: 10,
  },
  {
    id: "nature-around-hotel",
    src: "/images/gallery/nature-around-hotel.jpg",
    alt: "Palmiye Nature Hotel çevresindeki doğa",
    category: "nature",
    featured: true,
    sortOrder: 20,
  },
  {
    id: "boutique-room",
    src: "/images/gallery/boutique-room.jpg",
    alt: "Palmiye Nature Hotel içinde konforlu butik oda",
    category: "rooms",
    featured: true,
    sortOrder: 30,
  },
  {
    id: "restaurant-area",
    src: "/images/gallery/restaurant-area.jpg",
    alt: "Otelin ön tarafına yakın sosyal bahçe alanı",
    category: "restaurant",
    sortOrder: 40,
  },
  {
    id: "pool-bar-area",
    src: "/images/gallery/pool-bar-area.jpg",
    alt: "Otel çevresi ve havuz alanını gösteren havadan manzara",
    category: "pool",
    sortOrder: 50,
  },
  {
    id: "rooftop-terrace",
    src: "/images/gallery/rooftop-terrace.jpg",
    alt: "Teras atmosferine yakın koy üzerinde gün batımı manzarası",
    category: "rooftop",
    sortOrder: 60,
  },
  {
    id: "hotel-exterior",
    src: "/images/gallery/hotel-exterior.jpg",
    alt: "Palmiye Nature Hotel dış görünümü",
    category: "exterior",
    sortOrder: 70,
  },
];
