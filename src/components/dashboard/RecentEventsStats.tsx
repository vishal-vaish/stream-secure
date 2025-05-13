import React from 'react'
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {recentEventsStats} from "@/lib/data";
import {AlertTriangle, Check, Clock, Info} from "lucide-react";
import {cn} from "@/lib/utils";
import {EventSeverityEnum, EventStatusEnum, recentEventsStatsType} from "@/lib/types";

const RecentEventsStats = () => {
  const getSeverityIcon = (severity: EventSeverityEnum, status:EventStatusEnum) => {
    if (status === EventStatusEnum.RESOLVED) return <Check className="w-5 h-5 text-green-500"/>;

    switch (severity) {
      case EventSeverityEnum.HIGH:
        return <AlertTriangle className="w-5 h-5 text-red-500"/>;
      case EventSeverityEnum.MEDIUM:
        return <AlertTriangle className="w-5 h-5 text-yellow-500"/>;
      case EventSeverityEnum.LOW:
        return <Info className="w-5 h-5 text-blue-500"/>;
      case EventSeverityEnum.INFO:
        return <Info className="w-5 h-5 text-purple-500"/>;
      default:
        return <Info className="w-5 h-5 text-gray-500"/>;
    }
  };

  const getStatusIndicator = (status:EventStatusEnum) => {
    switch (status) {
      case EventStatusEnum.NEW:
        return <span className="flex items-center text-blue-400"><span
          className="w-2 h-2 mr-1 rounded-full bg-blue-400"></span>New</span>;
      case EventStatusEnum.ACKNOWLEDGED:
        return <span className="flex items-center text-yellow-400"><span
          className="w-2 h-2 mr-1 rounded-full bg-yellow-400"></span>Acknowledged</span>;
      case EventStatusEnum.RESOLVED:
        return <span className="flex items-center text-green-400"><span
          className="w-2 h-2 mr-1 rounded-full bg-green-400"></span>Resolved</span>;
      case EventStatusEnum.INFO:
        return <span className="flex items-center text-purple-400"><span
          className="w-2 h-2 mr-1 rounded-full bg-purple-400"></span>Info</span>;
      default:
        return <span className="flex items-center text-gray-400"><span
          className="w-2 h-2 mr-1 rounded-full bg-gray-400"></span>Pending</span>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center pb-4">
        <div className="text-lg">Recent Events</div>
        <div className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</div>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentEventsStats.map((event: recentEventsStatsType, i) => (
          <div
            key={i}
            className={cn(
              "p-4 rounded-lg border-l-4 bg-gray-50 dark:bg-gray-800/80",
              event.severity === EventSeverityEnum.HIGH ? "border-red-500" :
                event.severity === EventSeverityEnum.MEDIUM ? "border-yellow-500" :
                  event.severity === EventSeverityEnum.LOW ? "border-blue-500" :
                    "border-purple-500",
              "hover:bg-gray-100/80 hover:dark:bg-gray-700/80 transition-colors duration-150"
            )}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-start space-x-3">
                <div className={cn(
                  "p-2 rounded-full bg-opacity-20 mt-1",
                  event.severity === EventSeverityEnum.HIGH ? 'bg-red-900/30' :
                    event.severity === EventSeverityEnum.MEDIUM ? 'bg-yellow-900/30' :
                      event.severity === EventSeverityEnum.LOW ? 'bg-blue-900/30' :
                        'bg-purple-900/30'
                )}>
                  {getSeverityIcon(event.severity, event.status)}
                </div>

                <div>
                  <div className="font-medium">
                    {event.type}
                    {event.details && <span className="text-gray-400 text-sm ml-2">- {event.details}</span>}
                  </div>
                  <div className="text-sm text-gray-400 mt-1 flex items-center">
                    <span className="mr-3">{event.location}</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1"/> {event.timestamp}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {getStatusIndicator(event.status)}
                <span className="text-gray-500 text-sm">{event.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
export default RecentEventsStats