import spreadNumber from "@/utils/spreadNumber";
import React from "react";
import SubmittedOrderItem from "../Items/SubmittedOrderItem";
import { useOrderListContext } from "@/contexts/OrderListContext";
import { TOrderItem } from "@/types/orderItem";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";

export default function SubmittedOrderList() {
  const { orderList } = useOrderListContext();
  const {state} = useHomeStatesContext()

  return (
    <div className="flex flex-col flex-nowrap items-center justify-start w-full border-[0.2px] border-[#00000040] rounded-[10px] bg-white py-5">
      <p className="font-vazir-600 text-[20px] w-[159px] mb-0 h-[30px] leading-[30px] select-none text-center">
        لـیـست سـفـارشـات
      </p>

      <div className="w-full min-h-[216px] mt-[23px] overflow-auto">
        {orderList?.map((cart: TOrderItem) => (
          <SubmittedOrderItem key={cart.id} order={cart} />
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
        placeholder="-"
        disabled
        value={state.comment}
        className="placeholder:text-[#49454F] text-[16px] font-vazir-500 resize-none h-[100px] outline-none px-4 pt-4 leading-6 border-[0.2px] border-[#79747E] rounded-[8px] mt-4"
        style={{ width: "calc(100% - 24px)", direction: "rtl" }}
      ></textarea>
    </div>
  );
}
