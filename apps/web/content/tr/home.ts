import type { HomePageContent } from "@/lib/types/content";

export const homePageContent: HomePageContent = {
  seo: {
    title: "Palmiye Nature Hotel & Yacht Club | Marmaris Butik Otel",
    description:
      "Marmaris'te doğa, marina atmosferi, restoran, pool bar ve teras bar ile sakin bir butik otel deneyimi.",
    ogImage: "/images/hero/palmiye-marina-sunset.jpg",
  },
  hero: {
    eyebrow: "Marmaris'te butik konaklama",
    title: "Doğa, marina ve gün batımı arasında sakin bir butik otel.",
    subtitle:
      "Palmiye Nature Hotel & Yacht Club, 14 odalı butik yapısı, restoranı, pool barı ve teras barıyla huzurlu bir Marmaris kaçış noktasıdır.",
    image: {
      src: "/images/hero/palmiye-marina-sunset.jpg",
      alt: "Palmiye Nature Hotel yakınında marina üzerinde gün batımı",
    },
    primaryCta: {
      label: "Konaklamanı Planla",
      href: "/contact",
      kind: "internal",
    },
    secondaryCta: {
      label: "Oteli Keşfet",
      href: "/gallery",
      kind: "internal",
    },
  },
  highlights: [
    {
      id: "boutique-scale",
      title: "14 odalı konaklama",
      description:
        "Küçük ve sakin yapısı sayesinde daha rahat, sade ve samimi bir konaklama hissi verir.",
    },
    {
      id: "marina-atmosphere",
      title: "Marina atmosferi",
      description:
        "Otelin ön tarafındaki marina ve yat kulübü hissi, günün ritmini sahil havasıyla birleştirir.",
    },
    {
      id: "social-spaces",
      title: "Restoran, pool bar ve teras",
      description:
        "Restoran, havuz kenarındaki pool bar ve üst kattaki teras bar gün boyunca farklı anlar için alan açar.",
    },
  ],
  sections: [
    {
      id: "story",
      eyebrow: "Palmiye'nin ritmi",
      title: "Sakin, sıcak ve denize yakın bir Marmaris hissi.",
      description:
        "Burada gün; marina tarafındaki hareket, restoranın sıcaklığı, havuz kenarındaki sakinlik ve terastan izlenen gün batımıyla yavaşça akar.",
      image: {
        src: "/images/gallery/palmiye-social-areas.jpg",
        alt: "Palmiye Nature Hotel sosyal alanlarında sıcak akşam atmosferi",
      },
    },
    {
      id: "rooms",
      eyebrow: "Odalar",
      title: "Sade ve konforlu odalar",
      description:
        "Sade, sıcak ve konforlu odalar; doğaya ve marina atmosferine yakın sakin bir konaklama için hazırlandı.",
      image: {
        src: "/images/rooms/boutique-room.jpg",
        alt: "Palmiye Nature Hotel içinde konforlu butik oda",
      },
      cta: {
        label: "Odaları Gör",
        href: "/rooms",
        kind: "internal",
      },
    },
    {
      id: "experiences",
      eyebrow: "Deneyimler",
      title: "Gün boyu farklı atmosferler",
      description:
        "Restoran, marina, pool bar ve teras bar; doğayla iç içe sakin bir tatil gününü tamamlayan ana alanlardır.",
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
    title: "Otel ile doğrudan iletişime geç",
    description:
      "Müsaitlik ve rezervasyon bilgisi için otelle doğrudan iletişime geçebilirsin.",
    primaryCta: {
      label: "İletişime Geç",
      href: "/contact",
      kind: "internal",
    },
    whatsappMessage:
      "Merhaba, Palmiye Nature Hotel & Yacht Club için müsaitlik ve rezervasyon bilgisi almak istiyorum.",
  },
  finalCta: {
    title: "Marmaris'te sakin bir kaçış için Palmiye ile konuş.",
    description:
      "Tarih, kişi sayısı ve konaklama beklentin için en net bilgiyi otelle doğrudan iletişime geçerek alabilirsin.",
    primaryCta: {
      label: "Konaklamanı Planla",
      href: "/contact",
      kind: "internal",
    },
  },
};
