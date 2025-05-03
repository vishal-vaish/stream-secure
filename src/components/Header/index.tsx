import React from 'react'
import {Bell} from "lucide-react";
import {Button} from "@/components/ui/button";
import Theme from "@/components/theme";

type Props = {
  title: string
}

const Header = (props:Props) => {
  return (
    <header className="p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row justify-between gap-4 items-center pl-14 md:pl-0">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white m-0">
          {props.title}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Theme/>
            <Button
              variant={"link"}
              className="relative p-2 text-gray-500 rounded-full dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
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
