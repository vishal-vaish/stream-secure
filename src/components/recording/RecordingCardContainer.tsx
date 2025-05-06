import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {bytesToTB, cn} from "@/lib/utils";
import {RecordingType} from "@/lib/types";

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
      <StorageCard
        title="Total Storage"
        value={(totalStorage).toString()}
        postfix={"(in TB)"}
      />
      <StorageCard
        title="Used Space"
        value={`${(bytesToTB(totalUsedBytes)).toString()}`}
        postfix={"(in TB)"}
      />
      <StorageCard
        title="Free Space"
        postfix={"(in TB)"}
        value={(freeSpaceTB).toFixed(4)}
        valueColor={"text-green-500"}
      />
      <StorageCard
        title="Total Files"
        value={(totalFileCount).toString()}
      />
    </div>
  )
}
export default RecordingCardContainer


type StorageCardProps = {
  title:string;
  value:string;
  postfix?:string;
  valueColor?:string
}

const StorageCard = (props:StorageCardProps) => {
  return (
    <Card >
      <CardHeader className="p-4">
        <CardTitle className="text-lg">
          {props.title}
          {props.postfix && (
            <span className="text-xs pl-1">{props.postfix}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("p-4 pt-0 text-3xl font-bold text-blue-600", props.valueColor)}>
        <p>{props.value}</p>
      </CardContent>
    </Card>

  )
}
