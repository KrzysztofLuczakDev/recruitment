"use client";

import React, { useRef, MouseEvent } from 'react';

interface HeaderButtonProps {
  text: string;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({ text }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      btn.style.setProperty('--x', `${x}px`);
      btn.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <button
      className="text-white w-[136px] h-[40px] py-3 px-6 rounded-[12px] text-sm font-semibold leading-[14px]"
      ref={btnRef} 
      onMouseMove={handleMouseMove}
    >
      {text}
    </button>
  );
};
