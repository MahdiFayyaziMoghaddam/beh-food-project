import { useOrderListContext } from "@/contexts/OrderListContext";
import { TOrderItem } from "@/types/orderItem";
import spreadNumber from "@/utils/spreadNumber";
import React from "react";

interface ISubmittedOrderItem {
  order: TOrderItem;
}

export default function SubmittedOrderItem({ order }: ISubmittedOrderItem) {
  return (
    <div
      key={order.id}
      className="flex flex-row-reverse justify-between items-end w-full h-[72px] border-[#00000040] border-y-[0.2px] bg-white"
    >
      <div className="flex flex-col flex-nowrap justify-between items-end w-[281px] h-[56px] my-2 mr-[10px]">
        <p className="w-[281px] h-6 text-[16px] text-right font-vazir-600">
          {order.name}
        </p>
        <div className="flex flex-row-reverse justify-start min-w-[80px] h-[22px]">
          <span className="text-[14px] font-vazir-500 text-center leading-[26px]">
            {spreadNumber(order.offerPrice || order.price)}
          </span>
          <span className="text-[14px] font-vazir-400 select-none text-center mr-[2px] leading-[26px]">
            تومان
          </span>
        </div>
      </div>
      <p className="mb-[7px] ml-4">{order.quantity}</p>
    </div>
  );
}
