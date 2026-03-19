import { ReactNode } from "react";

interface FigmaButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function FigmaButton({ 
  children, 
  onClick, 
  variant = "secondary",
  disabled = false,
  className = "",
  icon
}: FigmaButtonProps) {
  
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-[#6B21A8] hover:bg-[#7C3AED] transition-all shadow-md hover:shadow-lg content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        data-name="Desktop / Button"
      >
        {icon && <div className="shrink-0">{icon}</div>}
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">
          {children}
        </p>
      </button>
    );
  }
  
  if (variant === "tertiary") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-white hover:bg-purple-50 transition-all content-stretch flex gap-[8px] items-center justify-center relative rounded-[32px] shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        data-name="Desktop / Button/ghost-black/normal/enabled/small (24 px)/only-text"
      >
        {icon && <div className="shrink-0">{icon}</div>}
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6B21A8] text-[16px] tracking-[0.04px] whitespace-nowrap">
          {children}
        </p>
      </button>
    );
  }
  
  // Secondary (default)
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`hover:bg-purple-50 transition-all content-stretch flex gap-[8px] items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      data-name="Desktop / Button"
    >
      <div aria-hidden="true" className="absolute border-2 border-[#6B21A8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      {icon && <div className="shrink-0">{icon}</div>}
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6B21A8] text-[16px] tracking-[0.04px] whitespace-nowrap">
        {children}
      </p>
    </button>
  );
}