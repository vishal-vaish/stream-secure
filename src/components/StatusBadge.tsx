import React from "react"
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

export type StatusType = "online" | "offline" | "recording";

type Props = {
  status: StatusType;
  className?: string;
}

const StatusBadge = (props:Props) => {
  const statusConfig = {
    online: {
      dotColor: "bg-green-500",
      badgeColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
    },
    offline: {
      dotColor: "bg-red-500",
      badgeColor: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
    },
    recording: {
      dotColor: "bg-blue-500",
      badgeColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
    }
  };

  const getStatusDotColor = (status:StatusType) => {
    return statusConfig[status].dotColor;
  }

  const getStatusColor = (status:StatusType) => {
   return statusConfig[status].badgeColor;
  };

  if(!props.status) return null;

  return (
    <Badge className={cn(getStatusColor(props.status), props.className)}>
      <span className={`w-2 h-2 ${getStatusDotColor(props.status)} rounded-full mr-1.5`}></span>
      <span className="capitalize">{props.status}</span>
    </Badge>
  )
}
export default StatusBadge
