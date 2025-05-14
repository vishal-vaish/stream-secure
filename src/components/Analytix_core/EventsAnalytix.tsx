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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {CustomTooltip} from "@/components/Analytix_core/AnalytixTooltip";
import {eventTypeData, hourlyEventData} from '@/lib/data';

const EventsAnalytix = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4 md:mt-0">
      <Card>
        <CardHeader>
          <CardTitle>Event Type Distribution</CardTitle>
          <CardDescription>Breakdown of event types over the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={eventTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {eventTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  layout="vertical"
                  verticalAlign="top"
                  align="right"
                  formatter={(value) => <span className="text-slate-300">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hourly Event Distribution</CardTitle>
          <CardDescription>Events by hour of day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={hourlyEventData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="events" name="Events" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                  {hourlyEventData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.events > 30 ? "#F59E0B" : "#3B82F6"} />
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
export default EventsAnalytix
