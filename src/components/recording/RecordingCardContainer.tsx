import React from 'react'
import {bytesToTB} from "@/lib/utils";
import {RecordingType} from "@/lib/types";
import TopCard from "@/components/TopCard";

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
        value={(totalStorage).toString()}
        postfix={"(in TB)"}
      />
      <TopCard
        title="Used Space"
        value={`${(bytesToTB(totalUsedBytes)).toString()}`}
        postfix={"(in TB)"}
      />
      <TopCard
        title="Free Space"
        postfix={"(in TB)"}
        value={Number.isInteger(freeSpaceTB) ? freeSpaceTB.toString() : freeSpaceTB.toFixed(4)}
        valueColor={"text-green-500"}
      />
      <TopCard
        title="Total Files"
        value={(totalFileCount).toString()}
      />
    </div>
  )
}
export default RecordingCardContainer