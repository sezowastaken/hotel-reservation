import Image from "next/image";
import type { ImageAsset } from "@/lib/types/content";
import { cn } from "@/lib/utils/classNames";

type ImageFrameProps = {
  image: ImageAsset;
  aspectRatio?: "square" | "wide" | "portrait";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const aspectClasses: Record<NonNullable<ImageFrameProps["aspectRatio"]>, string> =
  {
    square: "aspect-square",
    wide: "aspect-[4/3] sm:aspect-[16/10]",
    portrait: "aspect-[4/5]",
  };

export function ImageFrame({
  image,
  aspectRatio = "wide",
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-stone-200",
        aspectClasses[aspectRatio],
        className,
      )}
    >
      <Image
        alt={image.alt}
        className="object-cover"
        fill
        priority={priority}
        sizes={sizes}
        src={image.src}
      />
    </div>
  );
}
