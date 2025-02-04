import React, { createContext, useEffect, useState, useContext } from 'react'

const OrderContext = createContext<any>([])

export const OrderListProvider = ({ children }:any) => {
  const [orderList, setOrderList] = useState([]);

  // useEffect(()=>{
  //   setOrderList(orderList)
  // },[orderList])

  return (
    <OrderContext.Provider value={{orderList, setOrderList}}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};