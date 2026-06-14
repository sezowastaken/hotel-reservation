import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ReservationCTA } from "@/components/common/ReservationCTA";
import { BoutiqueStorySection } from "@/components/sections/BoutiqueStorySection";
import { ExperienceMosaic } from "@/components/sections/ExperienceMosaic";
import { HeroSection } from "@/components/sections/HeroSection";
import { NearbySection } from "@/components/sections/NearbySection";
import { RoomStorySection } from "@/components/sections/RoomStorySection";
import { getHomePageContent, getNearbySectionContent } from "@/lib/services/pages";
import { getExperiences } from "@/lib/services/experiences";
import { getPublicRoomInfo } from "@/lib/services/rooms";
import { getSiteSettings } from "@/lib/services/site";
import {
  getValidatedLocale,
  type LocaleRouteParams,
} from "@/lib/i18n/locale";
import { AgentationProvider } from "@/components/dev/AgentationProvider";

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
    nearbyContent,
    room,
    experiences,
    siteSettings,
  ] = await Promise.all([
    getHomePageContent(locale),
    getNearbySectionContent(locale),
    getPublicRoomInfo(locale),
    getExperiences(locale),
    getSiteSettings(locale),
  ]);
  const roomsSection = homeContent.sections.find(
    (section) => section.id === "rooms",
  );
  const storySection = homeContent.sections.find(
    (section) => section.id === "story",
  );
  const experiencesSection = homeContent.sections.find(
    (section) => section.id === "experiences",
  );

  return (
    <main>
      <HeroSection hero={homeContent.hero} variant="home" />
      {/* <ReservationCTA
        className="relative z-20 -mt-10"
        content={homeContent.reservationCta}
        siteSettings={siteSettings}
      /> */}
      <BoutiqueStorySection
        description={storySection?.description ?? homeContent.hero.subtitle}
        eyebrow={storySection?.eyebrow}
        highlights={homeContent.highlights}
        image={storySection?.image ?? experiencesSection?.image}
        title={storySection?.title ?? siteSettings.shortName}
      />
      {roomsSection ? (
        <RoomStorySection room={room} section={roomsSection} />
      ) : null}
      <NearbySection content={nearbyContent} />
      <ExperienceMosaic
        experiences={experiences}
        section={experiencesSection}
      />
      <AgentationProvider />
    </main>
  );
}
