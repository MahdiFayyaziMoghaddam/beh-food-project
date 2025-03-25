"use client";

import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[75px] max-xl:h-[60px] border-b-[0.2px] border-black/20 shadow-[2px_2px_10px_0px_#0000000D] fixed top-0 z-50 bg-white">
        <Logo />
      </div>
    </>
  );
}

//box-shadow: 2px_2px_10px_0px_#0000000D;
