import React from "react";

export const TimestampTooltip = ({active, payload, label}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md p-3 shadow-lg">
        <p className="font-medium dark:text-white text-slate-800 mb-1">{payload[0]?.payload.timestamp || label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color || entry.stroke}}></div>
            <span className="dark:text-slate-300 text-slate-800">{entry.name}: </span>
            <span className="font-medium text-slate-900 dark:text-white">{entry.value}</span>
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
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md p-3 shadow-lg">
        <p className="font-medium dark:text-white text-slate-800 mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color || entry.stroke}}></div>
            <span className="dark:text-slate-300 text-slate-800">{entry.name}: </span>
            <span className="font-medium text-slate-900 dark:text-white">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}