"use client";

import {createContext, ReactNode, useEffect, useState} from "react";
import {BreadcrumbItemType} from "@/lib/types";
import {usePathname} from "next/navigation";

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
  isToShowDatePicker: boolean;
  setIsToShowDatePicker: (isToShowDatePicker: boolean) => void;
}

export const NavbarDetailsContext = createContext<NavbarDetailsContextType | null>(null);

export const NavbarDetailsProvider = ({children}: { children: ReactNode }) => {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState<SearchTermType>({
    value: "",
    type: "input",
  });
  const [navbarTitle, setNavbarTitle] = useState<string>("");
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItemType[]>([]);
  const [isToShowDatePicker, setIsToShowDatePicker] = useState<boolean>(false);

  useEffect(() => {
    const validDatePickerPaths = ["/recordings"];
    const validDatePickerDynamicPaths = [
      /^\/nvr\/[^/]+\/channel\/[^/]+\/recording$/,
      /^\/nvr\/[^/]+\/recording$/,
      /^\/channels\/[^/]+\/recording$/
    ];

    const isStaticMatch = validDatePickerPaths.includes(pathname);
    const isDynamicMatch = validDatePickerDynamicPaths.some(pattern => pattern.test(pathname));

    setIsToShowDatePicker(isStaticMatch || isDynamicMatch);
  }, [pathname]);

  return (
    <NavbarDetailsContext.Provider value={{
      searchTerm,
      setSearchTerm,
      navbarTitle,
      setNavbarTitle,
      breadcrumbItems,
      setBreadcrumbItems,
      isToShowDatePicker,
      setIsToShowDatePicker,
    }}>
      {children}
    </NavbarDetailsContext.Provider>
  )
}