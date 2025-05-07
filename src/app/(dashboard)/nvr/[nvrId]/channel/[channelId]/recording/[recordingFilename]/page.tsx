"use client";

import React, {useCallback, useEffect, useState} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {useParams} from "next/navigation";
import {BreadcrumbItemType, RecordingType} from "@/lib/types";
import VideoPlayer from "@/components/channel/VideoPlayer";
import {baseUrl, getAllRecordingsData} from "@/lib/queries";
import RecordingFileDetailsCard from "@/components/recording/RecordingFileDetailsCard";
import {Loader2} from "lucide-react";
import {toast} from "sonner";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();
  const {recordingFilename} = useParams<{
    recordingFilename: string;
  }>();
  const [recordingData, setRecordingData] = useState<RecordingType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refactorStorageFileName = recordingFilename.replace(/%3A/g, ":");

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getAllRecordingsData();
      const filterData = data.filter((data) => data.filename === refactorStorageFileName);
      setRecordingData(filterData[0]);
    } catch (error) {
      toast.error("Unable to fetch data");
    } finally {
      setIsLoading(false);
    }
  }, [refactorStorageFileName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log(recordingData);
  }, [recordingData]);

  useEffect(() => {
    if (recordingData) {
      const breadcrumbItems: BreadcrumbItemType[] = [
        {label: "All NVR", path: "/nvr"},
        {label: recordingData.nvrName, path: `/nvr/${recordingData.nvrId}`},
        {
          label: recordingData.channelName,
          path: `/nvr/${recordingData.nvrId}/channel/${recordingData.channelId}`
        },
        {
          label: "Recording",
          path: `/nvr/${recordingData.nvrId}/channel/${recordingData.channelId}/recording`
        },
        {
          label: `${refactorStorageFileName.slice(0, 35)}`,
          path: `/nvr/${recordingData.nvrId}/channel/${recordingData.channelId}/recording/${recordingData.filename}`
        }
      ];

      setBreadcrumbItems(breadcrumbItems);
    }

    setNavbarTitle(refactorStorageFileName.slice(0, 35));
  }, [
    recordingData,
    recordingFilename,
    refactorStorageFileName,
    setBreadcrumbItems,
    setNavbarTitle
  ]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="animate-spin"/>
      </div>
    );
  }

  if (!recordingData) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-700 dark:text-gray-200">
          The requested File was not found.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="mb-6 col-span-2">
          <VideoPlayer
            src={`${baseUrl}${recordingData.path}`}
          />
        </div>
        <RecordingFileDetailsCard recordingData={recordingData}/>
      </div>
    </div>
  )
}
export default Page
