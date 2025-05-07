import React from "react"
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import StatusBadge from "@/components/StatusBadge";
import {Play, VideoOff} from "lucide-react";
import {ChannelType} from "@/lib/types";
import RealTimeVideoPlayer from "@/components/channel/RealTimeVideoPlayer";

type Props = {
  channel: ChannelType;
}

const ChannelListCard = (props: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }).format(date);
  };

  const isRealStreaming =
    props.channel.id === "cam-009" ||
    props.channel.id === "cam-010";

  const streamUrl: Record<string, string> = {
    "cam-009": "http://192.168.1.114:8000/hls/stream_0/playlist.m3u8",
    "cam-010": "http://192.168.1.114:8000/hls/stream_1/playlist.m3u8"
  }

  const liveStreamUrl = (id: string) => {
    return streamUrl[id];
  }

  return (
    <div className="block">
      <Card className="hover:shadow-md dark:shadow-border/60">
        <CardHeader className="p-0 mb-4">
          <div className="relative h-40 overflow-hidden rounded-t-lg group">
            {isRealStreaming ? (
              <RealTimeVideoPlayer
                src={liveStreamUrl(props.channel.id)}
                showAsThumbail={true}
              />
            ) : (
              <Image
                src={props.channel.thumbnail}
                alt={props.channel.name}
                className="w-full h-full object-cover"
                fill
              />
            )}
            <div className="absolute top-2 right-2">
              <StatusBadge status={props.channel.status}/>
            </div>
            {props.channel.status !== "offline" && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="bg-blue-600 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-white" fill="white"/>
                </div>
              </div>
            )}
            {props.channel.status === "offline" && (
              <div className="absolute inset-0 flex items-center justify-center g-opacity-40">
                <VideoOff className="w-10 h-10 text-white opacity-70"/>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-1">{props.channel.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-200 mb-4">{props.channel.location}</p>

          <div className="text-sm text-muted-foreground mb-1">
            Resolution: {props.channel.resolution}
          </div>
          <div className="text-xs text-muted-foreground">
            Last Updated: {formatDate(props.channel.lastUpdated)}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default ChannelListCard
