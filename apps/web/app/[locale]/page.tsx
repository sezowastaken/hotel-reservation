import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/common/CTASection";
import { ReservationCTA } from "@/components/common/ReservationCTA";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { LocationPreviewSection } from "@/components/sections/LocationPreviewSection";
import { RoomsPreviewSection } from "@/components/sections/RoomsPreviewSection";
import {
  getContactContent,
  getGalleryPageContent,
  getHomePageContent,
} from "@/lib/services/pages";
import { getExperiences } from "@/lib/services/experiences";
import { getGalleryImages } from "@/lib/services/gallery";
import { getPublicRoomInfo } from "@/lib/services/rooms";
import { getSiteSettings } from "@/lib/services/site";
import {
  getValidatedLocale,
  type LocaleRouteParams,
} from "@/lib/i18n/locale";

type HomePageProps = {
  params: LocaleRouteParams;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const locale = await getValidatedLocale(params);
  const content = await getHomePageContent(locale);

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

export default async function LocaleHomePage({ params }: HomePageProps) {
  const locale = await getValidatedLocale(params);
  setRequestLocale(locale);

  const [
    homeContent,
    galleryContent,
    contactContent,
    room,
    experiences,
    galleryImages,
    siteSettings,
    contactMessages,
  ] = await Promise.all([
    getHomePageContent(locale),
    getGalleryPageContent(locale),
    getContactContent(locale),
    getPublicRoomInfo(locale),
    getExperiences(locale),
    getGalleryImages(locale),
    getSiteSettings(locale),
    getTranslations({ locale, namespace: "contact" }),
  ]);
  const roomsSection = homeContent.sections.find(
    (section) => section.id === "rooms",
  );
  const experiencesSection = homeContent.sections.find(
    (section) => section.id === "experiences",
  );

  return (
    <main>
      <HeroSection hero={homeContent.hero} variant="home" />
      <ReservationCTA
        content={homeContent.reservationCta}
        siteSettings={siteSettings}
      />
      <HighlightsSection
        description={homeContent.hero.subtitle}
        highlights={homeContent.highlights}
        title={homeContent.hero.eyebrow ?? siteSettings.shortName}
      />
      {roomsSection ? (
        <RoomsPreviewSection room={room} section={roomsSection} />
      ) : null}
      <ExperiencesSection
        experiences={experiences}
        section={experiencesSection}
      />
      <GalleryPreviewSection
        cta={experiencesSection?.cta}
        description={galleryContent.hero.subtitle}
        images={galleryImages}
        title={galleryContent.hero.title}
      />
      <LocationPreviewSection
        contactContent={contactContent}
        fallbackText={contactMessages("mapUnavailable")}
        siteSettings={siteSettings}
      />
      <CTASection
        description={homeContent.reservationCta.description}
        primaryCta={homeContent.reservationCta.primaryCta}
        title={homeContent.reservationCta.title}
      />
    </main>
  );
}
