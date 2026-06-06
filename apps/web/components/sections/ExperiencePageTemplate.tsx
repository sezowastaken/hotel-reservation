import { useTranslations } from "next-intl";
import { CTASection } from "@/components/common/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ReservationCtaContent } from "@/lib/types/content";
import type { Experience } from "@/lib/types/hotel";

type ExperiencePageTemplateProps = {
  experience: Experience;
  relatedExperiences: Experience[];
  reservationCta: ReservationCtaContent;
};

export function ExperiencePageTemplate({
  experience,
  relatedExperiences,
  reservationCta,
}: ExperiencePageTemplateProps) {
  const t = useTranslations("experiences");

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              description={experience.description}
              title={experience.title}
            />
            <div className="mt-8">
              <ButtonLink
                href={reservationCta.primaryCta.href}
                isExternal={reservationCta.primaryCta.kind === "external"}
              >
                {reservationCta.primaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <ImageFrame
            image={experience.image}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </Container>
      </section>
      {experience.galleryImages.length > 0 ? (
        <section className="bg-stone-50 py-16 sm:py-20">
          <Container>
            <SectionHeader title={t("gallery")} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {experience.galleryImages.map((image) => (
                <ImageFrame image={image} key={image.src} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      {relatedExperiences.length > 0 ? (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeader title={t("related")} />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedExperiences.map((related) => (
                <Card className="flex h-full flex-col overflow-hidden" key={related.id}>
                  <ImageFrame
                    className="rounded-none"
                    image={related.image}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <CardHeader>
                    <h2 className="text-xl font-semibold text-stone-950">
                      {related.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-sm leading-6 text-stone-700">
                      {related.shortDescription}
                    </p>
                    <div className="mt-auto pt-5">
                      <ButtonLink href={related.cta.href} variant="ghost">
                        {related.cta.label}
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <CTASection
        description={reservationCta.description}
        primaryCta={reservationCta.primaryCta}
        title={reservationCta.title}
      />
    </>
  );
}
