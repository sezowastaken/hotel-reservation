import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PageSectionContent } from "@/lib/types/content";
import type { Experience } from "@/lib/types/hotel";
import type { PublicPathname } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/classNames";

type ExperienceMosaicProps = {
  section?: PageSectionContent;
  experiences: Experience[];
};

/**
 * Fixed bento-grid mosaic for the homepage experiences section.
 *
 * Desktop layout (3 effective columns):
 *   ┌──────────────────────┬────────────┬────────────┐
 *   │  Restaurant (tall)   │  Marina    │  Pool Bar  │
 *   │                      ├────────────┴────────────┤
 *   │                      │  Teras Bar (wide)       │
 *   └──────────────────────┴─────────────────────────┘
 *
 * All tile sizes are defined by the grid — images fill tiles via
 * object-fit: cover. Tiles never overlap or touch.
 */
export function ExperienceMosaic({
  section,
  experiences,
}: ExperienceMosaicProps) {
  /* Ensure exactly 4 experience items exist for the layout */
  if (experiences.length < 4) return null;

  const restaurant = experiences[0];
  const marina = experiences[1];
  const poolBar = experiences[2];
  const terasBar = experiences[3];

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

        {/* Bento grid – fixed layout, gap-driven spacing */}
        <div
          className={cn(
            "grid gap-5",
            /* Mobile: single column, fixed heights */
            "grid-cols-1",
            /* Tablet: 2 columns */
            "md:grid-cols-2",
            /* Desktop: 3 columns with defined rows */
            "lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[280px_280px]",
          )}
        >
          {/* Restaurant — left column, spans 2 rows on desktop */}
          <MosaicTile
            experience={restaurant}
            className={cn(
              "h-[260px] md:h-[280px]",
              "lg:col-span-1 lg:row-span-2 lg:h-auto",
            )}
            imagePosition="center 20%"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />

          {/* Marina — top-right area, first slot */}
          <MosaicTile
            experience={marina}
            className="h-[240px] md:h-[280px] lg:h-auto"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />

          {/* Pool Bar — top-right area, second slot */}
          <MosaicTile
            experience={poolBar}
            className="h-[240px] md:h-[280px] lg:h-auto"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />

          {/* Teras Bar — bottom-right, spans 2 columns on desktop */}
          <MosaicTile
            experience={terasBar}
            className={cn(
              "h-[240px] md:h-[280px]",
              "lg:col-span-2 lg:h-auto",
            )}
            sizes="(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   MosaicTile — individual bento tile
   ───────────────────────────────────────────────────────── */

type MosaicTileProps = {
  experience: Experience;
  className?: string;
  imagePosition?: string;
  sizes?: string;
};

function MosaicTile({
  experience,
  className,
  imagePosition,
  sizes = "100vw",
}: MosaicTileProps) {
  return (
    <article
      className={cn(
        /* Base tile styling */
        "group relative overflow-hidden rounded-2xl",
        /* Subtle tile scale + smooth transitions */
        "transition-transform duration-300 ease-out",
        "hover:scale-[1.015]",
        className,
      )}
      style={{ isolation: "isolate" }}
    >
      {/* Image wrapper — absolute fill, never affects tile size */}
      <div className="absolute inset-0">
        <Image
          alt={experience.image.alt}
          className={cn(
            "object-cover",
            "transition-transform duration-300 ease-out",
            /* Subtle zoom on group hover */
            "group-hover:scale-[1.05]",
          )}
          fill
          loading="eager"
          sizes={sizes}
          src={experience.image.src}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/85 via-[#0F2F2A]/30 to-transparent" />

      {/* Content overlay — positioned at bottom, no layout effect on tile */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-display text-xl font-medium text-[#FFF8EC] sm:text-2xl lg:text-[1.625rem]">
          {experience.title}
        </h3>
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#F4EBDC]/90 sm:text-[0.9375rem]">
          {experience.shortDescription}
        </p>

        {/* CTA link → morphs into pill button on tile hover / focus-visible */}
        <Link
          className={cn(
            /* Default: subtle text link */
            "mt-3 inline-flex items-center gap-1.5",
            "text-sm font-medium text-[#FFF8EC]/90",
            "transition-all duration-300 ease-out",
            "rounded-full px-0 py-0",
            /* Arrow icon hint */
            "after:content-['→'] after:inline-block after:transition-transform after:duration-300",
            /* Hover on tile: transform into pill button */
            "group-hover:bg-[#F7F1E7] group-hover:text-[#123A32]",
            "group-hover:px-4 group-hover:py-1.5",
            "group-hover:after:translate-x-0.5",
            /* Focus visible: same as hover state for keyboard users */
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C47A55] focus-visible:ring-offset-2",
            "focus-visible:bg-[#F7F1E7] focus-visible:text-[#123A32]",
            "focus-visible:px-4 focus-visible:py-1.5",
          )}
          href={experience.cta.href as PublicPathname}
        >
          {experience.cta.label}
        </Link>
      </div>
    </article>
  );
}
