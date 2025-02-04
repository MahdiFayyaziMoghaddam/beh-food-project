import { useOrder } from "@/contexts/OrderListContext";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

export default function Status({orderList}:any) {

  const [phase, setPhase] = useState('accepted')
  // const {orderList} = useOrder()

  useEffect(()=>{
    new Promise(res => {
      setTimeout(()=>{
        setPhase('cooking')
        res(null)
      },3000)
    }).then(()=>{
      setTimeout(()=>{
        setPhase('ready')
      }, (orderList?.length * 3000))
    })
  },[])

  return (
    <>
      <div className="relative top-0 w-full max-h-[122px] min-h-[123px] rounded-[10px] border-[#00000040] border-[0.2px] mb-3 bg-white">
        <Image
          className="absolute top-[11px] right-[17px] select-none"
          width={100}
          height={100}
          src={`./images/${phase === 'accepted' ? 'paper.svg' : ''}${phase === 'cooking' ? 'hat.svg' : ''}${phase === 'ready' ? 'dish.svg' : ''}`}
          alt="paper"
          onDragStart={(e) => e.preventDefault()}
        />
        <hr className="absolute top-[21px] right-[131px] w-[1px] h-20 border-[0.2px] border-[#00000033]" />
        <p
          className="absolute w-auto h-[16px] leading-4 top-[27px] right-[153px] font-vazir-400 text-[#AFAFAF] text-[10px]"
          style={{ direction: "rtl" }}
        >
          وضعیت سفارش:
        </p>
        <p
          className="absolute top-[46px] right-[153px] text-[16px] font-vazir-600 w-auto h-[30px] leading-[30px]"
          style={{ direction: "rtl" }}
        >
          {phase === 'accepted' && 'ثبت سفارش'}{phase === 'cooking' && 'در حال آماده‌سازی'}{phase === 'ready' && 'غذا آماده است!'}
        </p>
        <div className="flex flex-nowrap flex-row-reverse justify-start overflow-hidden absolute top-[81px] left-[27px] w-[244px] h-[19px]">
          {useMemo(
            () =>
              orderList?.map(
                (item: { name: string; image: string; number: number }) => {
                  return (
                    <>
                      <div
                        className="relative flex flex-nowrap min-w-[60] h-full ml-1"
                        style={{ direction: "rtl" }}
                      >
                        <div className="absolute right-0 bottom-0 w-[9px] h-[9px] bg-[#282E40] rounded-full">
                          <p className="flex justify-center absolute w-full h-full text-center text-[7px] font-vazir-900 text-white">
                            {item?.number}
                          </p>
                        </div>
                        <Image
                          width={19}
                          height={19}
                          src={`./images/pizza.svg`}
                          alt="food"
                        />
                        <p className="w-auto h-full leading-[19px] text-[10px] mr-1 font-vazir-400 text-ellipsis overflow-hidden whitespace-nowrap">
                          {item?.name}
                        </p>
                      </div>
                    </>
                  );
                }
              ),
            [orderList]
          )}
        </div>
      </div>
    </>
  );
}
