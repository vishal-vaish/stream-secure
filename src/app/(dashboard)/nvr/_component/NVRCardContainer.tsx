import React from 'react'
import NVRCard from './NVRCard'
import {mockedChannelsData, mockedNVRData} from "@/lib/data";

const NVRCardContainer = () => {
  const totalChannelCount = mockedChannelsData.length;
  const totalNVRCount = mockedNVRData.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <NVRCard
        title="Total NVRs"
        value={(totalNVRCount).toString()}
      />
      <NVRCard
        title="Total Channels"
        value={(totalChannelCount).toString()}
      />
      <NVRCard
        title="Total Capacity"
        postfix={"(in TB)"}
        value="24"
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
