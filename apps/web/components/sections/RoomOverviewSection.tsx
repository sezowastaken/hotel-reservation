import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { RoomsPageContent } from "@/lib/types/content";
import type { RoomPublicInfo } from "@/lib/types/hotel";

type RoomOverviewSectionProps = {
  content: RoomsPageContent;
  room: RoomPublicInfo;
  labels: {
    amenities: string;
    gallery: string;
    capacityNote: string;
  };
};

export function RoomOverviewSection({
  content,
  room,
  labels,
}: RoomOverviewSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              description={content.overview.description}
              eyebrow={content.hero.eyebrow}
              title={content.overview.title}
            />
            <p className="mt-6 text-base leading-7 text-stone-700">
              {room.description}
            </p>
            {room.capacityNote ? (
              <div className="mt-6 rounded-lg border border-amber-100 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                <p className="font-medium">{labels.capacityNote}</p>
                <p className="mt-1">{room.capacityNote}</p>
              </div>
            ) : null}
            <div className="mt-8">
              <ButtonLink
                href={room.cta.href}
                isExternal={room.cta.kind === "external"}
              >
                {room.cta.label}
              </ButtonLink>
            </div>
          </div>
          <div>
            <ImageFrame
              image={room.featuredImage}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-stone-950">
              {labels.amenities}
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-stone-700">
              {room.amenities.map((amenity) => (
                <li
                  className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-3"
                  key={amenity}
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-stone-950">
              {labels.gallery}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {room.images.map((image) => (
                <ImageFrame image={image} key={image.src} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
