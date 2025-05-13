"use client";

import React, {useEffect, useState} from 'react'
import TopCard from "@/components/TopCard";
import {AlertTriangle, GaugeCircle, HardDrive, Router} from "lucide-react";
import {getAllRecordingsData} from "@/lib/queries";
import {toast} from "sonner";
import {bytesToTB} from "@/lib/utils";

const StorageCardContainer = () => {
  const [totalUsedBytes, setTotalUsedBytes] = useState(0);
  const fetchData = async () => {
    try {
      const data = await getAllRecordingsData();
      const totalBytesData = data.reduce((acc, recording) => {
        return acc + (recording.size_bytes || 0);
      }, 0);
      setTotalUsedBytes(totalBytesData);
    } catch (error) {
      toast.error("Unable to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <TopCard
        title="Total Storage"
        value={"1 TB"}
        icon={HardDrive}
        iconColor="text-blue-600 dark:text-blue-400"
        iconBackgroundColor="dark:bg-blue-900/20 bg-blue-100/40"
      />
      <TopCard
        title="Used Space"
        value={`${(bytesToTB(totalUsedBytes)).toString()} TB`}
        icon={GaugeCircle}
        iconColor="text-orange-600 dark:text-orange-400"
        iconBackgroundColor="dark:bg-orange-900/20 bg-orange-100/40"
        changeIsPositive={true}
        changeValue="3.4%"
        changeText="Since last days"
      />
      <TopCard
        title="Connected Devices"
        value="1"
        icon={Router}
        iconColor="text-green-600 dark:text-green-400"
        iconBackgroundColor="dark:bg-green-900/20 bg-green-100/40"
        changeIsPositive={true}
        changeValue="100%"
        changeText="vs. previous month"
      />
      <TopCard
        title="Storage Alerts"
        value="0"
        valueColor={"text-red-500"}
        icon={AlertTriangle}
        iconColor="text-red-600 dark:text-red-400"
        iconBackgroundColor="dark:bg-red-900/20 bg-red-100/40"
        changeIsPositive={false}
        changeValue="2"
        changeText="new alerts detected"
      />
    </div>
  )
}
export default StorageCardContainer
