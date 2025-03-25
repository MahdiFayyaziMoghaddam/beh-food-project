"use client";

import { useOrderListContext } from "@/contexts/OrderListContext";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

interface IChangeBtn {
  value?: number;
  className?: string;
  orderID?: string | number;
  onRemove?: () => void;
  onChange?: (value: number) => void;
}

export default function ChangeBtn({
  className,
  onRemove = () => null,
  value = 1,
  onChange = () => null,
  orderID,
}: IChangeBtn) {
  const [quantity, setQuantity] = useState<number>(value);
  const { orderList, setOrderList } = useOrderListContext();

  useEffect(() => {
    orderList.find((orderItem) => {
      if (orderItem.id === orderID) {
        setQuantity(orderItem.quantity);
      }
    });
  }, [orderList]);

  useEffect(() => {
    if (quantity <= 0) {
      onRemove();
    } else {
      onChange(quantity);
    }
  }, [quantity]);

  return (
    <div
      className={`flex flex-nowrap justify-center gap-2 items-center h-6 border-primary border-[0.2px] rounded-[5px] select-none ${className}`}
    >
      <button
        onClick={() => setQuantity((prev) => prev + 1)}
        className="flex justify-center items-center p-1 text-primary cursor-pointer"
      >
        <FiPlus />
      </button>

      <p className="h-full w-auto px-[2px] text-primary text-[16px] font-vazir-400 text-center leading-[25px]">
        {quantity}
      </p>

      <button
        onClick={() => setQuantity((prev) => prev - 1)}
        className="flex justify-center items-center p-1 text-primary cursor-pointer"
      >
        <FiMinus />
      </button>
    </div>
  );
}
