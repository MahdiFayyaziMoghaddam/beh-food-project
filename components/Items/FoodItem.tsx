"use client";
import AddBtn from "../Buttons/AddBtn";
import { Modal, Box, Tooltip } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import useSpreadNumber from "@/utils/spreadNumber";
import { useOrderListContext } from "@/contexts/OrderListContext";
import { IFoodItem } from "@/types/foodItem";
import Image from "../Image/Image";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";

interface IFoodCart {
  props?: IFoodItem;
}

export default function FoodItem({
  props = {
    id: "id",
    name: "name",
    image: "image",
    price: 4000,
    order: "order",
    category: "lunch",
    offerPrice: 1000,
  },
}: IFoodCart) {
  const { orderList, setOrderList } = useOrderListContext();
  const { state, dispatch } = useHomeStatesContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLockAddBtn, setIsLockAddBtn] = useState(false);

  useEffect(() => {
    setIsLockAddBtn(state.isSubmittedOrderList);
  }, [state.isSubmittedOrderList]);

  const addFoodToOrderList = () => {
    if (!state.isSubmittedOrderList) {
      if (!orderList.find((orderItem) => orderItem.id === props.id)) {
        setOrderList((prev) => [...prev, { ...props, quantity: 1 }]);
      } else {
        setOrderList((prev) =>
          prev.map((orderItem) => {
            if (orderItem.id === props.id) {
              return {
                ...orderItem,
                quantity: orderItem.quantity + 1,
              };
            }
            return orderItem;
          })
        );
      }
    }
  };

  return (
    <>
      <div className="flex flex-row-reverse flex-nowrap justify-start items-center rounded-[10px] border-[0.2px] border-[#00000040] py-[12px] px-[14px] bg-white">
        <Image
          className="rounded-[10px] ml-[10px] select-none size-[108px]"
          src={props.image}
          alt="Food"
        />

        <div className="flex flex-col flex-nowrap justify-between w-[276px] h-[100px]">
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer w-full h-[65px]"
          >
            <div className="w-full line-clamp-1 *:max-w-[281px]">
              <p
                className="text-[16px] font-vazir-600 text-right line-clamp-1"
                style={{ direction: "rtl" }}
              >
                {props.name}
              </p>
              <p
                className="line-clamp-2 font-vazir-400 text-[12px] text-right h-[33px] text-[#625B71]"
                style={{ direction: "rtl" }}
              >
                {props.order}
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between items-end flex-nowrap w-full h-[16px]">
            <div className="flex flex-col items-end justify-end w-auto h-full">
              {props.offerPrice !== 0 && (
                <del className="font-vazir-500 text-right text-[10px] text-[#969696] h-[13px]">
                  {useSpreadNumber(props.price)}
                </del>
              )}

              <div className="flex items-center justify-center max-w-40 min-w-15 h-[22px] gap-[2px]">
                <span className="text-[10px] font-vazir-400 mr-[2px] select-none">
                  تومان
                </span>
                <span className="text-[14px] font-vazir-500 leading-[22px] h-[22px]">
                  {useSpreadNumber(props.offerPrice || props.price)}
                </span>
              </div>
            </div>

            {useMemo(() => {
              return <AddBtn size="sm" onClick={addFoodToOrderList} />;
            }, [orderList, state.isSubmittedOrderList])}
          </div>
        </div>
      </div>

      {/* Modal */}

      {isModalOpen ? (
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
              className="absolute top-5 left-5 rounded-[50px] border-[#00000040] border-[0.2px] select-none size-[498px]"
              src={props.image}
              alt="Food"
            />

            <div className="absolute bottom-[93px] left-5 flex flex-col justify-between w-[500px] min-h-[50px] max-h-[90px] h-[70px] text-right">
              <p className="w-full h-[30px] font-vazir-600 text-[20px] leading-[30px] text-end">
                {props.name}
              </p>
              <p
                className="w-full h-[40px] font-vazir-400 text-[14px] leading-[20px] text-right overflow-hidden text-ellipsis"
                style={{ direction: "rtl" }}
              >
                {props.order}
              </p>
            </div>

            <div className="absolute bottom-[29px] right-5 flex flex-row-reverse justify-start min-w-[104px] h-[52px] gap-1">
              <div className="flex flex-col items-end justify-end w-auto h-full ">
                <del className="font-vazir-500 text-right max-w-16 min-w-[43px] text-[14px] text-[#969696] h-[21px]">
                  {props.offerPrice !== 0 && useSpreadNumber(props.price)}
                </del>

                <div className="flex items-center justify-center max-w-40 min-w-20 h-[22px] gap-[2px] ">
                  <span className="text-[14px] font-vazir-400 mr-[2px] select-none">
                    تومان
                  </span>
                  <span className="text-[20px] font-vazir-500 leading-[22px] h-full">
                    {useSpreadNumber(
                      props.offerPrice !== 0 ? props.offerPrice : props.price
                    )}
                  </span>
                </div>
              </div>
            </div>

             <AddBtn className="absolute bottom-5 left-5" size="lg" onClick={addFoodToOrderList} />;
          </Box>
        </Modal>
      ) : null}
    </>
  );
}
