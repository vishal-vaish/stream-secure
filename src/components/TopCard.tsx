import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {LucideIcon} from "lucide-react";

type Props = {
  title: string;
  value: string;
  postfix?: string;
  valueColor?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBackgroundColor?: string;
}

const TopCard = (props: Props) => {
  const Icon = props.icon;

  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <div className="text-lg">
            {props.title}
            {props.postfix && (
              <span className="text-xs pl-1">{props.postfix}</span>
            )}
          </div>
          <div>
            <div className={cn("text-3xl font-bold text-blue-600", props.valueColor)}>
              {props.value}
            </div>
          </div>
        </div>
        <div className={cn("rounded-md p-2",props.iconBackgroundColor)}>
          <Icon className={cn("w-6 h-6",props.iconColor)} />
        </div>
      </CardContent>
    </Card>
  )
}
export default TopCard
