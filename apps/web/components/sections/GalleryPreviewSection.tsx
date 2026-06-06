import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CtaLink } from "@/lib/types/content";
import type { GalleryImage } from "@/lib/types/hotel";

type GalleryPreviewSectionProps = {
  title: string;
  description: string;
  cta?: CtaLink;
  images: GalleryImage[];
};

export function GalleryPreviewSection({
  title,
  description,
  cta,
  images,
}: GalleryPreviewSectionProps) {
  const previewImages = images.slice(0, 6);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader description={description} title={title} />
          {cta ? (
            <div className="lg:justify-self-end">
              <ButtonLink
                href={cta.href}
                isExternal={cta.kind === "external"}
                variant="outline"
              >
                {cta.label}
              </ButtonLink>
            </div>
          ) : null}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewImages.map((image) => (
            <ImageFrame
              image={image}
              key={image.id}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
