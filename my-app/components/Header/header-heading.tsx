interface HeaderHeadingProps { headerHeadingRef: React.RefObject<HTMLHeadingElement>; }

export const HeaderHeading: React.FC<HeaderHeadingProps> = ({ headerHeadingRef }) => {
  return (
    <h1
    ref={headerHeadingRef}
    className="absolute bottom-7 left-16 text-[224px] leading-[268.8px] font-semibold text-[#393939]"
  >
    Panowie
  </h1>
  );
};