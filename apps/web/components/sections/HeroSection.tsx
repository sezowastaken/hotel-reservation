import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { PageHeroContent } from "@/lib/types/content";
import { cn } from "@/lib/utils/classNames";

type HeroSectionProps = {
  hero: PageHeroContent;
  variant?: "home" | "page";
};

export function HeroSection({ hero, variant = "page" }: HeroSectionProps) {
  const hasImage = Boolean(hero.image);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-[#123A32] text-white",
        variant === "home" ? "min-h-[86vh]" : "min-h-[54vh]",
        !hasImage && "bg-[#F4EBDC] text-[#252A27]",
      )}
    >
      {hero.image ? (
        <>
          <Image
            alt={hero.image.alt}
            className="object-cover"
            fill
            priority={variant === "home"}
            sizes="100vw"
            src={hero.image.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/86 via-[#123A32]/36 to-[#B96A4D]/16" />
        </>
      ) : null}
      <Container
        className={cn(
          "relative z-10 flex min-h-[inherit] items-end py-16 sm:py-20 lg:py-24",
          !hasImage && "items-center",
        )}
      >
        <div className="max-w-3xl pb-6">
          {hero.eyebrow ? (
            <p
              className={cn(
                "text-sm font-medium",
                hasImage ? "text-[#F4EBDC]" : "text-[#B96A4D]",
              )}
            >
              {hero.eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-display mt-4 text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-7xl",
              hasImage ? "text-white" : "text-stone-950",
            )}
          >
            {hero.title}
          </h1>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
              hasImage ? "text-[#F7F1E7]" : "text-[#343A36]",
            )}
          >
            {hero.subtitle}
          </p>
          {hero.primaryCta || hero.secondaryCta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {hero.primaryCta ? (
                <ButtonLink
                  href={hero.primaryCta.href}
                  isExternal={hero.primaryCta.kind === "external"}
                  size="lg"
                  variant="primary"
                >
                  {hero.primaryCta.label}
                </ButtonLink>
              ) : null}
              {hero.secondaryCta ? (
                <ButtonLink
                  href={hero.secondaryCta.href}
                  isExternal={hero.secondaryCta.kind === "external"}
                  size="lg"
                  variant="secondary"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
