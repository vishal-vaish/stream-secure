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
import {crossLobbyMovement, dwellTimeData, staffMovementPatterns} from '@/lib/data';
import {CustomTooltip} from "@/components/Analytix_core/AnalytixTooltip";

const StaffJourneyMapping = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Cross-Lobby Movement</CardTitle>
          <CardDescription>Movement between lobbies by time of day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={crossLobbyMovement}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="Lobby-1 to Lobby-2" name="Lobby-1 to Lobby-2" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Lobby-2 to Lobby-1" name="Lobby-2 to Lobby-1" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Movement Patterns</CardTitle>
            <CardDescription>Frequency of movement between lobbies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={staffMovementPatterns}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="count"
                    nameKey="pattern"
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    <Cell fill="#3B82F6" />
                    <Cell fill="#10B981" />
                  </Pie>
                  <Tooltip
                    content={<CustomTooltip />}
                    formatter={(value, name) => [`${value} movements`, name]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Dwell Time</CardTitle>
            <CardDescription>Average time spent in each lobby (minutes)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dwellTimeData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="location" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip content={<CustomTooltip />} formatter={(value) => [`${value} min`, "Avg. Time"]} />
                  <Bar dataKey="time" name="Minutes" radius={[4, 4, 0, 0]}>
                    <Cell fill="#3B82F6" />
                    <Cell fill="#10B981" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default StaffJourneyMapping
