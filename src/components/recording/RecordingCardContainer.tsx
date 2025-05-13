import React from 'react'
import {bytesToTB} from "@/lib/utils";
import {RecordingType} from "@/lib/types";
import TopCard from "@/components/TopCard";
import {Database, FileText, GaugeCircle, HardDrive} from "lucide-react";

type Props = {
  recordingData:RecordingType[];
}

const RecordingCardContainer = (props:Props) => {
  const totalStorage = 1;

  const totalFileCount = props.recordingData.length;

  const totalUsedBytes = props.recordingData.reduce((acc, recording) => {
    return acc + (recording.size_bytes || 0);
  }, 0);

  const usedSpaceTB = totalUsedBytes / 1e12;

  const freeSpaceTB = totalStorage - usedSpaceTB;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <TopCard
        title="Total Storage"
        value={`${(totalStorage).toString()} TB`}
        icon={HardDrive}
        iconColor="text-blue-600 dark:text-blue-400"
        iconBackgroundColor="dark:bg-blue-900/20 bg-blue-100/40"
      />
      <TopCard
        title="Used Space"
        value={`${(bytesToTB(totalUsedBytes)).toString()} TB`}
        icon={GaugeCircle}
        iconColor="text-orange-600 dark:text-orange-400"
        iconBackgroundColor="dark:bg-orange-900/20 bg-orange-100/40"
        changeIsPositive={true}
        changeValue="3.4%"
        changeText="Since last days"
      />
      <TopCard
        title="Free Space"
        value={`${Number.isInteger(freeSpaceTB) ? freeSpaceTB.toString() : freeSpaceTB.toFixed(4)} TB`}
        valueColor={"text-green-500"}
        icon={Database}
        iconColor="text-green-600 dark:text-green-400"
        iconBackgroundColor="dark:bg-green-900/20 bg-green-100/40"
        changeIsPositive={false}
        changeValue="1.2%"
        changeText="Due to file uploads"
      />
      <TopCard
        title="Total Files"
        value={(totalFileCount).toString()}
        icon={FileText}
        iconColor="text-yellow-600 dark:text-yellow-400"
        iconBackgroundColor="dark:bg-yellow-900/20 bg-yellow-100/40"
        changeIsPositive={true}
        changeValue="7.8%"
        changeText="New files this month"
      />
    </div>
  )
}
export default RecordingCardContainer