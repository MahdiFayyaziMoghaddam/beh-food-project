"use client";

import {
  useState,
  useMemo
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ErrorBox from "@/components/ErrorBox/ErrorBox";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Login() {
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
  const [codeInput, setCodeInput] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<number | null>(null);
  const [showTimer, setShowTimer] = useState<number>(0); // ==> second
  const [isShowErrorBox, setIsShowErrorBox] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState(""); // errorMsg for ErrorBox
  const [isShowProgress, setIsShowProgress] = useState<boolean>(false);
  const phoneRegex = /^(\+98|0)?9\d{9}$/;
  const router = useRouter();

  const onInputChange = (e: { target: { value: string } }) => {
    !isPhoneValid
      ? setPhoneInput(e.target.value)
      : setCodeInput(e.target.value);
  };

  const generateCode = () => {
    let code = Math.floor(Math.random() * 100000);
    while (code < 10000) {
      code = Math.floor(Math.random() * 100000);
    }

    setIsShowProgress(true);
    setTimeout(() => {
      setIsShowProgress(false);
      setGeneratedCode(code);
      setErrorMsg(`کد فعالسازی: ${code}`);
      setIsShowErrorBox(true);
      setShowTimer(20);
    }, 3000);
  };

  useMemo(() => {
    let timer = showTimer;
    const intervalTimer = setInterval(() => {
      timer > 0 && (timer--, setShowTimer(timer));
      timer === 0 &&
        (setGeneratedCode(null), setShowTimer(0), clearInterval(intervalTimer));
    }, 1000);
  }, [showTimer]);

  const dataValidation = () => {
    if (!isPhoneValid) {
      if (phoneRegex.test(phoneInput)) {
        setIsPhoneValid(true);
        generateCode();
      } else {
        setPhoneInput("");
        setIsShowErrorBox(true);
        setErrorMsg("شماره تلفن وارد شده نامعتبر می باشد!");
      }
    } else {
      if (generatedCode !== null && +codeInput === generatedCode) {
        router.push("/");
        localStorage.setItem("isLoggedIn", "true");
      } else {
        setIsShowErrorBox(true);
        setErrorMsg("کد وارد شده نامعتبر می باشد!");
        setCodeInput("");
      }
    }
  };

  // redirect to home if you have logged in
  // localStorage.getItem("isLoggedIn") === "true" && router.push("/");

  return (
    <div className="relative bg-white w-full min-h-screen">
      {useMemo(() => {
        return (
          <ErrorBox
            open={isShowErrorBox}
            setOpen={setIsShowErrorBox}
            msg={errorMsg}
          />
        );
      }, [isShowErrorBox, errorMsg])}

      {useMemo(() => {
        return (
          isShowProgress && (
            <Backdrop
              sx={{ zIndex: 999 }}
              open={isShowProgress}
              onClick={() => setIsShowProgress(false)}
            >
              <CircularProgress sx={{ color: "#F6510B" }} />
            </Backdrop>
          )
        );
      }, [isShowProgress])}

      {useMemo(() => {
        return (
          <div
            className="relative flex flex-col items-center justify-start w-[280px] h-[326px]"
            style={{ left: "calc(50vw - 140px)", top: "calc(50vh - 163px)" }}
          >
            <div className="w-[117px] h-[164px] flex flex-col justify-between items-center">
              <img
                src="images/icon.svg"
                alt="logo"
                className="w-full h-[117px]"
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="w-full h-[36px] flex justify-center items-center select-none">
                <span className="mr-[2px] text-[24px] font-vazir-400">BEH</span>
                <span className="text-primary ml-[2px] text-[24px] font-vazir-700">
                  FOOD
                </span>
              </div>
            </div>

            <input
              type={!isPhoneValid ? "text" : "number"}
              placeholder={!isPhoneValid ? `شماره تلفن همراه` : "کد فعالسازی"}
              className=" placeholder:text-[#49454F] border-[0.2px] outline-[#79747E] py-4 px-3 rounded-[8px] font-medium text-[16px] w-[280px] h-[58px] mt-[49px] font-vazir-600"
              value={!isPhoneValid ? phoneInput : codeInput}
              onChange={(e) => onInputChange(e)}
              style={{ direction: "ltr", textAlign: "right" }}
              onKeyUp={(e) => e.keyCode === 13 && dataValidation()}
            />
            <button
              className=" w-[280px] h-[47px] py-[10px] px-4 bg-primary text-center text-white rounded-[8px] mt-2 text-[14px] font-vazir-700 select-none"
              onClick={dataValidation}
            >
              {!isPhoneValid ? "دریافت کدفعالسازی" : "ورود"}
            </button>
          </div>
        );
      }, [isPhoneValid, phoneInput, codeInput])}

      {useMemo(() => {
        return (
          isPhoneValid && (
            <button
              className={`absolute w-[280px] h-[47px] text-[#1C1B1F] top-[90%] font-vazir-700 opacity-[38%] text-[14px] select-none ${
                showTimer ? "hover:cursor-auto" : "hover:underline"
              }`}
              style={{ direction: "rtl", left: "calc(50vw - 140px)" }}
              onClick={(e) => showTimer === 0 && generateCode()}
            >
              ارسال مجدد کد فعالسازی (
              {Math.floor(showTimer / 60)
                .toString()
                .padStart(2, "0")}
              :{(showTimer % 60).toString().padStart(2, "0")})
            </button>
          )
        );
      }, [showTimer, isPhoneValid])}
    </div>
  );
}
