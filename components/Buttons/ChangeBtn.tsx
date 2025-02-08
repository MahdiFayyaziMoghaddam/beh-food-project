"use client";

import { useOrderListContext } from "@/contexts/OrderListContext";
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
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
      className={`relative flex flex-nowrap justify-between items-center w-[80px] h-6 border-primary border-[0.2px] rounded-[5px] ${className}`}
    >
      <button
        onClick={() => setQuantity((prev) => prev + 1)}
        className="flex justify-center items-center size-6  text-primary"
      >
        <GoPlus />
      </button>

      <p className="h-full w-auto px-[2px] text-primary text-[16px] font-vazir-400 text-center leading-[28px] select">
        {quantity}
      </p>

      <button
        onClick={() => setQuantity((prev) => prev - 1)}
        className="flex justify-center items-center size-6 text-primary"
      >
        <FiMinus />
      </button>
    </div>
  );
}
