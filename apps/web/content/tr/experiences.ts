import type { Experience } from "@/lib/types/hotel";

export const experiences: Experience[] = [
  {
    id: "restaurant",
    slug: "restaurant",
    type: "restaurant",
    title: "Restoran",
    shortDescription:
      "Otelin ön tarafında, gün içinde rahat yemekler ve buluşmalar için sakin bir alan.",
    description:
      "Palmiye Nature restoran alanı, otelin ön tarafındaki sosyal yaşamı tamamlar. Günün temposuna uygun, rahat ve samimi bir yemek atmosferi sunar.",
    image: {
      src: "/images/restaurant/restaurant-front.jpg",
      alt: "Palmiye Nature Hotel ön tarafına yakın sosyal bahçe alanı",
    },
    galleryImages: [
      {
        src: "/images/restaurant/restaurant-front.jpg",
        alt: "Otel ön tarafına yakın bahçe ve sosyal alan",
      },
    ],
    cta: {
      label: "Restoranı Gör",
      href: "/restaurant",
      kind: "internal",
    },
    seo: {
      title: "Restoran | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel önündeki restoran alanı, butik otel atmosferini rahat yemek ve buluşma alanıyla tamamlar.",
      ogImage: "/images/restaurant/restaurant-front.jpg",
    },
  },
  {
    id: "marina",
    slug: "marina",
    type: "marina",
    title: "Marina ve Yacht Club Atmosferi",
    shortDescription:
      "Otelin ön tarafındaki marina hissi, konaklamaya sahil ve tekne atmosferi katar.",
    description:
      "Marina ve yat kulübü atmosferi, Palmiye Nature'ın en güçlü hislerinden biridir. Tekne manzaraları, sakin koy havası ve gün batımı, otelin butik karakterini destekler.",
    image: {
      src: "/images/marina/marina-view.jpg",
      alt: "Palmiye Nature Hotel yakınında marina manzarası",
    },
    galleryImages: [
      {
        src: "/images/marina/marina-view.jpg",
        alt: "Marina ve tekne atmosferi",
      },
    ],
    cta: {
      label: "Marinayı Keşfet",
      href: "/marina",
      kind: "internal",
    },
    seo: {
      title: "Marina | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel, marina ve yat kulübü atmosferine yakın sakin bir butik konaklama deneyimi sunar.",
      ogImage: "/images/marina/marina-view.jpg",
    },
  },
  {
    id: "pool-bar",
    slug: "pool-bar",
    type: "pool-bar",
    title: "Pool Bar",
    shortDescription:
      "Havuz alanının yanında, gün içinde serinlemek ve dinlenmek için rahat bir buluşma noktası.",
    description:
      "Otelin arka tarafındaki havuz ve pool bar alanı, gün içinde sakin vakit geçirmek isteyen misafirler için rahat bir atmosfer oluşturur.",
    image: {
      src: "/images/pool/pool-bar.jpg",
      alt: "Otel çevresi ve havuz alanını gösteren havadan manzara",
    },
    galleryImages: [
      {
        src: "/images/pool/pool-bar.jpg",
        alt: "Havuz alanı görünen otel çevresi",
      },
    ],
    cta: {
      label: "Pool Bar'ı Gör",
      href: "/pool-bar",
      kind: "internal",
    },
    seo: {
      title: "Pool Bar | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel pool bar alanı, havuz kenarında sakin ve rahat bir gün atmosferi sunar.",
      ogImage: "/images/pool/pool-bar.jpg",
    },
  },
  {
    id: "rooftop-terrace",
    slug: "rooftop-terrace",
    type: "rooftop-terrace",
    title: "Teras Bar",
    shortDescription:
      "Üst kattaki teras bar, akşamları gün batımı ve manzara hissiyle otelin en keyifli alanlarından biri.",
    description:
      "Teras bar, günün sonunda sakin bir manzara ve gün batımı atmosferi arayan misafirler için üst katta konumlanan rahat bir buluşma alanıdır.",
    image: {
      src: "/images/rooftop/terrace-bar.jpg",
      alt: "Palmiye Nature Hotel yakınında koy üzerinde gün batımı",
    },
    galleryImages: [
      {
        src: "/images/rooftop/terrace-bar.jpg",
        alt: "Teras atmosferine yakın koy gün batımı",
      },
    ],
    cta: {
      label: "Teras Bar'ı Gör",
      href: "/rooftop-terrace",
      kind: "internal",
    },
    seo: {
      title: "Teras Bar | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel teras bar, üst katta gün batımı ve sakin manzara atmosferi sunar.",
      ogImage: "/images/rooftop/terrace-bar.jpg",
    },
  },
];
