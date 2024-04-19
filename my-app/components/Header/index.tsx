import { HeaderButton } from "@/components/Header/header-button";
import { HeaderHeadline } from "@/components/Header/header-headline";
import { HeaderImage } from "@/components/Header/header-image";
import { HeaderText } from "@/components/Header/header-text";
import { HeaderContent } from "./header-content";

export default function Header() {
  return (
    <div className="h-[800px] w-full relative p-20">
      <div className="grid grid-cols-5 h-full">
        <HeaderContent/>
        <HeaderImage />
      </div>
      <HeaderHeadline />
    </div>
  );
}
