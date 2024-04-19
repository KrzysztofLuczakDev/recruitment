import Image from "next/image";

export const HeaderImage = () => {
  return (
    <div className="relative col-span-3 bg-blue-400">
      <Image src="/image.webp" fill={true} alt="image" className="object-cover"/>
    </div>
  );
};
