import { TLoginActions } from "@/types/loginActions";
import { ILoginStates } from "@/types/loginStates";

export const initialLoginStates: ILoginStates = {
  phone: "",
  isPhoneValid: false,
  code: "",
  isValidCode: false,
  generatedCode: null,
  showTimer: 0,
  isShowErrorBox: false,
  errorMsg: "",
  isShowBackdrop: false,
};

export const loginReducer = (
  state: ILoginStates,
  action: TLoginActions
): ILoginStates => {
  switch (action.type) {
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_CODE":
      return { ...state, code: action.payload };
    case "SET_IS_VALID_CODE":
      return { ...state, isValidCode: action.payload };
    case "SET_GENERATED_CODE":
      return { ...state, generatedCode: action.payload };
    case "SET_SHOW_TIMER":
      return { ...state, showTimer: action.payload };
    case "SET_IS_SHOW_ERROR_BOX":
      return { ...state, isShowErrorBox: action.payload };
    case "SET_ERROR_MSG":
      return { ...state, errorMsg: action.payload };
    case "SET_IS_SHOW_BACKDROP":
      return { ...state, isShowBackdrop: action.payload };
    default:
      return state;
  }
};
