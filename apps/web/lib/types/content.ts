import type { Locale, PublicPathname } from "@/lib/i18n/config";

export type LinkKind = "internal" | "external" | "whatsapp" | "phone" | "map";

export type CtaLink = {
  label: string;
  href: PublicPathname | string;
  kind: LinkKind;
};

export type SeoContent = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type PageHeroContent = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: ImageAsset;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export type PageSectionContent = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  image?: ImageAsset;
  cta?: CtaLink;
};

export type HighlightItem = {
  id: string;
  title: string;
  description: string;
};

export type ReservationCtaContent = {
  title: string;
  description: string;
  primaryCta: CtaLink;
  whatsappMessage: string;
};

export type HomePageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  highlights: HighlightItem[];
  sections: PageSectionContent[];
  reservationCta: ReservationCtaContent;
};

export type RoomsPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  overview: PageSectionContent;
};

export type GalleryPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
};

export type ContactMethod = {
  id: string;
  label: string;
  value: string | null;
  href: string | null;
  needsOwnerConfirmation?: boolean;
};

export type ContactPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  methods: ContactMethod[];
  location: PageSectionContent;
  reservationCta: ReservationCtaContent;
};

export type LocaleContentMap<T> = Record<Locale, T>;
