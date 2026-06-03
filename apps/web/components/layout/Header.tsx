import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link, navigationItems } from "@/lib/i18n/navigation";

export function Header() {
  const navigation = useTranslations("navigation");
  const common = useTranslations("common");

  return (
    <header className="border-b border-stone-200 bg-stone-50/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-base font-semibold text-stone-950">
          {common("siteName")}
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav aria-label={navigation("primary")} className="flex flex-wrap gap-4 text-sm text-stone-700">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-teal-800">
                {navigation(item.labelKey)}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
