import React, {ReactNode} from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface Props {
  content: string;
  children: ReactNode;
}

const TooltipWrapper = (props:Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        <TooltipContent>
          {props.content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
export default TooltipWrapper
