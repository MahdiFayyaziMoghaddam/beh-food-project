'use client'

import { useOrder } from "@/contexts/OrderListContext";
import React, { useEffect, useState } from "react";
import Status from "../Status/Status";
import useSpreadNumber from "@/hooks/useSpreadNumber";

export default function SubmitOrderBox({ comment, orderList }: any) {
  // const { orderList, setOrderList } = useOrder();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let price = 0;

    orderList?.forEach((item: any) => {
      price += item?.price * (item?.number);
    });

    setTotalPrice(price);
  }, [orderList]);

  return (
    <>
      <Status orderList={orderList}/>

      <div className="flex flex-col  flex-nowrap items-center justify-start w-full h-[451px] bg-white border-[0.2px] border-[#00000040] rounded-[10px]">
        <p className="font-vazir-600 text-[20px] w-[159px] mb-0 h-[30px] leading-[30px] mt-[25px] select-none text-center">
          لـیـست سـفـارشـات
        </p>
        <div className="w-full max-h-[216px] min-h-[216px] mt-[23px] overflow-auto">
          {/*  */}
          {orderList?.map((item: any) => {
            return (
              <div className="bg-white flex flex-row-reverse justify-between items-end w-full h-[72px] border-[#00000040] border-y-[0.2px]">
                <div className="flex flex-col flex-nowrap justify-between items-end w-[281px] h-[56px] my-2 mr-[10px]">
                  <p className="w-[281px] h-6 text-[16px] text-right font-vazir-600">
                    {item?.name}
                  </p>
                  <div className="flex flex-row-reverse justify-start min-w-[80px] h-[22px]">
                    <span className="text-[14px] font-vazir-500 text-center leading-[26px]">
                      {item?.price}
                    </span>
                    <span className="text-[14px] font-vazir-400 select-none text-center mr-[2px] leading-[26px]">
                      تومان
                    </span>
                  </div>
                </div>
                <p className="font-vazir-500 text-[14px] ml-[19px] mb-[7px] text-center w-auto h-[22px] leading-[22px]">
                  {item?.number}
                </p>
              </div>
            );
          })}
          {/*  */}
        </div>
        <div className="flex flex-nowrap justify-between items-center w-full h-[72px] border-y-[0.2px] border-[#00000040]">
          <div className="flex flex-row-reverse justify-start min-w-auto h-[30px] ml-[28px]">
            <span className="text-[18px] font-vazir-500 text-center leading-[30px]">
              {useSpreadNumber(totalPrice)}
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
          placeholder="بدون توضیح"
          disabled
          value={comment}
          className="placeholder:text-[#49454F] h-[70px] font-vazir-500 text-[16px] leading-[70px] text-right overflow-hidden text-ellipsis whitespace-nowrap resize-none"
          style={{ width: "calc(100% - 20px)", direction: "rtl" }}
        ></textarea>
      </div>
    </>
  );
}
