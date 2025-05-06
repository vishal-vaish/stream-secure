"use client";

import React, {useEffect, useState} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {useParams} from "next/navigation";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {baseUrl, getAllStorageData} from "@/lib/queries";
import {toast} from "sonner";
import {StorageType} from "@/lib/types";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();
  const {storageFilename} = useParams<{
    storageFilename: string;
  }>();
  const [storageData, setStorageData] = useState<StorageType | null>(null);

  useEffect(() => {
    setNavbarTitle("Storage Management");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const refactorStorageFileName = storageFilename.replace(/%3A/g, ":");

  const fetchData = async () => {
    try {
      const data = await getAllStorageData();
      const filterData = data.filter((data) => data.filename === refactorStorageFileName);
      setStorageData(filterData[0]);
    } catch (error) {
      toast.error("Unable to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!storageData) {
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
          <div className="flex justify-between items-center mb-4">
          </div>
          <video controls>
            <source src={`${baseUrl}${storageData.path}`} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>

        <Card className="rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 h-fit">
          <CardHeader className="text-xl font-semibold p-0 mb-4">
            Camera Details
          </CardHeader>
          <CardContent className="space-y-4 pl-0">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">File Name</p>
              <p className="text-muted-foreground">{storageData.filename}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Resolution</p>
              <p className="text-muted-foreground">1080p</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Last Updated</p>
              <p className="text-muted-foreground">{formatDate(storageData.created)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Page
