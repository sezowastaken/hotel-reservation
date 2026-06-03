import { experiences as enExperiences } from "@/content/en/experiences";
import { experiences as trExperiences } from "@/content/tr/experiences";
import type { Locale } from "@/lib/i18n/config";
import type { LocaleContentMap } from "@/lib/types/content";
import type { Experience, ExperienceCategory } from "@/lib/types/hotel";

const experiencesByLocale: LocaleContentMap<Experience[]> = {
  tr: trExperiences,
  en: enExperiences,
};

export async function getExperiences(locale: Locale): Promise<Experience[]> {
  return [...experiencesByLocale[locale]];
}

export async function getExperienceBySlug(
  locale: Locale,
  slug: string,
): Promise<Experience | null> {
  return (
    experiencesByLocale[locale].find(
      (experience) => experience.slug === (slug as ExperienceCategory),
    ) ?? null
  );
}
