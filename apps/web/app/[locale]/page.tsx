import { notFound } from "next/navigation";
import { isSupportedLocale, type Locale } from "@/lib/i18n/config";
import enMessages from "@/messages/en.json";
import trMessages from "@/messages/tr.json";

const messages: Record<Locale, typeof trMessages> = {
  tr: trMessages,
  en: enMessages,
};

type LocaleHomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const page = messages[locale].scaffold;

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-800">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
          {page.description}
        </p>
      </div>
    </main>
  );
}
