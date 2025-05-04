import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import NextTopLoader from "nextjs-toploader";
import AppProvider from "@/provider/AppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logi Scan",
  description: "ANPR Based Traffic Regulating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <title>Logi Scan</title>
      <link rel="icon" href="/logo.png" sizes="any" />
    </head>
    <body className="font-sans">

    <NextTopLoader color="#2564eb" showSpinner={false}/>
     <AppProvider>
        <main >
            {children}
        </main>
        <ToastContainer/>
     </AppProvider>
      </body>
    </html>
  );
}
