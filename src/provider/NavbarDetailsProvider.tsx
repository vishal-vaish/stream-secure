"use client";

import {createContext, ReactNode, useEffect, useState} from "react";
import {BreadcrumbItemType} from "@/lib/types";

export interface NavbarDetailsContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  navbarTitle: string;
  setNavbarTitle: (navbarTitle: string) => void;
  breadcrumbItems: BreadcrumbItemType[];
  setBreadcrumbItems: (breadcrumbItems: BreadcrumbItemType[]) => void;
}

export const NavbarDetailsContext = createContext<NavbarDetailsContextType | null>(null);

export const NavbarDetailsProvider = ({ children }: {children:ReactNode}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [navbarTitle, setNavbarTitle] = useState<string>("");
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItemType[]>([]);

  return (
    <NavbarDetailsContext.Provider value={{
      searchTerm,
      setSearchTerm,
      navbarTitle,
      setNavbarTitle,
      breadcrumbItems,
      setBreadcrumbItems
    }}>
      {children}
    </NavbarDetailsContext.Provider>
  )
}