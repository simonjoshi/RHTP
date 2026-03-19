import { ReactNode } from "react";

interface Tab {
  label: string;
  value: string;
}

interface FigmaTabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
}

export function FigmaTabSwitcher({ tabs, activeTab, onTabChange, className = "" }: FigmaTabSwitcherProps) {
  return (
    <div className={`bg-white content-stretch flex items-start p-[4px] rounded-[28px] relative overflow-x-auto scrollbar-hide ${className}`} data-name="Desktop / Tab switcher">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[28px]" />
      
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`flex-shrink-0 min-w-fit relative rounded-[24px] cursor-pointer ${ 
            activeTab === tab.value ? "bg-[#7a007a]" : "bg-white"
          }`}
          data-name="Desktop / Tab"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] md:px-[16px] py-[4px] relative">
              <p className={`font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[13px] md:text-[16px] text-center tracking-[0.04px] whitespace-nowrap ${
                activeTab === tab.value ? "text-white" : "text-[#0a030a]"
              }`}>
                {tab.label}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}