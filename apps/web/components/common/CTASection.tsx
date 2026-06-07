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
    <section className={cn("bg-[var(--background)] py-16 sm:py-20", className)}>
      <Container>
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-[#123A32] p-6 text-[#FFF8EC] shadow-[0_24px_80px_rgba(18,58,50,0.18)] sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            className="max-w-2xl [&_h2]:text-[#FFF8EC] [&_p]:text-[#EDE3D2]"
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
                  variant="primary"
                >
                  {primaryCta.label}
                </ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink
                  href={secondaryCta.href}
                  isExternal={secondaryCta.kind === "external"}
                  size="lg"
                  variant="secondary"
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
