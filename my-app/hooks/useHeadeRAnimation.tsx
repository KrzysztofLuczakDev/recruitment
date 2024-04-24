"use client"
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface HeaderAnimationProps {
  el: React.RefObject<HTMLDivElement>;
  content: React.RefObject<HTMLDivElement>;
  image: React.RefObject<HTMLDivElement>;
  heading: React.RefObject<HTMLHeadingElement>;
}

export const useHeaderAnimations = ({ el, content, image, heading }: HeaderAnimationProps): void => {
  useLayoutEffect(() => {
    if (!el.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { duration: 1.5, ease: "expo.out" } })
        .fromTo(image.current, { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)", autoAlpha: 0 }, { autoAlpha: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
        .from(content.current, { autoAlpha: 0, x: -100, delay: -1 })
        .from(heading.current, { autoAlpha: 0, y: 50, delay: -1 });

      gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none reverse",
        }
      }).to([heading.current, image.current!.firstChild as ChildNode], {
        y: (i: number) => i === 0 ? '-25%' : '10%',
        ease: "none",
      });
    }, el.current);

    return () => ctx.revert();
  }, [el, content, image, heading]);
}
