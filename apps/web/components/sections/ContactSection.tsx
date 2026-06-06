import { ButtonLink } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ContactPageContent } from "@/lib/types/content";
import type { SiteSettings } from "@/lib/types/hotel";

type ContactSectionProps = {
  content: ContactPageContent;
  siteSettings: SiteSettings;
  labels: {
    methods: string;
    location: string;
    unconfirmed: string;
    mapUnavailable: string;
  };
};

export function ContactSection({
  content,
  siteSettings,
  labels,
}: ContactSectionProps) {
  const confirmedMethods = content.methods.filter(
    (method) => method.value && method.href,
  );
  const hasMap = Boolean(siteSettings.location.mapUrl);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <SectionHeader
            description={content.reservationCta.description}
            eyebrow={content.hero.eyebrow}
            title={content.reservationCta.title}
          />
          <div className="mt-8">
            <ButtonLink
              href={content.reservationCta.primaryCta.href}
              isExternal={content.reservationCta.primaryCta.kind === "external"}
            >
              {content.reservationCta.primaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-5">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold text-stone-950">
                {labels.methods}
              </h2>
            </CardHeader>
            <CardContent>
              {confirmedMethods.length > 0 ? (
                <div className="grid gap-3">
                  {confirmedMethods.map((method) => (
                    <a
                      className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 hover:border-teal-700 hover:text-teal-900"
                      href={method.href ?? undefined}
                      key={method.id}
                    >
                      <span className="block font-medium text-stone-950">
                        {method.label}
                      </span>
                      {method.value}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-6 text-stone-700">
                  {labels.unconfirmed}
                </p>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold text-stone-950">
                {labels.location}
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-stone-700">
                {siteSettings.location.address ??
                  content.location.description}
              </p>
              {hasMap ? (
                <div className="mt-5">
                  <ButtonLink
                    href={siteSettings.location.mapUrl ?? ""}
                    isExternal
                    variant="outline"
                  >
                    {content.location.cta?.label}
                  </ButtonLink>
                </div>
              ) : (
                <p className="mt-4 text-sm leading-6 text-stone-600">
                  {labels.mapUnavailable}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
