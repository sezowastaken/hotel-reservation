import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReservationCTA } from "@/components/common/ReservationCTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  getValidatedLocale,
  type LocaleRouteParams,
} from "@/lib/i18n/locale";
import { getContactContent } from "@/lib/services/pages";
import { getSiteSettings } from "@/lib/services/site";

type ContactPageProps = {
  params: LocaleRouteParams;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const locale = await getValidatedLocale(params);
  const content = await getContactContent(locale);

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

export default async function ContactPage({ params }: ContactPageProps) {
  const locale = await getValidatedLocale(params);
  setRequestLocale(locale);

  const [content, siteSettings, t] = await Promise.all([
    getContactContent(locale),
    getSiteSettings(locale),
    getTranslations({ locale, namespace: "contact" }),
  ]);

  return (
    <main>
      <HeroSection hero={content.hero} />
      <ContactSection
        content={content}
        labels={{
          methods: t("methods"),
          location: t("location"),
          unconfirmed: t("unconfirmed"),
          mapUnavailable: t("mapUnavailable"),
        }}
        siteSettings={siteSettings}
      />
      <ReservationCTA
        content={content.reservationCta}
        siteSettings={siteSettings}
      />
    </main>
  );
}
