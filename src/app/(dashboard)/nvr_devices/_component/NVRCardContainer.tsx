import React from 'react'
import NVRCard from "@/app/(dashboard)/nvr_devices/_component/NVRCard";

const NVRCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <NVRCard
        title="Total NVRs"
        value="4"
      />
      <NVRCard
        title="Total Channels"
        value="8"
      />
      <NVRCard
        title="Total Capacity"
        postfix={"(in TB)"}
        value="250"
      />
      <NVRCard
        title="Active Alerts"
        value="3"
        valueColor={"text-red-500"}
      />
    </div>
  )
}
export default NVRCardContainer
