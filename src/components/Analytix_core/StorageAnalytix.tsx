"use client";

import React, {useEffect, useState} from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {storageGrowthData} from "@/lib/data";
import {CustomTooltip} from "@/components/Analytix_core/AnalytixTooltip";
import {getDiskUsage} from "@/lib/queries";
import {DishUsageType} from "@/lib/types";
import {bytesToTB} from "@/lib/utils";

const StorageAnalytix = () => {
  const [usage, setUsage] = useState<DishUsageType | null>(null);
  const totalSpace = 1;

  useEffect(() => {
    const fetchUsageData = async () => {
      const usageData = await getDiskUsage();
      setUsage(usageData);
    }
    fetchUsageData();
  }, []);

  const freeSpace = totalSpace - bytesToTB(usage?.total_size_bytes);

  const storageData = [
    {name: "Used Space", value: bytesToTB(usage?.total_size_bytes), color: "#3B82F6"},
    {name: "Free Space", value: freeSpace, color: "#FACC15"},
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 md:mt-0 mb-4">
      <Card>
        <CardHeader>
          <CardTitle>Storage Utilization</CardTitle>
          <CardDescription>Current storage usage for JMS Mining HO</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={storageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={true}
                >
                  {storageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color}/>
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend
                  formatter={(value, entry, index) => (
                    <span className="text-sm text-slate-500 dark:text-slate-300">
                      {value} ({storageData[index].value} TB)
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Storage Growth</CardTitle>
          <CardDescription>Storage usage by day (TB)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={storageGrowthData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                <XAxis dataKey="day" stroke="#6B7280"/>
                <YAxis stroke="#6B7280"/>
                <Tooltip content={<CustomTooltip/>} formatter={(value) => [`${value} TB`, "Daily Growth"]}/>
                <Bar dataKey="growth" name="Storage Growth" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                  {storageGrowthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.growth > 0.3 ? "#EF4444" : "#3B82F6"}/>
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default StorageAnalytix
