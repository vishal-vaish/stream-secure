import React, {useCallback, useEffect, useState} from 'react'
import {ChannelType, StreamHealthType} from "@/lib/types";
import StatusBadge, {StatusType} from "@/components/StatusBadge";
import VideoPlayer from "@/components/channel/VideoPlayer";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import RealTimeVideoPlayer from "@/components/channel/RealTimeVideoPlayer";
import Link from "next/link";
import {getChannelHealth} from "@/lib/queries";

type Props = {
  channel: ChannelType;
  isChannelFlow?: boolean;
}

const ChannelCard = (props: Props) => {
  const [health, setHealth] = useState<StreamHealthType | undefined>(undefined);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

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

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="mb-6 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Live View</h2>
            {health?.status && (
              <StatusBadge status={health.status as StatusType}/>
            )}
          </div>

          {props.channel.status !== 'offline' ? (
            props.channel.isLiveStreaming ? (
              <RealTimeVideoPlayer
                src={props.channel.streamUrl}
                refetch={async () => {
                  await fetchChannelHealth();
                }}
              />
            ) : (
              <VideoPlayer
                src={props.channel.streamUrl}
                poster={props.channel.thumbnail}
                title={props.channel.name}
              />
            )
          ) : (
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M15 10h4.5m-4.5 0v4.5m0-4.5L19 14m-9-3h.01M9 17h.01M12 14h.01M12 17h.01M15 14h.01M15 17h.01M12 14h.01M12 17h.01M9 14h.01M9 17h.01"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">Camera Offline</p>
                <p className="text-gray-400 mt-1">This camera is currently unavailable</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <Card className="rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 h-fit">
            <CardHeader className="text-xl font-semibold p-0 mb-4">
              Camera Details
            </CardHeader>
            <CardContent className="space-y-4 pl-0">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Name</p>
                <p className="text-muted-foreground">{props.channel.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Location</p>
                <p className="text-muted-foreground">{props.channel.location}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Resolution</p>
                <p className="text-muted-foreground">{props.channel.resolution}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">Status</p>
                {health?.status && (
                  <StatusBadge status={health.status as StatusType}/>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Last Updated</p>
                <p className="text-muted-foreground">{formatDate(props.channel.lastUpdated)}</p>
              </div>
            </CardContent>
          </Card>
          <Link
            href={props.isChannelFlow
              ? `/channels/${props.channel.id}/recording`
              : `/nvr/${props.channel.nvrId}/channel/${props.channel.id}/recording`}
            className="bg-blue-500 dark:bg-blue-600 p-2 rounded-md text-gray-50 text-center"
          >
            Show Recording
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ChannelCard
