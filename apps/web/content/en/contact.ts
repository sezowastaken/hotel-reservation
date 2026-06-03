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
      label: "Phone",
      value: null,
      href: null,
      needsOwnerConfirmation: true,
    },
    {
      id: "email",
      label: "Email",
      value: null,
      href: null,
      needsOwnerConfirmation: true,
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
      href: "/contact",
      kind: "internal",
    },
    whatsappMessage:
      "Hello, I would like to get availability and reservation information for Palmiye Nature Hotel & Yacht Club.",
  },
};
