"use client";

import React from 'react'
import {getFilteredChannel} from "@/actions/nvr";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import ChannelListCard from "@/app/(dashboard)/nvr/[nvrId]/_component/ChannelListCard";

type Props = {
  nvrId: string;
}

const ChannelList = (props:Props) => {
  const channel = getFilteredChannel(props.nvrId);
  const {searchTerm} = useNavbarDetails();

  const filteredChannel = channel.filter(camera =>
    camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    camera.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    camera.resolution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connected Channels</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredChannel.map((channel) => (
          <ChannelListCard key={channel.id} channel={channel} />
        ))}

        {filteredChannel.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-100">No Channel found for this NVR Device.</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default ChannelList
