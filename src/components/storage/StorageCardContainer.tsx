import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";

const StorageCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StorageCard
        title="Total Storage"
        value={"18"}
        postfix={"(in TB)"}
      />
      <StorageCard
        title="Used Space"
        value={"5.4"}
        postfix={"(in TB)"}
      />
      <StorageCard
        title="Free Space"
        postfix={"(in TB)"}
        value="12.6 TB"
        valueColor={"text-green-500"}
      />
      <StorageCard
        title="Total Files"
        value="3"
      />
    </div>
  )
}
export default StorageCardContainer


type NVRCardProps = {
  title:string;
  value:string;
  postfix?:string;
  valueColor?:string
}

const StorageCard = (props:NVRCardProps) => {
  return (
    <Card >
      <CardHeader className="p-4">
        <CardTitle className="text-lg">
          {props.title}
          {props.postfix && (
            <span className="text-xs pl-1">{props.postfix}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("p-4 pt-0 text-3xl font-bold text-blue-600", props.valueColor)}>
        <p>{props.value}</p>
      </CardContent>
    </Card>

  )
}
