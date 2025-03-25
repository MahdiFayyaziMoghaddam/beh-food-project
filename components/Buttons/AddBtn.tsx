"use client";
import { useHomeStatesContext } from "@/contexts/HomeStatesContext";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";

interface IAddBtn {
  className?: string;
  size?: "lg" | "sm";
  onClick?: () => void;
}

export default function AddBtn({
  className,
  size = "sm",
  onClick = () => null,
}: IAddBtn) {
  const [onHover, setOnHover] = useState(false);
  const { state } = useHomeStatesContext();
  return (
    <>
      <div className={`${className}`}>
        <button
          className={`flex justify-center items-center duration-150 ${
            size === "lg" ? "w-12 h-12" : "w-6 h-6"
          } ${
            onHover
              ? "bg-[#F6510B] border-[#FFFFFF] text-white"
              : "bg-white border-[#F6510B] text-primary"
          } ${
            size === "lg"
              ? "border-[0.4px] rounded-[10px]"
              : "border-[0.2px] rounded-[5px]"
          } cursor-pointer`}
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={() => {
            onClick();
            if (typeof window !== "undefined" && !state.isSubmittedOrderList) {
              if (
                Math.round(
                  +getComputedStyle(document.documentElement).width.replace(
                    "px",
                    ""
                  )
                ) >= 850
              ) {
                window.scrollTo(0, 0);
              } else {
                window.scrollTo(0, 99000);
              }
            }
          }}
        >
          <LuPlus fontSize={size === "lg" ? 40 : 20} />
        </button>
      </div>
    </>
  );
}
