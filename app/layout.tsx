import { Metadata } from "next";
import Provider from "@/global/Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEH FOOD",
  authors: [{ name: "Mahdi FayyaziMoghaddam" }],
  description:
    "Test project for food shopping, created with Next.js, TypeScript, and Tailwind CSS",
  icons: "./images/favicon.svg",
  keywords: [
    "BEH FOOD",
    "food",
    "shopping",
    "project",
    "food project",
    "MFM",
    "Mahdi FayyaziMoghaddam",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "BEH FOOD",
    description: "The test project for food shopping, created by MFM :)",
    url: "https://beh-food.liara.run",
    images: [
      {
        url: "/images/favicon.svg",
        width: 117,
        height: 117,
        alt: "BEH FOOD Logo",
      },
    ],
    type: "website",
    siteName: "BEH FOOD",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // برای تنظیم حساب توییتر خود
    title: "BEH FOOD",
    description: "Food shopping test project, created by MFM :)",
    images: "/images/favicon.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="translated-rtl">
      <body cz-shortcut-listen="true" className={`min-h-screen relative`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
