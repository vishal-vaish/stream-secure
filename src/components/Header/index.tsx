import React from 'react'
import {Bell, LayoutGrid} from "lucide-react";
import {Button} from "@/components/ui/button";
import Theme from "@/components/theme";
import SearchBar from "@/components/Header/SearchBar";
import {useRouter} from "next/navigation";
import TooltipWrapper from "@/components/TooltipWrapper";

type Props = {
  title: string;
}

const Header = (props:Props) => {
  const router = useRouter();
  return (
    <header className="p-3 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row justify-between gap-4 items-center pl-14 md:pl-0">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white m-0">
          {props.title}
        </h1>
        <div className="flex items-center">
          <SearchBar/>
          <div className="flex items-center space-x-2">
            <TooltipWrapper
              content={"Grid Live View"}
            >
            <Button
              variant="no-background"
              onClick={() => router.push("/liveGridMonitor")}
            >
              <LayoutGrid className="w-5 h-5" />
            </Button>
            </TooltipWrapper>
            <Theme/>
            <Button
              variant={"no-background"}
              className="relative p-2 border-0"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1"></span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
