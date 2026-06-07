import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PageSectionContent } from "@/lib/types/content";
import type { Experience } from "@/lib/types/hotel";
import { cn } from "@/lib/utils/classNames";

type ExperienceMosaicProps = {
  section?: PageSectionContent;
  experiences: Experience[];
};

export function ExperienceMosaic({
  section,
  experiences,
}: ExperienceMosaicProps) {
  return (
    <section className="bg-[var(--background)] py-16 sm:py-20">
      <Container>
        {section ? (
          <SectionHeader
            className="mb-10"
            description={section.description}
            eyebrow={section.eyebrow}
            title={section.title}
          />
        ) : null}

        <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-[260px_260px]">
          {experiences.map((experience, index) => (
            <article
              className={cn(
                "group relative min-h-[300px] overflow-hidden rounded-[1.5rem] bg-[#123A32] text-[#FFF8EC]",
                index === 0 && "lg:col-span-2 lg:row-span-2",
                index === 3 && "lg:col-span-2",
              )}
              key={experience.id}
            >
              <Image
                alt={experience.image.alt}
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 100vw"
                }
                src={experience.image.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/90 via-[#0F2F2A]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="font-display text-2xl font-medium sm:text-3xl">
                  {experience.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#F4EBDC] sm:text-base">
                  {experience.shortDescription}
                </p>
                <ButtonLink
                  className="mt-4 text-[#FFF8EC] hover:text-[#F0B38D]"
                  href={experience.cta.href}
                  isExternal={experience.cta.kind === "external"}
                  variant="text"
                >
                  {experience.cta.label}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
