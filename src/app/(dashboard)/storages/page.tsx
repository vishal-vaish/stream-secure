"use client";

import React, {useEffect} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import StorageCardContainer from "@/components/storage/StorageCardContainer";
import StorageList from "@/components/storage/StorageList";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("Storage Management");  
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);
  
  return (
    <div>
      <StorageCardContainer/>
      <StorageList/>
    </div>
  )
}
export default Page
