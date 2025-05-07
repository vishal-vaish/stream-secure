import React from 'react'
import Image from "next/image";
import {NVR} from "@/lib/types";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import StatusBadge from "@/components/StatusBadge";
import StorageBar from '@/components/StorageBar';
import {mockedChannelsData} from "@/lib/data";
import {Button} from "@/components/ui/button";
import Link from "next/link";

type Props = {
  nvr: NVR;
}

const NVRDetailContainer = (props: Props) => {
  const nvrChannelCount = mockedChannelsData
    .filter(channel => channel.nvrId === props.nvr.id)
    .length;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

  return (
    <Card className="overflow-hidden rounded-md mb-5">
      <div className="lg:flex">
        <div className="h-64 lg:h-auto lg:w-1/3 relative">
          <Image
            src={props.nvr.thumbnail}
            alt={props.nvr.name}
            fill
            className="object-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
          />
        </div>
        <CardContent className="lg:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold">{props.nvr.name}</h1>
              <p className="text-muted-foreground">{props.nvr.location}</p>
            </div>
            <div className="flex gap-5">
              <Link
                href={`/nvr/${props.nvr.id}/recording`}
                className="bg-blue-500 p-2 rounded-md text-gray-50"
              >
                Show Recording
              </Link>
            <StatusBadge status={props.nvr.status} className="text-sm"/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Storage</h3>
              <StorageBar used={props.nvr.storageUsed} total={props.nvr.storageTotal}/>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Channels:</span>
                  <span className="font-medium">{nvrChannelCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ip Address:</span>
                  <span className="font-medium">{props.nvr.ipAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model:</span>
                  <span className="font-medium">{props.nvr.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model Name:</span>
                  <span className="font-medium">{props.nvr.modelName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span className="font-medium">{formatDate(props.nvr.lastUpdated)}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
export default NVRDetailContainer
