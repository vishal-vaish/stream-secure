"use client";

import React, {useEffect} from 'react'
import NVRCardContainer from "@/components/nvr/NVRCardContainer";
import NVRList from "@/components/nvr/NVRList";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("NVR Dashboard");
    setBreadcrumbItems([]);
  }, [setNavbarTitle, setBreadcrumbItems]);
  
  return (
    <>
      <NVRCardContainer/>
      <NVRList/>
    </>
  )
}
export default Page
