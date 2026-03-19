import svgPaths from "../../imports/svg-7heqi5z9rg";
import { ReactNode } from "react";

interface FigmaTextFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  hint?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
}

export function FigmaTextField({
  placeholder = "Text field",
  value,
  onChange,
  label,
  hint,
  leadingIcon,
  trailingIcon,
  className = ""
}: FigmaTextFieldProps) {
  const defaultSearchIcon = (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
      <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
          <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${className}`} data-name="Desktop / Text field">
      {label && (
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">
          {label}
        </p>
      )}
      
      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            {leadingIcon !== undefined ? leadingIcon : defaultSearchIcon}
            
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
              <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0a030a] text-[16px] bg-transparent border-0 outline-none placeholder:text-[#aea9ae]"
              />
            </div>
            
            {trailingIcon && trailingIcon}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      
      {hint && (
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">
          {hint}
        </p>
      )}
    </div>
  );
}
