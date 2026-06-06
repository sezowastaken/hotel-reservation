import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ContactPageContent } from "@/lib/types/content";
import type { SiteSettings } from "@/lib/types/hotel";

type LocationPreviewSectionProps = {
  contactContent: ContactPageContent;
  siteSettings: SiteSettings;
  fallbackText: string;
};

export function LocationPreviewSection({
  contactContent,
  siteSettings,
  fallbackText,
}: LocationPreviewSectionProps) {
  const location = contactContent.location;
  const mapHref = siteSettings.location.mapUrl;
  const address = siteSettings.location.address;

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <SectionHeader
          description={location.description}
          eyebrow={contactContent.hero.eyebrow}
          title={location.title}
        />
        <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
          {address ? (
            <p className="text-base leading-7 text-stone-700">{address}</p>
          ) : (
            <p className="text-base leading-7 text-stone-700">
              {fallbackText}
            </p>
          )}
          {mapHref ? (
            <div className="mt-6">
              <ButtonLink href={mapHref} isExternal variant="outline">
                {location.cta?.label}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
