import React from 'react'
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {bytesToMB} from "@/lib/utils";
import {RecordingType} from "@/lib/types";

type Props = {
  recordingData: RecordingType;
}

const RecordingFileDetailsCard = (props:Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

  return (
    <Card className="rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 h-fit">
      <CardHeader className="text-xl font-semibold p-0 mb-4">
        File Details
      </CardHeader>
      <CardContent className="space-y-4 pl-0">
        <div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">File Name</p>
          <p className="text-muted-foreground">{props.recordingData.filename}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Resolution</p>
          <p className="text-muted-foreground">1080p</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">File Size</p>
          <p className="text-muted-foreground">{bytesToMB(props.recordingData.size_bytes)}MB</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Created Time</p>
          <p className="text-muted-foreground">{formatDate(props.recordingData.created)}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">NVR Name</p>
          <p className="text-muted-foreground">{props.recordingData.nvrName}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Channel Name</p>
          <p className="text-muted-foreground">{props.recordingData.channelName}</p>
        </div>
      </CardContent>
    </Card>
  )
}
export default RecordingFileDetailsCard
