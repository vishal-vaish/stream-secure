import React from "react"
import {Badge} from "@/components/ui/badge";

type StatusType = "online" | "offline" | "recording";

type Props = {
  status: StatusType;
}

const StatusBadge = (props:Props) => {
  const getStatusDot = () => {
    switch (props.status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-red-500";
      case "recording":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = () => {
    switch (props.status) {
      case "online":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "offline":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
      case "recording":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <Badge className={getStatusColor()}>
      <span className={`w-2 h-2 ${getStatusDot()} rounded-full mr-1.5`}></span>
      <span className="capitalize">{props.status}</span>
    </Badge>
  )
}
export default StatusBadge
