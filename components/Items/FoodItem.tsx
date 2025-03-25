"use client";
import AddBtn from "../Buttons/AddBtn";
import { Modal, Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useOrderListContext } from "@/contexts/OrderListContext";
import { IFoodItem } from "@/types/foodItem";
import Image from "../Image/Image";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";
import spreadNumber from "@/utils/spreadNumber";

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
  const { state } = useHomeStatesContext();
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
      <div className="flex flex-row-reverse flex-nowrap justify-start items-center rounded-[10px] border-[0.2px] border-[#00000040] py-[12px] px-[14px] max-3xl:py-[8px] max-3xl:px-[10px] max-3xl:rounded-[8px] bg-white">
        <Image
          className="rounded-[10px] ml-[10px] select-none size-[108px] max-3xl:size-[95px] max-3xl:ml-[8px] cursor-pointer max-md:size-[80px]"
          src={props.image}
          alt="Food"
          onClick={() => setIsModalOpen(true)}
        />

        <div className="flex flex-col flex-nowrap gap-8 justify-between w-[276px] max-3xl:gap-5 max-3xl:w-[250px] max-2xl:w-[360px] max-xl:w-[280px] max-sm:w-[230px] max-md:gap-3">
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer w-full "
          >
            <div className="w-full line-clamp-1">
              <p
                className="text-[16px] font-vazir-600 text-right line-clamp-1 max-3xl:text-[14px] max-md:text-[12px]"
                style={{ direction: "rtl" }}
              >
                {props.name}
              </p>
              <p
                className="line-clamp-2 font-vazir-400 text-[12px] text-right h-[33px] text-[#625B71] max-3xl:text-[10px] max-md:text-[8px]"
                style={{ direction: "rtl" }}
              >
                {props.order}
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between items-end flex-nowrap w-full h-[16px]">
            <div className="flex flex-col items-end justify-end w-auto h-full">
              {props.offerPrice !== 0 && (
                <del className="font-vazir-500 text-right text-[10px] max-md:text-[9px] text-[#969696] h-[13px]">
                  {spreadNumber(props.price)}
                </del>
              )}

              <div className="flex items-center justify-center max-w-40 min-w-15 h-[22px] gap-[2px]">
                <span className="text-[10px] max-md:text-[9px] font-vazir-400 mr-[2px] select-none">
                  تومان
                </span>
                <span className="text-[14px] max-md:text-[12px] font-vazir-500 leading-[22px] h-[22px]">
                  {spreadNumber(props.offerPrice || props.price)}
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
          className="flex justify-center items-center w-[100vw] h-[100vh]"
        >
          {/* <Box
            sx={{
              position: "relative",
              backgroundColor: "red",
              textAlign: "right",
              outline: "none",
              borderRadius: "10px",
              width: `${538}px`,
              height: `${697}px`,
              top: `calc(50vh - ${538 / 2}px)`,
              left: `calc(50vw - ${697 / 2}px)`,
            }}
          > */}
          <div className="bg-white rounded-[20px] outline-none overflow-hidden p-3">
            <Image
              className="rounded-[30px] border-[#00000040] border-[0.2px] select-none size-[498px] max-2xl:size-[450px] max-md:size-[400px] max-sm:size-[320px]"
              src={props.image}
              alt="Food"
            />
            <div className="flex flex-col justify-between min-h-[50px] text-right mt-3 w-[498px] max-2xl:w-[450px] max-md:w-[400px] max-sm:w-[320px]">
              <p className="w-full h-[30px] font-vazir-600 text-[23px] max-2xl:text-[21px] max-md:text-[19px] max-sm:text-[18px] leading-[30px] text-end">
                {props.name}
              </p>
              <p
                className="w-full h-[40px] font-vazir-400 text-[16px] max-2xl:text-[14px] max-md:text-[13px] max-sm:text-[12px] leading-[20px] text-right overflow-hidden text-ellipsis mt-1"
                style={{ direction: "rtl" }}
              >
                {props.order}
              </p>
            </div>
            <div className="flex flex-row-reverse justify-between min-w-[104px] h-[52px] gap-1 mt-2">
              <div className="flex flex-col items-end justify-end w-auto h-full ">
                <del className="font-vazir-500 text-right max-w-16 min-w-[43px] text-[14px] max-2xl:text-[13px] max-md:text-[12px] max-sm:text-[11px] text-[#969696] h-[21px]">
                  {props.offerPrice !== 0 && spreadNumber(props.price)}
                </del>

                <div className="flex items-center justify-center max-w-40 min-w-20 h-[22px] mb-2 max-2xl:mb-[3px] max-md:mb-[2px] max-sm:mb-1 gap-[2px] ">
                  <span className="text-[14px] max-2xl:text-[13px] max-md:text-[12px] max-sm:text-[11px] font-vazir-400 mr-[2px] select-none">
                    تومان
                  </span>
                  <span className="text-[20px] max-2xl:text-[18px] max-md:text-[17px] max-sm:text-[16px] font-vazir-500 leading-[22px] h-full">
                    {spreadNumber(
                      props.offerPrice !== 0 ? props.offerPrice : props.price
                    )}
                  </span>
                </div>
              </div>
              <AddBtn className="" size="lg" onClick={addFoodToOrderList} />
            </div>
          </div>

          {/* </Box> */}
        </Modal>
      ) : null}
    </>
  );
}
