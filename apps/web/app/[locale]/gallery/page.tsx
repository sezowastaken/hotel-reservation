import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/common/CTASection";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  getValidatedLocale,
  type LocaleRouteParams,
} from "@/lib/i18n/locale";
import { getGalleryImages } from "@/lib/services/gallery";
import {
  getGalleryPageContent,
  getHomePageContent,
} from "@/lib/services/pages";
import type { GalleryImage } from "@/lib/types/hotel";

type GalleryPageProps = {
  params: LocaleRouteParams;
};

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const locale = await getValidatedLocale(params);
  const content = await getGalleryPageContent(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.ogTitle ?? content.seo.title,
      description: content.seo.ogDescription ?? content.seo.description,
      images: content.seo.ogImage ? [content.seo.ogImage] : undefined,
    },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const locale = await getValidatedLocale(params);
  setRequestLocale(locale);

  const [content, images, homeContent, t] = await Promise.all([
    getGalleryPageContent(locale),
    getGalleryImages(locale),
    getHomePageContent(locale),
    getTranslations({ locale, namespace: "gallery" }),
  ]);
  const categoryLabels: Record<GalleryImage["category"], string> = {
    rooms: t("categories.rooms"),
    nature: t("categories.nature"),
    marina: t("categories.marina"),
    restaurant: t("categories.restaurant"),
    pool: t("categories.pool"),
    rooftop: t("categories.rooftop"),
    exterior: t("categories.exterior"),
  };

  return (
    <main>
      <HeroSection hero={content.hero} />
      <GalleryGrid
        categoryLabels={categoryLabels}
        featuredLabel={t("featured")}
        images={images}
      />
      <CTASection
        description={homeContent.reservationCta.description}
        primaryCta={homeContent.reservationCta.primaryCta}
        title={homeContent.reservationCta.title}
      />
    </main>
  );
}
