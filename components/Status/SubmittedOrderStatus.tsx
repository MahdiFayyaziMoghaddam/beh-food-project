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
      <div className="flex flex-row-reverse items-center p-[11px] rounded-[10px] border-[#00000040] border-[0.2px] mb-3 bg-white *:shrink-0 gap-[18px] overflow-hidden">
        <Image
          className="size-[100px]"
          src={`./images/${phase === "accepted" ? "paper.svg" : ""}${
            phase === "cooking" ? "hat.svg" : ""
          }${phase === "ready" ? "dish.svg" : ""}`}
          alt="paper"
        />
        <div className="flex flex-col justify-between h-[80px] grow pr-[18px] border-r-[0.2px] border-[#00000040]">
          <div className="flex flex-col text-nowrap">
            <p
              className="h-[16px] leading-4 font-vazir-400 text-[#AFAFAF] text-[10px]"
              style={{ direction: "rtl" }}
            >
              وضعیت سفارش:
            </p>
            <p
              className="text-[16px] font-vazir-600 w-auto h-[30px] leading-[30px]"
              style={{ direction: "rtl" }}
            >
              {phase === "accepted" && "ثبت سفارش"}
              {phase === "cooking" && "در حال آماده‌سازی"}
              {phase === "ready" && "غذا آماده است!"}
            </p>
          </div>
          <div className="flex flex-nowrap flex-row-reverse justify-start items-center gap-3 h-[24px] overflow-auto">
            {useMemo(
              () =>
                orderList?.map((item: TOrderItem) => {
                  return (
                    <div
                      key={item.id}
                      className="relative flex flex-nowrap min-w-[60] h-full shrink-0 pr-1"
                      style={{ direction: "rtl" }}
                    >
                      <div className="relative size-[19px]">
                        <Image
                          className="size-[19px] rounded-[3px]"
                          src={item.image}
                          alt="food"
                        />
                        <p className="absolute flex justify-center items-center text-white bg-black -bottom-[2px] -right-[2px] size-2 text-[6px] font-vazir-700 rounded-full">
                          {item.quantity}
                        </p>
                      </div>
                      <p className="w-auto h-full leading-[19px] text-[10px] mr-0.5 font-vazir-400 text-ellipsis overflow-hidden whitespace-nowrap">
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
