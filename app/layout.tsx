import { Metadata } from "next";
import Provider from "@/global/Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEH FOOD",
  authors: { name: "Mahdi FayyaziMoghaddam" },
  description: "Created with Nextjs + TypeScript + Tailwindcss",
  icons: "images/favicon.svg",
  keywords: [
    "beh",
    "food",
    "mahdi",
    "BEH",
    "FOOD",
    "PROJECT",
    "project",
    "FayyaziMoghaddam",
    "Mahdi",
    "fayyazi",
    "fayazi",
  ],
  openGraph: {
    title: "BEH FOOD",
    description: "the test project for food shopping and created by MFM :)",
    images: [
      {
        url: "./images/favicon.svg",
        width: 117,
        height: 117,
        alt: "BEH-FOOD",
      },
    ],
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
