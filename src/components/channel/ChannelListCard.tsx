"use client";

import React, {useCallback, useEffect, useState} from "react"
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import StatusBadge, {StatusType} from "@/components/StatusBadge";
import {VideoOff} from "lucide-react";
import {ChannelStatusEnum, ChannelType, StreamHealthType} from "@/lib/types";
import RealTimeVideoPlayer from "@/components/channel/RealTimeVideoPlayer";
import {getChannelHealth} from "@/lib/queries";

type Props = {
  channel: ChannelType;
}

const ChannelListCard = (props: Props) => {
  const [health, setHealth] = useState<StreamHealthType | undefined>(undefined);

  const fetchChannelHealth = useCallback(async () => {
    try {
      const res = await getChannelHealth(props.channel.id);
      setHealth(res);
    } catch (error) {
      console.error(error);
    }
  }, [props]);

  useEffect(() => {
    fetchChannelHealth();
  }, [fetchChannelHealth]);

  if (!health) return null;

  return (
    <div className="block">
      <Card className="hover:shadow-md dark:shadow-border/60">
        <CardHeader className="p-0 mb-4">
          <div className="relative h-40 overflow-hidden rounded-t-lg group">
            {props.channel.isLiveStreaming ? (
              <RealTimeVideoPlayer
                src={props.channel.streamUrl}
                showAsThumbail={true}
                refetch={fetchChannelHealth}
              />
            ) : (
              <Image
                src={props.channel.thumbnail}
                alt={props.channel.name}
                className="w-full h-full object-cover"
                fill
              />
            )}
            <div className="absolute top-2 right-2 z-10">
              <StatusBadge status={health.status as StatusType}/>
            </div>
            {health.status === ChannelStatusEnum.OFFLINE && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/80 group-hover:opacity-100 transition-opacity duration-300">
                <VideoOff className="w-10 h-10 text-white opacity-70"/>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-md font-semibold text-gray-900 dark:text-gray-200 mb-1">{props.channel.name}</h3>
          <p className="text-xs text-muted-foreground">{props.channel.location}</p>
        </CardContent>
      </Card>
    </div>
  )
}
export default ChannelListCard
