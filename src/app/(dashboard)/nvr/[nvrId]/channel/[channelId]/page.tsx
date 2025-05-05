"use client";

import React, {useEffect, useState} from 'react'
import {useParams} from "next/navigation";
import {BreadcrumbItemType, ChannelType, NVR} from "@/lib/types";
import {getChannelById, getNVRById} from '@/actions/nvr';
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import ChannelCard from "@/components/channel/ChannelCard";

const Page = () => {
  const {setBreadcrumbItems, setNavbarTitle} = useNavbarDetails();
  const [nvr, setNvr] = useState<NVR | null>(null);
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const {nvrId, channelId} = useParams<{
    nvrId: string;
    channelId: string;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!nvrId || !channelId) return;

      const fetchedNvr = getNVRById(nvrId || '');
      const fetchedChannel = getChannelById(channelId || '');

      if (!fetchedNvr || !fetchedChannel) {
        setNotFound(true);
        setNavbarTitle("Camera Not found");
        return;
      }

      setNvr(fetchedNvr);
      setChannel(fetchedChannel);

      const breadcrumbItems: BreadcrumbItemType[] = [
        { label: fetchedNvr.name, path: `/nvr/${fetchedNvr.id}` },
        {
          label: fetchedChannel.name,
          path: `/nvr/${fetchedNvr.id}/channel/${fetchedChannel.id}`
        }
      ];

      setBreadcrumbItems(breadcrumbItems);
      setNavbarTitle(fetchedChannel.name);
    };

    fetchData();
  }, [channelId, nvrId, setBreadcrumbItems, setNavbarTitle]);

  if (notFound) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-700 dark:text-gray-200">The requested Channel was not found.</p>
      </div>
    );
  }

  if (!nvr || !channel) {
    return null;
  }

  return (
    <div>
      <ChannelCard channel={channel}/>
    </div>
  )
}
export default Page
