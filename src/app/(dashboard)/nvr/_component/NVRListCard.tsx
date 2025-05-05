import React from 'react'
import {NVR} from "@/lib/types";
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

type Props = {
  nvr: NVR;
}

const NvrListCard = (props: Props) => {
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
            <span className="dark:text-gray-50">{props.nvr.totalChannels} Channels</span>
          </div>
        </CardContent>
        <CardFooter>
          <StorageBar
            used={props.nvr.storageUsed}
            total={props.nvr.storageTotal}
            className="mb-4"
          />
        </CardFooter>
      </Card>
    </Link>
  )
}
export default NvrListCard
