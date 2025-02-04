import React, { createContext, useState, useContext } from 'react'

interface IOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface IOrderContextState {
  orderList: IOrderItem[];
  setOrderList: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
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
  const [orderList, setOrderList] = useState<IOrderItem[]>([]);

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