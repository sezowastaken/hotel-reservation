import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { SiteSettings } from "@/lib/types/hotel";

type SiteShellProps = {
  children: ReactNode;
  siteSettings: SiteSettings;
};

export function SiteShell({ children, siteSettings }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-950">
      <Header siteSettings={siteSettings} />
      <div className="flex-1">{children}</div>
      <Footer siteSettings={siteSettings} />
    </div>
  );
}
