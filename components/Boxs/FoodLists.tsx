"use client";

import React, { useEffect, useState } from "react";
import { RxInfoCircled } from "react-icons/rx";
import FoodItem from "../Items/FoodItem";
import { IFoodItem } from "@/types/foodItem";
import apiRequest from "@/services/axios/apiRequest";
import Backdrop from "../Backdrop/Backdrop";

function FoodLists() {
  const [foodItems, setFoodItems] = useState<IFoodItem[]>([]);
  const [isShowBackdrop, setIsShowBackdrop] = useState(false);
  const fetchData = () => {
    setIsShowBackdrop(true);
    apiRequest
      .get("/foods")
      .then((res) => setFoodItems(res.data))
      .catch((err) => alert(err.message))
      .finally(() => {
        setIsShowBackdrop(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (typeof window !== "undefined")
    window.addEventListener("online", fetchData);

  return (
    <>
      {isShowBackdrop && <Backdrop />}
      <div className="flex flex-col justify-start items-stretch w-[868px] *:shrink-0 max-3xl:w-[767px] max-2xl:w-[500px] max-xl:w-[400px] max-sm:w-[350px]">
        <div className="flex items-center justify-between py-[9px] mb-[5px]">
          <div className="flex items-center justify-start gap-2">
            <p
              className="font-vazir-400 text-[12px] max-2xl:text-[10px] max-sm:text-[8px]"
              style={{ direction: "rtl" }}
            >
              برای ثبت سفارش فقط تا ساعت 8:30 فرصت دارید.
            </p>
            <RxInfoCircled className="text-[16px] max-2xl:text-[14px] max-sm:text-[12px]" />
          </div>
          <p className="font-vazir-600 text-[20px] max-2xl:text-[18px] max-sm:text-[16px]">
            وعــده صــبـحـانــه
          </p>
        </div>
        <div className="flex flex-row-reverse flex-wrap items-start justify-between gap-4 *:shrink-0 mb-[5px] max-2xl:justify-center">
          {foodItems.map((foodItem) =>
            foodItem.category === "breakfast" ? (
              <FoodItem key={foodItem.id} props={foodItem} />
            ) : null
          )}
        </div>
        <div className="flex items-center justify-between py-[9px] mb-[5px]">
          <div className="flex items-center justify-start gap-2">
            <p
              className="font-vazir-400 text-[12px] max-2xl:text-[10px] max-sm:text-[8px]"
              style={{ direction: "rtl" }}
            >
              برای ثبت سفارش فقط تا ساعت 11 فرصت دارید.
            </p>
            <RxInfoCircled className="text-[16px] max-2xl:text-[14px] max-sm:text-[12px]" />
          </div>
          <p className="font-vazir-600 text-[20px] max-2xl:text-[18px] max-sm:text-[16px]">
            وعــده نــهــار
          </p>
        </div>
        <div className="flex flex-row-reverse flex-wrap items-start justify-between gap-4 *:shrink-0 mb-[5px] max-2xl:justify-center">
          {foodItems.map((foodItem) =>
            foodItem.category === "lunch" ? (
              <FoodItem key={foodItem.id} props={foodItem} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
}

export default FoodLists;
