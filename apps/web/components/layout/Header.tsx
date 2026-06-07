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
    <header className="sticky top-0 z-40 border-b border-[#123A32]/10 bg-[#F7F1E7]/94 shadow-[0_8px_30px_rgba(18,58,50,0.04)] backdrop-blur">
      <Container className="py-3 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display max-w-[13rem] text-base font-medium leading-tight text-[#123A32] sm:max-w-none sm:text-lg"
          >
            {siteSettings.hotelName}
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <details className="group relative">
              <summary className="flex min-h-10 cursor-pointer list-none items-center rounded-full border border-[#123A32]/15 bg-[#EFE4D2] px-4 text-sm font-medium text-[#123A32] shadow-sm marker:hidden hover:border-[#C47A55]/45">
                {navigation("menu")}
              </summary>
              <nav
                aria-label={navigation("primary")}
                className="absolute right-0 top-12 z-30 grid min-w-52 gap-1 rounded-2xl border border-[#123A32]/10 bg-[#F7F1E7] p-3 text-sm text-[#343A36] shadow-[0_18px_60px_rgba(18,58,50,0.16)]"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 outline-none hover:bg-[#EFE4D2] hover:text-[#8F4E3B] focus-visible:ring-2 focus-visible:ring-[#C47A55]"
                  >
                    {navigation(item.labelKey)}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <nav
            aria-label={navigation("primary")}
            className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm text-[#343A36]"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm outline-none hover:text-[#8F4E3B] focus-visible:ring-2 focus-visible:ring-[#C47A55] focus-visible:ring-offset-4"
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
