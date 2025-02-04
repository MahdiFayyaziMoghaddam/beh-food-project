'use client'

import { useOrder } from "@/contexts/OrderListContext";
import Image from "next/image";
import React, { useMemo } from "react";

export default function NoOrderBox({orderList}:any) {

  // const {orderList,setOrderList} = useOrder()  

  return (
    <>
      {orderList?.length === 0 &&
        useMemo(() => {
          return (
            <div
              className="320x:w-[200px] 320x:h-[180px] 320x:flex 320x:justify-center 320x:items-center 320x:flex-wrap 320x:select-none"
              style={{marginTop: 'calc((572px - 180px)/2)'}}
            >
              <Image
                src={"./images/no-order.svg"}
                alt="no-order"
                width={158}
                height={118}
                onDragStart={(e) => e.preventDefault()}
              />
              <p
                className="text-[#BEBEBE] text-[20px] font-vazir-400 h-[30px] leading-[30px] mt-6"
                style={{ direction: "rtl" }}
              >
                سبد سفارش شما خالیه!
              </p>
            </div>
          );
        }, [orderList])}
    </>
  );
}
