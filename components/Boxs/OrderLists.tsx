"use client";

import { useHomeStatesContext } from "@/contexts/HomeStatesContext";
import ConfirmModal from "../Modal/ConfirmModal";
import SubmittedOrderStatus from "../Status/SubmittedOrderStatus";
import PreSubmittedOrderList from "./PreSubmittedOrderList";
import SubmittedOrderList from "./SubmittedOrderList";
import FoodLists from "./FoodLists";
import EmptyOrderStatus from "../Status/EmptyOrderStatus";
import { useOrderListContext } from "@/contexts/OrderListContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrderLists() {
  const { state } = useHomeStatesContext();
  const { orderList } = useOrderListContext();
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.localStorage.getItem("isLoggedIn")
    )
      router.push("/login");
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {state.isSubmittedOrderList && <ConfirmModal />}
      <div className="flex justify-center items-start gap-4 py-[18px] w-full h-auto absolute top-[75px] max-xl:top-[60px] max-3xl:gap-10 max-2xl:gap-15 max-xl:gap-10 max-lg:flex-col-reverse max-lg:flex-nowrap max-lg:justify-end max-lg:items-center max-lg:gap-6 pb-7">
        <div className="flex flex-col justify-start items-stretch w-[424px] max-3xl:w-[400px] max-xl:w-[350px] *:shrink-0">
          {state.isSubmittedOrderList ? (
            <>
              <SubmittedOrderStatus />
              <SubmittedOrderList />
            </>
          ) : orderList.length > 0 ? (
            <PreSubmittedOrderList />
          ) : (
            <EmptyOrderStatus />
          )}
        </div>
        <FoodLists />
      </div>
    </>
  );
}
