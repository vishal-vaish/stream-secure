"use client";

import React, {useEffect} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {BreadcrumbItemType} from "@/lib/types";
import {useParams} from "next/navigation";
import {getNVRById} from "@/actions/nvr";
import NVRDetailContainer from "@/app/(dashboard)/nvr/[nvrId]/_component/NVRDetailContainer";
import ChannelList from "@/app/(dashboard)/nvr/[nvrId]/_component/ChannelList";

const Page = () => {
  const {setBreadcrumbItems, setNavbarTitle} = useNavbarDetails();
  const {nvrId} = useParams<{ nvrId: string }>();

  const nvr = getNVRById(nvrId || "");

  useEffect(() => {
    if (nvr) {
      const breadcrumbItems: BreadcrumbItemType[] = [
        {label: "All NVR", path: "/nvr"},
        {label: nvr.name, path: `/nvr/${nvr.id}`}
      ];

      setBreadcrumbItems(breadcrumbItems);
      setNavbarTitle(nvr.name);
    }
  }, [nvr, setBreadcrumbItems, setNavbarTitle]);

  if (!nvr) {
    setNavbarTitle("NVR Not found");
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-700 dark:text-white">The requested NVR was not found.</p>
      </div>
    );
  }

  return (
    <div>
      <NVRDetailContainer nvr={nvr}/>
      <ChannelList nvrId={nvrId} />
    </div>
  )
}
export default Page
