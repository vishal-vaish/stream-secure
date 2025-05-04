import {useContext} from "react";
import {NavbarDetailsContext, NavbarDetailsContextType} from "@/provider/NavbarDetailsProvider";

export const useNavbarDetails = (): NavbarDetailsContextType => {
  const context = useContext(NavbarDetailsContext);
  if (!context) {
    throw new Error('useNavbarDetails must be used within a NavbarDetailsProvider');
  }
  return context;
};