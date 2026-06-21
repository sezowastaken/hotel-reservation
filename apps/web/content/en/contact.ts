import type { ContactPageContent } from "@/lib/types/content";

export const contactPageContent: ContactPageContent = {
  seo: {
    title: "Contact and Location | Palmiye Nature Hotel & Yacht Club",
    description:
      "Contact Palmiye Nature Hotel & Yacht Club directly, ask for availability and view location details.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Contact the hotel directly to plan your stay.",
    subtitle:
      "For availability, reservation and location details, direct contact with the hotel is the clearest path.",
    primaryCta: {
      label: "Book via WhatsApp",
      href: "https://wa.me/905064645591",
      kind: "external",
    },
  },
  methods: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: "+90 506 464 55 91",
      href: "https://wa.me/905064645591",
      needsOwnerConfirmation: false,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+90 506 464 55 91",
      href: "tel:+905064645591",
      needsOwnerConfirmation: false,
    },
    {
      id: "email",
      label: "Email",
      value: "info@palmiyenature.com",
      href: "mailto:info@palmiyenature.com",
      needsOwnerConfirmation: false,
    },
  ],
  location: {
    id: "location",
    title: "Location details",
    description:
      "Contact the hotel directly for clear location and directions information.",
    cta: {
      label: "See Location",
      href: "/contact",
      kind: "internal",
    },
  },
  reservationCta: {
    title: "Ask for availability",
    description:
      "Share your dates and guest count to request reservation information directly from the hotel.",
    primaryCta: {
      label: "Ask Availability",
      href: "https://wa.me/905064645591",
      kind: "external",
    },
    whatsappMessage:
      "Hello, I would like to get availability and reservation information for Palmiye Nature Hotel & Yacht Club.",
  },
};
