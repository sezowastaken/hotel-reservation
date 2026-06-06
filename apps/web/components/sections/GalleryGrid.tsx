import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { GalleryImage } from "@/lib/types/hotel";

type GalleryCategoryLabelMap = Partial<Record<GalleryImage["category"], string>>;

type GalleryGridProps = {
  images: GalleryImage[];
  categoryLabels: GalleryCategoryLabelMap;
  featuredLabel: string;
};

const categoryOrder: GalleryImage["category"][] = [
  "marina",
  "nature",
  "rooms",
  "restaurant",
  "pool",
  "rooftop",
  "exterior",
];

export function GalleryGrid({
  images,
  categoryLabels,
  featuredLabel,
}: GalleryGridProps) {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-7">
          {categoryOrder.map((category) => {
            const categoryImages = images.filter(
              (image) => image.category === category,
            );

            if (categoryImages.length === 0) {
              return null;
            }

            return (
              <div key={category}>
                <div className="mb-4 flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-stone-950">
                    {categoryLabels[category] ?? category}
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryImages.map((image) => (
                    <div className="relative" key={image.id}>
                      <ImageFrame
                        image={image}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                      {image.featured ? (
                        <Badge
                          className="absolute left-3 top-3 bg-white/90"
                          tone="teal"
                        >
                          {featuredLabel}
                        </Badge>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
