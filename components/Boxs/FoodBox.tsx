"use client";
import Image from "next/image";
import FoodCart from "../Carts/FoodCart";
import { useOrderListContext } from "@/contexts/OrderListContext";
import { useEffect, useId, useState } from "react";

export default function FoodBox({orderList, setOrderList}:any) {
  const [time, setTime] = useState(
    new Date().getHours() * 60 + new Date().getMinutes()
  );
  const [allFoodList, setAllFoodList] = useState<any>([]);
  const [isShowBreakfast, setIsShowBreakfast] = useState(true);
  const [isShowLunch, setIsShowLunch] = useState(true);
  const BREAKFAST_END_TIME: number = 510; // ==> minute
  const LUNCH_END_TIME: number = 660; // ==> minute

  // Time update every minute
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().getHours() * 60 + new Date().getMinutes());
    }, 60000);
  }, []);

  // Update visibility of breakfast and lunch items
  useEffect(() => {
    if (time >= BREAKFAST_END_TIME) setIsShowBreakfast(true);
    if (time >= LUNCH_END_TIME) setIsShowLunch(true);
  }, [time]);

  // Fetching Data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllFoodList(data))
      .catch((err) => console.log("Error: " + err));
  }, []);

  return (
    <>
      <div className="320x:w-full 320x:overflow-hidden 320x:mt-[75px] 320x:flex 320x:flex-col 320x:justify-center 320x:items-center bg-yellow-100">
        <div className="320x:flex 320x:flex-row 320x:justify-between 320x:items-center 320x:w-full 480x:h-[47px] 320x:h-[30px] select-none">
          <div className="flex justify-center items-center 320x:w-[182px] 320x:h-[19px] 320x:ml-2">
            <span
              className="320x:w-[170px] 320x:text-[8px] 320x:font-vazir-400"
              style={{ direction: "rtl" }}
            >
              برای ثبت سفارش فقط تا ساعت 8:30 فرصت دارید.
            </span>
            <Image
              src={"./images/info.svg"}
              width={16}
              height={16}
              alt="info"
              className="ml-3 320x:ml-2"
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <p className="320x:font-vazir-600 320x:h-[30px] 320x:leading-[30px] 320x:mr-2 320x:text-[13px] 320x:w-[100px] 320x:text-right">
            وعــده صــبـحـانــه
          </p>
        </div>

        <div className="320x:flex flex-row-reverse flex-wrap w-full h-auto mb-4">
          {isShowBreakfast &&
            allFoodList?.map(
              (food: any) =>
                food.category === "breakfast" && (
                  <FoodCart key={food.id} props={{...food,number:1,plusNumberHandler: function () {++this.number},minusNumberHandler: function () {--this.number}}} orderList={orderList} setOrderList={setOrderList} />
                )
            )}
        </div>

        <div className="320x:flex 320x:flex-row 320x:justify-between 320x:items-center 320x:w-full 320x:h-[30px] select-none">
          <div className="flex justify-center items-center 320x:w-[176px] h-[19px] ml-2">
            <span
              className="320x:w-[170px] 320x:text-[8px] 320x:font-vazir-400"
              style={{ direction: "rtl" }}
            >
              برای ثبت سفارش فقط تا ساعت 11 فرصت دارید.
            </span>
            <Image
              src={"./images/info.svg"}
              width={16}
              height={16}
              alt="info"
              className="ml-3 320x:ml-2"
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <p className="320x:font-vazir-600 320x:h-[30px] 320x:leading-[30px] 320x:mr-2 320x:text-[13px] 320x:w-[100px] 320x:text-right">
            وعــده نــهــار
          </p>
        </div>

        <div className="320x:flex flex-row-reverse flex-wrap w-full h-auto mb-4">
          {isShowLunch &&
            allFoodList?.map(
              (food: any) =>
                food.category === "lunch" && <FoodCart key={food.id} props={{...food,number:1}} setOrderList={setOrderList} orderList={orderList} />
            )}
        </div>
      </div>
    </>
  );
}
