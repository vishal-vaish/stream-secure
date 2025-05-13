"use client";

import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {Calendar} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {formatDateWithoutTime} from "@/lib/utils";
import {SearchTermType} from "@/provider/NavbarDetailsProvider";

interface DateTimeRange {
  startDate: Date | null;
  endDate: Date | null;
  startTime: string;
  endTime: string;
}

type Props = {
  setSelectedValue: (range: SearchTermType) => void;
}

const DateRangePicker = (props: Props) => {
  const [dateRange, setDateRange] = useState<DateTimeRange>(
    {
      startDate: (() => {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return sevenDaysAgo;
      })(),
      endDate: new Date(),
      startTime: "00:00",
      endTime: "23:59",
    }
  );
  const [selectingStartDate, setSelectingStartDate] = useState(true);
  const [month, setMonth] = useState(new Date());
  const [open, setOpen] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const changeMonth = (delta: number) => {
    const newMonth = new Date(month.getFullYear(), month.getMonth() + delta, 1);
    setMonth(newMonth);
  }

  const handleDateSelect = (date: Date) => {
    const newRange = {...dateRange};
    if (selectingStartDate) {
      newRange.startDate = date;
      if (newRange.endDate && date > newRange.endDate) {
        newRange.endDate = null;
      }
      setSelectingStartDate(false);
    } else {
      if (dateRange.startDate && date < dateRange.startDate) {
        newRange.endDate = newRange.startDate;
        newRange.startDate = date;
      } else {
        newRange.endDate = date;
      }
      setSelectingStartDate(true);
    }
    setDateRange(newRange);
  }

  const generateCalendarDays = () => {
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    const days = [];
    const firstDayOfWeek = firstDay.getDay();

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"/>);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(month.getFullYear(), month.getMonth(), i);
      currentDate.setHours(0,0,0,0);

      const isFutureDate = currentDate > today;

      const isSelected =
        dateRange.startDate &&
        dateRange.endDate &&
        currentDate >= new Date(dateRange.startDate.setHours(0, 0, 0, 0)) &&
        currentDate <= new Date(dateRange.endDate.setHours(0, 0, 0, 0));

      const isStartDate =
        dateRange.startDate &&
        currentDate.toDateString() === dateRange.startDate.toDateString();

      const isEndDate =
        dateRange.endDate &&
        currentDate.toDateString() === dateRange.endDate.toDateString();

      days.push(
        <button
          key={i}
          onClick={() => {
            if(!isFutureDate) {
            handleDateSelect(new Date(month.getFullYear(), month.getMonth(), i))
            }
          }}
          disabled={isFutureDate}
          className={`h-8 w-8 rounded-md flex items-center justify-center text-sm
            ${isSelected ? "dark:bg-gray-700 bg-gray-200" : ""}
            ${isStartDate || isEndDate ? "!bg-blue-500 text-white" : ""}
            ${isFutureDate ? "opacity-30 !text-gray-500" : "hover:dark:bg-gray-800 hover:bg-gray-300" }`}
        >
          {i}
        </button>
      )
    }

    return days;
  }

  const handleTimeChange = (field: "startTime" | "endTime", value: string) => {
    const newRange = {...dateRange, [field]: value};
    setDateRange(newRange);
  };

  return (
    <div className="w-full rounded-md">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"no-background"}
            className="w-full justify-start text-left font-normal hover:bg-transparent"
          >
            <Calendar className="h-4 w-4 hover:text-blue-600"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 w-auto z-50 border rounded-md shadow-lg bg-whitedark:bg-gray-900">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => changeMonth(-1)} className="p-1 text-gray-700 dark:text-gray-500">◀</button>
            <div className="font-medium">
              {month.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button onClick={() => changeMonth(1)} className="p-1 text-gray-700 dark:text-gray-500">▶</button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="h-8 w-8 flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-200"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">{generateCalendarDays()}</div>

          <div className="mt-4 grid grid-cols-2 gap-1">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium dark:text-gary-200">Start Time</label>
              <div className="flex items-center border rounded-md p-1">
                <input
                  type="time"
                  value={dateRange.startTime}
                  onChange={(e) => handleTimeChange("startTime", e.target.value)}
                  className="text-sm outline-none w-full py-2 dark:bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium dark:text-gary-200">End Time</label>
              <div className="flex items-center border rounded-md p-1">
                <input
                  type="time"
                  value={dateRange.endTime}
                  onChange={(e) => handleTimeChange("endTime", e.target.value)}
                  className="text-sm outline-none w-full py-2 dark:bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              className="px-4 py-1 bg-blue-500 text-gray-50 text-sm rounded-md hover:bg-blue-600 transition"
              onClick={() => {
                const {startDate, endDate, startTime, endTime} = dateRange;
                if (!startDate || !endDate) return null;
                const start = `${formatDateWithoutTime(startDate)} at ${startTime}`
                const end = `${formatDateWithoutTime(endDate)} ${endTime}`
                props.setSelectedValue({value: `${start} - ${end}`, type: "date"});
                setOpen(false);
              }}
            >
              Apply
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default DateRangePicker
