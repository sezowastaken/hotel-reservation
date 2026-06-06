import type { Experience } from "@/lib/types/hotel";

export const experiences: Experience[] = [
  {
    id: "restaurant",
    slug: "restaurant",
    type: "restaurant",
    title: "Restoran",
    shortDescription:
      "Otelin on tarafinda, gun icinde rahat yemekler ve bulusmalar icin sakin bir alan.",
    description:
      "Palmiye Nature restoran alani, otelin on tarafindaki sosyal yasami tamamlar. Gunun temposuna uygun, rahat ve samimi bir yemek atmosferi sunar.",
    image: {
      src: "/images/restaurant/restaurant-front.jpg",
      alt: "Palmiye Nature Hotel on tarafina yakin sosyal bahce alani",
    },
    galleryImages: [
      {
        src: "/images/restaurant/restaurant-front.jpg",
        alt: "Otel on tarafina yakin bahce ve sosyal alan",
      },
    ],
    cta: {
      label: "Restorani Gor",
      href: "/restaurant",
      kind: "internal",
    },
    seo: {
      title: "Restoran | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel onundeki restoran alani, butik otel atmosferini rahat yemek ve bulusma alaniyla tamamlar.",
      ogImage: "/images/restaurant/restaurant-front.jpg",
    },
  },
  {
    id: "marina",
    slug: "marina",
    type: "marina",
    title: "Marina ve Yacht Club Atmosferi",
    shortDescription:
      "Otelin on tarafindaki marina hissi, konaklamaya sahil ve tekne atmosferi katar.",
    description:
      "Marina ve yat kulubu atmosferi, Palmiye Nature'in en guclu hislerinden biridir. Tekne manzaralari, sakin koy havasi ve gun batimi, otelin butik karakterini destekler.",
    image: {
      src: "/images/marina/marina-view.jpg",
      alt: "Palmiye Nature Hotel yakininda marina manzarasi",
    },
    galleryImages: [
      {
        src: "/images/marina/marina-view.jpg",
        alt: "Marina ve tekne atmosferi",
      },
    ],
    cta: {
      label: "Marinayi Kesfet",
      href: "/marina",
      kind: "internal",
    },
    seo: {
      title: "Marina | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel, marina ve yat kulubu atmosferine yakin sakin bir butik konaklama deneyimi sunar.",
      ogImage: "/images/marina/marina-view.jpg",
    },
  },
  {
    id: "pool-bar",
    slug: "pool-bar",
    type: "pool-bar",
    title: "Pool Bar",
    shortDescription:
      "Havuz alaninin yaninda, gun icinde serinlemek ve dinlenmek icin rahat bir bulusma noktasi.",
    description:
      "Otelin arka tarafindaki havuz ve pool bar alani, gun icinde sakin vakit gecirmek isteyen misafirler icin rahat bir atmosfer olusturur.",
    image: {
      src: "/images/pool/pool-bar.jpg",
      alt: "Otel cevresi ve havuz alanini gosteren havadan manzara",
    },
    galleryImages: [
      {
        src: "/images/pool/pool-bar.jpg",
        alt: "Havuz alani gorunen otel cevresi",
      },
    ],
    cta: {
      label: "Pool Bar'i Gor",
      href: "/pool-bar",
      kind: "internal",
    },
    seo: {
      title: "Pool Bar | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel pool bar alani, havuz kenarinda sakin ve rahat bir gun atmosferi sunar.",
      ogImage: "/images/pool/pool-bar.jpg",
    },
  },
  {
    id: "rooftop-terrace",
    slug: "rooftop-terrace",
    type: "rooftop-terrace",
    title: "Teras Bar",
    shortDescription:
      "Ust kattaki teras bar, aksamlari gun batimi ve manzara hissiyle otelin en keyifli alanlarindan biri.",
    description:
      "Teras bar, gunun sonunda sakin bir manzara ve gun batimi atmosferi arayan misafirler icin ust katta konumlanan rahat bir bulusma alanidir.",
    image: {
      src: "/images/rooftop/terrace-bar.jpg",
      alt: "Palmiye Nature Hotel yakininda koy uzerinde gun batimi",
    },
    galleryImages: [
      {
        src: "/images/rooftop/terrace-bar.jpg",
        alt: "Teras atmosferine yakin koy gun batimi",
      },
    ],
    cta: {
      label: "Teras Bar'i Gor",
      href: "/rooftop-terrace",
      kind: "internal",
    },
    seo: {
      title: "Teras Bar | Palmiye Nature Hotel & Yacht Club",
      description:
        "Palmiye Nature Hotel teras bar, ust katta gun batimi ve sakin manzara atmosferi sunar.",
      ogImage: "/images/rooftop/terrace-bar.jpg",
    },
  },
];
