import React, { useEffect } from "react";
import ChangeBtn from "../Buttons/ChangeBtn";
import spreadNumber from "@/utils/spreadNumber";
import { TOrderItem } from "@/types/orderItem";
import { useOrderListContext } from "@/contexts/OrderListContext";

interface IOrderItem {
  order: TOrderItem;
}

export default function OrderItem({ order }: IOrderItem) {
  const { orderList, setOrderList } = useOrderListContext();

  return (
    <div
      key={order.id}
      className="relative flex flex-row-reverse justify-start w-full border-[#00000040] border-y-[0.2px] bg-white"
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
      <ChangeBtn
        className="absolute bottom-2 left-3"
        value={orderList.find((item) => item.id === order.id)?.quantity}
        orderID={order.id}
        onRemove={() => {
          setOrderList(orderList.filter((item) => item.id !== order.id));
        }}
        onChange={(q) => {
          setOrderList((prev) =>
            prev.map((item) => {
              if (item.id === order.id) {
                item.quantity = q;
              }
              return item;
            })
          );
        }}
      />
    </div>
  );
}
