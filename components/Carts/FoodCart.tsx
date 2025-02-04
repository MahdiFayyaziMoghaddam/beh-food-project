"use client";
import Image from "next/image";
import AddBtn from "../Buttons/AddBtn";
import { Modal, Box } from "@mui/material";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import useSpreadNumber from "@/hooks/useSpreadNumber";
import { useOrderListContext } from "@/contexts/OrderListContext";

export default function FoodCart({props,orderList,setOrderList}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // let { orderList, setOrderList } = useOrder();

  return (
    <>
      <div className="flex flex-row-reverse flex-nowrap justify-start items-center 320x:w-[300px] 320x:h-[100px] rounded-[10px] border-[0.2px] border-[#00000040] mx-[10px] mt-4 bg-white">
        <Image
          className="320x:w-[80px] 320x:h-[80px] rounded-[10px] ml-[10px] mr-3 select-none"
          width={108}
          height={108}
          src={`./images/pizza.svg`}
          alt="Food"
          onDragStart={(e) => e.preventDefault()}
        />

        <div className="flex flex-col flex-nowrap justify-between 320x:w-[200px] ml-[10px] 320x:h-[80px]">
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer w-full h-[65px]"
          >
            <div className="w-full h-[65px]">
              <p className="w-full 320x:h-[22px] 320x:font-vazir-500 320x:text-[16px] leading-[25px] text-end">
                {props.name}
              </p>
              <p
                className="max-w-full h-[18.75px] font-vazir-400 text-[12px] leading-[18.75px] text-right overflow-hidden text-ellipsis whitespace-nowrap mt-1"
                style={{ direction: "rtl" }}
              >
                {props.title}
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between items-end flex-nowrap w-full h-[16px]">
            <div className="w-auto h-full flex flex-col justify-end items-end">
              {props.prevPrice !== 0 && (
                <del className="font-vazir-500 text-right max-w-16 min-w-5 320x:text-[9px] text-[#969696] h-[13px]">
                  {useSpreadNumber(props.prevPrice)}
                </del>
              )}

              <div className="flex items-center justify-center max-w-40 min-w-15 h-[22px] gap-[2px]">
                <span className="text-[10px] font-vazir-400 mr-[2px] select-none">
                  تومان
                </span>
                <span className="320x:text-[12px] font-vazir-500 leading-[22px] h-[22px]">
                  {useSpreadNumber(props.price)}
                </span>
              </div>
            </div>

            {useMemo(() => {
              return (
                <AddBtn
                  size="sm"
                  onClickProp={() => {

                    // console.log(orderList.some((item: any) => item.id !== props.id || orderList.length === 0))
                    
                    // console.log(orderList);
                      // orderList.some((item: any) => item.id !== props.id) ||
                      // orderList.length === 0
                      
                      // return [...orderList,props];

                      // console.log()
                      
                      // console.log(orderList)
                      // console.log(props)
                      setOrderList([...Array.from(new Set([...orderList,props]))])
                      console.log(orderList)
                      
                  }}
                />
              );
            }, [orderList])}
          </div>
        </div>
      </div>

      {/* Modal */}

      {isModalOpen
        ?
            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "relative",
                  top: "calc(50vh - 348px)",
                  left: "calc(50vw - 268px)",
                  backgroundColor: "#FFF",
                  textAlign: "right",
                  width: "538px",
                  height: "697px",
                  outline: "none",
                  borderRadius: "10px",
                }}
              >
                <Image
                  className="absolute top-5 left-5 rounded-[50px] border-[#00000040] border-[0.2px] select-none"
                  width={498}
                  height={498}
                  src={`./images/pizza.svg`}
                  alt="Food"
                  onDragStart={(e) => e.preventDefault()}
                />

                <div className="absolute bottom-[93px] left-5 flex flex-col justify-between w-[500px] min-h-[50px] max-h-[90px] h-[70px] text-right">
                  <p className="w-full h-[30px] font-vazir-600 text-[20px] leading-[30px] text-end">
                    {props.name}
                  </p>
                  <p
                    className="w-full h-[40px] font-vazir-400 text-[14px] leading-[20px] text-right overflow-hidden text-ellipsis"
                    style={{ direction: "rtl" }}
                  >
                    {props.title}
                  </p>
                </div>

                <div className="absolute bottom-[29px] right-5 flex flex-row-reverse justify-start min-w-[104px] h-[52px] gap-1">
                  <div className="w-auto h-full flex flex-col justify-end items-end ">
                    {props.prevPrice !== 0 && (
                      <del className="font-vazir-500 text-right max-w-16 min-w-[43px] text-[14px] text-[#969696] h-[21px]">
                        {useSpreadNumber(props.prevPrice)}
                      </del>
                    )}

                    <div className="flex items-center justify-center max-w-40 min-w-20 h-[22px] gap-[2px] ">
                      <span className="text-[14px] font-vazir-400 mr-[2px] select-none">
                        تومان
                      </span>
                      <span className="text-[20px] font-vazir-500 leading-[22px] h-full">
                        {useSpreadNumber(props.price)}
                      </span>
                    </div>
                  </div>
                </div>

                <AddBtn
                  classNameProp="absolute bottom-5 left-5"
                  size="lg"
                  closeAfterClick={() => setIsModalOpen(false)}
                  onClickProp={() => {}}
                />
              </Box>
            </Modal>
        : null}
    </>
  );
}
