"use client";

import React, {useEffect} from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {mockedChannelsData} from "@/lib/data";
import ChannelListCard from "@/components/channel/ChannelListCard";
import Link from "next/link";
import {applyDynamicFilter} from "@/components/applyDynamicFilter";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems, searchTerm} = useNavbarDetails();

  useEffect(() => {
    setNavbarTitle("All Channels");
    setBreadcrumbItems([]);
  }, [setBreadcrumbItems, setNavbarTitle]);

  const filteredChannels = applyDynamicFilter(
    mockedChannelsData,
    searchTerm,
    {textFields: ["name","location","resolution"]}
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {filteredChannels.map(channel => (
        <Link
          href={`/channels/${channel.id}`}
          key={channel.id}
        >
          <ChannelListCard channel={channel}/>
        </Link>
      ))}

      {filteredChannels.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No cameras found.</p>
        </div>
      )}
    </div>
  )
}
export default Page
