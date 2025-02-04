"use client";

import { useOrder } from "@/contexts/OrderListContext";
import React, { useEffect, useMemo, useState } from "react";
import useSpreadNumber from "@/hooks/useSpreadNumber";
import ChangeBtn from "../Buttons/ChangeBtn";
import OrderCart from "../Carts/OrderCart";

export default function OrderBox({
  setIsShowProgress,
  setIsSubmittedOrder,
  comment,
  setComment,
  orderList,
  setOrderList
}: any) {
  // const { orderList, setOrderList } = useOrder();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const totalPriceHandler = () => {
    let price = 0;
    
    orderList?.forEach((item: any) => {
      price += item.price * (item?.number);
    });
    
    console.log(orderList)
    setTotalPrice(price);
  }

  return (
    <>
      {orderList?.length !== 0 && (
        <div className="flex flex-col flex-nowrap items-center justify-start w-full min-h-[572px] border-[0.2px] border-[#00000040] rounded-[10px] bg-white">
          <p className="font-vazir-600 text-[20px] w-[159px] mb-0 h-[30px] leading-[30px] mt-[25px] select-none text-center">
            لـیـست سـفـارشـات
          </p>

          <div className="w-full max-h-[216px] min-h-[216px] mt-[23px] overflow-auto">
            {orderList?.map((cart: any) => {
              return <OrderCart key={cart.id} props={cart} totalPriceHandler={totalPriceHandler} orderList={orderList} setOrderList={setOrderList}/>;
            })}
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
            placeholder="توضیحات سفارش..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="placeholder:text-[#49454F] text-[16px] font-vazir-500 resize-none h-[100px] outline-none px-4 pt-4 leading-6 border-[0.2px] border-[#79747E] rounded-[8px] mt-4"
            style={{ width: "calc(100% - 24px)", direction: "rtl" }}
          ></textarea>

          <button
            className="bg-primary text-white text-[16px] font-vazir-700 mb-0 py-[18px] px-[126px] rounded-[5px] mt-4"
            style={{ width: "calc(100% - 24px)" }}
            onClick={() => {
              setIsShowProgress(true);
              setTimeout(() => {
                setIsShowProgress(false);
                setIsSubmittedOrder(true);
              }, 3000);
            }}
          >
            ثــبــت سـفـارش
          </button>
        </div>
      )}
    </>
  );
}
