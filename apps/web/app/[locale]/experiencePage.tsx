import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ExperiencePageTemplate } from "@/components/sections/ExperiencePageTemplate";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  getValidatedLocale,
  type LocaleRouteParams,
} from "@/lib/i18n/locale";
import {
  getExperienceBySlug,
  getExperiences,
} from "@/lib/services/experiences";
import { getHomePageContent } from "@/lib/services/pages";
import type { ExperienceCategory } from "@/lib/types/hotel";

export type ExperienceRoutePageProps = {
  params: LocaleRouteParams;
};

type ExperienceRouteOptions = {
  params: LocaleRouteParams;
  slug: ExperienceCategory;
};

export async function getExperiencePageMetadata({
  params,
  slug,
}: ExperienceRouteOptions): Promise<Metadata> {
  const locale = await getValidatedLocale(params);
  const experience = await getExperienceBySlug(locale, slug);

  if (!experience) {
    notFound();
  }

  return {
    title: experience.seo.title,
    description: experience.seo.description,
    openGraph: {
      title: experience.seo.ogTitle ?? experience.seo.title,
      description: experience.seo.ogDescription ?? experience.seo.description,
      images: experience.seo.ogImage ? [experience.seo.ogImage] : undefined,
    },
  };
}

export async function ExperienceRoutePage({
  params,
  slug,
}: ExperienceRouteOptions) {
  const locale = await getValidatedLocale(params);
  setRequestLocale(locale);

  const [experience, experiences, homeContent] = await Promise.all([
    getExperienceBySlug(locale, slug),
    getExperiences(locale),
    getHomePageContent(locale),
  ]);

  if (!experience) {
    notFound();
  }

  return (
    <main>
      <HeroSection
        hero={{
          eyebrow: experience.title,
          title: experience.title,
          subtitle: experience.shortDescription,
          image: experience.image,
          primaryCta: homeContent.reservationCta.primaryCta,
        }}
      />
      <ExperiencePageTemplate
        experience={experience}
        relatedExperiences={experiences.filter((item) => item.id !== slug)}
        reservationCta={homeContent.reservationCta}
      />
    </main>
  );
}
