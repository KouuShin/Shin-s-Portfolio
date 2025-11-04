function Label() {
  return (
    <div
      className="bg-[#b9ff66] box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[7px] py-0 relative rounded-[7px] shrink-0"
      data-name="Label"
    >
      <div className="font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[40px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Typography</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div
      className="bg-[#f3f3f3] box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[7px] py-0 relative rounded-[7px] shrink-0"
      data-name="Label"
    >
      <div className="font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[40px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Desktop</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[100px] p-0 top-20"
      data-name="Heading"
    >
      <Label />
      <Label1 />
    </div>
  );
}

function Label2() {
  return (
    <div
      className="bg-[#b9ff66] box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[7px] py-0 relative rounded-[7px] shrink-0"
      data-name="Label"
    >
      <div className="font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[40px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Colors</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[658px] p-0 top-20"
      data-name="Heading"
    >
      <Label2 />
    </div>
  );
}

function Label3() {
  return (
    <div
      className="bg-[#b9ff66] box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[7px] py-0 relative rounded-[7px] shrink-0"
      data-name="Label"
    >
      <div className="font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[40px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Illustrations</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[1074px] p-0 top-20"
      data-name="Heading"
    >
      <Label3 />
    </div>
  );
}

function Label4() {
  return (
    <div
      className="bg-[#b9ff66] box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[7px] py-0 relative rounded-[7px] shrink-0"
      data-name="Label"
    >
      <div className="font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[40px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Typography</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div
      className="bg-[#f3f3f3] box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[7px] py-0 relative rounded-[7px] shrink-0"
      data-name="Label"
    >
      <div className="font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[40px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Mobile</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[100px] p-0 top-[766px]"
      data-name="Heading"
    >
      <Label4 />
      <Label5 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[#191a23] box-border content-stretch flex flex-row gap-2.5 items-start justify-start left-[100px] px-[35px] py-5 rounded-[14px] top-[1348px]"
      data-name="Button"
    >
      <a
        className="[white-space-collapse:collapse] block font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap"
        href="https://fonts.google.com/specimen/Space+Grotesk"
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[28px] whitespace-pre">
          You can find font here
        </p>
      </a>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[#191a23] box-border content-stretch flex flex-row gap-2.5 items-start justify-start left-[1081px] px-[35px] py-5 rounded-[14px] top-[309px]"
      data-name="Button"
    >
      <a
        className="[white-space-collapse:collapse] block font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap"
        href="https://icons8.com/illustrations/author/5iGu3XwNjbk5"
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[28px] whitespace-pre">
          Illustrations by Igor Kapustin
        </p>
      </a>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute bg-[#191a23] box-border content-stretch flex flex-row gap-2.5 items-start justify-start left-[1081px] px-[35px] py-5 rounded-[14px] top-[407px]"
      data-name="Button"
    >
      <a
        className="[white-space-collapse:collapse] block font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap"
        href="https://www.freepik.com/free-vector/pharmaceutical-marketing-abstract-concept-vector-illustration-pharmaceutical-digital-agency-medicine-marketing-strategy-drugs-advertising-medical-equipment-market-promotion-abstract-metaphor_24070982.htm"
      >
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block cursor-pointer leading-[28px] whitespace-pre">
          Image by vectorjuice on Freepik
        </p>
      </a>
    </div>
  );
}

export default function Style() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Style">
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[60px] text-left text-nowrap top-[309px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H1</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[43px] text-left text-nowrap top-[928px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H1</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[40px] text-left text-nowrap top-[424px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H2</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[36px] text-left text-nowrap top-[1026px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H2</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[30px] text-left text-nowrap top-[513px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H3</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[26px] text-left text-nowrap top-[1115px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H3</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[20px] text-left text-nowrap top-[589px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H4</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] left-[100px] text-[#000000] text-[18px] text-left text-nowrap top-[653px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">p</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] left-[100px] text-[#000000] text-[16px] text-left text-nowrap top-[1257px]">
        <p className="leading-[24px] whitespace-pre">
          <span className="text-[#b9ff66]">p</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <div className="absolute font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] left-[100px] text-[#000000] text-[18px] text-left text-nowrap top-[1191px]">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#b9ff66]">H4</span>
          <span>{` Positivus`}</span>
        </p>
      </div>
      <Heading />
      <Heading1 />
      <Heading2 />
      <Heading3 />
      <Button />
      <div className="absolute bg-[#b9ff66] left-[658px] size-[200px] top-[309px]" />
      <div className="absolute bg-[#191a23] left-[658px] size-[200px] top-[519px]" />
      <div className="absolute bg-[#f3f3f3] left-[658px] size-[200px] top-[729px]" />
      <div className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] left-[686px] text-[#000000] text-[40px] text-left text-nowrap top-96">
        <p className="block leading-[normal] whitespace-pre">B9FF66</p>
      </div>
      <div className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] left-[692px] text-[#ffffff] text-[40px] text-left text-nowrap top-[594px]">
        <p className="block leading-[normal] whitespace-pre">191A23</p>
      </div>
      <div className="absolute font-['Space_Grotesk:Regular',_sans-serif] font-normal leading-[0] left-[689px] text-[#000000] text-[40px] text-left text-nowrap top-[804px]">
        <p className="block leading-[normal] whitespace-pre">F3F3F3</p>
      </div>
      <Button1 />
      <Button2 />
    </div>
  );
}