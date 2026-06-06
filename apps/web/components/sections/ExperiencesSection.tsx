import { ButtonLink } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PageSectionContent } from "@/lib/types/content";
import type { Experience } from "@/lib/types/hotel";

type ExperiencesSectionProps = {
  section?: PageSectionContent;
  title?: string;
  description?: string;
  experiences: Experience[];
};

export function ExperiencesSection({
  section,
  title,
  description,
  experiences,
}: ExperiencesSectionProps) {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <SectionHeader
            description={section?.description ?? description}
            eyebrow={section?.eyebrow}
            title={section?.title ?? title ?? ""}
          />
          {section?.cta ? (
            <div className="lg:justify-self-end">
              <ButtonLink
                href={section.cta.href}
                isExternal={section.cta.kind === "external"}
                variant="outline"
              >
                {section.cta.label}
              </ButtonLink>
            </div>
          ) : null}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((experience) => (
            <Card key={experience.id} className="flex h-full flex-col overflow-hidden">
              <ImageFrame
                aspectRatio="portrait"
                className="rounded-none"
                image={experience.image}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
              <CardHeader>
                <h3 className="text-xl font-semibold text-stone-950">
                  {experience.title}
                </h3>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm leading-6 text-stone-700">
                  {experience.shortDescription}
                </p>
                <div className="mt-auto pt-5">
                  <ButtonLink href={experience.cta.href} variant="ghost">
                    {experience.cta.label}
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
