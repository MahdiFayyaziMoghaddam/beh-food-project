"use client";
import spreadNumber from "@/utils/spreadNumber";
import React from "react";
import SubmittedOrderItem from "../Items/SubmittedOrderItem";
import { useOrderListContext } from "@/contexts/OrderListContext";
import { TOrderItem } from "@/types/orderItem";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";

export default function SubmittedOrderList() {
  const { orderList } = useOrderListContext();
  const { state } = useHomeStatesContext();

  return (
    <div className="flex flex-col flex-nowrap items-center justify-start w-full border-[0.2px] border-[#00000040] rounded-[10px] bg-white overflow-hidden">
      <p className="font-vazir-600 text-[20px] w-full text-center py-4 select-none max-xl:text-[18px]">
        لـیـست سـفـارشـات
      </p>

      <div className="w-full min-h-[212px] max-xl:min-h-[176px]">
        {orderList?.map((cart: TOrderItem) => (
          <SubmittedOrderItem key={cart.id} order={cart} />
        ))}
      </div>

      <div className="flex flex-nowrap justify-between items-center w-full h-[72px] border-t-1 border-black/40 max-xl:h-[60px]">
        <div className="flex flex-row-reverse justify-start min-w-auto h-[30px] ml-[28px]">
          <span className="text-[18px] font-vazir-500 text-center leading-[30px] max-xl:text-[15px]">
            {spreadNumber(
              orderList.reduce((acc, item) => {
                if (item.offerPrice !== 0) {
                  return acc + item.offerPrice * item.quantity;
                } else {
                  return acc + item.price * item.quantity;
                }
              }, 0)
            )}
          </span>
          <span className="text-[14px] font-vazir-400 select-none text-center mr-[2px] leading-[30px] max-xl:text-[11px]">
            تومان
          </span>
        </div>
        <p className="h-[30px] w-auto text-[18px] font-vazir-400 mr-[28px] max-xl:text-[15px]">
          هزینه کل
        </p>
      </div>

      <textarea
        placeholder="-"
        disabled
        value={state.comment}
        className="placeholder:text-[#49454F]/70 text-[16px] font-vazir-500 resize-none min-h-[100px] outline-none px-4 py-2 leading-6 border-[0.2px] border-[#79747E] rounded-[8px] mt-2 max-xl:text-[13px] max-xl:mt-0 max-xl:min-h-[76px] max-xl:pt-2 field-sizing-content mb-3"
        style={{ width: "calc(100% - 24px)", direction: "rtl" }}
      ></textarea>
    </div>
  );
}
