import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PageSectionContent } from "@/lib/types/content";
import type { RoomPublicInfo } from "@/lib/types/hotel";

type RoomsPreviewSectionProps = {
  section: PageSectionContent;
  room: RoomPublicInfo;
};

export function RoomsPreviewSection({
  section,
  room,
}: RoomsPreviewSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeader
            description={section.description}
            eyebrow={section.eyebrow}
            title={section.title}
          />
          <p className="mt-6 max-w-2xl text-base leading-7 text-stone-700">
            {room.shortDescription}
          </p>
          {section.cta ? (
            <div className="mt-8">
              <ButtonLink
                href={section.cta.href}
                isExternal={section.cta.kind === "external"}
              >
                {section.cta.label}
              </ButtonLink>
            </div>
          ) : null}
        </div>
        <ImageFrame
          image={section.image ?? room.featuredImage}
          priority={false}
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </Container>
    </section>
  );
}
