"use client";

import React, {useCallback, useEffect, useState} from 'react'
import Image from "next/image";
import {DishUsageType, GetNVRHealthType, NVR} from "@/lib/types";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import StatusBadge, {StatusType} from "@/components/StatusBadge";
import StorageBar from '@/components/StorageBar';
import {mockedChannelsData} from "@/lib/data";
import Link from "next/link";
import {getDiskUsage, getNVRHealth} from "@/lib/queries";
import {bytesToTB, cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {ChevronDown, ChevronUp} from "lucide-react";

type Props = {
  nvr: NVR;
}

const NVRDetailContainer = (props: Props) => {
  const [usage, setUsage] = useState<DishUsageType | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [health, setHealth] = useState<GetNVRHealthType>();

  const toggleExpand = () => {
    setExpanded(!expanded);
  }

  useEffect(() => {
    const fetchUsageData = async () => {
      const usageData = await getDiskUsage();
      setUsage(usageData);
    }
    fetchUsageData();
  }, [props]);

  const fetchNVRHealth = useCallback(async () => {
    try {
      const res = await getNVRHealth();
      setHealth(res)
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchNVRHealth();
  }, [fetchNVRHealth]);

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
        <CardContent className="lg:w-2/3 p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold m-0">{props.nvr.name}</h1>
              <p className="text-muted-foreground">{props.nvr.location}</p>
            </div>
            <div className="flex gap-5">
              <Link
                href={`/nvr/${props.nvr.id}/recording`}
                className="bg-blue-500 p-2 rounded-md text-gray-50 text-sm py-1"
              >
                Show Recording
              </Link>
              {health?.status && (
                <StatusBadge
                  status={health.status as StatusType}
                  className="text-sm"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
            <StorageBar used={bytesToTB(usage?.total_size_bytes)} total={props.nvr.storageTotal}/>
            </div>

            <div className="space-y-2 flex flex-col">
              <div className="flex justify-end">
                <span className="text-muted-foreground">Channels:</span>
                <span className="text-gray-800 dark:text-gray-100 pl-28 font-medium">{nvrChannelCount}</span>
              </div>

              <div className="flex justify-end">
                <Button
                  variant={"ghost"}
                  onClick={toggleExpand}
                  className="pr-0 text-xs dark:text-gray-300"
                >
                  {expanded ? "Show less" : "Show more"}
                  {expanded
                    ? <ChevronUp/>
                    : <ChevronDown/>
                  }
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>

      <div
        className={cn("overflow-hidden transition-all duration-300 ease-in-out",
          expanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <CardContent className="border-t p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-muted-foreground">Ip Address:</span>
              <span className="text-gray-800 dark:text-gray-100 pl-1 font-medium">{props.nvr.ipAddress}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Model:</span>
              <span className="text-gray-800 dark:text-gray-100 pl-1 font-medium">{props.nvr.model}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Model Name:</span>
              <span className="text-gray-800 dark:text-gray-100 pl-1 font-medium">{props.nvr.modelName}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Last Updated:</span>
              <span
                className="text-gray-800 dark:text-gray-100 pl-1 font-medium">{formatDate(props.nvr.lastUpdated)}</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
export default NVRDetailContainer
