import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "@/lib/i18n/navigation";
import type { PublicPathname } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/classNames";

type ButtonVariant =
  | "primary"
  | "dark"
  | "secondary"
  | "outline"
  | "ghost"
  | "text";
type ButtonSize = "sm" | "md" | "lg";

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C47A55] text-[#FFF8EC] shadow-sm hover:bg-[#A85C45] focus-visible:outline-[#C47A55]",
  dark:
    "bg-[#123A32] text-[#FFF8EC] shadow-sm hover:bg-[#0F2F2A] focus-visible:outline-[#123A32]",
  secondary:
    "border border-[#123A32]/12 bg-[#F7F1E7] text-[#123A32] shadow-sm hover:border-[#C47A55]/45 hover:bg-[#EFE4D2] focus-visible:outline-[#C47A55]",
  outline:
    "border border-[#123A32]/25 bg-transparent text-[#123A32] hover:border-[#C47A55] hover:text-[#8F4E3B] focus-visible:outline-[#123A32]",
  ghost:
    "text-[#123A32] hover:bg-[#EFE4D2]/70 hover:text-[#8F4E3B] focus-visible:outline-[#C47A55]",
  text:
    "rounded-none px-0 underline decoration-[#C47A55]/35 underline-offset-4 text-[#123A32] hover:text-[#8F4E3B] hover:decoration-[#C47A55] focus-visible:outline-[#C47A55]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

const textSizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

function getButtonClasses({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleOptions) {
  return cn(
    baseClasses,
    variantClasses[variant],
    variant === "text" ? textSizeClasses[size] : sizeClasses[size],
    className,
  );
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
