import React from 'react'
import TopCard from "@/components/TopCard";

const StorageCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <TopCard
        title="Total Storage"
        value={"1"}
        postfix={"(in TB)"}
      />
      <TopCard
        title="Used Space"
        value={"0.025"}
        postfix={"(in TB)"}
      />
      <TopCard
        title="Connected Devices"
        value="1"
      />
      <TopCard
        title="Storage Alerts"
        value="0"
        valueColor={"text-red-500"}
      />
    </div>
  )
}
export default StorageCardContainer
