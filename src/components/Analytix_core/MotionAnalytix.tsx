import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"
import {motionData, weeklyMotionData} from "@/lib/data";
import {CustomTooltip, TimestampTooltip} from "@/components/Analytix_core/AnalytixTooltip";

const MotionAnalytix = () => {
  return (
    <div className="mt-4 md:mt-0">
      <Card className="mb-5">
        <CardHeader>
          <div className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle>Motion Detection Frequency</CardTitle>
              <CardDescription>Motion events detected over 24 hours</CardDescription>
            </div>
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px] dark:bg-slate-800 dark:border-slate-700">
                <SelectValue placeholder="Select period"/>
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
                data={motionData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorLobby1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorLobby2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                <XAxis dataKey="hour" stroke="#6B7280"/>
                <YAxis stroke="#6B7280"/>
                <Tooltip content={<TimestampTooltip/>}/>
                <Legend/>
                <Area
                  type="monotone"
                  dataKey="Ground Floor Lobby-1"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorLobby1)"
                />
                <Area
                  type="monotone"
                  dataKey="Ground Floor Lobby-2"
                  stroke="#10B981"
                  fillOpacity={1}
                  fill="url(#colorLobby2)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Motion Trends</CardTitle>
          <CardDescription>Motion events by day of week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyMotionData}
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
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
                <Bar
                  dataKey="Ground Floor Lobby-1"
                  name="Ground Floor Lobby-1"
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Ground Floor Lobby-2"
                  name="Ground Floor Lobby-2"
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default MotionAnalytix
