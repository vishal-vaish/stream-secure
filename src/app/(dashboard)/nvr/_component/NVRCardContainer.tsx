import React from 'react'
import {mockedChannelsData, mockedNVRData} from "@/lib/data";
import TopCard from "@/components/TopCard";

const NVRCardContainer = () => {
  const totalChannelCount = mockedChannelsData.length;
  const totalNVRCount = mockedNVRData.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <TopCard
        title="Total NVRs"
        value={(totalNVRCount).toString()}
      />
      <TopCard
        title="Total Channels"
        value={(totalChannelCount).toString()}
      />
      <TopCard
        title="Total Capacity"
        postfix={"(in TB)"}
        value="1"
      />
      <TopCard
        title="Active Alerts"
        value="3"
        valueColor={"text-red-500"}
      />
    </div>
  )
}
export default NVRCardContainer
