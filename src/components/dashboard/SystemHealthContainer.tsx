import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {systemHealthUsageStats} from "@/lib/data";

const SystemHealthContainer = () => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>System Health</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {systemHealthUsageStats.map((stat) => (
          <Card key={stat.label} className="bg-gray-50 dark:bg-gray-700/50">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {stat.label}
              </span>
                <span className={`text-sm ${stat.textColor}`}>{stat.value}%</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                <div
                  className={`h-2 rounded-full ${stat.barColor}`}
                  style={{ width: `${stat.value}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>

  )
}
export default SystemHealthContainer
