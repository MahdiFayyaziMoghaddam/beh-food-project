import { TOrderItem } from '@/types/orderItem';
import React, { createContext, useState, useContext } from 'react'

interface IOrderContextState {
  orderList: TOrderItem[];
  setOrderList: React.Dispatch<React.SetStateAction<TOrderItem[]>>;
}

const defaultContextValue: IOrderContextState = {
  orderList: [],
  setOrderList: () => null
};

const OrderContext = createContext<IOrderContextState>(defaultContextValue);

interface IOrderListProvider {
  children: React.ReactNode;
}

export const OrderListProvider = ({ children }: IOrderListProvider) => {
  const [orderList, setOrderList] = useState<TOrderItem[]>([]);

  return (
    <OrderContext.Provider value={{orderList, setOrderList}}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderListContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderListProvider');
  }
  return context;
};