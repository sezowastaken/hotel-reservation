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
    <section className={cn("bg-[#F7F1E7] px-4 py-8 sm:py-10", className)}>
      <Container>
        <div className="grid gap-6 rounded-2xl border border-[#123A32]/10 bg-[#FBF7EF] p-5 shadow-[0_18px_60px_rgba(18,58,50,0.10)] sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            className="[&_h2]:text-2xl [&_h2]:sm:text-3xl [&_p]:text-base"
            description={content.description}
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
            className="w-full sm:w-auto"
          />
        </div>
      </Container>
    </section>
  );
}
