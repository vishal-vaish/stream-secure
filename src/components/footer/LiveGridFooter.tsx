import React from 'react'
import Image from "next/image";
import Logo from "@/components/Sidebar/Logo";
import {Button} from "@/components/ui/button";
import {ArrowBigLeft, FullscreenIcon} from "lucide-react";
import Theme from "@/components/theme";
import {useRouter} from "next/navigation";
import TooltipWrapper from "@/components/TooltipWrapper";

type Props = {
  enterFullscreen?: () => void;
}

const LiveGridFooter = (props:Props) => {
  const router = useRouter();

  return (
    <footer
      className="px-5 bg-white border-t text-gray-500 text-base  dark:bg-gray-900 dark:text-gray-200">
      <div className="my-2 flex justify-between items-center  w-full">
      <div className="flex items-center space-x-2">
        <TooltipWrapper
          content={"Back"}
        >
        <Button
          variant="no-background"
          size="icon"
          onClick={() => router.back()}
        >
          <ArrowBigLeft className="w-5 h-5" />
        </Button>
        </TooltipWrapper>
        <Theme/>
        <TooltipWrapper
          content={"Full Screen"}
        >
          <Button
            variant="no-background"
            size="icon"
            onClick={props.enterFullscreen}
          >
            <FullscreenIcon className="w-5 h-5" />
          </Button>
        </TooltipWrapper>
      </div>

      <div>
        Powered by
        <TooltipWrapper
          contentRenderer={
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
          }
        >
          <span className="ml-1 text-blue-600 hover:underline cursor-pointer dark:text-blue-400">
            Skytel
          </span>
        </TooltipWrapper>
      </div>
      <Logo
        width={100}
      />
      </div>
    </footer>
  )
}
export default LiveGridFooter
