// import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <title>BEH FOOD - Login</title>
      <link rel="shortcut icon" href="images/icon.svg" type="image/x-icon" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
