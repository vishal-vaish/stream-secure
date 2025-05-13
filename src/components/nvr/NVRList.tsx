"use client";

import React from 'react'
import {mockedNVRData} from "@/lib/data";
import NVRListCard from "@/components/nvr/NVRListCard";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import CreateNVRDialog from "@/components/nvr/CreateNVRDialog";
import {applyDynamicFilter} from "@/components/applyDynamicFilter";

const NVRList = () => {
  const {searchTerm} = useNavbarDetails();

  const filteredNVRs = applyDynamicFilter(
    mockedNVRData,
    searchTerm,
    {textFields: ["name", "location"]},
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">NVR Devices</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredNVRs.map((nvr) => (
          <NVRListCard key={nvr.id} nvr={nvr}/>
        ))}
        <CreateNVRDialog/>
      </div>
    </div>
  )
}
export default NVRList
