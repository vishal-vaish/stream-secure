import React from 'react'
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
  AreaChart,
  Area,
} from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import {behavioralData, behaviorByZoneData, durationData} from '@/lib/data';
import {CustomTooltip} from "@/components/Analytix_core/AnalytixTooltip";

const BehavioralAnalytix = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Walking vs. Standing Behavior</CardTitle>
              <CardDescription>Detected behaviors over 24 hours</CardDescription>
            </div>
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px] dark:bg-slate-800 dark:border-slate-700">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">Last 7 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={behavioralData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorL1W" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorL1S" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorL2W" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorL2S" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="Ground Floor Lobby-1 Walking"
                  name="Lobby-1 Walking"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorL1W)"
                />
                <Area
                  type="monotone"
                  dataKey="Ground Floor Lobby-1 Standing"
                  name="Lobby-1 Standing"
                  stroke="#F59E0B"
                  fillOpacity={1}
                  fill="url(#colorL1S)"
                />
                <Area
                  type="monotone"
                  dataKey="Ground Floor Lobby-2 Walking"
                  name="Lobby-2 Walking"
                  stroke="#10B981"
                  fillOpacity={1}
                  fill="url(#colorL2W)"
                />
                <Area
                  type="monotone"
                  dataKey="Ground Floor Lobby-2 Standing"
                  name="Lobby-2 Standing"
                  stroke="#8B5CF6"
                  fillOpacity={1}
                  fill="url(#colorL2S)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card>
          <CardHeader>
            <CardTitle>Behavior by Zone</CardTitle>
            <CardDescription>Walking vs. standing percentage by zone</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={behaviorByZoneData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
                  <XAxis type="number" stroke="#6B7280" />
                  <YAxis dataKey="zone" type="category" stroke="#6B7280" />
                  <Tooltip content={<CustomTooltip />} formatter={(value) => [`${value}%`, ""]} />
                  <Legend />
                  <Bar dataKey="walking" name="Walking %" stackId="a" fill="#3B82F6" />
                  <Bar dataKey="standing" name="Standing %" stackId="a" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Standing Duration</CardTitle>
            <CardDescription>Distribution of standing duration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={durationData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="duration" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="Ground Floor Lobby-1" name="Lobby-1" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Ground Floor Lobby-2" name="Lobby-2" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default BehavioralAnalytix
