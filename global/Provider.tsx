import { HomeStatesProvider } from "@/contexts/HomeStatesContext";
import { OrderListProvider } from "@/contexts/OrderListContext";
import React, { ReactNode } from "react";

interface IProviderProps {
  children: ReactNode;
}
function Provider({ children }: IProviderProps) {
  return (
    <OrderListProvider>
      <HomeStatesProvider>{children}</HomeStatesProvider>
    </OrderListProvider>
  );
}

export default Provider;
