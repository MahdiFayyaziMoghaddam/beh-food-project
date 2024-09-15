'use client'

import Link from "next/link"

export default function notFound() {
  return (
    <div className="flex justify-start items-center flex-col w-full min-h-screen bg-white select-none">
      <h1 className="text-primary text-[35px] font-vazir-700 mt-[200px]">صفحه مورد نظر یافت نشد :(</h1>
      <h3 className="text-[25px] font-vazir-600 mt-4">خطای 404</h3>
      <Link href='/' className="text-[18] font-vazir-500 underline italic mt-4">بازگشت به صفحه اصلی</Link>
    </div>
  )
}
