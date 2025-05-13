import React from 'react'
import TopCard from "@/components/TopCard";
import {AlertTriangle, GaugeCircle, HardDrive, Router} from "lucide-react";

const StorageCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <TopCard
        title="Total Storage"
        value={"1"}
        postfix={"(in TB)"}
        icon={HardDrive}
        iconColor="text-blue-600 dark:text-blue-400"
        iconBackgroundColor="dark:bg-blue-900/20 bg-blue-100/40"
      />
      <TopCard
        title="Used Space"
        value={"0.025"}
        postfix={"(in TB)"}
        icon={GaugeCircle}
        iconColor="text-orange-600 dark:text-orange-400"
        iconBackgroundColor="dark:bg-orange-900/20 bg-orange-100/40"
      />
      <TopCard
        title="Connected Devices"
        value="1"
        icon={Router}
        iconColor="text-green-600 dark:text-green-400"
        iconBackgroundColor="dark:bg-green-900/20 bg-green-100/40"
      />
      <TopCard
        title="Storage Alerts"
        value="0"
        valueColor={"text-red-500"}
        icon={AlertTriangle}
        iconColor="text-red-600 dark:text-red-400"
        iconBackgroundColor="dark:bg-red-900/20 bg-red-100/40"
      />
    </div>
  )
}
export default StorageCardContainer
