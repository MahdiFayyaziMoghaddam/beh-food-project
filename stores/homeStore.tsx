export const initialHomeStates: THomeStates = {
  comment: "",
  isSubmittedOrderList: false,
};

export const homeReducer = (state: THomeStates, action: THomeActions): THomeStates => {
  switch (action.type) {
    case "SET_COMMENT":
      return { ...state, comment: action.payload };
    case "SUBMIT_ORDER_LIST":
      return { ...state, isSubmittedOrderList: true };
  }
};
