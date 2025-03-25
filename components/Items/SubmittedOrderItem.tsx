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
      className="flex flex-row-reverse justify-between items-end w-full border-[#00000040] border-y-[0.2px] bg-white"
    >
      <div className="flex flex-col flex-nowrap justify-between items-end w-full p-2 gap-2 max-xl:p-[6px] max-xl:gap-[6px]">
        <p className="w-full text-[16px] text-right font-vazir-600 max-xl:text-[14px]">
          {order.name}
        </p>
        <div className="flex flex-row-reverse justify-start items-baseline w-full">
          <span className="text-[14px] font-vazir-500 text-center max-xl:text-[12px]">
            {spreadNumber(order.offerPrice || order.price)}
          </span>
          <span className="text-[14px] font-vazir-400 select-none text-center mr-[3px] max-xl:text-[12px]">
            تومان
          </span>
        </div>
      </div>
      <p className="mb-[6px] ml-4 font-vazir-500 text-[16px] max-xl:text-[12px]">
        {order.quantity}
      </p>
    </div>
  );
}
