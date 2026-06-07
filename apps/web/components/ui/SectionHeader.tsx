import { cn } from "@/lib/utils/classNames";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium text-[#B96A4D]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-[#1F2421] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#343A36] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
