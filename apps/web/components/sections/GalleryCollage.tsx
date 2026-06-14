import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CtaLink } from "@/lib/types/content";
import type { GalleryImage } from "@/lib/types/hotel";
import { cn } from "@/lib/utils/classNames";

type GalleryCollageProps = {
  title: string;
  description: string;
  images: GalleryImage[];
  cta?: CtaLink;
};

export function GalleryCollage({
  title,
  description,
  images,
  cta,
}: GalleryCollageProps) {
  const previewImages = images.slice(0, 5);

  return (
    <section className="bg-[#EFE4D2] py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:pt-4">
            <SectionHeader description={description} title={title} />
            {cta ? (
              <div className="mt-7">
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-6">
            {previewImages.map((image, index) => (
              <figure
                className={cn(
                  "relative overflow-hidden rounded-[1.35rem] bg-[#F7F1E7]",
                  index === 0
                    ? "col-span-2 aspect-[4/5] sm:col-span-3 sm:row-span-2"
                    : "aspect-[4/3]",
                  index === 1 && "sm:col-span-3",
                  index > 1 && "sm:col-span-2",
                )}
                key={image.id}
              >
                <Image
                  alt={image.alt}
                  className="object-cover"
                  fill
                  loading="eager"
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 35vw, 100vw"
                      : "(min-width: 1024px) 20vw, 50vw"
                  }
                  src={image.src}
                />
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
