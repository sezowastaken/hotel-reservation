import type { Locale } from "@/lib/i18n/config";
import type { CtaLink, ImageAsset, SeoContent } from "@/lib/types/content";

export type SocialLink = {
  platform: "instagram" | "facebook" | "x" | "youtube" | "tiktok";
  url: string | null;
  needsOwnerConfirmation?: boolean;
};

export type ContactSettings = {
  phone: string | null;
  email: string | null;
  whatsappNumber: string | null;
  needsOwnerConfirmation: boolean;
};

export type LocationSettings = {
  address: string | null;
  mapUrl: string | null;
  mapEmbedUrl: string | null;
  needsOwnerConfirmation: boolean;
};

export type SiteSettings = {
  hotelName: string;
  shortName: string;
  defaultLocale: Locale;
  supportedLocales: readonly Locale[];
  publicRoomCount: number;
  contact: ContactSettings;
  socialLinks: SocialLink[];
  location: LocationSettings;
  reservation: {
    whatsappEnabled: boolean;
    defaultWhatsappMessage: string;
  };
};

export type RoomPublicInfo = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  capacityNote?: string;
  amenities: string[];
  featuredImage: ImageAsset;
  images: ImageAsset[];
  cta: CtaLink;
};

export type PhysicalRoomUnit = {
  id: string;
  roomNumber: string;
  isActive: boolean;
  notes?: string;
};

export type ExperienceCategory =
  | "restaurant"
  | "marina"
  | "pool-bar"
  | "rooftop-terrace";

export type Experience = {
  id: ExperienceCategory;
  slug: ExperienceCategory;
  type: ExperienceCategory;
  title: string;
  shortDescription: string;
  description: string;
  image: ImageAsset;
  galleryImages: ImageAsset[];
  cta: CtaLink;
  seo: SeoContent;
};

export type GalleryCategory =
  | "all"
  | "rooms"
  | "nature"
  | "marina"
  | "restaurant"
  | "pool"
  | "rooftop"
  | "exterior";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  width?: number;
  height?: number;
  featured?: boolean;
  sortOrder?: number;
};
