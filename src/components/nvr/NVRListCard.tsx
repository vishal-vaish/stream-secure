"use client";

import React, {useEffect, useState} from 'react'
import {DishUsageType, NVR} from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";
import StatusBadge from "@/components/StatusBadge";
import {Camera} from "lucide-react";
import StorageBar from '@/components/StorageBar';
import {mockedChannelsData} from "@/lib/data";
import {getDiskUsage} from "@/lib/queries";
import {bytesToTB} from "@/lib/utils";

type Props = {
  nvr: NVR;
}

const NvrListCard = (props: Props) => {
  const [usage, setUsage] = useState<DishUsageType | null>(null);

  useEffect(() => {
    const fetchUsageData = async () => {
      const usageData = await getDiskUsage();
      setUsage(usageData);
    }
    fetchUsageData();
  }, [props]);

  const channelCount = mockedChannelsData.filter(channel => channel.nvrId === props.nvr.id).length;

  return (
    <Link href={`/nvr/${props.nvr.id}`} className="block">
      <Card className="hover:shadow-md dark:shadow-border/60">
        <CardHeader className="p-0 pb-4">
          <div className="relative h-40 overflow-hidden rounded-t-lg">
            <Image
              src={props.nvr.thumbnail}
              alt={props.nvr.name}
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute top-2 right-2">
              <StatusBadge status={props.nvr.status}/>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{props.nvr.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-200 mb-4">{props.nvr.location}</p>

          <div className="flex items-center text-sm text-gray-600">
            <Camera className="w-4 h-4 mr-1 text-blue-600 dark:text-blue-500"/>
            <span className="dark:text-gray-50">{channelCount} Channels</span>
          </div>
        </CardContent>
        <CardFooter>
          <StorageBar
            used={bytesToTB(usage?.total_size_bytes)}
            total={props.nvr.storageTotal}
            className="mb-4"
          />
        </CardFooter>
      </Card>
    </Link>
  )
}
export default NvrListCard
