import { HeaderButton } from "@/components/Header/header-button";
import { HeaderText } from "@/components/Header/header-text";

export const HeaderContent = () => {
  return (
    <div className="flex flex-col mx-auto mt-48 gap-8 col-span-2">
      <HeaderText />
      <HeaderButton text="Work with us" />
    </div>
  );
};
