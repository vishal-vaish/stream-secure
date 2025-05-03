"use client";

import React, {useState} from 'react'
import {Input} from "@/components/ui/input";
import {nvrs} from "@/lib/data";
import NVRListCard from "@/app/(dashboard)/nvr_devices/_component/NVRListCard";

const NVRList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNVRs = nvrs.filter(nvr =>
    nvr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nvr.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex w-full justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">NVR Devices</h2>
        <Input
          className="w-64"
          placeholder="Search NVR Devices..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredNVRs.map((nvr) => (
          <NVRListCard key={nvr.id} nvr={nvr}/>
        ))}
      </div>
    </div>
  )
}
export default NVRList
