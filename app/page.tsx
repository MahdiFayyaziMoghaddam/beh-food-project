"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useOrderListContext } from "@/contexts/OrderListContext";
import OrderList from "@/components/Boxs/OrderList";
import { RxInfoCircled } from "react-icons/rx";
import FoodItem from "@/components/Items/FoodItem";
import EmptyOrderStatus from "@/components/Status/EmptyOrderStatus";
import apiRequest from "@/services/apiRequest";
import SubmittedOrderStatus from "@/components/Status/SubmittedOrderStatus";
import { IFoodItem } from "@/types/foodItem";
import SubmittedOrderList from "@/components/Boxs/SubmittedOrderList";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";

export default function Home() {
  // Hooks
  const [foodItems, setFoodItems] = useState<IFoodItem[]>([]);
  const { orderList } = useOrderListContext();
  const { state } = useHomeStatesContext();
  const router = useRouter();

  useEffect(() => {
    apiRequest.get("/foods").then((res) => setFoodItems(res.data));
  }, []);

  // !localStorage.getItem("isLoggedIn") && router.push("/login");

  return (
    <>
      <Navbar />
      {state.isSubmittedOrderList && <ConfirmModal />}
      <div className="flex justify-center items-start gap-4 py-[18px] w-full h-auto absolute top-[75px]">
        <div className="flex flex-col justify-start items-stretch w-[424px] *:shrink-0">
          {state.isSubmittedOrderList ? (
            <>
              <SubmittedOrderStatus />
              <SubmittedOrderList />
            </>
          ) : orderList.length > 0 ? (
            <OrderList />
          ) : (
            <EmptyOrderStatus />
          )}
        </div>
        <div className="flex flex-col justify-start items-stretch w-[868px] *:shrink-0">
          <div className="flex items-center justify-between py-[9px] mb-[5px]">
            <div className="flex items-center justify-start gap-2">
              <p
                className="font-vazir-400 text-[12px]"
                style={{ direction: "rtl" }}
              >
                برای ثبت سفارش فقط تا ساعت 8:30 فرصت دارید.
              </p>
              <RxInfoCircled fontSize={16} />
            </div>
            <p className="font-vazir-600 text-[20px]">وعــده صــبـحـانــه</p>
          </div>
          <div className="flex flex-row-reverse flex-wrap items-start justify-between gap-4 *:shrink-0 mb-[5px]">
            {foodItems.map((foodItem) =>
              foodItem.category === "breakfast" ? (
                <FoodItem
                  key={foodItem.id}
                  props={foodItem}
                />
              ) : null
            )}
          </div>
          <div className="flex items-center justify-between py-[9px] mb-[5px]">
            <div className="flex items-center justify-start gap-2">
              <p
                className="font-vazir-400 text-[12px]"
                style={{ direction: "rtl" }}
              >
                برای ثبت سفارش فقط تا ساعت 11 فرصت دارید.
              </p>
              <RxInfoCircled fontSize={16} />
            </div>
            <p className="font-vazir-600 text-[20px]">وعــده نــهــار</p>
          </div>
          <div className="flex flex-row-reverse flex-wrap items-start justify-between gap-4 *:shrink-0 mb-[5px]">
            {foodItems.map((foodItem) =>
              foodItem.category === "lunch" ? (
                <FoodItem
                  key={foodItem.id}
                  props={foodItem}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
