"use client";

import React, {useEffect, useState} from 'react'
import {getAllRecordingsData} from "@/lib/queries";
import {toast} from "sonner";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {RecordingType} from "@/lib/types";
import RecordingCardContainer from "@/components/recording/RecordingCardContainer";
import RecordingList from "@/components/recording/RecordingList";
import RecordingsListSkeleton from "@/components/recording/RecordingsListSkeleton";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();
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
          <RecordingList recordingData={recordingData}/>
        )
      )}
    </div>
  )
}
export default Page