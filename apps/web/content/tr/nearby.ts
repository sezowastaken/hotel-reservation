import type { NearbySectionContent } from "@/components/sections/NearbySection";

export const nearbySectionContent: NearbySectionContent = {
  eyebrow: "Yakın çevre",
  title: "Orhaniye'den başlayan sakin keşif rotaları",
  body: "Palmiye Nature Hotel & Yacht Club, Hisarönü Körfezi'nin sakin kıyı atmosferine yakın konumuyla yalnızca bir konaklama noktası değil; Marmaris'in daha doğal ve yavaş tarafını keşfetmek için de sıcak bir başlangıç noktasıdır.",
  bodySecond:
    "Kızkumu, Turgut Şelalesi, Selimiye, Bozburun ve Söğüt gibi duraklar; deniz, doğa ve akşamüstü manzaralarıyla Palmiye'de geçireceğiniz tatili tamamlar.",
  highlights: [
    { label: "Koylar ve sahil rotaları" },
    { label: "Doğa molaları" },
    { label: "Akşamüstü keşifleri" },
  ],
  cta: {
    label: "Çevreyi Keşfet",
    href: "/nearby",
  },
  mapImage: {
    src: "/images/general/palmiye-coastline-map.png",
    alt: "Hisarönü Körfezi ve çevresini gösteren dekoratif kıyı haritası",
  },
};
