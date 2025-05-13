import React from 'react'
import {mockedChannelsData, mockedNVRData} from "@/lib/data";
import TopCard from "@/components/TopCard";
import {
  AlertTriangle,
  Camera,
  HardDrive,
  ServerIcon
} from "lucide-react";

const NVRCardContainer = () => {
  const totalChannelCount = mockedChannelsData.length;
  const totalNVRCount = mockedNVRData.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <TopCard
        title="Total NVRs"
        value={(totalNVRCount).toString()}
        icon={ServerIcon}
        iconColor="text-blue-600 dark:text-blue-400"
        iconBackgroundColor="dark:bg-blue-900/20 bg-blue-100/40"
      />
      <TopCard
        title="Total Channels"
        value={(totalChannelCount).toString()}
        icon={Camera}
        iconColor="text-green-600 dark:text-green-400"
        iconBackgroundColor="dark:bg-green-900/20 bg-green-100/40"
      />
      <TopCard
        title="Total Capacity"
        postfix={"(in TB)"}
        value="1"
        icon={HardDrive}
        iconColor="text-purple-600 dark:text-purple-400"
        iconBackgroundColor="dark:bg-purple-900/20 bg-purple-100/40"
      />
      <TopCard
        title="Active Alerts"
        value="3"
        valueColor={"text-red-500"}
        icon={AlertTriangle}
        iconColor="text-red-600 dark:text-red-400"
        iconBackgroundColor="dark:bg-red-900/20 bg-red-100/40"
      />
    </div>
  )
}
export default NVRCardContainer
