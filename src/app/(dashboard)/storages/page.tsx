"use client";

import React, {useEffect, useState} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import StorageCardContainer from "@/components/storage/StorageCardContainer";
import StorageList from "@/components/storage/StorageList";
import {getAllStorageData} from "@/lib/queries";
import {toast} from "sonner"
import {StorageType} from "@/lib/types";
import {Skeleton} from "@/components/ui/skeleton";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [storageData, setStorageData] = useState<StorageType[]>([]);

  useEffect(() => {
    setNavbarTitle("Storage Management");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllStorageData();
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const filteredData = data.filter(item => {
        const createdAt = new Date(item.created);
        return createdAt < fiveMinutesAgo;
      });
      setStorageData(filteredData);
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
      <StorageCardContainer/>
      {isLoading ? (
        <StorageListSkeleton/>
      ) : (
        storageData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-700 dark:text-gray-200">
              No data is Available
            </p>
          </div>
        ) : (
          <StorageList storageData={storageData}/>
        )
      )}
    </div>
  )
}
export default Page

const StorageListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Skeleton key={i} className="h-48 w-full"/>
      ))}
    </div>
  )
}
