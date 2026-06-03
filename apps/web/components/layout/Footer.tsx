import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Link, navigationItems } from "@/lib/i18n/navigation";
import type { SiteSettings } from "@/lib/types/hotel";

type FooterProps = {
  siteSettings: SiteSettings;
};

export function Footer({ siteSettings }: FooterProps) {
  const footer = useTranslations("footer");
  const navigation = useTranslations("navigation");
  const confirmedSocialLinks = siteSettings.socialLinks.filter(
    (link) => link.url,
  );

  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <Container className="grid gap-8 py-10 text-sm text-stone-700 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-semibold text-stone-950">{siteSettings.hotelName}</p>
          <p className="mt-3 max-w-md leading-6">{footer("description")}</p>
        </div>
        <div>
          <p className="font-medium text-stone-950">{footer("navigation")}</p>
          <nav
            aria-label={footer("navigation")}
            className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-1"
          >
            {navigationItems.map((item) => (
              <Link
                className="hover:text-teal-800"
                href={item.href}
                key={item.href}
              >
                {navigation(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-medium text-stone-950">{footer("contact")}</p>
          <div className="mt-3 space-y-2">
            {siteSettings.contact.phone ? (
              <a
                className="block hover:text-teal-800"
                href={`tel:${siteSettings.contact.phone}`}
              >
                {siteSettings.contact.phone}
              </a>
            ) : null}
            {siteSettings.contact.email ? (
              <a
                className="block hover:text-teal-800"
                href={`mailto:${siteSettings.contact.email}`}
              >
                {siteSettings.contact.email}
              </a>
            ) : null}
            {confirmedSocialLinks.map((link) => (
              <a
                className="block capitalize hover:text-teal-800"
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
