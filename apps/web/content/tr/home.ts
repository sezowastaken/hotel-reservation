import type { HomePageContent } from "@/lib/types/content";

export const homePageContent: HomePageContent = {
  seo: {
    title: "Palmiye Nature Hotel & Yacht Club | Marmaris Butik Otel",
    description:
      "Marmaris'te doga, marina atmosferi, restoran, pool bar ve teras bar ile sakin bir butik otel deneyimi.",
    ogImage: "/images/hero/palmiye-marina-sunset.jpg",
  },
  hero: {
    eyebrow: "Marmaris'te butik konaklama",
    title: "Doga, marina ve gun batimi arasinda sakin bir butik otel.",
    subtitle:
      "Palmiye Nature Hotel & Yacht Club, 14 odali butik yapisi, restoran, pool bar ve teras bar atmosferiyle huzurlu bir kacis noktasi sunar.",
    image: {
      src: "/images/hero/palmiye-marina-sunset.jpg",
      alt: "Palmiye Nature Hotel yakininda marina uzerinde gun batimi",
    },
    primaryCta: {
      label: "WhatsApp ile Rezervasyon",
      href: "/contact",
      kind: "internal",
    },
    secondaryCta: {
      label: "Oteli Kesfet",
      href: "/gallery",
      kind: "internal",
    },
  },
  highlights: [
    {
      id: "boutique-scale",
      title: "14 odali butik olcek",
      description:
        "Kucuk ve sakin yapisi sayesinde daha rahat, sade ve samimi bir konaklama hissi verir.",
    },
    {
      id: "marina-atmosphere",
      title: "Marina atmosferi",
      description:
        "Otelin on tarafindaki marina ve yat kulubu hissi, gunun ritmini sahil havasiyla birlestirir.",
    },
    {
      id: "social-spaces",
      title: "Restoran, pool bar ve teras",
      description:
        "Restoran, havuz kenarindaki pool bar ve ust kattaki teras bar gun boyunca farkli anlar icin alan acar.",
    },
  ],
  sections: [
    {
      id: "rooms",
      eyebrow: "Odalar",
      title: "Sade ve konforlu odalar",
      description:
        "Tum odalar ayni genel konaklama deneyimiyle sunulur: sakin, sicak ve butik otel olcegine uygun bir oda atmosferi.",
      image: {
        src: "/images/rooms/boutique-room.jpg",
        alt: "Palmiye Nature Hotel icinde konforlu butik oda",
      },
      cta: {
        label: "Odalari Gor",
        href: "/rooms",
        kind: "internal",
      },
    },
    {
      id: "experiences",
      eyebrow: "Deneyimler",
      title: "Gun boyu farkli atmosferler",
      description:
        "Restoran, marina, pool bar ve teras bar; dogayla ic ice sakin bir tatil gununu tamamlayan ana alanlardir.",
      image: {
        src: "/images/gallery/palmiye-social-areas.jpg",
        alt: "Palmiye Nature Hotel sosyal alanlari",
      },
      cta: {
        label: "Galeriye Bak",
        href: "/gallery",
        kind: "internal",
      },
    },
  ],
  reservationCta: {
    title: "Konaklamani planla",
    description:
      "Musaitlik ve rezervasyon bilgisi icin otelle dogrudan iletisime gecebilirsin.",
    primaryCta: {
      label: "Musaitlik Sor",
      href: "/contact",
      kind: "internal",
    },
    whatsappMessage:
      "Merhaba, Palmiye Nature Hotel & Yacht Club icin musaitlik ve rezervasyon bilgisi almak istiyorum.",
  },
};
