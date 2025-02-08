"use client";

import { useOrderListContext } from "@/contexts/OrderListContext";
import React from "react";
import OrderItem from "../Items/OrderItem";
import { TOrderItem } from "@/types/orderItem";
import spreadNumber from "@/utils/spreadNumber";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";

export default function OrderList() {
  const { orderList } = useOrderListContext();
  const { state, dispatch } = useHomeStatesContext();

  return (
    <>
      <div className="flex flex-col flex-nowrap items-center justify-start w-full min-h-[572px] border-[0.2px] border-[#00000040] rounded-[10px] bg-white">
        <p className="font-vazir-600 text-[20px] w-[159px] mb-0 h-[30px] leading-[30px] mt-[25px] select-none text-center">
          لـیـست سـفـارشـات
        </p>

        <div className="w-full max-h-[216px] min-h-[216px] mt-[23px] overflow-auto">
          {orderList?.map((cart: TOrderItem) => (
            <OrderItem key={cart.id} order={cart} />
          ))}
        </div>

        <div className="flex flex-nowrap justify-between items-center w-full h-[72px] border-y-[0.2px] border-[#00000040]">
          <div className="flex flex-row-reverse justify-start min-w-auto h-[30px] ml-[28px]">
            <span className="text-[18px] font-vazir-500 text-center leading-[30px]">
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
            <span className="text-[14px] font-vazir-400 select-none text-center mr-[2px] leading-[30px]">
              تومان
            </span>
          </div>
          <p className="h-[30px] w-auto text-[18px] font-vazir-400 mr-[28px]">
            هزینه کل
          </p>
        </div>

        <textarea
          placeholder="توضیحات سفارش..."
          value={state.comment}
          onChange={(e) => dispatch({type: 'SET_COMMENT', payload: e.target.value})}
          className="placeholder:text-[#49454F] text-[16px] font-vazir-500 resize-none h-[100px] outline-none px-4 pt-4 leading-6 border-[0.2px] border-[#79747E] rounded-[8px] mt-4"
          style={{ width: "calc(100% - 24px)", direction: "rtl" }}
        ></textarea>

        <button
          className="bg-primary text-white text-[16px] font-vazir-700 mb-0 py-[18px] px-[126px] rounded-[5px] mt-4"
          style={{ width: "calc(100% - 24px)" }}
          onClick={() => dispatch({type: 'SUBMIT_ORDER_LIST'})}
        >
          ثــبــت سـفـارش
        </button>
      </div>
    </>
  );
}
