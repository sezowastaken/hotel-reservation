import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { Link, navigationItems } from "@/lib/i18n/navigation";
import type { SiteSettings } from "@/lib/types/hotel";

type HeaderProps = {
  siteSettings: SiteSettings;
};

export function Header({ siteSettings }: HeaderProps) {
  const navigation = useTranslations("navigation");

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur">
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="max-w-[18rem] text-base font-semibold leading-tight text-stone-950"
        >
          {siteSettings.hotelName}
        </Link>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <nav
            aria-label={navigation("primary")}
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone-700"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm outline-none hover:text-teal-800 focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-4"
              >
                {navigation(item.labelKey)}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
}
