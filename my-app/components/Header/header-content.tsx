import { HeaderText } from "@/components/Header/header-text";
import { HeaderButton } from "@/components/Header/header-button";

interface HeaderContentProps { headerContentRef: React.RefObject<HTMLDivElement>;}

export const HeaderContent: React.FC<HeaderContentProps> = ({ headerContentRef }) => {
  return (
    <div ref={headerContentRef} className="flex flex-col mx-auto mt-48 gap-8 col-span-2">
      <HeaderText />
      <HeaderButton text="Work with us" />
    </div>
  );
};