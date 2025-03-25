"use client";

import { useOrderListContext } from "@/contexts/OrderListContext";
import React from "react";
import OrderItem from "../Items/OrderItem";
import { TOrderItem } from "@/types/orderItem";
import spreadNumber from "@/utils/spreadNumber";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";

export default function PreSubmittedOrderList() {
  const { orderList } = useOrderListContext();
  const { state, dispatch } = useHomeStatesContext();

  return (
    <>
      <div className="flex flex-col flex-nowrap items-center justify-start w-full border-[0.2px] border-[#00000040] rounded-[10px] bg-white overflow-hidden">
        <p className="font-vazir-600 text-[20px] w-full text-center py-4 select-none max-xl:text-[18px]">
          لـیـست سـفـارشـات
        </p>

        <div className="w-full h-[212px] overflow-auto max-xl:h-[176px]">
          {orderList?.map((cart: TOrderItem) => (
            <OrderItem key={cart.id} order={cart} />
          ))}
        </div>

        <div className="flex flex-nowrap justify-between items-center w-full h-[72px] max-xl:h-[60px]">
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
          placeholder="توضیحات سفارش..."
          value={state.comment}
          onChange={(e) =>
            dispatch({ type: "SET_COMMENT", payload: e.target.value })
          }
          className="placeholder:text-[#49454F]/70 text-[16px] font-vazir-500 resize-none h-[108px] outline-none px-4 py-2 leading-6 border-[0.2px] border-[#79747E] rounded-[8px] mt-2 max-xl:text-[13px] max-xl:mt-0 max-xl:h-[84px] max-xl:pt-2"
          style={{ width: "calc(100% - 24px)", direction: "rtl" }}
        ></textarea>

        <button
          className="bg-primary text-white text-[16px] font-vazir-700 py-[18px] mb-3 rounded-[5px] mt-4 max-xl:text-[14px] max-xl:py-[14px] cursor-pointer"
          style={{ width: "calc(100% - 24px)" }}
          onClick={() => {
            dispatch({ type: "SUBMIT_ORDER_LIST" });
            if (typeof window !== "undefined") {
              if (
                +getComputedStyle(document.documentElement).width.replace(
                  "px",
                  ""
                ) >= 850
              ) {
                window.scrollTo(0, 0);
              } else {
                window.scrollTo(0, 99000);
              }
            }
          }}
        >
          ثــبــت سـفـارش
        </button>
      </div>
    </>
  );
}
