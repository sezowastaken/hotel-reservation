import { useTranslations } from "next-intl";

export function Footer() {
  const footer = useTranslations("footer");

  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-stone-700">
        <p className="font-medium text-stone-950">{footer("brand")}</p>
        <p className="mt-2 max-w-2xl">{footer("description")}</p>
      </div>
    </footer>
  );
}
