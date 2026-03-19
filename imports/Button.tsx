import svgPaths from "./svg-681kpk2ao3";

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start not-italic relative shrink-0 w-[437px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Primary</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">{`The primary button is used to indicate the primary action the user takes. It's typically used for the most important or critical action the user needs to complete, such as submitting a form or purchasing.`}</p>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[24px] p-[32px] rounded-[16px] top-[1114px] w-[502px]" data-name="Primary">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text />
      <div className="bg-[#7a007a] content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start left-[31px] not-italic top-[31px] w-[438px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Secondary</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">{`The secondary button is used for less visible and sometimes independent actions. Secondary buttons can be used in isolation or paired with the main button when multiple calls to action exist. `}</p>
      </div>
    </div>
  );
}

function Secondary() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[308px] left-[calc(28.57%+17.43px)] rounded-[16px] top-[1114px] w-[501px]" data-name="Secondary">
      <Text1 />
      <div className="absolute content-stretch flex items-center justify-center left-[31px] px-[22px] py-[8px] rounded-[32px] top-[235px]" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start left-[31px] not-italic top-[31px] w-[437px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Positive</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">The secondary positive button indicates a positive action when choosing two opposite actions. They are always used in conjunction with the secondary negative button.</p>
      </div>
    </div>
  );
}

function Positive() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[308px] left-[24px] rounded-[16px] top-[1446px] w-[501px]" data-name="Positive">
      <Text2 />
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[31px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[235px]" data-name="Desktop / Button/outlined/success/enabled/large (40 px)/only-text">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0d853a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start left-[31px] not-italic top-[31px] w-[437px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Tertiary</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">The tertiary button looks like regular text and represents another level of importance. Tertiary buttons can be used for sub-tasks on a page, with a primary button for the main and final actions.</p>
      </div>
    </div>
  );
}

function Tertiary() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[308px] left-[calc(57.14%+9.86px)] rounded-[16px] top-[1114px] w-[501px]" data-name="Tertiary">
      <Text3 />
      <div className="absolute content-stretch flex items-center justify-center left-[31px] rounded-[32px] top-[251px]" data-name="Desktop / Button/ghost-black/normal/enabled/small (24 px)/only-text">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start left-[31px] not-italic top-[31px] w-[438px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Negative</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">The secondary negative button indicates a negative action when choosing two opposite actions. They are always used in conjunction with the secondary positive button.</p>
      </div>
    </div>
  );
}

function Negative() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[308px] left-[calc(28.57%+16.43px)] rounded-[16px] top-[1446px] w-[502px]" data-name="Negative">
      <Text4 />
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[31px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[235px]" data-name="Desktop / Button/outlined/danger/enabled/large (40 px)/only-text">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#d30023] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Types() {
  return (
    <div className="absolute contents left-[24px] top-[882px]" data-name="Types">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[910px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Types</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[24px] top-[1026px] tracking-[-0.12px] w-[995px]">
        <p className="leading-[32px]">The functionality of each button variant is unique, and its design effectively communicates functionality to the user. As a result, maintaining consistency in implementing these variants across products is paramount to ensure that the intended actions are accurately conveyed.</p>
      </div>
      <Primary />
      <Secondary />
      <Positive />
      <Tertiary />
      <Negative />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center justify-center left-[31px] top-[119px] w-[686px]" data-name="Buttons">
      <div className="bg-white content-stretch flex items-center justify-center relative rounded-[32px] shrink-0" data-name="Desktop / Button/ghost-black/normal/enabled/small (24 px)/only-text">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="bg-[#7a007a] content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute border border-[rgba(13,133,58,0.5)] border-solid h-[232px] left-[24px] rounded-[24px] top-[9960px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Checkmark Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
            <path d={svgPaths.p323cac00} fill="var(--fill-0, #0D853A)" id="Icon" />
          </svg>
        </div>
      </div>
      <Buttons />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center justify-center left-[31px] top-[119px] w-[680px]" data-name="Buttons">
      <div className="bg-[#7a007a] content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="bg-[#7a007a] content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="bg-[#7a007a] content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute border border-[rgba(211,0,35,0.5)] border-solid h-[232px] left-[calc(42.86%+13.14px)] rounded-[24px] top-[9960px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Close">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 35.8333">
            <path clipRule="evenodd" d={svgPaths.p20a4e6c0} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <Buttons1 />
    </div>
  );
}

function Example() {
  return (
    <div className="absolute contents left-[24px] top-[9856px]" data-name="Example">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[9888px] tracking-[-0.12px] w-[733px]">
        <p className="leading-[32px]">{`Don't put more than one primary button in the same group — emphasis on the primary action.`}</p>
      </div>
      <Card />
      <Card1 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="content-stretch flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] text-center tracking-[0.04px] whitespace-nowrap">Cancel</p>
      </div>
      <button className="bg-[#7a007a] content-stretch cursor-pointer flex items-center justify-center px-[22px] py-[8px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.04px] whitespace-nowrap">Confirm</p>
      </button>
    </div>
  );
}

function PopUp1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[400px]" data-name="Pop up">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0a030a] text-[24px] tracking-[-0.12px] w-full">Are you sure?</p>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0a030a] text-[16px] w-full">{`You're about to save the changes you've made to your profile.`}</p>
      <Buttons2 />
    </div>
  );
}

function PopUp() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[31px] top-[95px] w-[680px]" data-name="Pop-up">
      <PopUp1 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute border border-[rgba(211,0,35,0.5)] border-solid h-[392px] left-[calc(42.86%+14.14px)] rounded-[24px] top-[10344px] w-[764px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Close">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 35.8333">
            <path clipRule="evenodd" d={svgPaths.p20a4e6c0} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <PopUp />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#0a030a] text-[24px] tracking-[-0.12px]">Are you sure?</p>
      <button className="content-stretch cursor-pointer flex items-center justify-center p-[4px] relative rounded-[32px] shrink-0 w-[26px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
          <div className="absolute inset-[21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
              <path d={svgPaths.p2e58e00} fill="var(--fill-0, #7A007A)" id="icon" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[352px]" data-name="Info">
      <Frame86 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#413d41] text-[16px] w-[352px]">{`You're about to save the changes you've made to your profile.`}</p>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[22px] py-[8px] relative w-full">
            <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] text-center tracking-[0.04px] whitespace-nowrap">Cancel</p>
          </div>
        </div>
      </div>
      <button className="bg-[#7a007a] cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Desktop / Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[22px] py-[8px] relative w-full">
            <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.04px] whitespace-nowrap">Confirm</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function PopUp2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[31px] top-[119px] w-[680px]" data-name="Pop-up">
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] shrink-0" data-name="Desktop / Pop up">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Info />
        <Buttons3 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute border border-[rgba(13,133,58,0.5)] border-solid h-[392px] left-[24px] rounded-[24px] top-[10344px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Checkmark Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
            <path d={svgPaths.p323cac00} fill="var(--fill-0, #0D853A)" id="Icon" />
          </svg>
        </div>
      </div>
      <PopUp2 />
    </div>
  );
}

function Example1() {
  return (
    <div className="absolute contents left-[24px] top-[10240px]" data-name="Example">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[10272px] tracking-[-0.12px] w-[733px]">
        <p className="leading-[32px]">Buttons should be stretched across the width of the component and placed side-by-side.</p>
      </div>
      <Card2 />
      <Card3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Trailing icon">
        <div className="absolute inset-[21.59%_11.47%_21.58%_11.46%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4147 11.3646">
            <path d={svgPaths.p2e397780} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Screen() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[88px] items-start left-[193px] p-[24px] rounded-bl-[16px] rounded-br-[16px] top-[119px] w-[375px]" data-name="Screen">
      <div aria-hidden="true" className="absolute border-[#e8e5e8] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <button className="bg-[#7a007a] cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]" data-name="Desktop / Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] h-full items-center justify-center pl-[22px] pr-[20px] py-[8px] relative">
            <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.04px] whitespace-nowrap">Confirm</p>
            <Frame />
          </div>
        </div>
      </button>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute border border-[rgba(211,0,35,0.5)] border-solid h-[280px] left-[calc(42.86%+14.14px)] rounded-[24px] top-[10888px] w-[764px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Close">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 35.8333">
            <path clipRule="evenodd" d={svgPaths.p20a4e6c0} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <Screen />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Trailing icon">
        <div className="absolute inset-[21.59%_11.47%_21.58%_11.46%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4147 11.3646">
            <path d={svgPaths.p2e397780} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[88px] items-start left-[194px] p-[24px] rounded-bl-[16px] rounded-br-[16px] top-[119px] w-[375px]" data-name="Screen">
      <div aria-hidden="true" className="absolute border-[#e8e5e8] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <button className="bg-[#7a007a] cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] w-full" data-name="Desktop / Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[22px] pr-[20px] py-[8px] relative size-full">
            <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.04px] whitespace-nowrap">Confirm</p>
            <Frame1 />
          </div>
        </div>
      </button>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute border border-[rgba(13,133,58,0.5)] border-solid h-[280px] left-[24px] rounded-[24px] top-[10888px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Checkmark Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
            <path d={svgPaths.p323cac00} fill="var(--fill-0, #0D853A)" id="Icon" />
          </svg>
        </div>
      </div>
      <Screen1 />
    </div>
  );
}

function Example2() {
  return (
    <div className="absolute contents left-[24px] top-[10784px]" data-name="Example">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[10816px] tracking-[-0.12px] w-[733px]">
        <p className="leading-[32px]">On the mobile version, all buttons must be stretched across the entire width of the container or screen.</p>
      </div>
      <Card4 />
      <Card5 />
    </div>
  );
}

function DosAndDonts() {
  return (
    <div className="absolute contents left-[24px] top-[9760px]" data-name="Do's and don'ts">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[9788px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Do’s and don’ts</p>
      </div>
      <Example />
      <Example1 />
      <Example2 />
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute h-[126px] left-[211px] top-[95px] w-[120px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[120px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 1" />
      <div className="absolute bg-[#7a007a] h-[13px] left-[64px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 2" />
    </div>
  );
}

function Screen2() {
  return (
    <div className="h-[316px] relative rounded-[8px] shrink-0 w-[542px]" data-name="Screen 2">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[316px] left-0 top-0 w-[542px]" data-name="Screen">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 316">
            <path d={svgPaths.p9c51b00} fill="var(--fill-0, #FBF2FE)" id="Screen" />
          </svg>
        </div>
        <div className="absolute left-[12px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <div className="absolute left-[22px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <Card7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(42.86%+14.14px)] p-[32px] rounded-[24px] top-[7316px] w-[764px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#0a030a] text-[28px] w-[min-content]">Pop-up / Overlay</p>
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#797479] text-[18px] w-[542px]">
        <p className="leading-[26px]">The filled button is used for the main action - saving, confirmation, and the outlined - for canceling the action.</p>
      </div>
      <Screen2 />
    </div>
  );
}

function Screen3() {
  return (
    <div className="h-[316px] relative shrink-0 w-[542px]" data-name="Screen 3">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 316">
        <g id="Screen 3">
          <g clipPath="url(#clip0_6_5658)">
            <path d={svgPaths.p9c51b00} fill="var(--fill-0, #FBF2FE)" id="Screen" />
            <circle cx="15" cy="8" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
            <circle cx="25" cy="8" fill="var(--fill-0, #FBF2FE)" id="Option_2" r="3" />
            <rect fill="var(--fill-0, white)" height="23" id="Card" rx="7.5" stroke="var(--stroke-0, #E8E5E8)" width="309" x="32.5" y="32.5" />
            <rect fill="var(--fill-0, white)" height="39" id="Card_2" rx="7.5" stroke="var(--stroke-0, #E8E5E8)" width="309" x="32.5" y="64.5" />
            <rect fill="var(--fill-0, white)" height="15" id="Card_3" rx="7.5" stroke="var(--stroke-0, #E8E5E8)" width="309" x="32.5" y="112.5" />
            <rect fill="var(--fill-0, #7A007A)" height="13" id="Button 2" rx="6.5" width="48" x="32" y="140" />
          </g>
          <rect height="315" rx="7.5" stroke="var(--stroke-0, #E8E5E8)" width="541" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_6_5658">
            <rect fill="white" height="316" rx="8" width="542" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] p-[32px] rounded-[24px] top-[7872px] w-[765px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#0a030a] text-[28px] w-[min-content]">CTA button</p>
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#797479] text-[18px] w-[min-content]">
        <p className="leading-[26px]">The filled button is used for the main actions - submitting, following step confirmation, pausing, and reactivation requests - and it should be one filled button on the screen.</p>
      </div>
      <Screen3 />
    </div>
  );
}

function Card10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[216px] left-[calc(50%-27px)] top-[calc(50%+10px)] w-[210px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[216px] left-0 rounded-[8px] top-0 w-[210px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[24px] left-[16px] rounded-[32px] top-[176px] w-[81px]" data-name="Button 2" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[24px] left-[113px] rounded-[32px] top-[176px] w-[81px]" data-name="Button 3" />
      <div className="absolute content-stretch flex items-center justify-center left-[168px] p-[4px] rounded-[32px] top-[16px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
          <div className="absolute inset-[21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
              <path d={svgPaths.p2e58e00} fill="var(--fill-0, #7A007A)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Screen4() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[316px] left-[31px] overflow-clip rounded-[8px] top-[235px] w-[542px]" data-name="Screen 3">
      <div className="absolute h-[316px] left-[-1px] top-[-1px] w-[542px]" data-name="Screen">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 316">
          <path d={svgPaths.p9c51b00} fill="var(--fill-0, #FBF2FE)" id="Screen" />
        </svg>
      </div>
      <div className="absolute left-[11px] size-[6px] top-[4px]" data-name="Option">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
        </svg>
      </div>
      <div className="absolute left-[21px] size-[6px] top-[4px]" data-name="Option">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
        </svg>
      </div>
      <Card10 />
    </div>
  );
}

function Card9() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[584px] left-[24px] rounded-[24px] top-[8428px] w-[765px]" data-name="Card">
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[31px] not-italic text-[#0a030a] text-[28px] top-[31px] w-[701px]">Only-icon button</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[31px] not-italic text-[#797479] text-[18px] top-[125px] w-[634px]">
        <p className="leading-[26px]">We use only-icon buttons when space is limited and want to provide users with additional actions such as close, open chat, etc.</p>
      </div>
      <Screen4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[18px]" data-name="Leading icon">
        <div className="absolute inset-[5.21%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.125 16.125">
            <g id="icon">
              <path d={svgPaths.p120ebc00} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p263fbf80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[18px]" data-name="Trailing icon">
        <div className="absolute inset-[21.59%_11.47%_21.58%_11.46%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8732 10.2281">
            <path d={svgPaths.p1f129980} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[216px] left-[calc(50%-31.5px)] top-[calc(50%+10px)] w-[219px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[216px] left-0 rounded-[8px] top-0 w-[219px]" data-name="Card" />
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[6px] items-center justify-center left-[8px] pl-[14px] pr-[16px] py-[6px] rounded-[32px] top-[176px]" data-name="Desktop / Button">
        <Frame2 />
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[6px] items-center justify-center left-[115px] pl-[16px] pr-[14px] py-[6px] rounded-[32px] top-[176px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
        <Frame3 />
      </div>
    </div>
  );
}

function Screen5() {
  return (
    <div className="h-[316px] relative rounded-[8px] shrink-0 w-[542px]" data-name="Screen 3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[316px] left-0 top-0 w-[542px]" data-name="Screen">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 316">
            <path d={svgPaths.p9c51b00} fill="var(--fill-0, #FBF2FE)" id="Screen" />
          </svg>
        </div>
        <div className="absolute left-[12px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <div className="absolute left-[22px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <Card12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(42.86%+14.14px)] p-[32px] rounded-[24px] top-[8428px] w-[765px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#0a030a] text-[28px] w-[min-content]">Leading- and trailing-icon button</p>
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#797479] text-[18px] w-[min-content]">
        <p className="leading-[26px]">We use leading-icon buttons to provide additional context to the user about the action or function associated with the button. In the trailing-icon button use arrow and chevrons icons. Arrows and chevrons can be used to indicate navigation, such as moving to the next or previous page or navigating to a submenu.</p>
      </div>
      <Screen5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[18px]" data-name="Trailing icon">
        <div className="absolute inset-[21.59%_11.47%_21.58%_11.46%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8732 10.2281">
            <path d={svgPaths.p1f129980} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">max 440 px</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-0.23%_-3.13%_-0.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 16.5">
          <g id="Group 250">
            <path d="M0.5 15L220.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M220.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M110.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="110.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Screen6() {
  return (
    <div className="h-[316px] relative rounded-[8px] shrink-0 w-[542px]" data-name="Screen 3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[316px] left-0 top-0 w-[542px]" data-name="Screen">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 316">
            <path d={svgPaths.p9c51b00} fill="var(--fill-0, #FBF2FE)" id="Screen" />
          </svg>
        </div>
        <div className="absolute left-[12px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <div className="absolute left-[22px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <div className="absolute bg-[#7a007a] content-stretch flex gap-[6px] items-center justify-center left-[160px] pl-[16px] pr-[14px] py-[6px] rounded-[32px] top-[123px] w-[220px]" data-name="Desktop / Button">
          <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
          <Frame4 />
        </div>
        <div className="absolute h-[35px] left-[157px] top-[159px] w-[228px]" data-name="Spacing">
          <Frame29 />
          <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
            <div className="flex-none rotate-180">
              <Group />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] p-[32px] rounded-[24px] top-[9036px] w-[765px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#0a030a] text-[28px] w-[min-content]">Behavior and width</p>
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[26px] min-w-full not-italic relative shrink-0 text-[#797479] text-[18px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Mobile buttons stretch across the entire width of the container. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`The maximum width of the both mobile and desktop buttons is 440 px, after which the buttons change the width property to  hug content.`}</p>
      </div>
      <Screen6 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] h-[94px] left-[31px] not-italic top-[27px] w-[686px]">
      <p className="absolute leading-[36px] left-0 text-[#0a030a] text-[28px] top-0 w-[686px]">Additional actions</p>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-0 text-[#797479] text-[18px] top-[81px] w-[686px]">
        <p className="leading-[26px]">To provide additional actions, it should be used ghost button.</p>
      </div>
    </div>
  );
}

function Card15() {
  return (
    <div className="absolute h-[126px] left-[23px] top-[79px] w-[104px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[104px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[40px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[56px] rounded-[8px] top-[103px] w-[40px]" data-name="Button 2" />
    </div>
  );
}

function Card16() {
  return (
    <div className="absolute h-[126px] left-[143px] top-[79px] w-[104px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[104px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[40px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[56px] rounded-[8px] top-[103px] w-[40px]" data-name="Button 2" />
    </div>
  );
}

function Card17() {
  return (
    <div className="absolute h-[126px] left-[262px] top-[79px] w-[104px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[104px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[40px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[56px] rounded-[8px] top-[103px] w-[40px]" data-name="Button 2" />
    </div>
  );
}

function Screen7() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid bottom-[27px] h-[316px] left-[31px] overflow-clip rounded-[8px] w-[542px]" data-name="Screen 4">
      <div className="absolute h-[316px] left-[-1px] top-[-1px] w-[542px]" data-name="Screen">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 316">
          <path d={svgPaths.p9c51b00} fill="var(--fill-0, #FBF2FE)" id="Screen" />
        </svg>
      </div>
      <div className="absolute left-[11px] size-[6px] top-[4px]" data-name="Option">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
        </svg>
      </div>
      <div className="absolute left-[21px] size-[6px] top-[4px]" data-name="Option">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
        </svg>
      </div>
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[16px] left-[23px] rounded-[8px] top-[47px] w-[116px]" data-name="Card" />
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[16px] left-[23px] rounded-[8px] top-[23px] w-[198px]" data-name="Card" />
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[196px] left-[390px] rounded-[8px] top-[23px] w-[127px]" data-name="Card" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[320px] not-italic text-[#7a007a] text-[8px] top-[55.5px] tracking-[0.04px] whitespace-nowrap">
        <p className="leading-[11px]">Filter</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[349px] not-italic text-[#7a007a] text-[8px] top-[55.5px] tracking-[0.04px] whitespace-nowrap">
        <p className="leading-[11px]">Filter</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[291px] not-italic text-[#7a007a] text-[8px] top-[55.5px] tracking-[0.04px] whitespace-nowrap">
        <p className="leading-[11px]">Filter</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[262px] not-italic text-[#7a007a] text-[8px] top-[55.5px] tracking-[0.04px] whitespace-nowrap">
        <p className="leading-[11px]">Filter</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[233px] not-italic text-[#7a007a] text-[8px] top-[55.5px] tracking-[0.04px] whitespace-nowrap">
        <p className="leading-[11px]">Filter</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[204px] not-italic text-[#7a007a] text-[8px] top-[55.5px] tracking-[0.04px] whitespace-nowrap">
        <p className="leading-[11px]">Filter</p>
      </div>
      <Card15 />
      <Card16 />
      <Card17 />
    </div>
  );
}

function Card14() {
  return (
    <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[532px] left-[calc(42.86%+14.14px)] rounded-[24px] top-[7872px] w-[764px]" data-name="Card">
      <Frame37 />
      <Screen7 />
    </div>
  );
}

function Card19() {
  return (
    <div className="absolute h-[126px] left-[16px] top-[9px] w-[120px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[120px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[64px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 2" />
    </div>
  );
}

function Card20() {
  return (
    <div className="absolute h-[126px] left-[16px] top-[151px] w-[120px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[120px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[64px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 2" />
    </div>
  );
}

function Card21() {
  return (
    <div className="absolute h-[126px] left-[152px] top-[151px] w-[120px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[120px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[64px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 2" />
    </div>
  );
}

function Card22() {
  return (
    <div className="absolute h-[126px] left-[288px] top-[151px] w-[120px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[120px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[64px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 2" />
    </div>
  );
}

function Card23() {
  return (
    <div className="absolute h-[126px] left-[152px] top-[9px] w-[120px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[120px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[64px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 2" />
    </div>
  );
}

function Card24() {
  return (
    <div className="absolute h-[126px] left-[288px] top-[9px] w-[120px]" data-name="Card">
      <div className="absolute bg-white border border-[#e8e5e8] border-solid h-[126px] left-0 rounded-[8px] top-0 w-[120px]" data-name="Card" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[8px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 1" />
      <div className="absolute border border-[#e8e5e8] border-solid h-[13px] left-[64px] rounded-[8px] top-[103px] w-[48px]" data-name="Button 2" />
    </div>
  );
}

function Screen8() {
  return (
    <div className="h-[316px] relative rounded-[8px] shrink-0 w-[542px]" data-name="Screen 1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[316px] left-0 top-0 w-[542px]" data-name="Screen">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 316">
            <path d={svgPaths.p9c51b00} fill="var(--fill-0, #FBF2FE)" id="Screen" />
          </svg>
        </div>
        <div className="absolute left-[12px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <div className="absolute left-[22px] size-[6px] top-[5px]" data-name="Option">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #FBF2FE)" id="Option" r="3" />
          </svg>
        </div>
        <Card19 />
        <Card20 />
        <Card21 />
        <Card22 />
        <Card23 />
        <Card24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] p-[32px] rounded-[24px] top-[7316px] w-[765px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#0a030a] text-[28px] w-[min-content]">CTA cards</p>
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#797479] text-[18px] w-[601px]">
        <p className="leading-[26px]">If the CTA card suggests having two option buttons, should be used two outlined buttons (mainly success and danger) describing different actions.</p>
      </div>
      <Screen8 />
    </div>
  );
}

function UsageRules() {
  return (
    <div className="absolute contents left-[24px] top-[7148px]" data-name="Usage rules">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[7260px] tracking-[-0.12px] w-[1027px]">
        <p className="leading-[32px]">We need to keep one logic within the design using buttons.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[7176px] tracking-[-0.48px] w-[233px]">
        <p className="leading-[56px]">Usage rules</p>
      </div>
      <Card6 />
      <Card8 />
      <Card9 />
      <Card11 />
      <Card13 />
      <Card14 />
      <Card18 />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex items-start p-[4px] relative rounded-[32px] shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-[-1px] pointer-events-none rounded-[33px]" />
      <div className="bg-[#7a007a] relative rounded-[24px] shrink-0 w-[310px]" data-name="Tab">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[5px] relative rounded-[inherit] w-full">
          <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] not-italic relative shrink-0 text-[28px] text-center text-white whitespace-nowrap">Overview</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#7a007a] border-solid inset-0 pointer-events-none rounded-[24px]" />
      </div>
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[16px] py-[5px] relative rounded-[34px] shrink-0 w-[310px]" data-name="Tab/enabled/false/No">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#797479] text-[28px] text-center whitespace-nowrap">Сomponents</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0" data-name="Tabs">
      <Tab />
    </div>
  );
}

function HeadlineTabs() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-end left-[56px] top-[280px]" data-name="Headline + tabs">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[80px] tracking-[-1.6px] whitespace-nowrap">
        <p className="leading-[96px]">Button</p>
      </div>
      <Tabs />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[48px] top-[130px]" data-name="Navigation">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[26px] not-italic opacity-65 relative shrink-0 text-[#413d41] text-[18px] whitespace-nowrap">Design System</p>
      <div className="opacity-65 relative shrink-0 size-[24px]" data-name="icon / chevron">
        <div className="absolute inset-[21.59%_30.07%_21.59%_38.4%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5675 13.635">
            <path d={svgPaths.p3a1b3b00} fill="var(--fill-0, #413D41)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[26px] not-italic opacity-65 relative shrink-0 text-[#413d41] text-[18px] whitespace-nowrap">Components</p>
      <div className="opacity-65 relative shrink-0 size-[24px]" data-name="icon / chevron">
        <div className="absolute inset-[21.59%_30.07%_21.59%_38.4%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5675 13.635">
            <path d={svgPaths.p3a1b3b00} fill="var(--fill-0, #413D41)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[26px] not-italic opacity-65 relative shrink-0 text-[#413d41] text-[18px] whitespace-nowrap">Atoms</p>
      <div className="opacity-65 relative shrink-0 size-[24px]" data-name="icon / chevron">
        <div className="absolute inset-[21.59%_30.07%_21.59%_38.4%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5675 13.635">
            <path d={svgPaths.p3a1b3b00} fill="var(--fill-0, #413D41)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#413d41] text-[18px] whitespace-nowrap">Button</p>
    </div>
  );
}

function Navigation2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic pl-[12px] relative shrink-0 whitespace-nowrap" data-name="Navigation">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center relative shrink-0 text-[#575257] text-[18px]">
        <p className="leading-[26px]">On this page:</p>
      </div>
      <div className="flex flex-col font-['Sequel_Sans:Roman_Disp',sans-serif] justify-center relative shrink-0 text-[#7a007a] text-[24px] tracking-[-0.12px]">
        <p className="leading-[32px]">Buttons</p>
      </div>
    </div>
  );
}

function Types1() {
  return (
    <button className="content-stretch cursor-pointer flex items-start px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="Types">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575257] text-[18px] text-left whitespace-nowrap">
        <p className="leading-[26px]">Types</p>
      </div>
    </button>
  );
}

function Anatomy() {
  return (
    <button className="content-stretch cursor-pointer flex items-start px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="Anatomy">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575257] text-[18px] text-left whitespace-nowrap">
        <p className="leading-[26px]">Anatomy</p>
      </div>
    </button>
  );
}

function UsageRules1() {
  return (
    <button className="content-stretch cursor-pointer flex items-start px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="Usage rules">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575257] text-[18px] text-left whitespace-nowrap">
        <p className="leading-[26px]">Usage rules</p>
      </div>
    </button>
  );
}

function DosAndDonts1() {
  return (
    <button className="content-stretch cursor-pointer flex items-start px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="Do’s and Don’ts">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575257] text-[18px] text-left whitespace-nowrap">
        <p className="leading-[26px]">Do’s and Don’ts</p>
      </div>
    </button>
  );
}

function Navigation3() {
  return (
    <button className="content-stretch cursor-pointer flex items-start px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="Navigation">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575257] text-[18px] text-left whitespace-nowrap">
        <p className="leading-[26px]">Navigation</p>
      </div>
    </button>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pointer-events-auto pt-[56px] sticky top-0" data-name="Navigation">
      <Navigation2 />
      <Types1 />
      <Anatomy />
      <UsageRules1 />
      <DosAndDonts1 />
      <Navigation3 />
    </div>
  );
}

function Overview() {
  return (
    <div className="absolute contents font-['Sequel_Sans:Book_Disp',sans-serif] leading-[0] left-[56px] not-italic text-[#0a030a] top-[518px]" data-name="Overview">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[56px] text-[24px] top-[678px] tracking-[-0.12px] w-[995px]">
        <p className="leading-[32px] whitespace-pre-wrap">{`Buttons are actionable elements that trigger specific actions. They consist of a label indicating the action to be taken, and may include an icon before or after the label (Leading and Trailing icons). Buttons are used to communicate calls to action and allow users to interact with pages in a variety of ways, such as submitting a form or confirming a decision.  `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[56px] text-[48px] top-[546px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Overview</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[42px] w-[112px]">
      <div className="absolute bg-[#f2d4fb] h-[36px] left-0 rounded-[8px] top-0 w-[112px]" />
      <div className="absolute bg-[#de8aed] h-[12px] left-[20px] rounded-[40px] top-[12px] w-[74px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#fbf2fe] content-stretch flex items-start pb-[3px] pt-px px-[8px] relative rounded-[24px] shrink-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a007a] text-[12px] whitespace-nowrap">Components / Desktop</p>
    </div>
  );
}

function Headline() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[223px] top-[31px]" data-name="Headline">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#270027] text-[28px] whitespace-nowrap">Buttons</p>
      <Frame30 />
    </div>
  );
}

function Atoms() {
  return (
    <div className="absolute content-stretch cursor-pointer flex flex-col gap-[12px] items-start left-[calc(42.86%+13.14px)] top-[148px]" data-name="Atoms">
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3116-4921">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Button</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3249-8393">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Text field</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3251-8888">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Dropdown</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3260-10318">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Selector list item</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3278-9029">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Multiple Choice list item</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3283-10237">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Controller</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3310-10700">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Tab</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3361-14629">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Chip</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3375-14466">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Tooltip</p>
        </a>
      </div>
    </div>
  );
}

function Atoms1() {
  return (
    <div className="absolute content-stretch cursor-pointer flex flex-col gap-[12px] items-start left-[calc(28.57%+17.43px)] top-[148px]" data-name="Atoms">
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3716-32751">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Color System</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3718-31627">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Iconography</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3741-29748">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Typography</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3749-30370">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Shadow</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3751-33769">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Grid</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3754-32934">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Spacing</p>
        </a>
      </div>
    </div>
  );
}

function Molecules() {
  return (
    <div className="absolute content-stretch cursor-pointer flex flex-col gap-[12px] items-start left-[calc(57.14%+8.86px)] top-[148px]" data-name="Molecules">
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3494-20597">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Menu</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3408-16867">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Snackbar</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3405-13939">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Status message bar</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3423-14256">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Progress bar</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3424-16185">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Accordion</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3427-19257">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Date picker</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3444-19185">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Pagination</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3458-18698">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Slider</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3507-21743">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Card</p>
        </a>
      </div>
    </div>
  );
}

function Organisms() {
  return (
    <div className="absolute content-stretch cursor-pointer flex flex-col gap-[12px] items-start left-[calc(71.43%+5.57px)] top-[148px]" data-name="Organisms">
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3494-27305">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Interacted menu</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3644-26624">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Pop-up</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3652-29049">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Header</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3652-30659">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Link bar</p>
        </a>
      </div>
    </div>
  );
}

function Others() {
  return (
    <div className="absolute content-stretch cursor-pointer flex flex-col gap-[12px] items-start left-[calc(85.71%+3.29px)] top-[148px]" data-name="Others">
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3652-31752">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Logo</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3652-32715">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">IOS Navigation components</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3652-32813">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Animated loading</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3652-32942">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Scroll bar</p>
        </a>
      </div>
      <div className="content-stretch flex items-center justify-center py-[2px] relative rounded-[32px] shrink-0" data-name="Desktop / Button">
        <a className="block font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap" href="https://www.figma.com/design/aVLFHLVTWxWLJTH4ArKPAg?node-id=3652-33029">
          <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[20px] underline">Confetti</p>
        </a>
      </div>
    </div>
  );
}

function Atoms2() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(28.57%+17.43px)] pb-[8px] top-[56px]" data-name="Atoms">
      <div aria-hidden="true" className="absolute border-[#575257] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#575257] text-[20px] tracking-[-0.1px] whitespace-nowrap">Foundations</p>
    </div>
  );
}

function Atoms3() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(42.86%+13.14px)] pb-[8px] top-[56px]" data-name="Atoms">
      <div aria-hidden="true" className="absolute border-[#575257] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#575257] text-[20px] tracking-[-0.1px] whitespace-nowrap">Atoms</p>
    </div>
  );
}

function Molecules1() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(57.14%+8.86px)] pb-[8px] top-[56px]" data-name="Molecules">
      <div aria-hidden="true" className="absolute border-[#575257] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#575257] text-[20px] tracking-[-0.1px] whitespace-nowrap">Molecules</p>
    </div>
  );
}

function Organisms1() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(71.43%+5.57px)] pb-[8px] top-[56px]" data-name="Organisms">
      <div aria-hidden="true" className="absolute border-[#575257] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#575257] text-[20px] tracking-[-0.1px] whitespace-nowrap">Organisms</p>
    </div>
  );
}

function Others1() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(85.71%+3.29px)] pb-[8px] top-[56px]" data-name="Others">
      <div aria-hidden="true" className="absolute border-[#575257] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#575257] text-[20px] tracking-[-0.1px] whitespace-nowrap">Others</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function AnatomyExamle() {
  return (
    <div className="absolute contents left-[145px] top-[73px]" data-name="Anatomy examle">
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[145px] px-[22px] py-[8px] rounded-[32px] top-[144px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[24px] left-[165px] top-[153px] w-[51px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-dashed border-white inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[229px] top-[164px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[175px] rounded-[55px] top-[73px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame56 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[280px] rounded-[55px] top-[151px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame57 />
      </div>
      <div className="absolute h-[52px] left-[189px] top-[102.5px] w-[3px]">
        <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
          <div className="-rotate-90 flex-none h-px w-[50px]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                  <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function AnatomyExample1() {
  return (
    <div className="absolute contents left-[510px] top-[73px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[510px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[144px]" data-name="Desktop / Button">
        <Frame5 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[620px] top-[163px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[556px] top-[153px] w-[51px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-dashed border-white inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute left-[530px] size-[20px] top-[155px]">
        <div aria-hidden="true" className="absolute border border-dashed border-white inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[566px] rounded-[55px] top-[73px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame58 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[671px] rounded-[55px] top-[149px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame59 />
      </div>
      <div className="absolute flex h-[52px] items-center justify-center left-[538.5px] top-[173.5px] w-[3px]">
        <div className="flex-none rotate-180">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[525px] rounded-[55px] top-[225px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame60 />
      </div>
      <div className="absolute h-[52px] left-[580px] top-[102px] w-[3px]">
        <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
          <div className="-rotate-90 flex-none h-px w-[50px]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                  <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function AnatomyExample2() {
  return (
    <div className="absolute contents left-[901px] top-[72px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[975px] pl-[22px] pr-[20px] py-[8px] rounded-[32px] top-[144px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
        <Frame6 />
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[930px] top-[163px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[901px] rounded-[55px] top-[149px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame61 />
      </div>
      <div className="absolute left-[1052px] size-[20px] top-[155px]">
        <div aria-hidden="true" className="absolute border border-dashed border-white inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute h-[24px] left-[995px] top-[152px] w-[51px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-dashed border-white inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute flex h-[52px] items-center justify-center left-[1060.5px] top-[173.5px] w-[3px]">
        <div className="flex-none rotate-180">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[1047px] rounded-[55px] top-[225px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame62 />
      </div>
      <div className="absolute h-[52px] left-[1019px] top-[101.5px] w-[3px]">
        <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
          <div className="-rotate-90 flex-none h-px w-[50px]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                  <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[1005px] rounded-[55px] top-[72px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame63 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function AnatomyExample3() {
  return (
    <div className="absolute contents left-[1292px] top-[144px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[1292px] p-[10px] rounded-[32px] top-[144px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
          <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
              <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[1327px] top-[163px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[1378px] rounded-[55px] top-[149px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame64 />
      </div>
      <div className="absolute left-[1302px] size-[20px] top-[154px]">
        <div aria-hidden="true" className="absolute border border-dashed border-white inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute flex h-[52px] items-center justify-center left-[1310.5px] top-[172.5px] w-[3px]">
        <div className="flex-none rotate-180">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[1297px] rounded-[55px] top-[224px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame65 />
      </div>
    </div>
  );
}

function AnatomyExample() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[327px] left-[24px] rounded-[48px] top-[2086px] w-[1553px]" data-name="Anatomy example">
      <AnatomyExamle />
      <AnatomyExample1 />
      <AnatomyExample2 />
      <AnatomyExample3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.08%_-3.13%_-2.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 16.5">
          <g id="Group 250">
            <path d="M0.5 15H24.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M24.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M12.5 15L12.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="12.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">24 px</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-1.28%_-3.13%_-1.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 16.5">
          <g id="Group 250">
            <path d="M0.5 15L39.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M39.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M19.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="19.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">40 px</p>
    </div>
  );
}

function AnatomyExample5() {
  return (
    <div className="absolute contents left-[511px] top-[188px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[562px] px-[22px] py-[8px] rounded-[32px] top-[188px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[24px] left-[657px] top-[195px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group1 />
          </div>
        </div>
        <Frame31 />
      </div>
      <div className="absolute h-[39px] left-[511px] top-[189px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group2 />
          </div>
        </div>
        <Frame32 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.5%_-3.13%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
          <g id="Group 250">
            <path d="M0.5 15H20.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M20.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 15L10.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="10.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">20 px</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-1.25%_-3.13%_-1.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 16.5">
          <g id="Group 250">
            <path d="M0.5 15H40.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M40.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M20.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="20.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">40 px</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">20 px</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.5%_-3.13%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
          <g id="Group 250">
            <path d="M0.5 15H20.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M20.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 15L10.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="10.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample6() {
  return (
    <div className="absolute contents left-[500px] top-[332px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[551px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[332px]" data-name="Desktop / Button">
        <Frame7 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[20px] left-[500px] top-[343px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group3 />
          </div>
        </div>
        <Frame33 />
      </div>
      <div className="absolute h-[40px] left-[672px] top-[332px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group4 />
          </div>
        </div>
        <Frame34 />
      </div>
      <div className="absolute h-[35px] left-[567px] top-[376px] w-[28px]" data-name="Spacing">
        <Frame35 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group5 />
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] left-[571px] size-[20px] top-[343px]" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">20 px</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.5%_-3.13%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
          <g id="Group 250">
            <path d="M0.5 15H20.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M20.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 15L10.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="10.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.5%_-3.13%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
          <g id="Group 250">
            <path d="M0.5 15H20.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M20.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 15L10.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="10.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">20 px</p>
    </div>
  );
}

function AnatomyExample7() {
  return (
    <div className="absolute contents left-[585px] top-[515px]" data-name="Anatomy example">
      <div className="absolute h-[35px] left-[591px] top-[559px] w-[28px]" data-name="Spacing">
        <Frame36 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group6 />
          </div>
        </div>
      </div>
      <div className="absolute h-[20px] left-[629px] top-[525px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group7 />
          </div>
        </div>
        <Frame38 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[585px] p-[10px] rounded-[32px] top-[515px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
          <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
              <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] left-[595px] size-[20px] top-[525px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
            <path d={svgPaths.p1aa25000} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.78%_-3.13%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.5">
          <g id="Group 250">
            <path d="M0.5 15H18.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M18.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M9.5 15L9.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="9.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">18 px</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-1.56%_-3.13%_-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 16.5">
          <g id="Group 250">
            <path d="M0.5 15H32.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M32.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M16.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="16.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">32 px</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">18 px</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.78%_-3.13%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.5">
          <g id="Group 250">
            <path d="M0.5 15H18.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M18.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M9.5 15L9.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="9.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample8() {
  return (
    <div className="absolute contents left-[1139px] top-[332px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[6px] items-center justify-center left-[1190px] pl-[14px] pr-[16px] py-[6px] rounded-[32px] top-[332px]" data-name="Desktop / Button">
        <Frame8 />
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[18px] left-[1139px] top-[340px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group8 />
          </div>
        </div>
        <Frame39 />
      </div>
      <div className="absolute h-[32px] left-[1290px] top-[332px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group9 />
          </div>
        </div>
        <Frame40 />
      </div>
      <div className="absolute h-[35px] left-[1200px] top-[368px] w-[26px]" data-name="Spacing">
        <Frame41 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group10 />
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] left-[1204px] size-[18px] top-[340px]" />
    </div>
  );
}

function Group11() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.08%_-3.13%_-2.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 16.5">
          <g id="Group 250">
            <path d="M0.5 15H24.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M24.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M12.5 15L12.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="12.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">20 px</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-1.56%_-3.13%_-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 16.5">
          <g id="Group 250">
            <path d="M0.5 15H32.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M32.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M16.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="16.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">32 px</p>
    </div>
  );
}

function AnatomyExample9() {
  return (
    <div className="absolute contents left-[1148px] top-[188px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch cursor-pointer flex items-center justify-center left-[1199px] px-[16px] py-[6px] rounded-[32px] top-[188px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[24px] left-[1277px] top-[192px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group11 />
          </div>
        </div>
        <Frame42 />
      </div>
      <div className="absolute h-[32px] left-[1148px] top-[188px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group12 />
          </div>
        </div>
        <Frame43 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">18 px</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.78%_-3.13%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.5">
          <g id="Group 250">
            <path d="M0.5 15H18.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M18.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M9.5 15L9.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="9.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.78%_-3.13%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.5">
          <g id="Group 250">
            <path d="M0.5 15H18.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M18.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M9.5 15L9.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="9.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">18 px</p>
    </div>
  );
}

function AnatomyExample10() {
  return (
    <div className="absolute contents left-[1207px] top-[515px]" data-name="Anatomy example">
      <div className="absolute h-[35px] left-[1221px] top-[551px] w-[26px]" data-name="Spacing">
        <Frame44 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group13 />
          </div>
        </div>
      </div>
      <div className="absolute h-[18px] left-[1265px] top-[522px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group14 />
          </div>
        </div>
        <Frame45 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[1207px] px-[18px] py-[7px] rounded-[32px] top-[515px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
          <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
              <path d={svgPaths.p1aa25000} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] left-[1225px] size-[18px] top-[522px]" />
    </div>
  );
}

function AnatomyExample4() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[666px] left-[24px] rounded-[48px] top-[2683px] w-[1553px]" data-name="Anatomy example">
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[571px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">M size</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[188px] whitespace-nowrap">Body</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[332px] whitespace-nowrap">With icon</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[515px] whitespace-nowrap">Icon button</p>
      <AnatomyExample5 />
      <AnatomyExample6 />
      <AnatomyExample7 />
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[1202px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">S size</p>
      <AnatomyExample8 />
      <AnatomyExample9 />
      <AnatomyExample10 />
      <div className="absolute flex h-[666px] items-center justify-center left-[295px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[666px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 666 1">
                <line id="Line 29" stroke="var(--stroke-0, #E8E5E8)" x2="666" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[666px] items-center justify-center left-[919px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[666px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 666 1">
                <line id="Line 29" stroke="var(--stroke-0, #E8E5E8)" x2="666" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[280px] w-[1553px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 31" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[463px] w-[1553px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 31" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame66 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">{`Text button `}</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame67 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Container</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame68 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Icon</p>
    </div>
  );
}

function Anatom() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-end left-[56px] rounded-[48px] top-[2453px]" data-name="Anatom">
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">22 px</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-2.27%_-3.13%_-2.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16.5">
          <g id="Group 250">
            <path d="M0.5 15H22.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M22.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M11.5 15L11.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="11.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-6.25%_-3.13%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16.5">
          <g id="Group 250">
            <path d="M0.5 15H8.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M8.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">20 px</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.5%_-3.13%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
          <g id="Group 250">
            <path d="M0.5 15H20.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M20.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 15L10.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="10.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample12() {
  return (
    <div className="absolute contents left-[547px] top-[547px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[551px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[586px]" data-name="Desktop / Button">
        <Frame9 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[551px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[586px]" data-name="Desktop / Button">
        <Frame10 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[40px] left-[551px] top-[586px] w-[20px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[40px] left-[591px] top-[586px] w-[8px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[40px] left-[646px] top-[586px] w-[22px]" />
      <div className="absolute h-[35px] left-[642px] top-[547px] w-[30px]" data-name="Spacing">
        <Frame46 />
        <Group15 />
      </div>
      <div className="absolute h-[35px] left-[587px] top-[547px] w-[16px]" data-name="Spacing">
        <Frame47 />
        <Group16 />
      </div>
      <div className="absolute h-[35px] left-[547px] top-[630px] w-[28px]" data-name="Spacing">
        <Frame48 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">22 px</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.27%_-3.13%_-2.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16.5">
          <g id="Group 250">
            <path d="M0.5 15H22.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M22.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M11.5 15L11.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="11.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">22 px</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.27%_-3.13%_-2.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16.5">
          <g id="Group 250">
            <path d="M0.5 15H22.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M22.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M11.5 15L11.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="11.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample13() {
  return (
    <div className="absolute contents left-[558px] top-[276px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[562px] px-[22px] py-[8px] rounded-[32px] top-[276px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[40px] left-[562px] top-[276px] w-[22px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[40px] left-[631px] top-[276px] w-[22px]" />
      <div className="absolute h-[35px] left-[558px] top-[320px] w-[30px]" data-name="Spacing">
        <Frame49 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group18 />
          </div>
        </div>
      </div>
      <div className="absolute h-[35px] left-[627px] top-[320px] w-[30px]" data-name="Spacing">
        <Frame50 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-6.25%_-3.13%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16.5">
          <g id="Group 250">
            <path d="M0.5 15H8.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M8.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-6.25%_-3.13%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16.5">
          <g id="Group 250">
            <path d="M0.5 15H8.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M8.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function AnatomyExample14() {
  return (
    <div className="absolute contents left-[516px] top-[188px]" data-name="Anatomy example">
      <div className="absolute h-[8px] left-[516px] top-[188px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group20 />
          </div>
        </div>
        <Frame51 />
      </div>
      <div className="absolute h-[8px] left-[653px] top-[220px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group21 />
          </div>
        </div>
        <Frame52 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[562px] px-[22px] py-[8px] rounded-[32px] top-[188px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[8px] left-[559px] top-[220px] w-[90px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[8px] left-[566px] top-[188px] w-[83px]" />
    </div>
  );
}

function Group22() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-6.25%_-3.13%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16.5">
          <g id="Group 250">
            <path d="M0.5 15H8.5" id="Line 2" stroke="var(--stroke-0, #270027)" strokeLinecap="round" />
            <path d="M8.5 14V16" id="Line 3" stroke="var(--stroke-0, #270027)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #270027)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #270027)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #270027)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#270027] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5.56%_-3.13%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.5">
          <g id="Group 250">
            <path d="M0.5 15H9.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M9.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">9 px</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-12.5%_-3.13%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 16.5">
          <g id="Group 250">
            <path d="M0.5 15L4.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M2.5 15L2.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="2.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">2 px</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample15() {
  return (
    <div className="absolute contents left-[504px] top-[459px]" data-name="Anatomy example">
      <div className="absolute h-[8px] left-[668px] top-[459px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group22 />
          </div>
        </div>
        <Frame53 />
      </div>
      <div className="absolute h-[9px] left-[504px] top-[490px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group23 />
          </div>
        </div>
        <Frame54 />
      </div>
      <div className="absolute h-[4px] left-[504px] top-[467px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group24 />
          </div>
        </div>
        <Frame55 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[551px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[459px]" data-name="Desktop / Button">
        <Frame11 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[8px] left-[599px] top-[459px] w-[47px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[9px] left-[571px] top-[490px] w-[20px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[2px] left-[571px] top-[468px] w-[20px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">10 px</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5%_-3.13%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16.5">
          <g id="Group 250">
            <path d="M0.5 15L10.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 15L5.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="5.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">10 px</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-5%_-3.13%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16.5">
          <g id="Group 250">
            <path d="M0.5 15H10.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 15L5.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="5.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample16() {
  return (
    <div className="absolute contents left-[581px] top-[857px]" data-name="Anatomy example">
      <div className="absolute h-[35px] left-[581px] top-[932px] w-[18px]" data-name="Spacing">
        <Frame69 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group25 />
          </div>
        </div>
      </div>
      <div className="absolute h-[35px] left-[611px] top-[857px] w-[18px]" data-name="Spacing">
        <Frame70 />
        <Group26 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[585px] p-[10px] rounded-[32px] top-[892px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
          <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
              <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[36px] left-[585px] top-[894px] w-[10px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[36px] left-[615px] top-[894px] w-[10px]" />
    </div>
  );
}

function Group27() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5%_-3.13%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16.5">
          <g id="Group 250">
            <path d="M0.5 15H10.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 15L5.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="5.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">10 px</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5%_-3.13%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16.5">
          <g id="Group 250">
            <path d="M0.5 15H10.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 15L5.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="5.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">10 px</p>
    </div>
  );
}

function AnatomyExample17() {
  return (
    <div className="absolute contents left-[538px] top-[769px]" data-name="Anatomy example">
      <div className="absolute h-[10px] left-[538px] top-[769px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group27 />
          </div>
        </div>
        <Frame71 />
      </div>
      <div className="absolute h-[10px] left-[625px] top-[799px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group28 />
          </div>
        </div>
        <Frame72 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[585px] p-[10px] rounded-[32px] top-[769px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
          <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
              <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[10px] items-center justify-center left-[587px] top-[769px] w-[37px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(255,255,255,0.3)] h-[37px] w-[10px]" />
        </div>
      </div>
      <div className="absolute flex h-[10px] items-center justify-center left-[588px] top-[799px] w-[36px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(255,255,255,0.3)] h-[36px] w-[10px]" />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-3.13%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16.5">
          <g id="Group 250">
            <path d="M0.5 15H16.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M16.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M8.5 15L8.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="8.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.5%_-3.13%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
          <g id="Group 250">
            <path d="M0.5 15H20.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M20.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M10.5 15L10.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="10.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample18() {
  return (
    <div className="absolute contents left-[1195px] top-[276px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch cursor-pointer flex items-center justify-center left-[1199px] px-[16px] py-[6px] rounded-[32px] top-[276px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[32px] left-[1199px] top-[276px] w-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[32px] left-[1257px] top-[276px] w-[16px]" />
      <div className="absolute h-[35px] left-[1195px] top-[311px] w-[24px]" data-name="Spacing">
        <Frame73 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group29 />
          </div>
        </div>
      </div>
      <div className="absolute h-[35px] left-[1253px] top-[311px] w-[28px]" data-name="Spacing">
        <Frame74 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group30 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
            <path d={svgPaths.p1aa25000} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-3.13%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16.5">
          <g id="Group 250">
            <path d="M0.5 15H16.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M16.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M8.5 15L8.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="8.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">6 px</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-8.33%_-3.13%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 16.5">
          <g id="Group 250">
            <path d="M0.5 15H6.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M6.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M3.5 15L3.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="3.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">14 px</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-3.57%_-3.13%_-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.5">
          <g id="Group 250">
            <path d="M0.5 15H14.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M14.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M7.5 15L7.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="7.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample19() {
  return (
    <div className="absolute contents left-[1186px] top-[552px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[6px] items-center justify-center left-[1190px] pl-[14px] pr-[16px] py-[6px] rounded-[32px] top-[590px]" data-name="Desktop / Button">
        <Frame12 />
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[32px] left-[1190px] top-[590px] w-[14px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[32px] left-[1222px] top-[590px] w-[6px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[32px] left-[1270px] top-[590px] w-[16px]" />
      <div className="absolute h-[35px] left-[1266px] top-[552px] w-[24px]" data-name="Spacing">
        <Frame75 />
        <Group31 />
      </div>
      <div className="absolute h-[35px] left-[1218px] top-[552px] w-[14px]" data-name="Spacing">
        <Frame76 />
        <Group32 />
      </div>
      <div className="absolute h-[35px] left-[1186px] top-[625px] w-[22px]" data-name="Spacing">
        <Frame77 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group33 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-7.14%_-3.13%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16.5">
          <g id="Group 250">
            <path d="M0.5 15H7.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M7.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M3.5 15L3.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="3.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">6 px</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-7.14%_-3.13%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16.5">
          <g id="Group 250">
            <path d="M0.5 15H7.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M7.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">6 px</p>
    </div>
  );
}

function AnatomyExample20() {
  return (
    <div className="absolute contents left-[1152px] top-[188px]" data-name="Anatomy example">
      <div className="absolute h-[7px] left-[1152px] top-[188px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group34 />
          </div>
        </div>
        <Frame78 />
      </div>
      <div className="absolute h-[7px] left-[1273px] top-[214px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group35 />
          </div>
        </div>
        <Frame79 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch cursor-pointer flex items-center justify-center left-[1199px] px-[16px] py-[6px] rounded-[32px] top-[188px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[6px] left-[1202px] top-[188px] w-[68px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[6px] left-[1202px] top-[214px] w-[68px]" />
    </div>
  );
}

function Group36() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-7.14%_-3.13%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16.5">
          <g id="Group 250">
            <path d="M0.5 15H7.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M7.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M3.5 15L3.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="3.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">6 px</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-7.14%_-3.13%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16.5">
          <g id="Group 250">
            <path d="M0.5 15H7.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M7.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">6 px</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
            <path d={svgPaths.p1aa25000} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample21() {
  return (
    <div className="absolute contents left-[1143px] top-[459px]" data-name="Anatomy example">
      <div className="absolute h-[7px] left-[1143px] top-[485px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group36 />
          </div>
        </div>
        <Frame80 />
      </div>
      <div className="absolute h-[7px] left-[1286px] top-[459px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group37 />
          </div>
        </div>
        <Frame81 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[6px] items-center justify-center left-[1190px] pl-[14px] pr-[16px] py-[6px] rounded-[32px] top-[459px]" data-name="Desktop / Button">
        <Frame13 />
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[6px] left-[1228px] top-[459px] w-[42px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 6">
          <path d="M0 0H42V6H0V0Z" fill="var(--fill-0, white)" fillOpacity="0.3" id="Rectangle 301" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[6px] left-[1204px] top-[485px] w-[18px]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">18 px</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-2.78%_-3.13%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.5">
          <g id="Group 250">
            <path d="M0.5 15H18.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M18.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M9.5 15L9.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="9.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">18 px</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-2.78%_-3.13%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.5">
          <g id="Group 250">
            <path d="M0.5 15H18.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M18.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M9.5 15L9.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="9.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample22() {
  return (
    <div className="absolute contents left-[1203px] top-[857px]" data-name="Anatomy example">
      <div className="absolute h-[35px] left-[1203px] top-[930px] w-[26px]" data-name="Spacing">
        <Frame82 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group38 />
          </div>
        </div>
      </div>
      <div className="absolute h-[35px] left-[1239px] top-[857px] w-[26px]" data-name="Spacing">
        <Frame83 />
        <Group39 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[1207px] px-[18px] py-[7px] rounded-[32px] top-[895px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
          <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
              <path d={svgPaths.p1aa25000} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[32px] left-[1207px] top-[895px] w-[18px]" />
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[32px] left-[1243px] top-[895px] w-[18px]" />
    </div>
  );
}

function Group40() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-7.14%_-3.13%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16.5">
          <g id="Group 250">
            <path d="M0.5 15H7.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M7.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M3.5 15L3.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="3.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">7 px</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-6.25%_-3.13%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16.5">
          <g id="Group 250">
            <path d="M0.5 15H8.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M8.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M4.5 15L4.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="4.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">7 px</p>
    </div>
  );
}

function AnatomyExample23() {
  return (
    <div className="absolute contents left-[1160px] top-[769px]" data-name="Anatomy example">
      <div className="absolute h-[7px] left-[1160px] top-[795px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group40 />
          </div>
        </div>
        <Frame84 />
      </div>
      <div className="absolute h-[8px] left-[1261px] top-[769px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group41 />
          </div>
        </div>
        <Frame85 />
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[1207px] px-[18px] py-[7px] rounded-[32px] top-[770px]" data-name="Desktop / Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
          <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
              <path d={svgPaths.p1aa25000} fill="var(--fill-0, white)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[7px] items-center justify-center left-[1210px] top-[770px] w-[48px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(255,255,255,0.3)] h-[48px] w-[7px]" />
        </div>
      </div>
      <div className="absolute flex h-[7px] items-center justify-center left-[1210px] top-[795px] w-[49px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(255,255,255,0.3)] h-[49px] w-[7px]" />
        </div>
      </div>
    </div>
  );
}

function AnatomyExample11() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[1039px] left-[24px] rounded-[48px] top-[3453px] w-[1553px]" data-name="Anatomy example">
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[571px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">M size</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[188px] whitespace-nowrap">Body</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[459px] whitespace-nowrap">With icon</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[769px] whitespace-nowrap">Icon button</p>
      <AnatomyExample12 />
      <AnatomyExample13 />
      <AnatomyExample14 />
      <AnatomyExample15 />
      <AnatomyExample16 />
      <AnatomyExample17 />
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[1202px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">S size</p>
      <AnatomyExample18 />
      <AnatomyExample19 />
      <AnatomyExample20 />
      <AnatomyExample21 />
      <AnatomyExample22 />
      <AnatomyExample23 />
      <div className="absolute flex h-[1039px] items-center justify-center left-[295px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[1039px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1039 1">
                <line id="Line 29" stroke="var(--stroke-0, #E8E5E8)" x2="1039" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1039px] items-center justify-center left-[919px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[1039px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1039 1">
                <line id="Line 29" stroke="var(--stroke-0, #E8E5E8)" x2="1039" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[407px] w-[1553px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 31" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[148px] w-[1553px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 31" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[717px] w-[1553px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 31" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
            <path d={svgPaths.p1aa25000} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample25() {
  return (
    <div className="absolute contents left-[1011px] top-[1428px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex gap-[6px] items-center left-[1011px] py-[2px] rounded-[32px] top-[1446px]" data-name="Desktop / Button">
        <Frame14 />
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1117px] px-[16px] py-[6px] rounded-[4px] top-[1428px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & Text color - Key colors / Primary / Primary:700★`}</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1117px] px-[16px] py-[6px] rounded-[4px] top-[1460px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B2</p>
      </div>
      <div className="absolute h-[8px] left-[1020px] top-[1442px] w-[97px]">
        <div className="absolute inset-[-6.25%_0_0_-0.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.5 8.5">
            <path d={svgPaths.p22381500} id="Vector 12" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[9px] items-center justify-center left-[1055px] top-[1466px] w-[62px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[9px] relative w-[62px]">
            <div className="absolute inset-[-5.56%_0_0_-0.81%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.5 9.5">
                <path d={svgPaths.p3bfd9d00} id="Vector 13" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[1018px] size-[4px] top-[1450px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[1053px] size-[4px] top-[1462px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample26() {
  return (
    <div className="absolute contents left-[387px] top-[776px]" data-name="Anatomy example">
      <div className="absolute h-[11px] left-[413px] top-[790px] w-[133px]">
        <div className="absolute inset-[-4.55%_0_0_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.5 11.5">
            <path d={svgPaths.p1c343500} id="Vector 8" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[2px] top-[776px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Neutral colors / Neutral 50</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[2px] top-[840px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B1</p>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[387px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[802px]" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <Frame15 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[453px] top-[832px] w-[91px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[91px]">
            <div className="absolute inset-[-2.27%_0_0_-0.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.5 22.5">
                <path d={svgPaths.p28abc190} id="Vector 9" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[497px] top-[821px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[411px] size-[4px] top-[801px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[451px] size-[4px] top-[828px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[808px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Filled color - Key colors / Primary / Primary:700★</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[9.79%_5.21%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 16.0833">
            <path d={svgPaths.p3b7ca680} fill="var(--fill-0, #0D853A)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample27() {
  return (
    <div className="absolute contents left-[387px] top-[972px]" data-name="Anatomy example">
      <div className="absolute h-[11px] left-[413px] top-[986px] w-[133px]">
        <div className="absolute inset-[-4.55%_0_0_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.5 11.5">
            <path d={svgPaths.p1c343500} id="Vector 8" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[2px] top-[972px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Neutral colors / Neutral 50</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[2px] top-[1036px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[2px] top-[1068px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & text color - Semantic colors / Success / Success:575`}</p>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[387px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[998px]" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <Frame16 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0d853a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[453px] top-[1028px] w-[91px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[91px]">
            <div className="absolute inset-[-2.27%_0_0_-0.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.5 22.5">
                <path d={svgPaths.p28abc190} id="Vector 9" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[53px] items-center justify-center left-[417px] top-[1029px] w-[127px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[53px] relative w-[127px]">
            <div className="absolute inset-[-0.94%_0_0_-0.39%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.5 53.5">
                <path d={svgPaths.p3adb1d80} id="Vector 10" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[497px] top-[1017px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[411px] size-[4px] top-[997px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[451px] size-[4px] top-[1024px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[415px] size-[4px] top-[1027px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[1004px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Filled color - Neutral colors / Neutral 0</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample28() {
  return (
    <div className="absolute contents left-[1011px] top-[776px]" data-name="Anatomy example">
      <div className="absolute h-[11px] left-[1041px] top-[790px] w-[128px]">
        <div className="absolute inset-[-4.55%_0_0_-0.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.5 11.5">
            <path d={svgPaths.p151e1680} id="Vector 14" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[1011px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[802px]" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <Frame17 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1168px] px-[16px] py-[6px] rounded-[4px] top-[776px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Neutral colors / Neutral 50</p>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[1081px] top-[832px] w-[88px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[88px]">
            <div className="absolute inset-[-2.27%_0_0_-0.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.5 22.5">
                <path d={svgPaths.p3d62fd80} id="Vector 15" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[1039px] size-[4px] top-[801px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[1079px] size-[4px] top-[828px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[1104px] size-[4px] top-[822px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1168px] px-[16px] py-[6px] rounded-[4px] top-[808px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & Text color - Key colors / Primary / Primary:700★`}</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1168px] px-[16px] py-[6px] rounded-[4px] top-[840px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B2</p>
      </div>
      <div className="absolute h-0 left-[1107px] top-[824.5px] w-[61px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 1">
            <line id="Line 24" stroke="var(--stroke-0, black)" x2="61" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p1cad580} fill="var(--fill-0, #D30023)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample29() {
  return (
    <div className="absolute contents left-[367px] top-[1200px]" data-name="Anatomy example">
      <div className="absolute h-[11px] left-[393px] top-[1214px] w-[133px]">
        <div className="absolute inset-[-4.55%_0_0_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.5 11.5">
            <path d={svgPaths.p1c343500} id="Vector 8" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[524px] px-[16px] py-[6px] rounded-[2px] top-[1200px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Neutral colors / Neutral 50</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[524px] px-[16px] py-[6px] rounded-[2px] top-[1264px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[524px] px-[16px] py-[6px] rounded-[2px] top-[1296px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & text color - Semantic colors / Error / Error:700`}</p>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[367px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[1226px]" data-name="Desktop / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <Frame18 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#d30023] text-[16px] tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[433px] top-[1256px] w-[91px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[91px]">
            <div className="absolute inset-[-2.27%_0_0_-0.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.5 22.5">
                <path d={svgPaths.p28abc190} id="Vector 9" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[53px] items-center justify-center left-[397px] top-[1257px] w-[127px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[53px] relative w-[127px]">
            <div className="absolute inset-[-0.94%_0_0_-0.39%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.5 53.5">
                <path d={svgPaths.p3adb1d80} id="Vector 10" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[477px] top-[1245px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[391px] size-[4px] top-[1225px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[431px] size-[4px] top-[1252px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[395px] size-[4px] top-[1255px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[524px] px-[16px] py-[6px] rounded-[4px] top-[1232px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Filled color - Neutral colors / Neutral 0</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
            <path d={svgPaths.p1aa25000} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample30() {
  return (
    <div className="absolute contents left-[387px] top-[1428px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex gap-[6px] items-center left-[387px] py-[2px] rounded-[32px] top-[1462px]" data-name="Desktop / Button">
        <Frame19 />
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a007a] text-[14px] tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[502px] px-[16px] py-[6px] rounded-[4px] top-[1428px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Icon color - Key colors / Primary / Primary:700★</p>
      </div>
      <div className="absolute h-[23px] left-[397px] top-[1442px] w-[105px]">
        <div className="absolute inset-[-2.17%_0_0_-0.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.5 23.5">
            <path d={svgPaths.p5509400} id="Vector 10" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[430px] top-[1483px] w-[88px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[24px] relative w-[88px]">
            <div className="absolute inset-[-2.08%_0_0_-0.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.5 24.5">
                <path d={svgPaths.p24f5b000} id="Vector 11" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[460px] top-[1474px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[395px] size-[4px] top-[1465px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[428px] size-[4px] top-[1479px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[502px] px-[16px] py-[6px] rounded-[4px] top-[1460px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Text color - Neutral colors / Neutral 825</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[502px] px-[16px] py-[6px] rounded-[4px] top-[1492px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B1</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample31() {
  return (
    <div className="absolute contents left-[387px] top-[188px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[387px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[214px]" data-name="Desktop / Button">
        <Frame20 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[25px] left-[417px] top-[202px] w-[128px]">
        <div className="absolute inset-[-2%_0_0_-0.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.5 25.5">
            <path d={svgPaths.pdbba880} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[457px] top-[244px] w-[88px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[88px]">
            <div className="absolute inset-[-2.27%_0_0_-0.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.5 22.5">
                <path d={svgPaths.p3d62fd80} id="Vector 15" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[498px] top-[233px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[220px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Filled color - Key colors / Primary / Primary:700★</p>
      </div>
      <div className="absolute left-[415px] size-[4px] top-[227px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[455px] size-[4px] top-[240px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[252px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[188px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & Text color - Neutral colors / Neutral 0`}</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample32() {
  return (
    <div className="absolute contents left-[387px] top-[384px]" data-name="Anatomy example">
      <div className="absolute bg-[#243796] content-stretch flex gap-[8px] items-center justify-center left-[387px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[410px]" data-name="Desktop / Button">
        <Frame21 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[25px] left-[417px] top-[398px] w-[128px]">
        <div className="absolute inset-[-2%_0_0_-0.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.5 25.5">
            <path d={svgPaths.pdbba880} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[457px] top-[440px] w-[88px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[88px]">
            <div className="absolute inset-[-2.27%_0_0_-0.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.5 22.5">
                <path d={svgPaths.p3d62fd80} id="Vector 15" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[498px] top-[429px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[416px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a030a] text-[0px] text-[12px] tracking-[0.06px] whitespace-nowrap">
          <span className="leading-[16px]">{`Filled color - Key colors / Quaternary / `}</span>
          <span className="leading-[16px]">Quaternary</span>
          <span className="leading-[16px]">:725★</span>
        </p>
      </div>
      <div className="absolute left-[415px] size-[4px] top-[423px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[455px] size-[4px] top-[436px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[448px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[384px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & Text color - Neutral colors / Neutral 0`}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p24e8cb80} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample33() {
  return (
    <div className="absolute contents left-[387px] top-[580px]" data-name="Anatomy example">
      <div className="absolute bg-[#5418ad] content-stretch flex gap-[8px] items-center justify-center left-[387px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[606px]" data-name="Desktop / Button">
        <Frame22 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute h-[25px] left-[417px] top-[594px] w-[128px]">
        <div className="absolute inset-[-2%_0_0_-0.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.5 25.5">
            <path d={svgPaths.pdbba880} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[457px] top-[636px] w-[88px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[88px]">
            <div className="absolute inset-[-2.27%_0_0_-0.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.5 22.5">
                <path d={svgPaths.p3d62fd80} id="Vector 15" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[498px] top-[625px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[612px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Filled color - Key colors / Secondary / Secondary:575★</p>
      </div>
      <div className="absolute left-[415px] size-[4px] top-[619px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[455px] size-[4px] top-[632px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[644px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[544px] px-[16px] py-[6px] rounded-[4px] top-[580px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & Text color - Neutral colors / Neutral 0`}</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Leading icon">
        <div className="absolute inset-[21.87%_21.88%_21.88%_21.88%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 10.125">
            <path d={svgPaths.p1aa25000} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnatomyExample34() {
  return (
    <div className="absolute contents left-[1011px] top-[188px]" data-name="Anatomy example">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[6px] items-center justify-center left-[1011px] pl-[14px] pr-[16px] py-[6px] rounded-[32px] top-[218px]" data-name="Desktop / Button">
        <Frame23 />
        <p className="font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.07px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[1101px] top-[234px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[52px] relative w-[3px]">
            <div className="absolute bottom-[2px] flex h-[50px] items-center justify-center left-[2px] right-px">
              <div className="-rotate-90 flex-none h-px w-[50px]">
                <div className="relative size-full" data-name="Line">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 1">
                      <line id="Line" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" x1="0.5" x2="49.5" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-1px] left-[-0.5px] size-[4px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[25px] left-[1034px] top-[201px] w-[128px]">
        <div className="absolute inset-[-2%_0_0_-0.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.5 25.5">
            <path d={svgPaths.pdbba880} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[1069px] top-[243px] w-[88px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[22px] relative w-[88px]">
            <div className="absolute inset-[-2.27%_0_0_-0.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.5 22.5">
                <path d={svgPaths.p3d62fd80} id="Vector 15" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[1032px] size-[4px] top-[226px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[1067px] size-[4px] top-[239px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1147px] px-[16px] py-[6px] rounded-[4px] top-[220px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Filled color - Key colors / Primary / Primary:700★</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1147px] px-[16px] py-[6px] rounded-[4px] top-[188px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">{`Icon & Text color - Neutral colors / Neutral 0`}</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1147px] px-[16px] py-[6px] rounded-[4px] top-[252px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Button / B2</p>
      </div>
    </div>
  );
}

function AnatomyExample24() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[1592px] left-[24px] rounded-[48px] top-[4720px] w-[1553px]" data-name="Anatomy example">
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[214px] whitespace-nowrap">Filled</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[410px] whitespace-nowrap">Filled-blue</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[606px] whitespace-nowrap">Filled-violet</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[802px] whitespace-nowrap">Outlined</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[1016px] whitespace-nowrap">Outlined / success</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[1216px] whitespace-nowrap">Outlined / danger</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[1462px] whitespace-nowrap">Ghost</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[387px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Large size</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[1011px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Medium size</p>
      <AnatomyExample25 />
      <AnatomyExample26 />
      <AnatomyExample27 />
      <AnatomyExample28 />
      <AnatomyExample29 />
      <AnatomyExample30 />
      <AnatomyExample31 />
      <AnatomyExample32 />
      <AnatomyExample33 />
      <AnatomyExample34 />
      <div className="absolute h-0 left-0 top-[332px] w-[1553.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 41" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[148px] w-[1553.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 41" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[528px] w-[1553.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 41" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[724px] w-[1553.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 41" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[920px] w-[1553.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 41" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[1148px] w-[1553.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 41" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[1376px] w-[1553.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1553 1">
            <line id="Line 41" stroke="var(--stroke-0, #E8E5E8)" x2="1553" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[1308px] items-center justify-center left-[919px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[1308px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1308 1">
                <line id="Line 28" stroke="var(--stroke-0, #E8E5E8)" x2="1308" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1308px] items-center justify-center left-[339px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[1308px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1308 1">
                <line id="Line 28" stroke="var(--stroke-0, #E8E5E8)" x2="1308" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Leading icon">
        <div className="absolute inset-[38.4%_21.59%_30.07%_21.59%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3625 6.30625">
            <path d={svgPaths.pd87bcf2} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Anatomy3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f6e4fc] border border-[#de8aed] border-solid left-[calc(50%-0.5px)] overflow-clip rounded-[173px] size-[160px] top-[72px]" data-name="Anatomy">
      <div className="absolute bg-[#7a007a] content-stretch flex gap-[8px] items-center justify-center left-[98px] pl-[20px] pr-[22px] py-[8px] rounded-[32px] top-[60px]" data-name="Desktop / Button">
        <Frame24 />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Button</p>
      </div>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] left-[8px] not-italic text-[#270027] text-[12px] top-[46px] tracking-[0.06px] whitespace-nowrap">Corner radius 32</p>
      <div className="absolute left-[89px] size-[60px] top-[52px]">
        <div className="absolute bottom-1/2 left-0 right-1/2 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9839 29.9839">
            <path d={svgPaths.p3343d400} fill="var(--fill-0, #DE8AED)" id="Ellipse 57" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Anatomy2() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[304px] left-[24px] rounded-[32px] top-[6704px] w-[1553px]" data-name="Anatomy">
      <Anatomy3 />
    </div>
  );
}

function Anatomy1() {
  return (
    <div className="absolute contents left-[24px] top-[1894px]" data-name="Anatomy">
      <div className="absolute h-[252px] left-[62.02px] top-[2289px] w-[1498.965px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 378" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[1922px] tracking-[-0.48px] w-[183px]">
        <p className="leading-[56px]">Anatomy</p>
      </div>
      <AnatomyExample />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[20px] top-[2018px] tracking-[-0.1px] w-[732px]">
        <p className="leading-[28px]">A button’s text label is the essential element of a button, as it communicates the action that will be performed when the user interacts.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[20px] top-[2615px] tracking-[-0.1px] w-[733px]">
        <p className="leading-[28px]">Button have several classes - leading-icon, trailing-icon, only-icon, only-text and are available in 2 sizes.</p>
      </div>
      <AnatomyExample4 />
      <Anatom />
      <div className="absolute bg-[#f4f2f4] content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[32px] items-start leading-[0] left-[24px] not-italic p-[32px] rounded-[32px] top-[6352px] w-[765px]" data-name="Note">
        <div className="flex flex-col justify-center relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">
          <p className="leading-[36px]">Visual balance in the button with icon</p>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#413d41] text-[16px] w-[min-content]">
          <p className="leading-[24px]">{`An icon on a button adds visual weight to the button; that's why we adjust the margins to ensure that the button appears balanced and visually appealing by reducing the margin on the side of the icon.`}</p>
        </div>
      </div>
      <div className="absolute bg-[#f4f2f4] content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[32px] items-start leading-[0] left-[calc(42.86%+14.14px)] not-italic p-[32px] rounded-[32px] top-[6352px] w-[764px]" data-name="Note">
        <div className="flex flex-col justify-center relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">
          <p className="leading-[36px]">Additional spacing under the icon</p>
        </div>
        <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#413d41] text-[16px] w-[min-content]">
          <p className="leading-[24px]">{`The icon's height is much smaller than the height of the text field, so we added additional height for the icon frame to align the size of the icon and the text visually.`}</p>
        </div>
      </div>
      <AnatomyExample11 />
      <AnatomyExample24 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[20px] top-[4638px] tracking-[-0.1px] w-[733px]">
        <p className="leading-[28px]">Use Desktop / Button / B1 text style for M size buttons, and Desktop / Button / B2 - for S size buttons. Use Key colors / Primary / Primary:700★ as a main color - for filled CTA buttons.</p>
      </div>
      <Anatomy2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[24px] not-italic text-[#0a030a] text-[20px] top-[6650px] tracking-[-0.1px] w-[733px]">
        <p className="leading-[28px]">We use 32 corner radius for buttons.</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-white relative size-full" data-name="Button">
      <Types />
      <DosAndDonts />
      <UsageRules />
      <div className="absolute h-[472px] left-0 top-[-10px] w-[1915px]" data-name="Header">
        <div className="absolute h-[390px] left-0 top-[82px] w-[1864px]" data-name="Exclude">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1864 390">
            <path d={svgPaths.p3da12080} fill="var(--fill-0, #F6E4FC)" id="Exclude" />
          </svg>
        </div>
        <HeadlineTabs />
        <Navigation />
        <div className="absolute h-[24px] left-[48px] top-[34px] w-[172px]" data-name="Care Solace Logo">
          <div className="absolute flex inset-[3.97%_52.41%_8.23%_35.99%] items-center justify-center">
            <div className="flex-none h-[16.855px] rotate-[-50.34deg] w-[31.645px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0051 10.1271">
                  <path d={svgPaths.p28328800} fill="var(--fill-0, #7A007A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-[27.5%_65.21%_0_0]" data-name="care">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.8313 17.4">
              <g id="care">
                <path d={svgPaths.p3ff71900} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p17c72500} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p248b6c72} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p3d9c9700} fill="var(--fill-0, #7A007A)" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[3.02%_0.31%_0_48.29%]" data-name="solace">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.4183 23.2755">
              <g id="solace">
                <path d={svgPaths.p2532102} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p395ac80} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p8989300} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p187d5700} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p234fb140} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p2556ed80} fill="var(--fill-0, #7A007A)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-[408px] right-0 top-[calc(50%-32px)] w-[534px]" data-name="Vector / 03">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 534 408">
            <path d={svgPaths.p3735a000} fill="var(--fill-0, white)" id="Vector / 03" opacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[11578px] left-[calc(85.71%+3.29px)] pointer-events-none top-[446px]">
        <Navigation1 />
      </div>
      <Overview />
      <div className="absolute border-[#e8e5e8] border-l border-r border-solid border-t bottom-[532px] h-[184px] left-[calc(42.86%+1.14px)] rounded-tr-[24px] w-[777px]" data-name="Next section">
        <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] left-[223px] not-italic text-[#575257] text-[16px] top-[75px] w-[325px]">Technical components of all types of buttons for desktop version</p>
        <div className="absolute h-[120px] left-[31px] top-[31px] w-[160px]" data-name="Icon">
          <div className="absolute bg-[#fbf2fe] h-[120px] left-0 rounded-[20px] top-0 w-[160px]" />
          <Frame25 />
        </div>
        <div className="absolute left-[726px] size-[40px] top-[31px]" data-name="icon / chevron">
          <div className="absolute inset-[21.59%_30.07%_21.59%_38.4%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6125 22.725">
              <path d={svgPaths.p34c2ba00} fill="var(--fill-0, #7A007A)" id="icon" />
            </svg>
          </div>
        </div>
        <Headline />
      </div>
      <div className="absolute bg-[#f9f8f9] bottom-0 h-[532px] left-0 w-[1864px]" data-name="Footer">
        <div className="absolute h-[32px] left-[24px] top-[48px] w-[224px]" data-name="Logo">
          <div className="absolute inset-[28.93%_64.29%_0_0]" data-name="care">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.9976 22.7413">
              <g id="care">
                <path d={svgPaths.p1a2e7d00} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p325172f0} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p55c5c80} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p37183980} fill="var(--fill-0, #7A007A)" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[0_0_0_47.25%]" data-name="solace">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.156 32">
              <g id="solace">
                <path d={svgPaths.pfd6ff00} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p26d98380} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p157cd200} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p10f3d800} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p65ff400} fill="var(--fill-0, #7A007A)" />
                <path d={svgPaths.p3acd21c0} fill="var(--fill-0, #7A007A)" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[26.78%_53.29%_25.42%_35.92%]" data-name="Vector 1 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1772 15.2964">
              <path clipRule="evenodd" d={svgPaths.p23d5b900} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="Vector 1 (Stroke)" />
            </svg>
          </div>
        </div>
        <Atoms />
        <Atoms1 />
        <Molecules />
        <Organisms />
        <Others />
        <Atoms2 />
        <Atoms3 />
        <Molecules1 />
        <Organisms1 />
        <Others1 />
      </div>
      <Anatomy1 />
    </div>
  );
}