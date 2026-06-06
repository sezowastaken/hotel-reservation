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
      <Container className="py-3 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="max-w-[14rem] text-sm font-semibold leading-tight text-stone-950 sm:max-w-none sm:text-base"
          >
            {siteSettings.hotelName}
          </Link>
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4 lg:mt-0">
          <nav
            aria-label={navigation("primary")}
            className="-mx-4 flex flex-1 gap-4 overflow-x-auto px-4 pb-1 text-sm text-stone-700 lg:mx-0 lg:flex-none lg:flex-wrap lg:justify-end lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-sm outline-none hover:text-teal-800 focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-4"
              >
                {navigation(item.labelKey)}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}
