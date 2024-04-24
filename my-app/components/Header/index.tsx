"use client";
import React, { useRef } from "react";
import { HeaderHeading } from "@/components/Header/header-heading";
import { HeaderImage } from "@/components/Header/header-image";
import { useHeaderAnimations } from "@/hooks/useHeadeRAnimation";
import { HeaderContent } from "@/components/Header/header-content";


export default function Header() {
  const el = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  useHeaderAnimations({ el, content, image, heading });

  return (
    <section ref={el} className="h-[800px] w-full relative p-20">
      <div className="grid grid-cols-5 h-full">
        <HeaderContent headerContentRef={content}/>
        <HeaderImage headerImageRef={image}/>
      </div>
      <HeaderHeading headerHeadingRef={heading}/>
    </section>
  );
}
