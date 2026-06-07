import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/classNames";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "neutral" | "teal" | "warm";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "bg-[#F7F1E7] text-[#123A32] ring-[#123A32]/15",
  teal: "bg-[#E3F0ED] text-[#123A32] ring-[#7CA9A3]/35",
  warm: "bg-[#F3DFD4] text-[#8F4E3B] ring-[#B96A4D]/25",
};

export function Badge({
  children,
  className,
  tone = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
