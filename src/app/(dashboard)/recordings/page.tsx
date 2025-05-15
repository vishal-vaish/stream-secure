"use client";

import React, {useEffect, useState} from 'react'
import {getAllRecordingsData} from "@/lib/queries";
import {toast} from "sonner";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {FilterConfigType, RecordingType} from "@/lib/types";
import RecordingCardContainer from "@/components/recording/RecordingCardContainer";
import RecordingsListSkeleton from "@/components/recording/RecordingsListSkeleton";
import {applyDynamicFilter} from "@/components/applyDynamicFilter";
import Link from "next/link";
import RecordingListCard from "@/components/recording/RecordingListCard";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems, searchTerm} = useNavbarDetails();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [recordingData, setRecordingData] = useState<RecordingType[]>([]);

  useEffect(() => {
    setNavbarTitle("All Recordings");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllRecordingsData();
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const filteredData = data.filter(item => {
        const createdAt = new Date(item.created);
        return createdAt < fiveMinutesAgo;
      });
      setRecordingData(filteredData);
    } catch (error) {
      toast.error("Unable to fetch data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const recordingFilterConfig: FilterConfigType = {
    textFields: ["channelName", "nvrName"],
    dateField: "created",
  };

  const filteredRecordings = applyDynamicFilter(
    recordingData,
    searchTerm,
    recordingFilterConfig
  );

  return (
    <div>
      <RecordingCardContainer recordingData={recordingData}/>
      {isLoading ? (
        <RecordingsListSkeleton/>
      ) : (
        recordingData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-700 dark:text-gray-200">
              No data is Available
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">All Recordings Files</h2>

            {filteredRecordings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredRecordings.map((recording, index) => (
                  <Link
                    href={`/recordings/${recording.filename}`}
                    key={index}
                  >
                    <RecordingListCard recording={recording}/>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-700 dark:text-gray-200">
                  No data is Available
                </p>
              </div>
            )}
          </div>
        )
      )}
    </div>
  )
}
export default Page