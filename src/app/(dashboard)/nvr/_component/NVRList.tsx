"use client";

import React from 'react'
import {mockedNVRData} from "@/lib/data";
import NVRListCard from "@/app/(dashboard)/nvr/_component/NVRListCard";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";

const NVRList = () => {
  const {searchTerm} = useNavbarDetails();

  const filteredNVRs = mockedNVRData.filter(nvr =>
    nvr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nvr.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">NVR Devices</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredNVRs.map((nvr) => (
          <NVRListCard key={nvr.id} nvr={nvr}/>
        ))}
      </div>
    </div>
  )
}
export default NVRList
