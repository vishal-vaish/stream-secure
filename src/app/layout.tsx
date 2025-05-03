import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import NextTopLoader from "nextjs-toploader";
import {ThemeProvider} from "@/components/theme-provider";

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
      <body className={inter.className}>
      <NextTopLoader color="#2564eb" showSpinner={false}/>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSidebar />
          <main>
              {children}
          </main>
        </SidebarProvider>
        <ToastContainer/>
      </ThemeProvider>
      </body>
    </html>
  );
}
