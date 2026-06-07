import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { HighlightItem, ImageAsset } from "@/lib/types/content";

type BoutiqueStorySectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights: HighlightItem[];
  image?: ImageAsset;
};

export function BoutiqueStorySection({
  eyebrow,
  title,
  description,
  highlights,
  image,
}: BoutiqueStorySectionProps) {
  return (
    <section className="bg-[var(--background)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            {eyebrow ? (
              <p className="text-sm font-medium text-[#B96A4D]">{eyebrow}</p>
            ) : null}
            <h2 className="font-display mt-4 max-w-3xl text-4xl font-medium leading-tight text-[#123A32] sm:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#343A36] sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          {image ? (
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#EFE4D2] shadow-[0_24px_70px_rgba(18,58,50,0.12)]">
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={image.src}
              />
            </div>
          ) : null}
          <div className="grid content-center gap-6 border-y border-[#123A32]/15 py-8">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="border-l-2 border-[#B96A4D] pl-5">
                <h3 className="font-display text-2xl font-medium text-[#123A32]">
                  {highlight.title}
                </h3>
                <p className="mt-2 leading-7 text-[#343A36]">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
