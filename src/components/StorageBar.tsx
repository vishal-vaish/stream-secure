import React from "react"
import {cn} from "@/lib/utils";

type Props = {
  used: number;
  total: number;
  className?: string;
  hideTotal?: boolean;
}

const StorageBar = (
  {
    used,
    total,
    className,
    hideTotal = true,
  }: Props) => {
  const percentage = Math.min(Math.round((used / total) * 100), 100);

  const getBarColor = () => {
    if (percentage < 50) return "bg-green-500";
    if (percentage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-300 mb-1">
        <span>{used.toFixed(2)} TB used</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`${getBarColor()} h-2 rounded-full transition-all duration-300`}
          style={{width: `${percentage}%`}}
        ></div>
      </div>
      {hideTotal && (
        <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
          <span>{total.toFixed(2)} TB total</span>
        </div>
      )}
    </div>
  )
}
export default StorageBar
