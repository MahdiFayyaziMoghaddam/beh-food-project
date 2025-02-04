"use client";

import Link from "next/link";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'BEH FOOD - 404',
//   description: 'From BEH FOOD'
// }

export const metadata: Metadata = {
  title: "wubfuewbfueb",
};

export default function notFound() {
  return (
    <div className="flex justify-start items-center flex-col w-full min-h-screen bg-white select-none">
      <h1
        className="text-primary text-[35px] 320x:text-[25px] font-vazir-700 mt-[200px] 320x:mt-[250px]"
        style={{ direction: "rtl" }}
      >
        صفحه مورد نظر یافت نشد :(
      </h1>
      <h3 className="text-[25px] 320x:text-[20px] font-vazir-600 mt-4">
        خطای 404
      </h3>
      <Link
        href="/"
        className="text-[18px] 320x:text-[16px] font-vazir-500 underline italic mt-4"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
