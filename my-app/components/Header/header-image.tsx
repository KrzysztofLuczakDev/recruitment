import Image from "next/image";

interface HeaderImageProps { headerImageRef: React.RefObject<HTMLDivElement>; }

export const HeaderImage: React.FC<HeaderImageProps> = ({ headerImageRef }) => {
  return (
    <div ref={headerImageRef} className="relative col-span-3 overflow-hidden">
          <Image
            src="/image.webp"
            alt="image"
            width={800}
            height={800}
            className="object-cover"
            priority={true}
          />
        </div>
  );
};