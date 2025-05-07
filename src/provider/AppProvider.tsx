import React from 'react'
import {ThemeProvider} from "next-themes";
import {NavbarDetailsProvider} from "@/provider/NavbarDetailsProvider";
import {Toaster} from "sonner";

const AppProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <NavbarDetailsProvider>
         {children}
      </NavbarDetailsProvider>
      <Toaster />
    </ThemeProvider>
  )
}
export default AppProvider
