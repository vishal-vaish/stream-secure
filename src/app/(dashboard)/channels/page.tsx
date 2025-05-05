"use client";

import React, {useEffect} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {mockedChannelsData} from "@/lib/data";
import ChannelListCard from "@/app/(dashboard)/nvr/[nvrId]/_component/ChannelListCard";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems, searchTerm} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("All Channels");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const filteredChannels = mockedChannelsData.filter(channel =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    channel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    channel.resolution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredChannels.map(channel => (
          <ChannelListCard key={channel.id} channel={channel} />
        ))}

        {filteredChannels.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No cameras found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Page
