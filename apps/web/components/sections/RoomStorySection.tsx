import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PageSectionContent } from "@/lib/types/content";
import type { RoomPublicInfo } from "@/lib/types/hotel";

type RoomStorySectionProps = {
  section: PageSectionContent;
  room: RoomPublicInfo;
};

export function RoomStorySection({ section, room }: RoomStorySectionProps) {
  const details = room.amenities.slice(0, 5);
  const image = section.image ?? room.featuredImage;

  return (
    <section className="bg-[#F4EBDC] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ImageFrame
            aspectRatio="wide"
            className="rounded-[2rem] shadow-[0_24px_70px_rgba(18,58,50,0.12)]"
            image={image}
          />
          <div>
            <SectionHeader
              description={section.description}
              eyebrow={section.eyebrow}
              title={section.title}
            />
            {details.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {details.map((detail) => (
                  <Badge key={detail}>{detail}</Badge>
                ))}
              </div>
            ) : null}
            {section.cta ? (
              <div className="mt-8">
                <ButtonLink
                  href={section.cta.href}
                  isExternal={section.cta.kind === "external"}
                  size="lg"
                  variant="secondary"
                >
                  {section.cta.label}
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
