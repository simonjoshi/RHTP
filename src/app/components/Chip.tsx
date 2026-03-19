import svgPaths from "../../imports/svg-eauysf41kj";
import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  icon?: "close" | "checkmark" | "none";
  count?: number;
}

export function Chip({ children, selected = false, onClick, icon = "none", count }: ChipProps) {
  const hasIcon = icon !== "none" || count !== undefined;
  
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 transition-all ${
        selected
          ? "bg-[#f6e4fc]"
          : "bg-white"
      }`}
      data-name="Desktop / Chip"
    >
      {!selected && (
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      )}
      
      {icon === "checkmark" && (
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon / checkmark">
          <div className="absolute inset-[26.04%_13.54%_26.04%_17.71%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 5.75">
              <path clipRule="evenodd" d={svgPaths.p346df800} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      )}
      
      {icon === "close" && (
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon / close">
          <div className="absolute inset-[21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 6.75">
              <path d={svgPaths.pab26770} fill="var(--fill-0, #7A007A)" id="icon" />
            </svg>
          </div>
        </div>
      )}
      
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7a007a] text-[12px] tracking-[0.06px] whitespace-nowrap">
        {children}
      </p>
      
      {count !== undefined && count > 0 && (
        <div className="bg-[#7a007a] text-white rounded-full px-[6px] py-[2px] text-[10px] font-['Sequel_Sans:Roman_Disp',sans-serif] leading-none min-w-[16px] flex items-center justify-center">
          {count}
        </div>
      )}
    </button>
  );
}
