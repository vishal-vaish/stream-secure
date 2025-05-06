"use client";

import React, {useEffect, useState} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {useParams} from "next/navigation";
import {baseUrl, getAllRecordingsData} from "@/lib/queries";
import {toast} from "sonner";
import {Loader2} from "lucide-react";
import {RecordingType} from "@/lib/types";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import VideoPlayer from "@/components/channel/VideoPlayer";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();
  const {recordingFilename} = useParams<{
    recordingFilename: string;
  }>();
  const [recordingData, setRecordingData] = useState<RecordingType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setNavbarTitle("Storage Management");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const refactorStorageFileName = recordingFilename.replace(/%3A/g, ":");

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="mb-6 col-span-2">
          {/*<div className="relative w-full aspect-video">*/}
          {/*  <video*/}
          {/*    controls*/}
          {/*    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"*/}
          {/*  >*/}
          {/*    <source src={`${baseUrl}${recordingData.path}`} type="video/mp4"/>*/}
          {/*    Your browser does not support the video tag.*/}
          {/*  </video>*/}
          {/*</div>*/}
          <VideoPlayer
            src={`${baseUrl}${recordingData.path}`}
          />
        </div>

        <Card className="rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 h-fit">
          <CardHeader className="text-xl font-semibold p-0 mb-4">
            File Details
          </CardHeader>
          <CardContent className="space-y-4 pl-0">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">File Name</p>
              <p className="text-muted-foreground">{recordingData.filename}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Resolution</p>
              <p className="text-muted-foreground">1080p</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Last Updated</p>
              <p className="text-muted-foreground">{formatDate(recordingData.created)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Page
