import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowDown, ArrowUp} from "lucide-react";
import {cn} from "@/lib/utils";
import {motionData} from "@/lib/data";

const AnalytixStatsContainer = ({motionChange, storageChange}:{motionChange:any; storageChange:any}) => {
  const totalMotionEvents = motionData.reduce(
    (sum, item) => sum + item["Ground Floor Lobby-1"] + item["Ground Floor Lobby-2"],
    0,
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <AnalytixStatsCardContainer
        title="Total Events"
        value={"247"}
        change="12.4%"
        isIncrease={true}
        changePeriod="vs. previous 7 days"
        changeColor="text-green-500"
      />

      <AnalytixStatsCardContainer
        title="Motion Events"
        value={(totalMotionEvents).toString()}
        change={`${motionChange.value}%`}
        isIncrease={motionChange.isIncrease}
        changePeriod="vs. previous day"
      />

      <AnalytixStatsCardContainer
        title="Avg. Storage Growth"
        value="0.29 TB/day"
        change={`${storageChange.value}%`}
        isIncrease={storageChange.isIncrease}
        changePeriod="vs. previous day"
      />

      <AnalytixStatsCardContainer
        title="System Uptime"
        value="99.8%"
        change="0.2%"
        isIncrease={true}
        changePeriod="vs. previous month"
        changeColor="text-green-500"
      />
    </div>
  )
}
export default AnalytixStatsContainer

type Props = {
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
  changePeriod: string;
  changeColor?: string;
}

const AnalytixStatsCardContainer = (props: Props) => {
  return (
    <Card>
      <CardHeader className="py-4 pb-2">
        <CardTitle className="text-sm font-medium">{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2">
          <div className="text-2xl font-bold">{props.value}</div>
          <div className={cn(
            "flex items-center text-xs mb-1",
            props.changeColor
              ? props.changeColor
              : props.isIncrease
                ? "text-green-500"
                : "text-red-500"
          )}>
            {props.isIncrease ? (
              <ArrowUp className="h-3 w-3 mr-1"/>
            ) : (
              <ArrowDown className="h-3 w-3 mr-1"/>
            )}
            {props.change}
          </div>
        </div>
        <p className="text-xs text-slate-500">{props.changePeriod}</p>
      </CardContent>
    </Card>
  )
}
