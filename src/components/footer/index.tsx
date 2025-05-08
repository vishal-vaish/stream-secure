import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-2 text-center bg-white border-t text-gray-500 text-base flex-shrink-0 w-full dark:bg-gray-900 dark:text-gray-200">
      Powered by
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="ml-1 text-blue-600 hover:underline cursor-pointer dark:text-blue-400">
            Skytel
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <Image
                src={"/skytel-logo.png"}
                alt="skytel-logo"
                width={20}
                height={20}
              />
              <a
                href={"https://www.skytelteleservices.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:underline"
              >
                Skytel Teleservices
              </a>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </footer>
  )
}
export default Footer
