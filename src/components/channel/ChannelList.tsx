"use client";

import React from 'react'
import {getFilteredChannel} from "@/actions/nvr";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import ChannelListCard from "@/components/channel/ChannelListCard";
import Link from "next/link";
import {applyDynamicFilter} from "@/components/applyDynamicFilter";

type Props = {
  nvrId: string;
}

const ChannelList = (props:Props) => {
  const channel = getFilteredChannel(props.nvrId);
  const {searchTerm} = useNavbarDetails();

  const filteredChannel = applyDynamicFilter(
    channel,
    searchTerm,
    {textFields: ["name", "location", "resolution"]},
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connected Channels</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredChannel.map((channel) => (
          <Link
            href={`/nvr/${channel.nvrId}/channel/${channel.id}`}
            key={channel.id}
          >
            <ChannelListCard channel={channel} />
          </Link>
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
