import { ButtonLink } from "@/components/ui/Button";
import type { PublicPathname } from "@/lib/i18n/config";
import type { SiteSettings } from "@/lib/types/hotel";

type ReservationMessageDetails = {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
};

type ReservationMessageLabels = {
  checkIn: string;
  checkOut: string;
  guests: string;
};

type WhatsAppBookingButtonProps = {
  siteSettings: SiteSettings;
  label: string;
  fallbackLabel: string;
  message?: string;
  details?: ReservationMessageDetails;
  detailLabels: ReservationMessageLabels;
  fallbackHref?: PublicPathname;
  className?: string;
};

export function WhatsAppBookingButton({
  siteSettings,
  label,
  fallbackLabel,
  message,
  details,
  detailLabels,
  fallbackHref = "/contact",
  className,
}: WhatsAppBookingButtonProps) {
  const whatsappNumber = normalizeWhatsAppNumber(
    siteSettings.contact.whatsappNumber,
  );

  if (!siteSettings.reservation.whatsappEnabled || !whatsappNumber) {
    return (
      <ButtonLink className={className} href={fallbackHref} variant="outline">
        {fallbackLabel}
      </ButtonLink>
    );
  }

  const whatsappMessage = buildWhatsAppMessage(
    message ?? siteSettings.reservation.defaultWhatsappMessage,
    details,
    detailLabels,
  );

  return (
    <ButtonLink
      className={className}
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`}
      isExternal
    >
      {label}
    </ButtonLink>
  );
}

function normalizeWhatsAppNumber(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const digits = value.replace(/\D/g, "");
  return digits.length > 0 ? digits : null;
}

function buildWhatsAppMessage(
  baseMessage: string,
  details?: ReservationMessageDetails,
  labels?: ReservationMessageLabels,
): string {
  const detailParts = [
    details?.checkIn && labels ? `${labels.checkIn}: ${details.checkIn}` : null,
    details?.checkOut && labels
      ? `${labels.checkOut}: ${details.checkOut}`
      : null,
    details?.guests && labels ? `${labels.guests}: ${details.guests}` : null,
  ].filter(Boolean);

  if (detailParts.length === 0) {
    return baseMessage;
  }

  return `${baseMessage}\n${detailParts.join("\n")}`;
}
