"use client";

import { useMemo, useReducer, Dispatch } from "react";
import { useRouter } from "next/navigation";
import ErrorModal from "@/components/Modal/ErrorModal";
import { Backdrop, CircularProgress } from "@mui/material";
import { ILoginStates } from "@/types/loginStates";
import { TLoginActions } from "@/types/loginActions";
import Image from "@/components/Image/Image";
import { initialLoginStates, loginReducer } from "@/stores/loginStore";

export default function Login() {
  // Hooks
  const [state, dispatch]: [ILoginStates, Dispatch<TLoginActions>] = useReducer(
    loginReducer,
    initialLoginStates
  );

  const phoneRegex = /^(\+98|0)?9\d{9}$/;
  const router = useRouter();

  // Set inputs value in state
  const onInputChange = (e: { target: { value: string } }) => {
    !state.isPhoneValid
      ? dispatch({ type: "SET_PHONE", payload: e.target.value })
      : dispatch({ type: "SET_CODE", payload: e.target.value });
  };

  // Generate code with 5 length
  const generateCode = async () => {
    let code = Math.floor(Math.random() * 100000);
    while (code < 10000) {
      code = Math.floor(Math.random() * 100000);
    }

    dispatch({ type: "SET_IS_SHOW_BACKDROP", payload: true });
    await new Promise((resolve) =>
      setTimeout(() => {
        dispatch({ type: "SET_IS_SHOW_BACKDROP", payload: false });
        dispatch({ type: "SET_GENERATED_CODE", payload: code });
        dispatch({ type: "SET_SHOW_TIMER", payload: 120 });
        resolve(null);
      }, 3000)
    ).then(() => {
      alert(`کد فعالسازی: ${code}`);
    });
  };

  // Code timeout timer
  useMemo(() => {
    let timer = state.showTimer;
    const intervalTimer = setInterval(() => {
      timer > 0 &&
        (timer--, dispatch({ type: "SET_SHOW_TIMER", payload: timer }));
      timer === 0 &&
        (dispatch({ type: "SET_GENERATED_CODE", payload: null }),
        dispatch({ type: "SET_SHOW_TIMER", payload: 0 }),
        clearInterval(intervalTimer));
    }, 1000);
  }, [state.showTimer]);

  // Validation data from inputs
  const dataValidation = () => {
    if (!state.isPhoneValid) {
      if (phoneRegex.test(state.phone)) {
        dispatch({ type: "SET_IS_VALID_PHONE", payload: true });
        generateCode();
      } else {
        dispatch({ type: "SET_PHONE", payload: "" });
        alert("شماره تلفن وارد شده نامعتبر می باشد!");
      }
    } else {
      if (state.generatedCode !== null && +state.code === state.generatedCode) {
        router.push("/");
        if (typeof window !== "undefined")
          window.localStorage.setItem("isLoggedIn", "true");
      } else {
        alert("کد وارد شده نامعتبر می باشد!");
      }
    }
  };

  return (
    <div className="relative bg-white w-full min-h-screen">
      {useMemo(() => {
        return (
          state.isShowBackdrop && (
            <Backdrop
              sx={{ zIndex: 999 }}
              open={state.isShowBackdrop}
              onClick={() =>
                dispatch({ type: "SET_IS_SHOW_BACKDROP", payload: false })
              }
            >
              <CircularProgress sx={{ color: "#F6510B" }} />
            </Backdrop>
          )
        );
      }, [state.isShowBackdrop])}

      {useMemo(() => {
        return (
          <div
            className="relative flex flex-col items-center justify-start w-[280px] h-[326px]"
            style={{ left: "calc(50vw - 140px)", top: "calc(50vh - 163px)" }}
          >
            <div className="w-[117px] h-[164px] flex flex-col justify-between items-center select-none">
              <Image src="images/favicon.svg" alt="logo" />
              <div className="w-full h-[36px] flex justify-center items-center">
                <span className="mr-[2px] text-[24px] font-vazir-400">BEH</span>
                <span className="text-primary ml-[2px] text-[24px] font-vazir-700">
                  FOOD
                </span>
              </div>
            </div>

            <input
              type={!state.isPhoneValid ? "text" : "number"}
              placeholder={
                !state.isPhoneValid ? `شماره تلفن همراه` : "کد فعالسازی"
              }
              className=" placeholder:text-[#49454F] border-[0.2px] outline-[#79747E] py-4 px-3 rounded-[8px] font-medium text-[16px] w-[280px] h-[58px] mt-[49px] font-vazir-600"
              value={!state.isPhoneValid ? state.phone : state.code}
              onChange={(e) => onInputChange(e)}
              style={{ direction: "ltr", textAlign: "right" }}
              onKeyUp={(e) => e.keyCode === 13 && dataValidation()}
            />
            <button
              className=" w-[280px] h-[47px] py-[10px] px-4 bg-primary text-center text-white rounded-[8px] mt-2 text-[14px] font-vazir-700 select-none cursor-pointer"
              onClick={dataValidation}
            >
              {!state.isPhoneValid ? "دریافت کدفعالسازی" : "ورود"}
            </button>
          </div>
        );
      }, [state.isPhoneValid, state.phone, state.code])}

      {useMemo(() => {
        return (
          state.isPhoneValid && (
            <button
              className={`absolute w-[280px] h-[47px] text-[#1C1B1F] top-[90%] font-vazir-700 opacity-[38%] text-[14px] select-none cursor-pointer ${
                state.showTimer ? "hover:cursor-auto" : "hover:underline"
              }`}
              style={{ direction: "rtl", left: "calc(50vw - 140px)" }}
              onClick={(e) => state.showTimer === 0 && generateCode()}
            >
              ارسال مجدد کد فعالسازی (
              {Math.floor(state.showTimer / 60)
                .toString()
                .padStart(2, "0")}
              :{(state.showTimer % 60).toString().padStart(2, "0")})
            </button>
          )
        );
      }, [state.showTimer, state.isPhoneValid])}
    </div>
  );
}
