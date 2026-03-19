import svgPaths from "./svg-7heqi5z9rg";

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start left-[31px] not-italic top-[27px] w-[601px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Text field</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#797479] text-[16px] w-[601px]">
        <p className="leading-[24px]">The text field is used when the expected user input is a single line of text. The text field can enable/disable leading or trailing icons and a label. There are two statuses of text input, normal and error.</p>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Primary() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[378px] left-[24px] rounded-[16px] top-[1050px] w-[765px]" data-name="Primary">
      <Text />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[31px] top-[251px] w-[470px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextField1 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Text area</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">The text area is a design element that provides a multi-line input area for users to enter more extended amounts of text or information, such as comments and descriptions. It supports all the same interactive states and functionality as text input. Unlike a text field, a text area cannot enable/disable icons.</p>
      </div>
    </div>
  );
}

function TextZone() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone />
    </div>
  );
}

function Secondary() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[calc(42.86%+14.14px)] px-[32px] py-[28px] rounded-[16px] top-[1050px] w-[764px]" data-name="Secondary">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text1 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[469px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextBox />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
    </div>
  );
}

function Types() {
  return (
    <div className="absolute contents left-[24px] top-[850px]" data-name="Types">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[878px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Types</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[24px] top-[978px] tracking-[-0.12px] w-[995px]">
        <p className="leading-[32px]">The type of text field used should reflect the length of the content you expect the user to enter. The default text input is for short, one-line content, whereas the text area is for longer, multi-line entries.</p>
      </div>
      <Primary />
      <Secondary />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start left-[31px] not-italic top-[31px] w-[338px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Default</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">{`The text field is used when the expected user input is a single line of text. `}</p>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Primary1() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[358px] left-[24px] rounded-[16px] top-[1664px] w-[502px]" data-name="Primary">
      <Text2 />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[31px] top-[255px] w-[438px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextField2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start left-[31px] not-italic top-[31px] w-[437px]" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Hint</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">The gint message can display instructions on how to use text field. Hint messages are displayed below the text field as supporting text.</p>
      </div>
    </div>
  );
}

function TextField3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Primary2() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[358px] left-[calc(28.57%+17.43px)] rounded-[16px] top-[1664px] w-[501px]" data-name="Primary">
      <Text3 />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[31px] top-[231px] w-[437px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextField3 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[36px] relative shrink-0 text-[#0a030a] text-[28px] whitespace-nowrap">Error</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#797479] text-[16px] w-[min-content]">
        <p className="leading-[24px]">Error states are visual representations used to communicate the status of a component. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.</p>
      </div>
    </div>
  );
}

function TextField4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextField4 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Error</p>
    </div>
  );
}

function Primary3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[calc(57.14%+9.86px)] p-[32px] rounded-[16px] top-[1664px] w-[501px]" data-name="Primary">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text4 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <Frame39 />
      </div>
    </div>
  );
}

function Specifications() {
  return (
    <div className="absolute contents left-[24px] top-[1568px]" data-name="Specifications">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[1596px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Specifications</p>
      </div>
      <Primary1 />
      <Primary2 />
      <Primary3 />
    </div>
  );
}

function TextField5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Search</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute border border-[rgba(13,133,58,0.5)] border-solid h-[262px] left-[24px] rounded-[24px] top-[7984px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Checkmark Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
            <path d={svgPaths.p323cac00} fill="var(--fill-0, #0D853A)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%-0.5px)] top-[119px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Search</p>
        <TextField5 />
      </div>
    </div>
  );
}

function TextField6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Search</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute border border-[rgba(211,0,35,0.5)] border-solid h-[262px] left-[calc(42.86%+13.14px)] rounded-[24px] top-[7984px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Close">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 35.8333">
            <path clipRule="evenodd" d={svgPaths.p20a4e6c0} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%-0.5px)] top-[119px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Search for people, groups, chat or something where you can find people of interests</p>
        <TextField6 />
      </div>
    </div>
  );
}

function Example() {
  return (
    <div className="absolute contents left-[24px] top-[7912px]" data-name="Example">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[7928px] tracking-[-0.12px] w-[733px]">
        <p className="leading-[32px]">{`Label text shouldn't be truncated. Keep it short, clear, and fully visible.`}</p>
      </div>
      <Card />
      <Card1 />
    </div>
  );
}

function TextField7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Search</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute border border-[rgba(211,0,35,0.5)] border-solid h-[319px] left-[calc(42.86%+14.14px)] rounded-[24px] top-[8398px] w-[764px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Close">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 35.8333">
            <path clipRule="evenodd" d={svgPaths.p20a4e6c0} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[187px] px-[22px] py-[8px] rounded-[32px] top-[205px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Submit</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[179px] top-[150px] w-[404px]" data-name="Desktop / Text field">
        <TextField7 />
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[186px] top-[134px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[120px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 1">
                <line id="Line 45" stroke="var(--stroke-0, #D30023)" x2="120" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Search</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute border border-[rgba(13,133,58,0.5)] border-solid h-[319px] left-[24px] rounded-[24px] top-[8398px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Checkmark Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
            <path d={svgPaths.p323cac00} fill="var(--fill-0, #0D853A)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#7a007a] content-stretch flex items-center justify-center left-[180px] px-[22px] py-[8px] rounded-[32px] top-[206px]" data-name="Desktop / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">Submit</p>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%+0.5px)] top-[119px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Search</p>
        <TextField8 />
      </div>
      <div className="absolute flex h-[140px] items-center justify-center left-[179.49px] top-[118px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[140px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 1">
                <line id="Line 46" stroke="var(--stroke-0, #0D853A)" x2="140" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Example1() {
  return (
    <div className="absolute contents left-[24px] top-[8294px]" data-name="Example">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[8326px] tracking-[-0.12px] w-[733px]">
        <p className="leading-[32px]">Text fields and/or text areas should vertically align to the grid and with other type elements on the page.</p>
      </div>
      <Card2 />
      <Card3 />
    </div>
  );
}

function TextField9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0a030a] text-[16px]">login@example.com</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0a030a] text-[16px]">login@example.com</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Password</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField12() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Password</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute border border-[rgba(211,0,35,0.5)] border-solid h-[364px] left-[calc(42.86%+14.14px)] rounded-[24px] top-[8869px] w-[764px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Close">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 35.8333">
            <path clipRule="evenodd" d={svgPaths.p20a4e6c0} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[113px] top-[119px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Login</p>
        <TextField9 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[409px] top-[119px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Login</p>
        <TextField10 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Invalid login</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[113px] top-[221px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Password</p>
        <TextField11 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[409px] top-[245px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Password</p>
        <TextField12 />
      </div>
    </div>
  );
}

function TextField13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0a030a] text-[16px]">login@example.com</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#0a030a] text-[16px]">login@example.com</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField15() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Password</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Password</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute border border-[rgba(13,133,58,0.5)] border-solid h-[364px] left-[24px] rounded-[24px] top-[8869px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Checkmark Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
            <path d={svgPaths.p323cac00} fill="var(--fill-0, #0D853A)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[114px] top-[119px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Login</p>
        <TextField13 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[410px] top-[119px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Login</p>
        <TextField14 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Invalid login</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[114px] top-[221px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Password</p>
        <TextField15 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[410px] top-[221px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Password</p>
        <TextField16 />
      </div>
    </div>
  );
}

function Example2() {
  return (
    <div className="absolute contents left-[24px] top-[8765px]" data-name="Example">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[8797px] tracking-[-0.12px] w-[733px]">
        <p className="leading-[32px]">{`Don't place error text under helper text, as their appearance will shift content.`}</p>
      </div>
      <Card4 />
      <Card5 />
    </div>
  );
}

function TextField17() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Search</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute border border-[rgba(13,133,58,0.5)] border-solid h-[262px] left-[24px] rounded-[24px] top-[9445px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Checkmark Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
            <path d={svgPaths.p323cac00} fill="var(--fill-0, #0D853A)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[calc(50%+0.5px)] top-[119px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Search</p>
        <TextField17 />
      </div>
    </div>
  );
}

function TextField18() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Search</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute border border-[rgba(211,0,35,0.5)] border-solid h-[262px] left-[calc(42.86%+13.14px)] rounded-[24px] top-[9445px] w-[765px]" data-name="Card">
      <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="Icon / Close">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 35.8333">
            <path clipRule="evenodd" d={svgPaths.p20a4e6c0} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[180px] top-[119px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Search</p>
        <TextField18 />
      </div>
    </div>
  );
}

function Example3() {
  return (
    <div className="absolute contents left-[24px] top-[9373px]" data-name="Example">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[9389px] tracking-[-0.12px] w-[733px]">
        <p className="leading-[32px]">We don’t use both leading and trailing icons on one text input.</p>
      </div>
      <Card6 />
      <Card7 />
    </div>
  );
}

function DosAndDonts() {
  return (
    <div className="absolute contents left-[24px] top-[7816px]" data-name="Do's and don'ts">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[7844px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Do’s and don’ts</p>
      </div>
      <Example />
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
}

function Group() {
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

function Frame9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">min 8 px</p>
    </div>
  );
}

function TextField19() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">First name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField20() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Last name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField21() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Phone</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group35 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px() {
  return (
    <div className="absolute h-[8px] left-[71px] opacity-30 overflow-clip top-[95px] w-[212px]" data-name="8 px">
      <MaskGroup />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group36 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px1() {
  return (
    <div className="absolute h-[8px] left-[71px] opacity-30 overflow-clip top-[173px] w-[212px]" data-name="8 px">
      <MaskGroup1 />
    </div>
  );
}

function Screen1() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[316px] left-[31px] overflow-clip rounded-[8px] top-[183px] w-[542px]" data-name="Screen 2">
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
      <div className="absolute h-[20px] left-[20px] top-[93px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group />
          </div>
        </div>
        <Frame9 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[71px] top-[25px] w-[212px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">First name</p>
        <TextField19 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[71px] top-[103px] w-[212px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Last name</p>
        <TextField20 />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[71px] top-[181px] w-[212px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Phone</p>
        <TextField21 />
      </div>
      <Component8Px />
      <Component8Px1 />
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[532px] left-[calc(42.86%+14.14px)] rounded-[24px] top-[6588px] w-[764px]" data-name="Card">
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[31px] not-italic text-[#0a030a] text-[28px] top-[31px] w-[700px]">Vertical space between text fields</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[31px] not-italic text-[#797479] text-[18px] top-[112px] w-[427px]">
        <p className="leading-[26px]">The minimum space between two text fields is 8 px.</p>
      </div>
      <Screen1 />
    </div>
  );
}

function TextField22() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Type case number here</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField23() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Last 4 digits of phone number</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[23px] top-[23px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="Desktop / Text field">
        <TextField22 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="Desktop / Text field">
        <TextField23 />
      </div>
    </div>
  );
}

function TextField24() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Type case number here</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField25() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Last 4 digits of phone number</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[23px] top-[143px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Case number</p>
        <TextField24 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Last 4 digits of phone number</p>
        <TextField25 />
      </div>
    </div>
  );
}

function Screen2() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[316px] left-[31px] overflow-clip rounded-[8px] top-[183px] w-[542px]" data-name="Screen 3">
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
      <Frame70 />
      <Frame69 />
    </div>
  );
}

function Card9() {
  return (
    <div className="absolute border border-[#e8e5e8] border-solid h-[532px] left-[24px] rounded-[24px] top-[7144px] w-[765px]" data-name="Card">
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[31px] not-italic text-[#0a030a] text-[28px] top-[31px] w-[701px]">Label boolean</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[31px] not-italic text-[#797479] text-[18px] top-[112px] w-[671px]">
        <p className="leading-[26px]">The text field can be used both with a label and without.</p>
      </div>
      <Screen2 />
    </div>
  );
}

function TextField26() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">First name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Screen3() {
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
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-1/2 top-1/2 w-[212px]" data-name="Desktop / Text field">
          <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">First name</p>
          <TextField26 />
          <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Please enter your first name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(42.86%+14.14px)] p-[32px] rounded-[24px] top-[7144px] w-[765px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#0a030a] text-[28px] w-[min-content]">Hint boolean</p>
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#797479] text-[18px] w-[671px]">
        <p className="leading-[26px]">We use hint to provide additional context and guidance to the user on what information is expected to be entered in the field.</p>
      </div>
      <Screen3 />
    </div>
  );
}

function TextField27() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">First name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField28() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Last name</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextField29() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Phone</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Screen() {
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
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[24px] w-[212px]" data-name="Desktop / Text field">
          <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">First name</p>
          <TextField27 />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[110px] w-[212px]" data-name="Desktop / Text field">
          <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Last name</p>
          <TextField28 />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[196px] w-[212px]" data-name="Desktop / Text field">
          <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Phone</p>
          <TextField29 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Card11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] p-[32px] rounded-[24px] top-[6588px] w-[765px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] min-w-full not-italic relative shrink-0 text-[#0a030a] text-[28px] w-[min-content]">Enter information</p>
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#797479] text-[18px] w-[542px]">
        <p className="leading-[26px]">Use a text field when someone needs to enter text into a design, such as filling in contact or payment information.</p>
      </div>
      <Screen />
    </div>
  );
}

function UsageRules() {
  return (
    <div className="absolute contents left-[24px] top-[6420px]" data-name="Usage rules">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#413d41] text-[24px] top-[6532px] tracking-[-0.12px] w-[1027px]">
        <p className="leading-[32px]">We need to keep one logic within the design using text fields.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[6448px] tracking-[-0.48px] w-[233px]">
        <p className="leading-[56px]">Usage rules</p>
      </div>
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[42px] w-[112px]">
      <div className="absolute bg-[#f2d4fb] h-[36px] left-0 rounded-[8px] top-0 w-[112px]" />
      <div className="absolute bg-[#de8aed] h-[12px] left-[20px] rounded-[40px] top-[12px] w-[74px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#fbf2fe] content-stretch flex items-start pb-[3px] pt-px px-[8px] relative rounded-[24px] shrink-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a007a] text-[12px] whitespace-nowrap">Components / Mobile</p>
    </div>
  );
}

function Headline() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-end right-[225px] top-[31px]" data-name="Headline">
      <Frame10 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#270027] text-[28px] text-right whitespace-nowrap">Button</p>
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
        <p className="leading-[96px]">Text field</p>
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
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#413d41] text-[18px] whitespace-nowrap">Text field</p>
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
        <p className="leading-[32px]">Text field</p>
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

function Specifications1() {
  return (
    <button className="content-stretch cursor-pointer flex items-start px-[12px] py-[4px] relative rounded-[32px] shrink-0" data-name="Specifications">
      <div className="flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575257] text-[18px] text-left whitespace-nowrap">
        <p className="leading-[26px]">Specifications</p>
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
      <Specifications1 />
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
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[56px] text-[24px] top-[662px] tracking-[-0.12px] w-[995px]">
        <p className="leading-[32px]">A text field is an input area where users can enter text or numeric data. It is commonly used for various purposes, such as search boxes, login forms, comment sections, etc. Use a text field when someone needs to enter text into a UI, such as filling in contact or payment information.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[56px] text-[48px] top-[546px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[56px]">Overview</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[36px] left-[24px] top-[42px] w-[112px]" data-name="Frame">
      <div className="absolute bg-[#f2d4fb] h-[36px] left-0 rounded-[8px] top-0 w-[112px]" />
      <div className="absolute bg-[#de8aed] h-[12px] left-[8px] rounded-[16px] top-[12px] w-[61px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#fbf2fe] content-stretch flex items-start pb-[3px] pt-px px-[8px] relative rounded-[24px] shrink-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7a007a] text-[12px] whitespace-nowrap">Components / Desktop</p>
    </div>
  );
}

function Headline1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[224px] top-[31px]" data-name="Headline">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#270027] text-[28px] whitespace-nowrap">Text fields</p>
      <Frame11 />
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

function TextZone1() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox1() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">4</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">6</p>
    </div>
  );
}

function AnatonyExample() {
  return (
    <div className="absolute contents left-[833px] top-[72px]" data-name="Anatony example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[916px] top-[153px] w-[404px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextBox1 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
      <div className="absolute h-[22px] left-[914px] top-[153px] w-[37px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute h-[16px] left-[916px] top-[279px] w-[21px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute h-[52px] left-[930px] top-[102px] w-[3px]">
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
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[916px] rounded-[55px] top-[72px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame36 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[991px] rounded-[55px] top-[315px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame37 />
      </div>
      <div className="absolute h-[72px] left-[924px] top-[191px] w-[388px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute flex h-[52px] items-center justify-center left-[1005px] top-[262px] w-[3px]">
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
      <div className="absolute flex h-[3px] items-center justify-center left-[866px] top-[226px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute flex h-[3px] items-center justify-center left-[863px] top-[286px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[836px] rounded-[55px] top-[212px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame38 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[833px] rounded-[55px] top-[272px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame40 />
      </div>
    </div>
  );
}

function TextField30() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">6</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">5</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">4</p>
    </div>
  );
}

function AnatomyExample() {
  return (
    <div className="absolute contents left-[234px] top-[96px]" data-name="Anatomy example">
      <div className="absolute h-[22px] left-[315px] top-[177px] w-[37px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute h-[16px] left-[315px] top-[255px] w-[21px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[315px] top-[177px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextField30 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
      <div className="absolute left-[323px] size-[20px] top-[217px]">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute left-[691px] size-[20px] top-[217px]">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[264px] top-[225px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute flex h-[3px] items-center justify-center left-[264px] top-[262px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[234px] rounded-[55px] top-[211px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame41 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[234px] rounded-[55px] top-[248px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame42 />
      </div>
      <div className="absolute h-[24px] left-[349px] top-[215px] w-[334px]" data-name="Stroke">
        <div aria-hidden="true" className="absolute border border-[#0a030a] border-dashed inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute flex h-[52px] items-center justify-center left-[341px] top-[237px] w-[3px]">
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
      <div className="absolute h-[52px] left-[329px] top-[126px] w-[3px]">
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
      <div className="absolute h-[52px] left-[699px] top-[166px] w-[3px]">
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
      <div className="absolute flex h-[52px] items-center justify-center left-[430px] top-[238px] w-[3px]">
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
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[327px] rounded-[55px] top-[290px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame43 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[416px] rounded-[55px] top-[291px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame44 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[685px] rounded-[55px] top-[136px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame45 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-[315px] rounded-[55px] top-[96px] w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame46 />
      </div>
    </div>
  );
}

function Anatomy2() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[417px] left-[24px] rounded-[48px] top-[2382px] w-[1553px]" data-name="Anatomy">
      <AnatonyExample />
      <AnatomyExample />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame47 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Container</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame48 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Leading Icon</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame49 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Input text</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">4</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame50 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Label text</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">5</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame51 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Trailing Icon</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[4px] relative rounded-[49px] shrink-0 w-[30px]">
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] text-center whitespace-nowrap">6</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[55px] shrink-0 w-[30px]" data-name="Number">
        <div aria-hidden="true" className="absolute border-2 border-[#fbf2fe] border-solid inset-[-2px] pointer-events-none rounded-[57px]" />
        <Frame52 />
      </div>
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#0a030a] text-[20px] tracking-[-0.1px] whitespace-nowrap">Hint / error</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-end left-[56px] rounded-[48px] top-[2839px]">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function TextField31() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-1.25%_-3.13%_-1.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 16.5">
          <g id="Group 250">
            <path d="M0.5 15L40.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
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

function Frame12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">40 px</p>
    </div>
  );
}

function Group2() {
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

function Frame13() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">22 px</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Max 800 px</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-0.12%_-3.13%_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 405 16.5">
          <g id="Group 250">
            <path d="M0.5 15H404.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M404.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M202.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="202.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
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

function Frame15() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function Group5() {
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

function Frame16() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">20 px</p>
    </div>
  );
}

function Frame17() {
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

function AnatomyExample1() {
  return (
    <div className="absolute contents left-[312px] top-[204px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[363px] top-[243px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextField31 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
      <div className="absolute h-[40px] left-[312px] top-[273px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group1 />
          </div>
        </div>
        <Frame12 />
      </div>
      <div className="absolute h-[22px] left-[312px] top-[243px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group2 />
          </div>
        </div>
        <Frame13 />
      </div>
      <div className="absolute h-[35px] left-[359px] top-[204px] w-[412px]" data-name="Spacing">
        <Frame14 />
        <Group3 />
      </div>
      <div className="absolute h-[16px] left-[312px] top-[321px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group4 />
          </div>
        </div>
        <Frame15 />
      </div>
      <div className="absolute h-[22px] left-[771px] top-[283px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group5 />
          </div>
        </div>
        <Frame16 />
      </div>
      <div className="absolute h-[35px] left-[735px] top-[317px] w-[28px]" data-name="Spacing">
        <Frame17 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField32() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextField32 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Error</p>
    </div>
  );
}

function Group7() {
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

function Frame18() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">24 px</p>
    </div>
  );
}

function Group8() {
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

function Frame19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function Group9() {
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

function Frame20() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-0.71%_-3.13%_-0.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 16.5">
          <g id="Group 250">
            <path d="M0.5 15L70.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M70.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M35.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="35.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">70 px</p>
    </div>
  );
}

function AnatomyExample2() {
  return (
    <div className="absolute contents left-[312px] top-[497px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[363px] top-[497px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <Frame53 />
      </div>
      <div className="absolute h-[24px] left-[771px] top-[535px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group7 />
          </div>
        </div>
        <Frame18 />
      </div>
      <div className="absolute h-[16px] left-[312px] top-[571px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group8 />
          </div>
        </div>
        <Frame19 />
      </div>
      <div className="absolute h-[16px] left-[312px] top-[571px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group9 />
          </div>
        </div>
        <Frame20 />
      </div>
      <div className="absolute h-[70px] left-[312px] top-[497px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group10 />
          </div>
        </div>
        <Frame21 />
      </div>
    </div>
  );
}

function TextZone2() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox2() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone2 />
    </div>
  );
}

function Group11() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-0.57%_-3.13%_-0.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 16.5">
          <g id="Group 250">
            <path d="M0.5 15L88.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M88.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M44.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="44.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">max 240 px</p>
    </div>
  );
}

function Group12() {
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

function Frame23() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">22 px</p>
    </div>
  );
}

function Group13() {
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

function Frame24() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">22 px</p>
    </div>
  );
}

function Group14() {
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

function Frame25() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-0">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Max 800 px</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[19px] w-[20px]">
      <div className="absolute inset-[0_-0.12%_-3.13%_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 405 16.5">
          <g id="Group 250">
            <path d="M0.5 15H404.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M404.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M202.5 15V3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="202.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AnatomyExample3() {
  return (
    <div className="absolute contents left-[1026px] top-[188px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[1077px] top-[227px] w-[404px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextBox2 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
      <div className="absolute h-[88px] left-[1026px] top-[257px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group11 />
          </div>
        </div>
        <Frame22 />
      </div>
      <div className="absolute h-[22px] left-[1026px] top-[227px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group12 />
          </div>
        </div>
        <Frame23 />
      </div>
      <div className="absolute h-[22px] left-[1026px] top-[227px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group13 />
          </div>
        </div>
        <Frame24 />
      </div>
      <div className="absolute h-[16px] left-[1026px] top-[353px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group14 />
          </div>
        </div>
        <Frame25 />
      </div>
      <div className="absolute h-[35px] left-[1073px] top-[188px] w-[412px]" data-name="Spacing">
        <Frame26 />
        <Group15 />
      </div>
    </div>
  );
}

function TextZone3() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox3() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone3 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextBox3 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Error</p>
    </div>
  );
}

function Group16() {
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

function Frame27() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">22 px</p>
    </div>
  );
}

function Group17() {
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

function Frame28() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">16 px</p>
    </div>
  );
}

function AnatomyExample4() {
  return (
    <div className="absolute contents left-[1024px] top-[473px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[1075px] top-[473px] w-[404px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <Frame54 />
      </div>
      <div className="absolute h-[22px] left-[1024px] top-[473px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group16 />
          </div>
        </div>
        <Frame27 />
      </div>
      <div className="absolute h-[16px] left-[1024px] top-[595px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group17 />
          </div>
        </div>
        <Frame28 />
      </div>
    </div>
  );
}

function Anatomy3() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[683px] left-[24px] rounded-[48px] top-[3297px] w-[1553px]" data-name="Anatomy">
      <AnatomyExample1 />
      <AnatomyExample2 />
      <AnatomyExample3 />
      <AnatomyExample4 />
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[363px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Text field</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[260px] whitespace-nowrap">Normal status</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[524px] whitespace-nowrap">Error status</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[1077px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Text area</p>
      <div className="absolute h-0 left-0 top-[421px] w-[1553.003px]">
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
      <div className="absolute flex h-[682px] items-center justify-center left-[272px] top-px w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[682px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682 1">
                <line id="Line 43" stroke="var(--stroke-0, #E8E5E8)" x2="682" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[682px] items-center justify-center left-[922px] top-px w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[682px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682 1">
                <line id="Line 43" stroke="var(--stroke-0, #E8E5E8)" x2="682" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField33() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group18() {
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

function Frame29() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">10 px</p>
    </div>
  );
}

function Group19() {
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

function Frame30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">10 px</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5.56%_-3.13%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.5">
          <g id="Group 250">
            <path d="M0.5 15L9.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
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

function Frame32() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5.56%_-3.13%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.5">
          <g id="Group 250">
            <path d="M0.5 15L9.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
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

function Group37() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group37 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px2() {
  return (
    <div className="absolute h-[8px] left-[422px] opacity-30 overflow-clip top-[218px] w-[376px]" data-name="8 px">
      <MaskGroup2 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group38 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px3() {
  return (
    <div className="h-[8px] opacity-30 overflow-clip relative w-[40px]" data-name="8 px">
      <MaskGroup3 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group39 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px4() {
  return (
    <div className="h-[8px] opacity-30 overflow-clip relative w-[40px]" data-name="8 px">
      <MaskGroup4 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group40 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px5() {
  return (
    <div className="absolute h-[8px] left-[422px] opacity-30 overflow-clip top-[250px] w-[376px]" data-name="8 px">
      <MaskGroup5 />
    </div>
  );
}

function AnatomyExample5() {
  return (
    <div className="absolute contents left-[390px] top-[188px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[394px] top-[188px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextField33 />
      </div>
      <div className="absolute h-[10px] left-[802px] top-[218px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group18 />
          </div>
        </div>
        <Frame29 />
      </div>
      <div className="absolute h-[10px] left-[802px] top-[248px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group19 />
          </div>
        </div>
        <Frame30 />
      </div>
      <div className="absolute h-[35px] left-[390px] top-[262px] w-[17px]" data-name="Spacing">
        <Frame31 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group20 />
          </div>
        </div>
      </div>
      <div className="absolute h-[35px] left-[418px] top-[262px] w-[17px]" data-name="Spacing">
        <Frame32 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group21 />
          </div>
        </div>
      </div>
      <Component8Px2 />
      <div className="absolute flex h-[40px] items-center justify-center left-[422px] top-[218px] w-[8px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component8Px3 />
        </div>
      </div>
      <div className="absolute flex h-[40px] items-center justify-center left-[394px] top-[218px] w-[8px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component8Px4 />
        </div>
      </div>
      <Component8Px5 />
    </div>
  );
}

function TextField34() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Text field</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextField34 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Error</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-10%_-3.13%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 16.5">
          <g id="Group 250">
            <path d="M0.5 15L5.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M2.5 15L2.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="2.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">4 px</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-4.55%_-3.13%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16.5">
          <g id="Group 250">
            <path d="M0.5 15H11.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M11.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 15L5.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="5.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group24() {
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

function Frame35() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group25() {
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

function Frame56() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group41 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px6() {
  return (
    <div className="absolute h-[8px] left-[395px] opacity-30 overflow-clip top-[479px] w-[404px]" data-name="8 px">
      <MaskGroup6 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group42 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px7() {
  return (
    <div className="absolute h-[8px] left-[395px] opacity-30 overflow-clip top-[511px] w-[404px]" data-name="8 px">
      <MaskGroup7 />
    </div>
  );
}

function AnatomyExample6() {
  return (
    <div className="absolute contents left-[344px] top-[449px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[395px] top-[449px] w-[404px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <Frame55 />
      </div>
      <div className="absolute h-[5px] left-[344px] top-[519px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group22 />
          </div>
        </div>
        <Frame33 />
      </div>
      <div className="absolute h-[11px] left-[344px] top-[468px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group23 />
          </div>
        </div>
        <Frame34 />
      </div>
      <div className="absolute h-[10px] left-[803px] top-[479px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group24 />
          </div>
        </div>
        <Frame35 />
      </div>
      <div className="absolute h-[10px] left-[803px] top-[509px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group25 />
          </div>
        </div>
        <Frame56 />
      </div>
      <Component8Px6 />
      <Component8Px7 />
    </div>
  );
}

function TextZone4() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox4() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone4 />
    </div>
  );
}

function Group26() {
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

function Frame57() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8px</p>
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

function Frame58() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5.56%_-3.13%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.5">
          <g id="Group 250">
            <path d="M0.5 15L9.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
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

function Frame60() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5.56%_-3.13%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.5">
          <g id="Group 250">
            <path d="M0.5 15L9.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
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

function Group43() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup8() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group43 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px8() {
  return (
    <div className="h-[9px] opacity-30 overflow-clip relative w-[88px]" data-name="8 px">
      <MaskGroup8 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup9() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group44 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px9() {
  return (
    <div className="h-[9px] opacity-30 overflow-clip relative w-[88px]" data-name="8 px">
      <MaskGroup9 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup10() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group45 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px10() {
  return (
    <div className="absolute h-[9px] left-[1026px] opacity-30 overflow-clip top-[218px] w-[404px]" data-name="8 px">
      <MaskGroup10 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup11() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group46 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px11() {
  return (
    <div className="absolute h-[9px] left-[1026px] opacity-30 overflow-clip top-[297px] w-[404px]" data-name="8 px">
      <MaskGroup11 />
    </div>
  );
}

function AnatomyExample7() {
  return (
    <div className="absolute contents left-[1022px] top-[188px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[1026px] top-[188px] w-[404px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextBox4 />
      </div>
      <div className="absolute h-[10px] left-[1434px] top-[218px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group26 />
          </div>
        </div>
        <Frame57 />
      </div>
      <div className="absolute h-[10px] left-[1434px] top-[296px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group27 />
          </div>
        </div>
        <Frame58 />
      </div>
      <div className="absolute h-[35px] left-[1022px] top-[310px] w-[17px]" data-name="Spacing">
        <Frame59 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group28 />
          </div>
        </div>
      </div>
      <div className="absolute h-[35px] left-[1413px] top-[310px] w-[17px]" data-name="Spacing">
        <Frame60 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group29 />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[88px] items-center justify-center left-[1026px] top-[218px] w-[9px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component8Px8 />
        </div>
      </div>
      <div className="absolute flex h-[88px] items-center justify-center left-[1421px] top-[218px] w-[9px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component8Px9 />
        </div>
      </div>
      <Component8Px10 />
      <Component8Px11 />
    </div>
  );
}

function Group30() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-10%_-3.13%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 16.5">
          <g id="Group 250">
            <path d="M0.5 15L5.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M2.5 15L2.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="2.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">4 px</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-4.55%_-3.13%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16.5">
          <g id="Group 250">
            <path d="M0.5 15H11.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M11.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M5.5 15L5.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="5.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center right-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] text-center tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-4.55%_-3.13%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16.5">
          <g id="Group 250">
            <path d="M0.5 15H11.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M11.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M6.5 15L6.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="6.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-4.55%_-3.13%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16.5">
          <g id="Group 250">
            <path d="M0.5 15H11.5" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M11.5 14V16" id="Line 3" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M0.5 14L0.5 16" id="Line 4" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <path d="M6.5 15L6.5 3" id="Line 5" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
            <circle cx="6.5" cy="1.5" fill="var(--fill-0, #0A030A)" id="Ellipse 27" r="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[19px] rounded-[4px] top-1/2">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 rounded-[4px] top-[19px]">
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">8 px</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="h-[16px] relative w-[20px]">
      <div className="absolute inset-[0_-5.56%_-3.13%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.5">
          <g id="Group 250">
            <path d="M0.5 15L9.5 15" id="Line 2" stroke="var(--stroke-0, #0A030A)" strokeLinecap="round" />
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

function TextZone5() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox5() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone5 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextBox5 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Error</p>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup12() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group47 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px12() {
  return (
    <div className="h-[9px] opacity-30 overflow-clip relative w-[88px]" data-name="8 px">
      <MaskGroup12 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup13() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group48 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px13() {
  return (
    <div className="h-[9px] opacity-30 overflow-clip relative w-[88px]" data-name="8 px">
      <MaskGroup13 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup14() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group49 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px14() {
  return (
    <div className="absolute h-[9px] left-[1026px] opacity-30 overflow-clip top-[480px] w-[404px]" data-name="8 px">
      <MaskGroup14 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]">
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-265px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-206.88px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-148.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-90.64px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[-32.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[25.59px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[83.71px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[141.83px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[199.95px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[258.07px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[316.19px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[374.31px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[432.46px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[490.58px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[548.7px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[606.82px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[664.94px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[723.06px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[781.17px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[839.29px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[897.41px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[955.53px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1013.65px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1071.77px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1129.89px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1188.01px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1246.13px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1304.25px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1362.37px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1420.48px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1478.6px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1536.72px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
      <div className="absolute flex h-[635.795px] items-center justify-center left-[1594.84px] top-[-478px] w-[868.158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[14.04deg] scale-y-78 skew-x-[-39.08deg]">
          <div className="bg-[#c4c4c4] h-[1046.601px] w-[31.902px]" />
        </div>
      </div>
    </div>
  );
}

function MaskGroup15() {
  return (
    <div className="absolute contents left-[-265px] top-[-478px]" data-name="Mask group">
      <Group50 />
      <div className="absolute h-[20.638px] left-[-129.38px] top-[-7.84px] w-[3262.78px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3262.78 20.6376">
          <path d={svgPaths.p3bb96000} fill="var(--fill-0, #3198F6)" id="Rectangle 451" />
        </svg>
      </div>
    </div>
  );
}

function Component8Px15() {
  return (
    <div className="absolute h-[9px] left-[1026px] opacity-30 overflow-clip top-[559px] w-[404px]" data-name="8 px">
      <MaskGroup15 />
    </div>
  );
}

function AnatomyExample8() {
  return (
    <div className="absolute contents left-[975px] top-[450px]" data-name="Anatomy example">
      <div className="absolute h-[5px] left-[975px] top-[568px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group30 />
          </div>
        </div>
        <Frame61 />
      </div>
      <div className="absolute h-[11px] left-[975px] top-[469px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-[31px] top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <Group31 />
          </div>
        </div>
        <Frame62 />
      </div>
      <div className="absolute h-[11px] left-[1434px] top-[480px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group32 />
          </div>
        </div>
        <Frame63 />
      </div>
      <div className="absolute h-[11px] left-[1434px] top-[557px] w-[47px]" data-name="Spacing">
        <div className="absolute flex h-[20px] items-center justify-center left-0 top-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <Group33 />
          </div>
        </div>
        <Frame64 />
      </div>
      <div className="absolute h-[35px] left-[1417px] top-[571px] w-[17px]" data-name="Spacing">
        <Frame65 />
        <div className="absolute flex h-[16px] items-center justify-center left-[4px] top-0 w-[20px]">
          <div className="flex-none rotate-180">
            <Group34 />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[1026px] top-[450px] w-[404px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <Frame66 />
      </div>
      <div className="absolute flex h-[88px] items-center justify-center left-[1026px] top-[480px] w-[9px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component8Px12 />
        </div>
      </div>
      <div className="absolute flex h-[88px] items-center justify-center left-[1421px] top-[480px] w-[9px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component8Px13 />
        </div>
      </div>
      <Component8Px14 />
      <Component8Px15 />
    </div>
  );
}

function Anatomy4() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[678px] left-[24px] rounded-[48px] top-[4216px] w-[1553px]" data-name="Anatomy">
      <AnatomyExample5 />
      <AnatomyExample6 />
      <AnatomyExample7 />
      <AnatomyExample8 />
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[394px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Text field</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[188px] whitespace-nowrap">Normal status</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[72px] not-italic text-[#0a030a] text-[28px] top-[449px] whitespace-nowrap">Error status</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[1026px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Text area</p>
      <div className="absolute h-0 left-0 top-[398px] w-[1553.003px]">
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
      <div className="absolute flex h-[677px] items-center justify-center left-[290px] top-px w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[677px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
                <line id="Line 43" stroke="var(--stroke-0, #E8E5E8)" x2="677" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[677px] items-center justify-center left-[912px] top-px w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[677px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 677 1">
                <line id="Line 43" stroke="var(--stroke-0, #E8E5E8)" x2="677" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField35() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AnatomyExample9() {
  return (
    <div className="absolute contents left-[258px] top-[188px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[258px] top-[216px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextField35 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
      <div className="absolute h-[28px] left-[320px] top-[234px] w-[221px]">
        <div className="absolute inset-[-1.79%_0_0_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221.5 28.5">
            <path d={svgPaths.p184ef760} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[20px] left-[274px] top-[200px] w-[267px]">
        <div className="absolute inset-[-2.5%_0_0_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267.5 20.5">
            <path d={svgPaths.pe9f1200} id="Vector 9" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[56px] items-center justify-center left-[282px] top-[274px] w-[259px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[56px] relative w-[259px]">
            <div className="absolute inset-[-0.89%_0_0_-0.19%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259.5 56.5">
                <path d={svgPaths.p9915140} id="Vector 7" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[56px] items-center justify-center left-[266px] top-[308px] w-[275px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[56px] relative w-[275px]">
            <div className="absolute inset-[-0.89%_0_0_-0.18%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.5 56.5">
                <path d={svgPaths.p1acf8a00} id="Vector 10" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[319px] top-[273px] w-[222px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[24px] relative w-[222px]">
            <div className="absolute inset-[-2.08%_0_0_-0.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.5 24.5">
                <path d={svgPaths.p35d9ec80} id="Vector 8" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[496px] top-[265px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[252px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Neutral colors / Neutral 500</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[316px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Icon color - Key colors / Primary / Primary:700★</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[348px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Hint color - Neutral colors / Neutral 400</p>
      </div>
      <div className="absolute left-[318px] size-[4px] top-[259px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[272px] size-[4px] top-[218px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[317px] size-[4px] top-[270px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[280px] size-[4px] top-[272px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[264px] size-[4px] top-[306px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[284px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Body / P1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[220px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Text color - Neutral colors / Neutral 300</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[188px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Label color - Neutral colors / Neutral 825</p>
      </div>
    </div>
  );
}

function TextZone6() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox6() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone6 />
    </div>
  );
}

function AnatomyExample10() {
  return (
    <div className="absolute contents left-[907px] top-[188px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[907px] top-[216px] w-[240px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <TextBox6 />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#575257] text-[12px] tracking-[0.06px] w-full">Hint</p>
      </div>
      <div className="absolute h-[28px] left-[969px] top-[234px] w-[221px]">
        <div className="absolute inset-[-1.79%_0_0_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221.5 28.5">
            <path d={svgPaths.p184ef760} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[20px] left-[923px] top-[200px] w-[267px]">
        <div className="absolute inset-[-2.5%_0_0_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267.5 20.5">
            <path d={svgPaths.pe9f1200} id="Vector 9" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[968px] top-[273px] w-[222px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[24px] relative w-[222px]">
            <div className="absolute inset-[-2.08%_0_0_-0.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.5 24.5">
                <path d={svgPaths.p35d9ec80} id="Vector 8" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[6px] left-[918px] top-[338px] w-[272px]">
        <div className="absolute inset-[-8.33%_0_0_-0.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272.5 6.5">
            <path d={svgPaths.p3535be07} id="Vector 10" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[1145px] top-[265px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[252px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Neutral colors / Neutral 500</p>
      </div>
      <div className="absolute left-[967px] size-[4px] top-[259px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[921px] size-[4px] top-[218px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[966px] size-[4px] top-[270px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[916px] size-[4px] top-[342px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[284px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Body / P1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[316px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Hint color - Neutral colors / Neutral 400</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[220px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Text color - Neutral colors / Neutral 300</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[188px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Label color - Neutral colors / Neutral 825</p>
      </div>
    </div>
  );
}

function TextField36() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #D30023)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextField36 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Error</p>
    </div>
  );
}

function AnatomyExample11() {
  return (
    <div className="absolute contents left-[258px] top-[480px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[258px] top-[508px] w-[240px]" data-name="Desktop / Text field">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <Frame67 />
      </div>
      <div className="absolute h-[28px] left-[320px] top-[526px] w-[221px]">
        <div className="absolute inset-[-1.79%_0_0_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221.5 28.5">
            <path d={svgPaths.p184ef760} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[20px] left-[274px] top-[492px] w-[267px]">
        <div className="absolute inset-[-2.5%_0_0_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267.5 20.5">
            <path d={svgPaths.pe9f1200} id="Vector 9" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[319px] top-[565px] w-[222px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[24px] relative w-[222px]">
            <div className="absolute inset-[-2.08%_0_0_-0.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.5 24.5">
                <path d={svgPaths.p35d9ec80} id="Vector 8" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[26px] items-center justify-center left-[270px] top-[598px] w-[271px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[26px] relative w-[271px]">
            <div className="absolute inset-[-1.92%_0_0_-0.18%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271.5 26.5">
                <path d={svgPaths.p36809280} id="Vector 10" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[496px] top-[557px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[544px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Semantic colors / Error / Error:500</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[608px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Error color - Semantic colors / Error / Error:500</p>
      </div>
      <div className="absolute left-[318px] size-[4px] top-[551px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[272px] size-[4px] top-[510px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[317px] size-[4px] top-[562px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[268px] size-[4px] top-[595px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[274px] size-[4px] top-[562px]" />
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[576px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Body / P1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[512px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Text color - Neutral colors / Neutral 300</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[540px] px-[16px] py-[6px] rounded-[4px] top-[480px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Label color - Neutral colors / Neutral 825</p>
      </div>
    </div>
  );
}

function TextZone7() {
  return (
    <div className="bg-white h-[88px] relative rounded-[8px] shrink-0 w-full" data-name="Text zone">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative self-stretch" data-name="Text Frame">
            <div className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#aea9ae] text-[16px] whitespace-pre-wrap">
              <p className="mb-0">Text field</p>
              <p className="mb-0">&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d30023] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextBox7() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start relative shrink-0 w-full" data-name="Text box">
      <TextZone7 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextBox7 />
      <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d30023] text-[12px] tracking-[0.06px] w-full">Error</p>
    </div>
  );
}

function AnatomyExample12() {
  return (
    <div className="absolute contents left-[907px] top-[480px]" data-name="Anatomy example">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[907px] top-[508px] w-[240px]" data-name="Desktop / Text area">
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a030a] text-[14px] w-full">Label</p>
        <Frame68 />
      </div>
      <div className="absolute h-[28px] left-[969px] top-[526px] w-[221px]">
        <div className="absolute inset-[-1.79%_0_0_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221.5 28.5">
            <path d={svgPaths.p184ef760} id="Vector 6" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[20px] left-[923px] top-[492px] w-[267px]">
        <div className="absolute inset-[-2.5%_0_0_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267.5 20.5">
            <path d={svgPaths.pe9f1200} id="Vector 9" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[968px] top-[565px] w-[222px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[24px] relative w-[222px]">
            <div className="absolute inset-[-2.08%_0_0_-0.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.5 24.5">
                <path d={svgPaths.p35d9ec80} id="Vector 8" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[12px] left-[922px] top-[622px] w-[268px]">
        <div className="absolute inset-[-4.17%_0_0_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268.5 12.5">
            <path d={svgPaths.p2d647f00} id="Vector 10" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[1145px] top-[557px] w-[52px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
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
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[544px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Stroke color - Semantic colors / Error / Error:500</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[608px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Error color - Semantic colors / Error / Error:500</p>
      </div>
      <div className="absolute left-[967px] size-[4px] top-[551px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[921px] size-[4px] top-[510px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[966px] size-[4px] top-[562px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[920px] size-[4px] top-[632px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse 30" r="1.5" stroke="var(--stroke-0, #0A030A)" />
        </svg>
      </div>
      <div className="absolute left-[923px] size-[4px] top-[562px]" />
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[576px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Font - Desktop / Body / P1</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[512px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Text color - Neutral colors / Neutral 300</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[1189px] px-[16px] py-[6px] rounded-[4px] top-[480px]" data-name="Size">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a030a] text-[12px] tracking-[0.06px] whitespace-nowrap">Label color - Neutral colors / Neutral 825</p>
      </div>
    </div>
  );
}

function Anatom() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[718px] left-[24px] rounded-[48px] top-[5122px] w-[1553px]" data-name="Anatom">
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[258px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Text field</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[46px] not-italic text-[#0a030a] text-[28px] top-[220px] whitespace-nowrap">Normal status</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[46px] not-italic text-[#0a030a] text-[28px] top-[512px] whitespace-nowrap">Error status</p>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[36px] left-[907px] not-italic text-[#0a030a] text-[28px] top-[72px] whitespace-nowrap">Text area</p>
      <div className="absolute h-0 left-0 top-[428px] w-[1553.003px]">
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
      <div className="absolute flex h-[717px] items-center justify-center left-[234px] top-px w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[717px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 717 1">
                <line id="Line 43" stroke="var(--stroke-0, #E8E5E8)" x2="717" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[717px] items-center justify-center left-[863px] top-px w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[717px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 717 1">
                <line id="Line 43" stroke="var(--stroke-0, #E8E5E8)" x2="717" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <AnatomyExample9 />
      <AnatomyExample10 />
      <AnatomyExample11 />
      <AnatomyExample12 />
    </div>
  );
}

function TextField37() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Leading icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Text frame">
            <p className="flex-[1_0_0] font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#797479] text-[16px]">Text field</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Trailing icon">
            <div className="absolute inset-[5.21%_5.22%_5.21%_5.21%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9147 17.9167">
                <path clipRule="evenodd" d={svgPaths.p14802300} fill="var(--fill-0, #7A007A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Anatomy6() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f6e4fc] border border-[#de8aed] border-solid left-[calc(50%-0.5px)] overflow-clip rounded-[173px] size-[160px] top-[72px]" data-name="Anatomy">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[94px] top-[63px] w-[216px]" data-name="Desktop / Text field">
        <TextField37 />
      </div>
      <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[16px] left-[8px] not-italic text-[#270027] text-[12px] top-[46px] tracking-[0.06px] whitespace-nowrap">Corner radius 8</p>
      <div className="absolute left-[81px] size-[60px] top-[52px]">
        <div className="absolute bottom-1/2 left-0 right-1/2 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9839 29.9839">
            <path d={svgPaths.p3343d400} fill="var(--fill-0, #DE8AED)" id="Ellipse 57" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Anatomy5() {
  return (
    <div className="absolute bg-[#fbf2fe] h-[304px] left-[24px] rounded-[32px] top-[6012px] w-[1553px]" data-name="Anatomy">
      <Anatomy6 />
    </div>
  );
}

function Anatomy1() {
  return (
    <div className="absolute contents left-[24px] top-[2162px]" data-name="Anatomy">
      <div className="absolute h-[252px] left-[62.02px] top-[2557px] w-[1498.965px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 378" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[48px] top-[2190px] tracking-[-0.48px] w-[183px]">
        <p className="leading-[56px]">Anatomy</p>
      </div>
      <Anatomy2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[20px] top-[2300px] tracking-[-0.1px] w-[732px]">
        <p className="leading-[28px]">Text entries allow users to enter text into a UI. Providing the correct label and icons for requested data will help users enter information in a valid format and avoid mistakes, making the process as easy and efficient as possible.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[28px] left-[56px] not-italic text-[#0a030a] text-[20px] top-[3117px] tracking-[-0.1px] w-[733px] whitespace-pre-wrap">
        <p className="mb-0">{`The text field's width is determined by the component's width containing the text fields or by using the grid. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`The maximum text field width for desktop is 800 px; the minimum - 250 px. The maximum text field width for mobile is 600 px; the minimum - 340 px. The text field's height is 94 px for desktop and 90 px for mobile, including a label and hint/error.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`The text area's width corresponds to the text field's width. The minimum height for the text box is 240 px (desktop) and 120 px (mobile). The maximum text field width for mobile is 600 px and 800 px for mobile.`}</p>
      </div>
      <Frame5 />
      <Anatomy3 />
      <Anatomy4 />
      <Anatom />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[20px] top-[4148px] tracking-[-0.1px] w-[733px]">
        <p className="leading-[28px]">Horizontal and vertical paddings are 8 px, vertical space between the text box and label is 8 px, and between the text box and an error message is 4 px.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#0a030a] text-[20px] top-[5040px] tracking-[-0.1px] w-[733px]">
        <p className="leading-[28px]">Use Desktop / Body / P1 text style for the text field. Use Key colors / Primary / Primary:700★ as an icon color and Neutral colors / Neutral 300 as a text color for enable state. Use Neutral colors / Neutral 825 color for text in all other states.</p>
      </div>
      <Anatomy5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Sequel_Sans:Book_Disp',sans-serif] justify-center leading-[0] left-[24px] not-italic text-[#0a030a] text-[20px] top-[5958px] tracking-[-0.1px] w-[733px]">
        <p className="leading-[28px]">We use 8 corner radius for text fields and text areas.</p>
      </div>
    </div>
  );
}

export default function TextField() {
  return (
    <div className="bg-white relative size-full" data-name="Text field">
      <Types />
      <Specifications />
      <DosAndDonts />
      <UsageRules />
      <div className="absolute border-[#e8e5e8] border-l border-solid border-t bottom-[532px] h-[184px] left-0 rounded-tl-[24px] w-[800px]" data-name="Prev section">
        <p className="-translate-x-full absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] left-[574px] not-italic text-[#575257] text-[16px] text-right top-[75px] w-[325px]">Technical components of all types of buttons for mobile version</p>
        <div className="absolute h-[120px] left-[606px] top-[31px] w-[160px]" data-name="Icon">
          <div className="absolute bg-[#fbf2fe] h-[120px] left-0 rounded-[20px] top-0 w-[160px]" />
          <Frame1 />
        </div>
        <div className="absolute left-[31px] size-[40px] top-[31px]" data-name="icon / chevron">
          <div className="absolute inset-[21.59%_38.4%_21.59%_30.07%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6125 22.725">
              <path d={svgPaths.p1daf4b00} fill="var(--fill-0, #7A007A)" id="icon" />
            </svg>
          </div>
        </div>
        <Headline />
      </div>
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
      <div className="absolute bottom-0 h-[10117px] left-[calc(85.71%+3.29px)] pointer-events-none top-[446px]">
        <Navigation1 />
      </div>
      <Overview />
      <div className="absolute border-[#e8e5e8] border-r border-solid border-t bottom-[532px] h-[184px] left-[calc(42.86%+1.14px)] rounded-tr-[24px] w-[777px]" data-name="Next section">
        <p className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] leading-[24px] left-[224px] not-italic text-[#575257] text-[16px] top-[75px] w-[325px]">Technical components of all types of text fields for desktop version</p>
        <div className="absolute h-[120px] left-[32px] top-[31px] w-[160px]" data-name="Icon">
          <div className="absolute bg-[#fbf2fe] h-[120px] left-0 rounded-[20px] top-0 w-[160px]" />
          <Frame />
        </div>
        <div className="absolute left-[727px] size-[40px] top-[31px]" data-name="icon / chevron">
          <div className="absolute inset-[21.59%_30.07%_21.59%_38.4%]" data-name="icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6125 22.725">
              <path d={svgPaths.p34c2ba00} fill="var(--fill-0, #7A007A)" id="icon" />
            </svg>
          </div>
        </div>
        <Headline1 />
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