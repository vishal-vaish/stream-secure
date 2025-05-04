import React from 'react'
import {ThemeProvider} from "next-themes";
import {NavbarDetailsProvider} from "@/provider/NavbarDetailsProvider";

const AppProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NavbarDetailsProvider>
         {children}
      </NavbarDetailsProvider>
    </ThemeProvider>
  )
}
export default AppProvider
