import type { ReactNode } from "react";
import { cn } from "@/lib/utils/classNames";

type IconTextProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
};

export function IconText({ icon, title, description, className }: IconTextProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-800">
        {icon}
      </div>
      <div>
        <p className="font-medium text-stone-950">{title}</p>
        {description ? (
          <p className="mt-1 text-sm leading-6 text-stone-700">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
