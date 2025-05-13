"use client";

import {createContext, ReactNode, useEffect, useState} from "react";
import {BreadcrumbItemType} from "@/lib/types";

export type SearchTermType = {
  value: string;
  type: "input" | "date";
}

export interface NavbarDetailsContextType {
  searchTerm: SearchTermType;
  setSearchTerm: (term: SearchTermType) => void;
  navbarTitle: string;
  setNavbarTitle: (navbarTitle: string) => void;
  breadcrumbItems: BreadcrumbItemType[];
  setBreadcrumbItems: (breadcrumbItems: BreadcrumbItemType[]) => void;
}

export const NavbarDetailsContext = createContext<NavbarDetailsContextType | null>(null);

export const NavbarDetailsProvider = ({ children }: {children:ReactNode}) => {
  const [searchTerm, setSearchTerm] = useState<SearchTermType>({
    value:"",
    type: "input",
  });
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