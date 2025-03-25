"use client";
import { useOrderListContext } from "@/contexts/OrderListContext";
import { TOrderItem } from "@/types/orderItem";
import React, { useEffect, useMemo, useState } from "react";
import Image from "../Image/Image";

export default function SubmittedOrderStatus() {
  const [phase, setPhase] = useState<"accepted" | "cooking" | "ready">(
    "accepted"
  );
  const { orderList } = useOrderListContext();

  const getCookingTime = () => {
    const allQuantity = orderList.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return allQuantity * 1000;
  };

  const getAcceptedTime = () => {
    const allQuantity = orderList.reduce((acc, item) => {
      return acc + 1;
    }, 0);
    return allQuantity * 1000;
  };

  const phaseTimer = () => {
    setPhase("accepted");
    new Promise((res) => {
      setTimeout(() => {
        setPhase("cooking");
        res(null);
      }, getAcceptedTime());
    }).then(() => {
      setTimeout(() => {
        setPhase("ready");
      }, getCookingTime());
    });
  };

  useEffect(() => {
    phaseTimer();
  }, []);

  return (
    <>
      <div className="flex flex-row-reverse items-center p-[11px] rounded-[10px] border-[#00000040] border-[0.2px] mb-3 bg-white *:shrink-0 gap-[18px] overflow-hidden max-xl:p-[8px]">
        <Image
          className="size-[100px] max-3xl:size-[90px] max-xl:size-[75px]"
          src={`./images/${phase === "accepted" ? "paper.svg" : ""}${
            phase === "cooking" ? "hat.svg" : ""
          }${phase === "ready" ? "dish.svg" : ""}`}
          alt="paper"
        />
        <div className="flex flex-col justify-between items-end gap-5 max-3xl:gap-4 max-2xl:gap-3 max-xl:gap-2 grow pr-[18px] border-r-[0.2px] border-[#00000040]">
          <div className="flex flex-col gap-2 max-xl:gap-1 text-nowrap">
            <p
              className=" font-vazir-400 text-[#AFAFAF] text-[10px] max-xl:text-[8px]"
              style={{ direction: "rtl" }}
            >
              وضعیت سفارش:
            </p>
            <p
              className="text-[16px] font-vazir-600 w-auto max-xl:text-[14px]"
              style={{ direction: "rtl" }}
            >
              {phase === "accepted" && "ثبت سفارش"}
              {phase === "cooking" && "در حال آماده‌سازی"}
              {phase === "ready" && "غذا آماده است!"}
            </p>
          </div>
          <div className="flex flex-nowrap flex-row-reverse items-baseline gap-3 w-[90%] max-3xl:w-[85%] max-2xl:w-[92%] max-xl:w-[80%] overflow-hidden">
            {useMemo(
              () =>
                orderList?.map((item: TOrderItem) => {
                  return (
                    <div
                      key={item.id}
                      className="relative flex flex-nowrap items-center shrink-0 "
                      style={{ direction: "rtl" }}
                    >
                      <div className="relative size-[19px] max-2xl:size-[17px]">
                        <Image
                          className="size-full rounded-[3px]"
                          src={item.image}
                          alt="food"
                        />
                        <p className="absolute flex justify-center items-center text-white bg-black -bottom-[2px] -right-[2px] size-[10px] text-[7px] leading-[14px] font-vazir-700 rounded-full">
                          {item.quantity}
                        </p>
                      </div>
                      <p className="w-auto text-[10px] mr-[2px] font-vazir-400 text-ellipsis overflow-hidden whitespace-nowrap max-2xl:text-[9px]">
                        {item?.name}
                      </p>
                    </div>
                  );
                }),
              [orderList]
            )}
          </div>
        </div>
      </div>
    </>
  );
}
