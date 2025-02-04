"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo, useId } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { OrderListProvider } from "@/contexts/OrderListContext";
import NoOrderBox from "@/components/Boxs/NoOrderBox";
import OrderBox from "@/components/Boxs/OrderBox";
import SubmitOrderBox from "@/components/Boxs/SubmitOrderBox";
import { Backdrop, CircularProgress } from "@mui/material";
import FoodBox from "@/components/Boxs/FoodBox";

export default function Home() {
  // Hooks
  const [orderList, setOrderList] = useState<any>([]);
  const [isSubmittedOrder, setIsSubmittedOrder] = useState(false);
  const [comment, setComment] = useState("");
  const [isShowProgress, setIsShowProgress] = useState(false);
  const router = useRouter();

  !localStorage.getItem("isLoggedIn") && router.push("/login");

  // 1440 - 1280 - 1024 - 860 - 640 - 480 - 320 : width
  // 1.00   1.12   1.40   1.67  2.25  3.00  4.5 : scale

  return (
    <>
      <OrderListProvider>
        <Navbar />

        {isShowProgress && (
          <Backdrop
            sx={{ zIndex: 999 }}
            open={isShowProgress}
            onClick={() => setIsShowProgress(false)}
          >
            <CircularProgress sx={{ color: "#F6510B" }} />
          </Backdrop>
        )}

        <div className="320x:w-full 320x:min-h-screen 320x:flex 320x:flex-col-reverse 320x:flex-nowrap 320x:justify-end 320x:items-center bg-red-200">
          <div
            className="320x:w-full 320x:flex 320x:flex-col 320x:justify-start 320x:items-center overflow-auto bg-blue-300"
            style={{ height: "572px" }}
          >
            {!isSubmittedOrder ? (
              <>
                <OrderBox
                  comment={comment}
                  setComment={setComment}
                  setIsSubmittedOrder={setIsSubmittedOrder}
                  setIsShowProgress={setIsShowProgress}
                  orderList={orderList}
                  setOrderList={setOrderList}
                />
                  <NoOrderBox 
                  orderList={orderList}
                   />
              </>
            ) : (
              <SubmitOrderBox
                comment={comment}
                orderList={orderList}
                setOrderList={setOrderList}
              />
            )}
          </div>

          <FoodBox orderList={orderList} setOrderList={setOrderList} />
        </div>
      </OrderListProvider>
    </>
  );
}
