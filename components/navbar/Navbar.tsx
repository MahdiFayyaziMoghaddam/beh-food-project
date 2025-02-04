"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[75px] border-b-[0.2px] shadow-[2px_2px_10px_0px_#0000000D] fixed top-0 z-50 bg-white">
        <div className="flex justify-center items-center w-[157px] h-[36px] select-none">
          <span className="h-full mr-[2px] text-[24px] font-vazir-400">
            BEH
          </span>
          <Image
            src="images/icon.svg"
            width={36}
            height={36}
            alt="logo"
            onDragStart={(e) => e.preventDefault()}
          />
          <span className=" h-full text-primary ml-[2px] text-[24px] font-vazir-700">
            FOOD
          </span>
        </div>
      </div>
    </>
  );
}

//box-shadow: 2px_2px_10px_0px_#0000000D;
