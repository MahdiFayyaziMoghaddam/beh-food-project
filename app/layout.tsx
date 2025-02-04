import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BEH FOOD',
  description: 'From BEH FOOD'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="images/icon.svg" type="image/x-icon" />
      </head>
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
