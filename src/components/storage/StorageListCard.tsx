import React from 'react'
import {StorageType} from "@/lib/types";
import {Card, CardContent} from "@/components/ui/card";
import StatusBadge from "@/components/StatusBadge";
import StorageBar from "@/components/StorageBar";
import {Pencil, Trash2} from 'lucide-react';
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import TooltipWrapper from "@/components/TooltipWrapper";

type Props = {
  storage: StorageType;
}

const StorageListCard = (props: Props) => {
  return (
    <Card className="p-4">
      <CardContent className="space-y-3 p-0">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{props.storage.storageName}</h2>
          <StatusBadge status={"online"} className="text-sm"/>
        </div>

        <div className="text-sm space-y-1">
          <div className="flex justify-between">
            <div className="text-muted-foreground">Type:</div>
            <div className="text-gray-800 dark:text-gray-50">{props.storage.storageType}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-muted-foreground">IP Address:</div>
            <div className="text-gray-800 dark:text-gray-50">{props.storage.ipAddress}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-muted-foreground">Path:</div>
            <div className="text-gray-800 dark:text-gray-50">{props.storage.path}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-muted-foreground">Total Capacity:</div>
            <div className="text-gray-800 dark:text-gray-50">{props.storage.storageCapacity}{" "}TB</div>
          </div>
          <Separator className="!my-3"/>
          <StorageBar used={0.5} total={1}/>

        </div>

        <div className="flex items-center justify-end pt-2">
          <TooltipWrapper content={"Edit"}>
            <Button variant="no-background" className="hover:text-yellow-400">
              <Pencil className="w-4 h-4"/>
            </Button>
          </TooltipWrapper>
          <TooltipWrapper content={"Delete"}>
            <Button variant="no-background" className="hover:text-red-500">
              <Trash2 className="w-4 h-4"/>
            </Button>
          </TooltipWrapper>
        </div>
      </CardContent>
    </Card>
  )
}
export default StorageListCard


