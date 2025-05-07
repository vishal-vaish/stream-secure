"use client";

import React, {useEffect, useState} from 'react'
import ChannelCard from "@/components/channel/ChannelCard";
import {getChannelById} from "@/actions/nvr";
import {BreadcrumbItemType, ChannelType} from "@/lib/types";
import {useParams} from "next/navigation";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";

const Page = () => {
  const {setBreadcrumbItems, setNavbarTitle} = useNavbarDetails();
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const {channelId} = useParams<{
    channelId: string;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!channelId) return;

      const fetchedChannel = getChannelById(channelId || '');

      if (!fetchedChannel) {
        setNotFound(true);
        setNavbarTitle("Camera Not found");
        return;
      }

      setChannel(fetchedChannel);

      const breadcrumbItems: BreadcrumbItemType[] = [
        {label: "All Channels", path: "/channels"},
        {
          label: fetchedChannel.name,
          path: `/channel/${fetchedChannel.id}`
        }
      ];

      setBreadcrumbItems(breadcrumbItems);
      setNavbarTitle(fetchedChannel.name);
    };

    fetchData();
  }, [channelId, setBreadcrumbItems, setNavbarTitle]);

  if (notFound) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-700 dark:text-gray-200">
          The requested Channel was not found.
        </p>
      </div>
    );
  }

  if (!channel) {
    return null;
  }

  return (
    <ChannelCard channel={channel} isChannelFlow={true}/>
  )
}
export default Page
