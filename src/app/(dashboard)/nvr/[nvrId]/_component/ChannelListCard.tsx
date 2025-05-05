import React from "react"
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import StatusBadge from "@/components/StatusBadge";
import {Play, VideoOff} from "lucide-react";
import Link from "next/link";
import {ChannelType} from "@/lib/types";

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

  return (
    <Link
      href={`/nvr/${props.channel.nvrId}/channel/${props.channel.id}`}
      className="block"
    >
      <Card className="hover:shadow-md">
        <CardHeader className="p-0 pb-4">
          <div className="relative h-40 overflow-hidden rounded-t-lg group">
            <Image
              src={props.channel.thumbnail}
              alt={props.channel.name}
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute top-2 right-2">
              <StatusBadge status={props.channel.status}/>
            </div>
            {props.channel.status !== "offline" && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="bg-blue-600 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-white" fill="white"/>
                </div>
              </div>
            )}
            {props.channel.status === "offline" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <VideoOff className="w-10 h-10 text-white opacity-70"/>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{props.channel.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{props.channel.location}</p>

          <div className="text-sm text-gray-600 mb-4">
            Resolution: {props.channel.resolution}
          </div>
          <div className="text-xs text-gray-500">
            Last Updated: {formatDate(props.channel.lastUpdated)}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
export default ChannelListCard
