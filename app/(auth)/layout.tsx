import type { Metadata } from "next";
import { rubik } from "@/app/ui/fonts";
import "@/app/globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>TuneHub</title>
      <body className={rubik.className}>
        {children}
        <Script src="https://kit.fontawesome.com/49b78285c5.js" crossOrigin="anonymous" async></Script>
      </body>
    </html>
  );
}

