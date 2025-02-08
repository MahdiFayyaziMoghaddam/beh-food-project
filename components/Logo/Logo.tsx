import React from "react";
import Image from "../Image/Image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center w-[157px] h-[36px] select-none">
      <span className="h-full mr-[2px] text-[24px] font-vazir-400">BEH</span>
      <Image className="size-[36px]" src="./images/icon.svg" alt="logo" />
      <span className=" h-full text-primary ml-[2px] text-[24px] font-vazir-700">
        FOOD
      </span>
    </div>
  );
}
