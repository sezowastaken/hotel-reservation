import { useTranslations } from "next-intl";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import { Link, navigationItems } from "@/lib/i18n/navigation";
import type { SiteSettings } from "@/lib/types/hotel";
import { cn } from "@/lib/utils/classNames";

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
            className="inline-flex shrink-0 items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#C47A55] focus-visible:ring-offset-4"
          >
            <Image
              alt={siteSettings.hotelName}
              className="h-10 w-auto object-contain sm:h-11"
              height={713}
              priority
              src="/images/logo/palmiye_logo.png"
              width={1600}
            />
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
            className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm font-medium tracking-[0.02em] text-[#343A36]"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-sm pb-1 outline-none transition-colors duration-300",
                  "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:bg-[#B96A4D] after:transition-transform after:duration-300",
                  "hover:text-[#8F4E3B] hover:after:scale-x-100",
                  "focus-visible:text-[#8F4E3B] focus-visible:ring-2 focus-visible:ring-[#C47A55] focus-visible:ring-offset-4 focus-visible:after:scale-x-100",
                )}
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
