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
