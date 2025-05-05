import React from "react"
import {cn} from "@/lib/utils";

type Props = {
  used: number;
  total: number;
  className?: string;
}

const StorageBar = (props:Props) => {
  const percentage = Math.min(Math.round((props.used / props.total) * 100), 100);

  const getBarColor = () => {
    if (percentage < 50) return "bg-green-500";
    if (percentage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };
  
  return (
    <div className={cn("w-full",props.className)}>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-300 mb-1">
        <span>{props.used.toFixed(1)} TB used</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`${getBarColor()} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
        <span>{props.total.toFixed(1)} TB total</span>
      </div>
    </div>
  )
}
export default StorageBar
