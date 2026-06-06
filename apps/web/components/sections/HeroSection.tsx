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
        "relative isolate overflow-hidden bg-stone-900 text-white",
        variant === "home" ? "min-h-[78vh]" : "min-h-[54vh]",
        !hasImage && "bg-stone-100 text-stone-950",
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
          <div className="absolute inset-0 bg-stone-950/45" />
        </>
      ) : null}
      <Container
        className={cn(
          "relative z-10 flex min-h-[inherit] items-end py-16 sm:py-20 lg:py-24",
          !hasImage && "items-center",
        )}
      >
        <div className="max-w-3xl pb-3">
          {hero.eyebrow ? (
            <p
              className={cn(
                "text-sm font-medium uppercase tracking-[0.18em]",
                hasImage ? "text-teal-50" : "text-teal-800",
              )}
            >
              {hero.eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
              hasImage ? "text-white" : "text-stone-950",
            )}
          >
            {hero.title}
          </h1>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
              hasImage ? "text-stone-50" : "text-stone-700",
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
                >
                  {hero.primaryCta.label}
                </ButtonLink>
              ) : null}
              {hero.secondaryCta ? (
                <ButtonLink
                  href={hero.secondaryCta.href}
                  isExternal={hero.secondaryCta.kind === "external"}
                  size="lg"
                  variant={hasImage ? "secondary" : "outline"}
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
