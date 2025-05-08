import React, {ReactNode} from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface Props {
  content?: string;
  contentRenderer?: ReactNode;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

const TooltipWrapper = (props:Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        <TooltipContent
          side={props.side ?? "top"}
          className="max-w-xs"
        >
          {props.content && props.content}
          {props.contentRenderer && props.contentRenderer}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
export default TooltipWrapper
