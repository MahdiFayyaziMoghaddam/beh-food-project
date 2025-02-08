import React, { ReactNode } from "react";

interface IImage {
  className?: string;
  src: string;
  alt?: string;
  children?: ReactNode
}

export default function Image({ src, alt, className,children }: IImage) {
  return (
    <div className={`flex items-center justify-center overflow-hidden select-none ${className}`}>
      {children}
      <img className="size-full object-cover" src={src} alt={alt} draggable={false} />
    </div>
  );
}
