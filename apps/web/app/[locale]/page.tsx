import { useTranslations } from "next-intl";

export default function LocaleHomePage() {
  const t = useTranslations("common");

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-800">
          {t("siteEyebrow")}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
          {t("siteName")}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
          {t("siteIntro")}
        </p>
      </div>
    </main>
  );
}
