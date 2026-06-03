import { galleryImages as enGalleryImages } from "@/content/en/gallery";
import { galleryImages as trGalleryImages } from "@/content/tr/gallery";
import type { Locale } from "@/lib/i18n/config";
import type { LocaleContentMap } from "@/lib/types/content";
import type { GalleryCategory, GalleryImage } from "@/lib/types/hotel";

const galleryImagesByLocale: LocaleContentMap<GalleryImage[]> = {
  tr: trGalleryImages,
  en: enGalleryImages,
};

export async function getGalleryImages(
  locale: Locale,
): Promise<GalleryImage[]> {
  return getSortedGalleryImages(galleryImagesByLocale[locale]);
}

export async function getGalleryImagesByCategory(
  locale: Locale,
  category: GalleryCategory,
): Promise<GalleryImage[]> {
  const images = galleryImagesByLocale[locale];

  if (category === "all") {
    return getSortedGalleryImages(images);
  }

  return getSortedGalleryImages(
    images.filter((image) => image.category === category),
  );
}

function getSortedGalleryImages(images: GalleryImage[]): GalleryImage[] {
  return [...images].sort(
    (first, second) => (first.sortOrder ?? 0) - (second.sortOrder ?? 0),
  );
}
