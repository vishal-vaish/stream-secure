"use client";

import React from 'react'
import {ThemeProvider} from "next-themes";
import {NavbarDetailsProvider} from "@/provider/NavbarDetailsProvider";
import {Toaster} from "sonner";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const AppProvider = ({children}: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <NavbarDetailsProvider>
          {children}
        </NavbarDetailsProvider>
        <Toaster/>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default AppProvider
