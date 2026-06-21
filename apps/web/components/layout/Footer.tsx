import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Link } from "@/lib/i18n/navigation";
import type { PublicPathname } from "@/lib/i18n/config";
import type { SiteSettings } from "@/lib/types/hotel";

type FooterProps = {
  siteSettings: SiteSettings;
};

const stayLinks = [
  { href: "/rooms", labelKey: "rooms" },
  { href: "/gallery", labelKey: "gallery" },
  { href: "/contact", labelKey: "contact" },
] as const satisfies ReadonlyArray<{
  href: PublicPathname;
  labelKey: string;
}>;

const experienceLinks = [
  { href: "/restaurant", labelKey: "restaurant" },
  { href: "/marina", labelKey: "marina" },
  { href: "/pool-bar", labelKey: "poolBar" },
  { href: "/rooftop-terrace", labelKey: "rooftopTerrace" },
] as const satisfies ReadonlyArray<{
  href: PublicPathname;
  labelKey: string;
}>;

export function Footer({ siteSettings }: FooterProps) {
  const footer = useTranslations("footer");
  const navigation = useTranslations("navigation");
  const confirmedSocialLinks = siteSettings.socialLinks.filter(
    (link) => link.url,
  );

  return (
    <footer className="border-t border-[#123A32]/10 bg-[#123A32]">
      <Container className="grid gap-8 py-12 text-sm text-[#EDE3D2] md:grid-cols-2 lg:grid-cols-[1.4fr_0.75fr_0.85fr_1fr]">
        <div>
          <p className="font-display text-lg font-medium text-[#FFF8EC]">
            {siteSettings.hotelName}
          </p>
          <p className="mt-3 max-w-md leading-6">{footer("description")}</p>
        </div>
        <div>
          <p className="font-medium text-[#FFF8EC]">{footer("stay")}</p>
          <nav
            aria-label={footer("stay")}
            className="mt-3 grid gap-2"
          >
            {stayLinks.map((item) => (
              <Link
                className="hover:text-[#F0B38D]"
                href={item.href}
                key={item.href}
              >
                {navigation(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-medium text-[#FFF8EC]">
            {footer("experiences")}
          </p>
          <nav
            aria-label={footer("experiences")}
            className="mt-3 grid gap-2"
          >
            {experienceLinks.map((item) => (
              <Link
                className="hover:text-[#F0B38D]"
                href={item.href}
                key={item.href}
              >
                {navigation(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-medium text-[#FFF8EC]">{footer("contact")}</p>
          <div className="mt-3 space-y-2">
            {siteSettings.contact.phone ? (
              <a
                className="block hover:text-[#F0B38D]"
                href={`tel:${siteSettings.contact.phone.replace(/\s/g, "")}`}
              >
                {siteSettings.contact.phone}
              </a>
            ) : null}
            {siteSettings.contact.email ? (
              <a
                className="block hover:text-[#F0B38D]"
                href={`mailto:${siteSettings.contact.email}`}
              >
                {siteSettings.contact.email}
              </a>
            ) : null}
            {confirmedSocialLinks.map((link) => (
              <a
                className="block capitalize hover:text-[#F0B38D]"
                href={link.url ?? undefined}
                key={link.platform}
                rel="noreferrer"
                target="_blank"
              >
                {link.platform}
              </a>
            ))}
            {!siteSettings.contact.phone &&
            !siteSettings.contact.email &&
            confirmedSocialLinks.length === 0 ? (
              <p className="leading-6">{footer("contactFallback")}</p>
            ) : null}
          </div>
        </div>
      </Container>
    </footer>
  );
}
