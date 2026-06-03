import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/classNames";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "neutral" | "teal" | "warm";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "bg-stone-100 text-stone-700 ring-stone-200",
  teal: "bg-teal-50 text-teal-900 ring-teal-100",
  warm: "bg-amber-50 text-amber-900 ring-amber-100",
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
