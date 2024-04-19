"use client";
import Image from "next/image";
import { HeaderText } from "@/components/Header/header-text";
import { HeaderButton } from "@/components/Header/header-button";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const onLoadTL = useRef<any>(null);
  const scrollTL = useRef<any>(null);
  const el = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!el.current) return;

    const ctx = gsap.context(() => {
      onLoadTL.current = gsap
        .timeline({ defaults: { duration: 1.5, ease: "expo.out" } })
        .fromTo(
          image.current,
          { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)", autoAlpha: 0 },
          {
            autoAlpha: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }
        )
        .from(content.current, { autoAlpha: 0, x: -100, delay: -1 })
        .from(headline.current, { autoAlpha: 0, y: 50, delay: -1 });
      scrollTL.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        })
        .to([headline.current, image.current!.firstChild], {
          y: (i) => i === 0 ? '-25%' : '10%',  
          ease: "none",
        });
    }, el.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={el} className="h-[800px] w-full relative p-20">
      <div className="grid grid-cols-5 h-full">
        <div
          ref={content}
          className="flex flex-col mx-auto mt-48 gap-8 col-span-2"
        >
          <HeaderText />
          <HeaderButton text="Work with us" />
        </div>
        <div ref={image} className="relative col-span-3 overflow-hidden">
          <Image
            src="/image.webp"
            alt="image"
            width={800}
            height={800}
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
      <h1
        ref={headline}
        className="absolute bottom-7 left-16 text-[224px] leading-[268.8px] font-semibold text-[#393939]"
      >
        Panowie
      </h1>
    </section>
  );
}
