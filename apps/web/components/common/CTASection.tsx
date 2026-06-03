import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CtaLink } from "@/lib/types/content";
import { cn } from "@/lib/utils/classNames";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  className?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-stone-100 py-16 sm:py-20", className)}>
      <Container>
        <div className="grid gap-8 rounded-lg border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            className="max-w-2xl"
            description={description}
            eyebrow={eyebrow}
            title={title}
          />
          {primaryCta || secondaryCta ? (
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              {primaryCta ? (
                <ButtonLink
                  href={primaryCta.href}
                  isExternal={primaryCta.kind === "external"}
                  size="lg"
                >
                  {primaryCta.label}
                </ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink
                  href={secondaryCta.href}
                  isExternal={secondaryCta.kind === "external"}
                  size="lg"
                  variant="outline"
                >
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
