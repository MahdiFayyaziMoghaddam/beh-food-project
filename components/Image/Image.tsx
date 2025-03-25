import React, { ReactNode } from "react";

interface IImage {
  className?: string;
  src: string;
  alt?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Image({
  src,
  alt,
  className,
  children,
  onClick = () => null,
}: IImage) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden select-none ${className}`}
      onClick={onClick}
    >
      {children}
      <img
        className="size-full object-cover"
        src={src}
        alt={alt}
        draggable={false}
      />
    </div>
  );
}
