import React from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import RecordingListCard from "@/components/recording/RecordingListCard";
import Link from "next/link";
import {FilterConfigType, RecordingType} from "@/lib/types";
import {applyDynamicFilter} from "@/components/applyDynamicFilter";

type Props = {
  recordingData: RecordingType[];
}

const RecordingList = (props: Props) => {
  const {searchTerm} = useNavbarDetails();

  const recordingFilterConfig: FilterConfigType = {
    textFields: ["channelName", "nvrName"],
    dateField: "created",
  };

  const filteredStorages = applyDynamicFilter(
    props.recordingData,
    searchTerm,
    recordingFilterConfig
  );

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
