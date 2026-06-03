import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "@/lib/i18n/navigation";
import type { PublicPathname } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/classNames";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-800 text-white shadow-sm hover:bg-teal-900 focus-visible:outline-teal-800",
  secondary:
    "bg-stone-900 text-white shadow-sm hover:bg-stone-800 focus-visible:outline-stone-900",
  outline:
    "border border-stone-300 bg-white text-stone-900 hover:border-teal-800 hover:text-teal-900 focus-visible:outline-teal-800",
  ghost: "text-stone-800 hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-stone-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

function getButtonClasses({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleOptions) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleOptions & {
    children: ReactNode;
  };

export function Button({
  children,
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses({ variant, size, className })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonStyleOptions & {
    children: ReactNode;
    href: PublicPathname | string;
    isExternal?: boolean;
  };

export function ButtonLink({
  children,
  className,
  href,
  isExternal,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  const linkClassName = getButtonClasses({ variant, size, className });

  if (isExternal) {
    return (
      <a
        className={linkClassName}
        href={href}
        rel="noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href as PublicPathname} {...props}>
      {children}
    </Link>
  );
}
