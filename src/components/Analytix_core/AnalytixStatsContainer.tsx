import React from 'react'
import {Activity, BarChart3, TimerReset, Footprints} from "lucide-react";
import {motionData} from "@/lib/data";
import TopCard from "@/components/TopCard";

const AnalytixStatsContainer = ({motionChange}: { motionChange: any }) => {
  const totalMotionEvents = motionData.reduce(
    (sum, item) => sum + item["Ground Floor Lobby-1"] + item["Ground Floor Lobby-2"],
    0,
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <TopCard
        title="Total Events"
        value={"247"}
        icon={Activity}
        iconColor="text-green-600 dark:text-green-400"
        iconBackgroundColor="dark:bg-green-900/20 bg-green-100/40"
        changeValue={"12.4%"}
        changeIsPositive={true}
        changeText={"vs. previous 7 days"}
      />

      <TopCard
        title="Motion Events"
        value={(totalMotionEvents).toString()}
        icon={BarChart3}
        iconColor="text-red-600 dark:text-red-400"
        iconBackgroundColor="dark:bg-red-900/20 bg-red-100/40"
        changeIsPositive={motionChange.isIncrease}
        changeValue={`${motionChange.value}%`}
        changeText="vs. previous day"
      />

      <TopCard
        title="Walking Behaviors"
        value="142"
        icon={Footprints}
        iconColor="text-orange-600 dark:text-orange-400"
        iconBackgroundColor="dark:bg-orange-900/20 bg-orange-100/40"
        changeIsPositive={true}
        changeValue={"5.2%"}
        changeText="vs. previous week"
      />

      <TopCard
        title="System Uptime"
        value="99.8%"
        icon={TimerReset}
        iconColor="text-blue-600 dark:text-blue-400"
        iconBackgroundColor="dark:bg-blue-900/20 bg-blue-100/40"
        changeIsPositive={true}
        changeValue="0.2%"
        changeText="vs. previous month"
      />
    </div>
  )
}
export default AnalytixStatsContainer