"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { OrderListProvider } from "@/contexts/OrderListContext";
import { HomeStatesProvider } from "@/contexts/HomeStatesContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="images/icon.svg" type="image/x-icon" />
        <title>BEH FOOD</title>
      </head>
      <body className={`${inter.className} min-h-screen relative`}>
        <OrderListProvider>
          <HomeStatesProvider>{children}</HomeStatesProvider>
        </OrderListProvider>
      </body>
    </html>
  );
}
