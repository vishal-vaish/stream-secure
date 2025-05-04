"use client";

import React, {useEffect} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {BreadcrumbItemType} from "@/lib/types";
import {useParams} from "next/navigation";
import {getNVRById} from "@/actions/nvr";

const Page = () => {
  const {setBreadcrumbItems, setNavbarTitle} = useNavbarDetails();
  const {nvrId} = useParams<{ nvrId:string}>();

  const nvr = getNVRById(nvrId || "");

  useEffect(() => {
    if(nvr) {
      const breadcrumbItems: BreadcrumbItemType[] = [
        {label: nvr.name, path: `/nvr/${nvr.id}`}
      ];

      setBreadcrumbItems(breadcrumbItems);
    }
  }, [nvr, setBreadcrumbItems]);

  if (!nvr) {
    setNavbarTitle("NVR Not found");
    return (
        <div className="text-center py-12">
          <p className="text-xl text-gray-700">The requested NVR was not found.</p>
        </div>
    );
  }

  return (
    <div>Page</div>
  )
}
export default Page
