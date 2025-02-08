import React from "react";
import Image from "../Image/Image";

export default function EmptyOrderStatus() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - 93px)" }}
    >
      <Image
        className="w-[158px] h-[118px]"
        src={"./images/no-order.svg"}
        alt="no-order"
      />
      <p
        className="text-[#BEBEBE] text-[20px] font-vazir-400 h-[30px] leading-[30px] mt-6"
        style={{ direction: "rtl" }}
      >
        سبد سفارش شما خالیه!
      </p>
    </div>
  );
}
