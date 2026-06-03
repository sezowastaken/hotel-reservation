import type { ContactPageContent } from "@/lib/types/content";

export const contactPageContent: ContactPageContent = {
  seo: {
    title: "Iletisim ve Konum | Palmiye Nature Hotel & Yacht Club",
    description:
      "Palmiye Nature Hotel & Yacht Club ile dogrudan iletisime gecin, musaitlik sorun ve konum bilgilerini gorun.",
  },
  hero: {
    eyebrow: "Iletisim",
    title: "Konaklaman icin otelle dogrudan iletisime gec.",
    subtitle:
      "Musaitlik, rezervasyon ve konum bilgileri icin en net yol dogrudan otel ile iletisim kurmaktir.",
    primaryCta: {
      label: "WhatsApp ile Rezervasyon",
      href: "/contact",
      kind: "internal",
    },
  },
  methods: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: null,
      href: null,
      needsOwnerConfirmation: true,
    },
    {
      id: "phone",
      label: "Telefon",
      value: null,
      href: null,
      needsOwnerConfirmation: true,
    },
    {
      id: "email",
      label: "E-posta",
      value: null,
      href: null,
      needsOwnerConfirmation: true,
    },
  ],
  location: {
    id: "location",
    title: "Konum bilgisi",
    description:
      "Konum ve yol tarifi bilgisi icin otelle dogrudan iletisime gecebilirsin.",
    cta: {
      label: "Konumu Gor",
      href: "/contact",
      kind: "internal",
    },
  },
  reservationCta: {
    title: "Musaitlik bilgisi al",
    description:
      "Tarihlerini ve kisi sayisini paylasarak otelden dogrudan rezervasyon bilgisi isteyebilirsin.",
    primaryCta: {
      label: "Musaitlik Sor",
      href: "/contact",
      kind: "internal",
    },
    whatsappMessage:
      "Merhaba, Palmiye Nature Hotel & Yacht Club icin musaitlik ve rezervasyon bilgisi almak istiyorum.",
  },
};
