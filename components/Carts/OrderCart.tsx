"use client";

import React, { useEffect, useState } from "react";
import ChangeBtn from "@/components/Buttons/ChangeBtn";
import useSpreadNumber from "@/hooks/useSpreadNumber";
import { useOrder } from "@/contexts/OrderListContext";

export default function OrderCart({ props, orderList, setOrderList,totalPriceHandler }: any) {
  // const { orderList, setOrderList } = useOrder();
  const [number, setNumber] = useState(props.number);

  useEffect(()=>{
    totalPriceHandler()

    return () => {
      totalPriceHandler()
    }
  },[])

  return (
    <>
      {
        <div
          key={props.id}
          className="flex flex-row-reverse justify-between items-end w-full h-[72px] border-[#00000040] border-y-[0.2px] bg-white"
        >
          <div className="flex flex-col flex-nowrap justify-between items-end w-[281px] h-[56px] my-2 mr-[10px]">
            <p className="w-[281px] h-6 text-[16px] text-right font-vazir-600">
              {props.name}
            </p>
            <div className="flex flex-row-reverse justify-start min-w-[80px] h-[22px]">
              <span className="text-[14px] font-vazir-500 text-center leading-[26px]">
                {useSpreadNumber(props.price)}
              </span>
              <span className="text-[14px] font-vazir-400 select-none text-center mr-[2px] leading-[26px]">
                تومان
              </span>
            </div>
          </div>
          <ChangeBtn
            className="mb-2 ml-3"
            number={number}
            plusNumber={() => {
              props.plusNumberHandler()
              setNumber((prev:number) => ++prev)
              totalPriceHandler()
            }}
            minusNumber={() => {
              props.minusNumberHandler()
              setNumber((prev:number) => --prev)
              totalPriceHandler()
            }}
            onDelete={() => {
              setOrderList((prev:any) =>
                prev.filter((item:any) => item.id !== props.id)
              );
            }}
          />
        </div>
      }
    </>
  );
}
