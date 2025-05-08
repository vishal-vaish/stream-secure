"use client";

import React, {useEffect, useState} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import StorageCardContainer from "@/components/storage/StorageCardContainer";
import {waitFor} from "@/lib/utils";
import StorageListSkeleton from "@/components/storage/StorageListSkeleton";
import StorageList from "@/components/storage/StorageList";
import {storageMockedData} from "@/lib/data";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setNavbarTitle("Storage Management");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  useEffect(() => {
    const waiting = async () => {
      try {
        setIsLoading(true);
        await waitFor(3);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    waiting();
  }, []);

  return (
    <div>
      <StorageCardContainer/>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">All Storage List</h2>

      {isLoading ? (
        <StorageListSkeleton/>
      ) : (
        <StorageList data={storageMockedData}/>
      )}
    </div>
  )
}
export default Page