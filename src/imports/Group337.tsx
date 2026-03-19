import svgPaths from "./svg-t3tk4rwrlh";

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

function Group1() {
  return (
    <div className="absolute contents left-[26px] top-[16px]">
      <p className="absolute font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[24px] left-[27px] not-italic text-[#7a007a] text-[16px] top-[17px] tracking-[0.08px] w-[335px]">You are requesting 2 providers to contact you directly. This requires your authorization to share your request information.</p>
    </div>
  );
}

function MobileCard() {
  return (
    <div className="absolute bg-[#fbf2fe] border border-[#e8e5e8] border-solid h-[111px] left-[12px] rounded-[16px] top-[232px] w-[409px]" data-name="Mobile / Card">
      <Group1 />
      <button className="absolute block cursor-pointer left-[14px] overflow-clip size-[24px] top-[10px]" data-name="Controller / Checkbox" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[12px] top-[232px]">
      <MobileCard />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[12px] top-[232px]">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[12px] top-[232px]">
      <Group2 />
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
      <div className="absolute left-[30px] overflow-clip size-[37px] top-[170px]" data-name="icon / verified-octagon">
        <div className="absolute inset-[5.26%_11.08%_5.17%_11.04%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8138 33.1419">
            <g id="icon">
              <path d={svgPaths.p31c60100} fill="var(--fill-0, #7A007A)" />
              <path d={svgPaths.p19eca4c0} fill="var(--fill-0, #7A007A)" />
              <path d={svgPaths.p10c8d000} fill="var(--fill-0, #7A007A)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[34px] left-[83px] not-italic right-[13.83px] text-[#0a030a] text-[28px] top-[173px] tracking-[-0.14px]">HIPAA Authorization</p>
      <p className="absolute font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] left-[27px] not-italic text-[15px] text-black top-[360px] tracking-[0.0375px] whitespace-nowrap">Authorization to Use and Disclose Health Information</p>
      <p className="absolute font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] left-[58px] not-italic text-[16px] text-black top-[794px] tracking-[0.04px] w-[323px]">I have read and understand the authorization terms above.</p>
      <p className="absolute font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] left-[58px] not-italic text-[16px] text-black top-[867px] tracking-[0.04px] w-[323px]">I authorize Care Solace to share my health information with the selected provider(s) for the purposes described above.</p>
      <div className="absolute font-['Sequel_Sans:Book_Disp',sans-serif] h-[368px] leading-[0] left-[27px] not-italic text-[0px] text-[14px] text-black top-[401px] w-[377px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[22px] not-italic">What information will be shared</span>
          <span className="leading-[22px]">
            {`: Your name, contact information, case details, treatment preferences, insurance information, and any special requests you've specified.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0">
          <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[22px] not-italic">Who will receive this information:</span>
          <span className="leading-[22px]">
            {` The healthcare providers you've selected to contact you directly.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0">
          <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[22px] not-italic">Purpose:</span>
          <span className="leading-[22px]">
            {` To enable selected providers to contact you directly regarding scheduling appointments and discussing your care needs.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="mb-0">
          <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[22px] not-italic">Your rights:</span>
          <span className="leading-[22px]">
            {` You may revoke this authorization at any time by contacting Care Solace. Revocation will not affect information already shared.`}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p>
          <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[22px] not-italic">Expiration:</span>
          <span className="leading-[22px]">{` This authorization expires 90 days from today or when your case is closed, whichever comes first.`}</span>
        </p>
      </div>
      <Group3 />
      <div className="absolute left-[calc(75%+51px)] size-[24px] top-[361px]" data-name="icon / chevron">
        <div className="absolute inset-[38.4%_21.59%_30.07%_21.59%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.635 7.5675">
            <path d={svgPaths.p2aff272} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Case() {
  return (
    <div className="absolute content-stretch flex items-start left-[58px] top-[110px] w-[140px]" data-name="Case">
      <p className="flex-[1_0_0] font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#7a007a] text-[18px] tracking-[0.18px]">Back</p>
    </div>
  );
}

function Case1() {
  return (
    <div className="absolute content-stretch flex items-start left-[58px] top-[110px] w-[140px]" data-name="Case">
      <p className="flex-[1_0_0] font-['Sequel_Sans:Medium_Disp',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#7a007a] text-[18px] tracking-[0.18px]">Back</p>
    </div>
  );
}

export default function Group4() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white content-stretch flex h-[48px] items-start left-0 pt-[12px] top-[100px] w-[428px]" data-name="tab bar(linear)">
        <div aria-hidden="true" className="absolute border-[#e8e5e8] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Resources />
      <Case />
      <div className="absolute left-[23px] size-[24px] top-[114px]" data-name="icon / arrow">
        <div className="absolute inset-[21.59%_11.46%_21.58%_11.47%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4975 13.6375">
            <path d={svgPaths.p3708f080} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
      <Case1 />
      <div className="absolute left-[23px] size-[24px] top-[114px]" data-name="icon / arrow">
        <div className="absolute inset-[21.59%_11.46%_21.58%_11.47%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4975 13.6375">
            <path d={svgPaths.p3708f080} fill="var(--fill-0, #7A007A)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#d4add4] content-stretch flex items-center justify-center left-[170px] px-[18px] py-[8px] rounded-[32px] top-[965px] w-[241px]" data-name="Mobile / Button">
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.04px] whitespace-nowrap">{`Authorize & Request Calls`}</p>
      </div>
      <div className="absolute content-stretch cursor-pointer flex items-center justify-center left-[26px] px-[18px] py-[8px] rounded-[32px] top-[965px] w-[135px]" data-name="Mobile / Button">
        <div aria-hidden="true" className="absolute border border-[#e8e5e8] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <p className="font-['Sequel_Sans:Roman_Disp',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7a007a] text-[16px] tracking-[0.04px] whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}