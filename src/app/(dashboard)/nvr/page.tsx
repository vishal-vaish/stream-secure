"use client";

import React, {useEffect} from 'react'
import NVRCardContainer from "@/app/(dashboard)/nvr/_component/NVRCardContainer";
import NVRList from "@/app/(dashboard)/nvr/_component/NVRList";
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
