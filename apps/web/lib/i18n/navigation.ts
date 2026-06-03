import { createNavigation } from "next-intl/navigation";
import { routing, type PublicPathname } from "@/lib/i18n/config";

export const navigationItems = [
  { href: "/", labelKey: "home" },
  { href: "/rooms", labelKey: "rooms" },
  { href: "/restaurant", labelKey: "restaurant" },
  { href: "/marina", labelKey: "marina" },
  { href: "/pool-bar", labelKey: "poolBar" },
  { href: "/rooftop-terrace", labelKey: "rooftopTerrace" },
  { href: "/gallery", labelKey: "gallery" },
  { href: "/contact", labelKey: "contact" },
] as const satisfies ReadonlyArray<{
  href: PublicPathname;
  labelKey: string;
}>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
