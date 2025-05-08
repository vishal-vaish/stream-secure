import React from 'react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Image from "next/image";
import Logo from "@/components/Sidebar/Logo";
import {Button} from "@/components/ui/button";
import {ArrowBigLeft, Backpack, Bell, LayoutGrid} from "lucide-react";
import Theme from "@/components/theme";
import {useRouter} from "next/navigation";

const LiveGridFooter = () => {
  const router = useRouter();

  return (
    <footer
      className="py-2 bg-white border-t text-gray-500 text-base flex justify-between items-center  w-full dark:bg-gray-900 dark:text-gray-200">
      <div className="flex items-center space-x-2">
        <Button
          variant="no-background"
          onClick={() => router.back()}
        >
          <ArrowBigLeft className="w-5 h-5" />
        </Button>
        <Theme/>
      </div>

      <div>
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
      </div>
      <Logo
        height={10}
      />
    </footer>
  )
}
export default LiveGridFooter
