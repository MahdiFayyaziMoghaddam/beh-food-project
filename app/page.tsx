"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { OrderListProvider } from "@/contexts/OrderListContext";
import NoOrderBox from "@/components/Boxs/NoOrderBox";
import OrderBox from "@/components/Boxs/OrderBox";
import SubmitOrderBox from "@/components/Boxs/SubmitOrderBox";
import FoodBox from "@/components/Boxs/FoodBox";
import Backdrop from "@/components/Backdrop/Backdrop";

export default function Home() {
  // Hooks
  const [isSubmittedOrder, setIsSubmittedOrder] = useState(false);
  const [comment, setComment] = useState("");
  const router = useRouter();

  // !localStorage.getItem("isLoggedIn") && router.push("/login");

  return (
    <>
      <OrderListProvider>
        <Navbar />

        <div className="bg-red-200 320x:w-full 320x:min-h-screen 320x:flex 320x:flex-col-reverse 320x:flex-nowrap 320x:justify-end 320x:items-center">
          <div
            className="overflow-auto bg-blue-300 320x:w-full 320x:flex 320x:flex-col 320x:justify-start 320x:items-center"
            style={{ height: "572px" }}
          >
            {!isSubmittedOrder ? (
              <>
                <OrderBox
                  comment={comment}
                  setComment={setComment}
                  setIsSubmittedOrder={setIsSubmittedOrder}
                />
                <NoOrderBox />
              </>
            ) : (
              <SubmitOrderBox comment={comment} />
            )}
          </div>

          <FoodBox />
        </div>
      </OrderListProvider>
    </>
  );
}
