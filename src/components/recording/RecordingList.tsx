import React from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import RecordingListCard from "@/components/recording/RecordingListCard";
import Link from "next/link";
import {RecordingType} from "@/lib/types";
import {convertToISOFormat} from "@/lib/utils";

type Props = {
  recordingData: RecordingType[];
}

const RecordingList = (props: Props) => {
  const {searchTerm} = useNavbarDetails();

  const filteredStorages = props.recordingData.filter(recording => {
    if (searchTerm.type === "input") {
      return (
        recording.channelName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        recording.nvrName.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    }

    if (searchTerm.type === "date") {
      const {start, end} = convertToISOFormat(searchTerm.value);
      const recordingDate = new Date(recording.created);
      const startDate = new Date(start);
      const endDate = new Date(end);
      return recordingDate >= startDate && recordingDate <= endDate;
    }
    return true;
  });

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">All Store Files</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredStorages.map((recording, index) => (
          <Link
            href={`/recordings/${recording.filename}`}
            key={index}
          >
            <RecordingListCard recording={recording}/>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default RecordingList
