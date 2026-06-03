import { useTranslations } from "next-intl";
import { WhatsAppBookingButton } from "@/components/common/WhatsAppBookingButton";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ReservationCtaContent } from "@/lib/types/content";
import type { SiteSettings } from "@/lib/types/hotel";
import { cn } from "@/lib/utils/classNames";

type ReservationCTAProps = {
  content: ReservationCtaContent;
  siteSettings: SiteSettings;
  className?: string;
};

export function ReservationCTA({
  content,
  siteSettings,
  className,
}: ReservationCTAProps) {
  const t = useTranslations("reservation");

  return (
    <section className={cn("bg-teal-950 py-16 text-white sm:py-20", className)}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            className="text-white [&_h2]:text-white [&_p]:text-teal-50"
            description={content.description}
            eyebrow={t("askAvailability")}
            title={content.title}
          />
          <WhatsAppBookingButton
            detailLabels={{
              checkIn: t("checkIn"),
              checkOut: t("checkOut"),
              guests: t("guests"),
            }}
            fallbackLabel={t("contactForReservation")}
            label={content.primaryCta.label}
            message={content.whatsappMessage}
            siteSettings={siteSettings}
          />
        </div>
      </Container>
    </section>
  );
}
