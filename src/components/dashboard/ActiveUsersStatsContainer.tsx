import React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {activeUserStats} from "@/lib/data";

const ActiveUsersStatsContainer = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Active Users</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeUserStats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${item.iconBg}`}
                >
                  <Icon className={`w-4 h-4 ${item.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </span>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
export default ActiveUsersStatsContainer
