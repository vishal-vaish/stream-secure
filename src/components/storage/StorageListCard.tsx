import React from 'react'
import {StorageType} from "@/lib/types";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import { Play} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {baseUrl} from "@/lib/queries";

type Props = {
  storage: StorageType,
}

const StorageListCard = (props: Props) => {
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
    <div className="block">
      <Card className="hover:shadow-md dark:shadow-border/60">
        <CardHeader className="p-0 pb-4">
          <div className="relative h-40 overflow-hidden rounded-t-lg group">
            <Image
              src={`${baseUrl}${props.storage.thumbnail}`}
              alt={props.storage.filename}
              className="w-full h-full object-cover"
              fill
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="bg-blue-600 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-white" fill="white"/>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1 mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              {/*{props.storage.fileName}*/}
            </h3>
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              {props.storage.nvrName}
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              {props.storage.channelName}
            </div>
          </div>

          <Separator className="mb-4"/>

          <div className="text-sm text-muted-foreground mb-1">
            Resolution: 1080p
          </div>
          <div className="text-xs text-muted-foreground">
            Created At: {formatDate(props.storage.created)}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default StorageListCard
