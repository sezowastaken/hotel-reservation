import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReservationCTA } from "@/components/common/ReservationCTA";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RoomOverviewSection } from "@/components/sections/RoomOverviewSection";
import {
  getValidatedLocale,
  type LocaleRouteParams,
} from "@/lib/i18n/locale";
import { getGalleryImagesByCategory } from "@/lib/services/gallery";
import { getRoomsContent } from "@/lib/services/pages";
import { getPublicRoomInfo } from "@/lib/services/rooms";
import { getSiteSettings } from "@/lib/services/site";

type RoomsPageProps = {
  params: LocaleRouteParams;
};

export async function generateMetadata({
  params,
}: RoomsPageProps): Promise<Metadata> {
  const locale = await getValidatedLocale(params);
  const content = await getRoomsContent(locale);

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

export default async function RoomsPage({ params }: RoomsPageProps) {
  const locale = await getValidatedLocale(params);
  setRequestLocale(locale);

  const [content, room, siteSettings, roomImages, t] = await Promise.all([
    getRoomsContent(locale),
    getPublicRoomInfo(locale),
    getSiteSettings(locale),
    getGalleryImagesByCategory(locale, "rooms"),
    getTranslations({ locale, namespace: "rooms" }),
  ]);

  return (
    <main>
      <HeroSection hero={content.hero} />
      <RoomOverviewSection
        content={content}
        labels={{
          amenities: t("amenities"),
          gallery: t("gallery"),
          capacityNote: t("capacityNote"),
        }}
        room={room}
      />
      <GalleryPreviewSection
        cta={room.cta}
        description={room.shortDescription}
        images={roomImages}
        title={t("gallery")}
      />
      <ReservationCTA
        content={{
          title: room.cta.label,
          description: content.overview.description,
          primaryCta: room.cta,
          whatsappMessage: siteSettings.reservation.defaultWhatsappMessage,
        }}
        siteSettings={siteSettings}
      />
    </main>
  );
}
