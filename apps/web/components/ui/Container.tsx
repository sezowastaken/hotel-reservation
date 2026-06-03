import type { ReactNode } from "react";
import { cn } from "@/lib/utils/classNames";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "max-w-6xl",
  narrow: "max-w-4xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
