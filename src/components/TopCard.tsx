import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {cn} from "@/lib/utils";

type Props = {
  title: string;
  value: string;
  postfix?: string;
  valueColor?: string
}

const TopCard = (props: Props) => {
  return (
    <Card>
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
export default TopCard
