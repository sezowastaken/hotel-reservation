import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import type { PublicPathname } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/classNames";

export type NearbyHighlight = {
  label: string;
};

export type NearbySectionContent = {
  eyebrow: string;
  title: string;
  body: string;
  bodySecond: string;
  highlights: NearbyHighlight[];
  cta: {
    label: string;
    href: string;
  };
  mapImage: {
    src: string;
    alt: string;
  };
};

type NearbySectionProps = {
  content: NearbySectionContent;
};

const destinations = [
  {
    name: "Marmaris",
    tag: "Şehir",
    text: "Marina, çarşı ve şehir merkezinin enerjisine kısa sürede ulaşın.",
  },
  {
    name: "Hisarönü",
    tag: "Körfez",
    text: "Sakin kıyı atmosferi ve manzaralı rotalarla günü yavaşlatın.",
  },
  {
    name: "İçmeler",
    tag: "Sahil",
    text: "Plaj, yürüyüş yolu ve canlı sahil hayatı için keyifli bir mola verin.",
  },
  {
    name: "Selimiye",
    tag: "Akşam sofrası",
    text: "Local balık restoranları ve dingin kıyılarıyla uzun akşam yemeklerinin tadını çıkarın.",
  },
  {
    name: "Bozburun",
    tag: "Yarımada",
    text: "Tekne kültürü, sakin sokaklar ve denizle iç içe bir sahil ritmi keşfedin.",
  },
  {
    name: "Söğüt",
    tag: "Gün batımı",
    text: "Sessiz koylar ve gün batımı sofralarıyla daha huzurlu bir rota planlayın.",
  },
  {
    name: "Bayır",
    tag: "Köy molası",
    text: "Bin yıllık çınar ağacını görün, köy meydanında mola verin ve yerel pazarı gezin.",
  },
  {
    name: "Çiftlik",
    tag: "Açık kıyılar",
    text: "Geniş kıyılar ve ferah deniz manzaralarıyla günü sahile taşıyın.",
  },
];

const topDestinations = destinations.slice(0, 6);
const bottomDestinations = destinations.slice(6);

type Destination = (typeof destinations)[number];

function DestinationNote({ destination }: { destination: Destination }) {
  return (
    <div className="border-t border-[#123A32]/10 pt-4">
      <span className="inline-flex rounded-full bg-[#F3DFD4] px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#8F4E3B]">
        {destination.tag}
      </span>
      <h3 className="font-display mt-2 text-xl font-medium leading-tight text-[#123A32]">
        {destination.name}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-[#343A36]">
        {destination.text}
      </p>
    </div>
  );
}

export function NearbySection({ content }: NearbySectionProps) {
  return (
    <section
      className="overflow-hidden bg-[#F7F1E7] py-16 sm:py-20 lg:py-24"
      id="nearby"
    >
      <div
        className={cn(
          "mx-auto flex w-full flex-col px-5 sm:px-6",
          "lg:grid lg:grid-cols-[minmax(0,52vw)_minmax(0,48vw)] lg:items-center lg:px-0",
        )}
      >
        <div className="order-2 mt-10 lg:order-1 lg:mt-0 lg:flex lg:min-h-[520px] lg:self-stretch lg:justify-self-start">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:flex lg:h-full lg:max-w-[52vw] lg:items-center">
            <Image
              alt={content.mapImage.alt}
              className={cn(
                "mx-auto h-auto w-full object-contain",
                "lg:mx-0 lg:max-h-[620px] lg:w-full lg:max-w-none",
              )}
              height={1800}
              loading="lazy"
              src={content.mapImage.src}
              width={2600}
            />
          </div>
        </div>

        <div
          className={cn(
            "order-1 flex w-full justify-center",
            "lg:order-2 lg:px-8",
            "xl:px-10",
          )}
        >
          <div className="mx-auto w-full max-w-[620px]">
          <p className="text-sm font-medium text-[#B96A4D]">
            Yakın çevre
          </p>

          <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-[#1F2421] sm:text-4xl">
            Kısa yolculuklar,
            <br />
            farklı atmosferler
          </h2>

          <p className="mt-5 text-base leading-7 text-[#343A36] sm:text-lg sm:leading-8">
            Palmiye’den yola çıkarak yarımadanın sahil köylerine, şehir
            merkezine ve doğa duraklarına kısa sürede ulaşabilirsiniz.
          </p>

          <div className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-5">
            {topDestinations.map((destination) => (
              <DestinationNote
                destination={destination}
                key={destination.name}
              />
            ))}
          </div>

          <div className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2 xl:mx-auto xl:mt-5 xl:w-2/3 xl:gap-x-8 xl:gap-y-5">
            {bottomDestinations.map((destination) => (
              <DestinationNote
                destination={destination}
                key={destination.name}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={content.cta.href as PublicPathname}
              variant="dark"
            >
              Rotaları Keşfet
            </ButtonLink>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
