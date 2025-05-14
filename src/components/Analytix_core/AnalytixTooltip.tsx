import React from "react";

export const TimestampTooltip = ({active, payload, label}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-md p-3 shadow-lg">
        <p className="font-medium text-white mb-1">{payload[0]?.payload.timestamp || label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color || entry.stroke}}></div>
            <span className="text-slate-300">{entry.name}: </span>
            <span className="font-medium text-white">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export const CustomTooltip = ({active, payload, label}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-md p-3 shadow-lg">
        <p className="font-medium text-white mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color || entry.stroke}}></div>
            <span className="text-slate-300">{entry.name}: </span>
            <span className="font-medium text-white">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}