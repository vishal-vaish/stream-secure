import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {ArrowDown, ArrowUp, LucideIcon} from "lucide-react";

type Props = {
  title: string;
  value: string;
  valueColor?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBackgroundColor?: string;
  changeIsPositive?: boolean;
  changeValue?: string;
  changeText?: string;
}

const TopCard = (props: Props) => {
  const Icon = props.icon;
  const changeColorClass = props.changeIsPositive ? "text-green-500" : "text-red-500";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-4 pt-2 pb-0">
        <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">{props.title}</h3>
        <div className={cn("rounded-md p-2", props.iconBackgroundColor)}>
          <Icon className={cn("w-6 h-6", props.iconColor)}/>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex items-end gap-2">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">{props.value}</div>
          {props.changeValue !== undefined && (
            <div className={`flex items-center text-xs mb-1 ${changeColorClass}`}>
              {props.changeIsPositive ? (
                <ArrowUp className="h-3 w-3 mr-1"/>
              ) : (
                <ArrowDown className="h-3 w-3 mr-1"/>
              )}
              {props.changeValue}
            </div>
          )}
        </div>
        {props.changeText && <p className="text-xs text-slate-400 dark:text-slate-500">{props.changeText}</p>}

      </CardContent>
    </Card>
  )
}
export default TopCard
