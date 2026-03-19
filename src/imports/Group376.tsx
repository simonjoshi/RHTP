import svgPaths from "./svg-jc6khmrsv4";

function Action() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[19.89px] top-[calc(50%+1px)]" data-name="Action">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[18px] left-[46.89px] not-italic text-[#0a030a] text-[15px] text-center top-[calc(50%-8px)] tracking-[-0.165px] w-[54px]">9:41</p>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[11.5px] right-[14.5px] top-[calc(50%+0.91px)] w-[67px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.9999 11.5">
        <g id="Container">
          <g id="Battery">
            <path d={svgPaths.p1acaa300} fill="var(--fill-0, #0A030A)" id="Rectangle" opacity="0.36" />
            <rect fill="var(--fill-0, #0A030A)" height="7.66667" id="Rectangle_2" rx="1.6" width="18" x="44.5002" y="1.91667" />
          </g>
          <path d={svgPaths.p19b9de00} fill="var(--fill-0, #0A030A)" id="Combined Shape" />
          <path clipRule="evenodd" d={svgPaths.p2c0e4c80} fill="var(--fill-0, #0A030A)" fillRule="evenodd" id="Wi-Fi" />
        </g>
      </svg>
    </div>
  );
}

function AddressBar() {
  return (
    <div className="content-stretch flex gap-[5px] h-[11px] items-center justify-center relative shrink-0" data-name="address-bar">
      <div className="h-[8.574px] relative shrink-0 w-[5.871px]" data-name="􀎡">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.87109 8.57373">
          <path d={svgPaths.p2e59af00} fill="var(--fill-0, black)" fillOpacity="0.5" id="ô¡" />
        </svg>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.06px] whitespace-nowrap">
        <p className="leading-none">caresolace.com</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0">
      <AddressBar />
      <div className="bg-black h-[5px] rounded-[100px] shrink-0 w-[135px]" data-name="Home Indicator" />
    </div>
  );
}

function DesktopButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[20px] pr-[22px] py-[8px] relative rounded-[32px] shrink-0 w-[363px]" data-name="Desktop / Button">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Weekends Only</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center left-[25px] top-[317px] w-[363px]" data-name="Buttons">
      <DesktopButton />
    </div>
  );
}

function DesktopButton1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[22px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[285px] w-[366px]" data-name="Desktop / Button">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Weekdays Only</p>
    </div>
  );
}

function DesktopButton2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[25px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[382px] w-[363px]" data-name="Desktop / Button">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Any Day</p>
    </div>
  );
}

function DesktopButton3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[23px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[653px] w-[363px]" data-name="Desktop / Button">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Any Time</p>
    </div>
  );
}

function Resources() {
  return (
    <div className="absolute bg-[#f9f8f9] h-[1083px] left-0 overflow-clip top-0 w-[428px]" data-name="Resources">
      <div className="absolute bg-white h-[44px] left-[-1px] top-0 w-[430px]" data-name="IOS / Navigation / System Bar">
        <Action />
        <Container />
      </div>
      <div className="absolute bg-white border-[#e8e5e8] border-b border-solid h-[56px] left-[-1px] overflow-clip top-[44px] w-[430px]" data-name="Mobile">
        <div className="absolute left-[16px] size-[32px] top-[12px]" data-name="Logo">
          <div className="absolute inset-[31.62%_69.16%_30.47%_0.05%]" data-name="care">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.85316 12.1287">
              <path d={svgPaths.p2ffb71c0} fill="var(--fill-0, #7A007A)" id="care" />
            </svg>
          </div>
          <div className="absolute inset-[31.62%_0.05%_30.47%_72.71%]" data-name="solace">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.71538 12.1287">
              <path d={svgPaths.p1ada3700} fill="var(--fill-0, #7A007A)" id="solace" />
            </svg>
          </div>
          <div className="absolute inset-[30.47%_29.29%_44.03%_30.51%]" data-name="Vector 1 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8646 8.1581">
              <path clipRule="evenodd" d={svgPaths.p14440300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="Vector 1 (Stroke)" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#7a007a] content-stretch cursor-pointer flex items-center justify-center px-[18px] py-[8px] right-[16px] rounded-[32px] top-[8px]" data-name="Mobile / Button">
          <div aria-hidden="true" className="absolute border border-[#7a007a] border-solid inset-0 pointer-events-none rounded-[32px]" />
          <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Need Help?</p>
        </div>
      </div>
      <div className="absolute backdrop-blur-[29.9px] bg-[rgba(255,255,255,0.82)] bottom-0 content-stretch flex flex-col h-[52px] items-center justify-between left-[-1px] pb-[8.5px] pt-[14.5px] px-[120px] shadow-[0px_-0.3px_0px_0px_#aeaeb4] w-[430px]" data-name="Bottom Bar">
        <Frame />
      </div>
      <div className="absolute left-[30px] size-[37px] top-[170px]" data-name="icon / clock">
        <div className="absolute inset-[5.21%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.1458 33.1458">
            <g id="icon">
              <path d={svgPaths.p30b9c900} fill="var(--fill-0, #7A007A)" />
              <path clipRule="evenodd" d={svgPaths.p2896a400} fill="var(--fill-0, #7A007A)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[34px] left-[83px] not-italic right-[13.83px] text-[#0a030a] text-[28px] top-[173px] tracking-[-0.14px]">{` Best Time to Call You`}</p>
      <p className="absolute font-['Sequel_Sans:Medium_Disp',sans-serif] h-[61px] leading-[0] left-[24px] not-italic text-[#413d41] text-[0px] top-[224px] tracking-[0.18px] w-[301px] whitespace-pre-wrap">
        <span className="leading-[28px] text-[18px]">
          {`Preferred day(s) to be called: `}
          <br aria-hidden="true" />
        </span>
        <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[22px] text-[14px]">Select all that apply.</span>
      </p>
      <p className="absolute font-['Sequel_Sans:Medium_Disp',sans-serif] h-[61px] leading-[0] left-[24px] not-italic text-[#413d41] text-[0px] top-[447px] tracking-[0.18px] w-[301px] whitespace-pre-wrap">
        <span className="leading-[28px] text-[18px]">
          {`Preferred time(s) to be called: `}
          <br aria-hidden="true" />
        </span>
        <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[22px] text-[14px]">Select all that apply.</span>
      </p>
      <Buttons />
      <DesktopButton1 />
      <DesktopButton2 />
      <DesktopButton3 />
    </div>
  );
}

function Case() {
  return (
    <div className="absolute content-stretch flex items-start left-[58px] top-[113px] w-[140px]" data-name="Case">
      <p className="flex-[1_0_0] font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#7a007a] text-[18px] tracking-[0.18px]">Back</p>
    </div>
  );
}

function Case1() {
  return (
    <div className="absolute content-stretch flex items-start left-[58px] top-[113px] w-[140px]" data-name="Case">
      <p className="flex-[1_0_0] font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#7a007a] text-[18px] tracking-[0.18px]">Back</p>
    </div>
  );
}

function DesktopButton4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[20px] pr-[22px] py-[8px] relative rounded-[32px] shrink-0 w-[363px]" data-name="Desktop / Button">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Afternoon (12 PM - 5 PM)</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center left-[26px] top-[541px] w-[363px]" data-name="Buttons">
      <DesktopButton4 />
    </div>
  );
}

function DesktopButton5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[23px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[512px] w-[366px]" data-name="Desktop / Button">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Morning (8 AM - 12 PM)</p>
    </div>
  );
}

function DesktopButton6() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[26px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[606px] w-[363px]" data-name="Desktop / Button">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Evening (5 PM - 8 PM)</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px py-[4px] relative" data-name="Text Container">
      <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#797479] text-[14px]">Specific preferences: weekday mornings between 9-11 AM or 6 PM on weekends</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white content-stretch flex h-[48px] items-start left-0 pt-[12px] top-[103px] w-[428px]" data-name="tab bar(linear)">
        <div aria-hidden="true" className="absolute border-[#e8e5e8] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Resources />
      <Case />
      <div className="absolute left-[23px] size-[24px] top-[117px]" data-name="icon / arrow">
        <div className="absolute inset-[21.59%_11.46%_21.58%_11.47%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4975 13.6375">
            <path d={svgPaths.p3708f080} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
      <Case1 />
      <div className="absolute left-[23px] size-[24px] top-[117px]" data-name="icon / arrow">
        <div className="absolute inset-[21.59%_11.46%_21.58%_11.47%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4975 13.6375">
            <path d={svgPaths.p3708f080} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#7a007a] content-stretch cursor-pointer flex items-center justify-center left-[227px] px-[18px] py-[8px] rounded-[32px] top-[965px] w-[184px]" data-name="Mobile / Button">
        <div aria-hidden="true" className="absolute border border-[#7a007a] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Continue</p>
      </div>
      <div className="absolute content-stretch cursor-pointer flex items-center justify-center left-[26px] px-[18px] py-[8px] rounded-[32px] top-[965px] w-[184px]" data-name="Mobile / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Cancel</p>
      </div>
      <Buttons1 />
      <DesktopButton5 />
      <DesktopButton6 />
      <div className="-translate-y-1/2 absolute bg-white content-stretch flex gap-[8px] h-[159px] items-start left-[35px] px-[16px] py-[8px] right-[30px] rounded-[8px] top-[calc(50%+264px)]" data-name="Intervention">
        <div aria-hidden="true" className="absolute border border-[#e9e4e9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <TextContainer />
      </div>
    </div>
  );
}