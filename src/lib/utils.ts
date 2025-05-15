import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function bytesToMB(bytes:number, decimals = 4) {
  if (bytes === 0) return 0;

  const megabyte = 1024 * 1024;

  return parseFloat((bytes / megabyte).toFixed(decimals));
}

export function bytesToTB(bytes: number | undefined, decimals = 4) {
  if (bytes === 0 || bytes === undefined) return 0;

  const terabyte = 1024 ** 4;

  return parseFloat((bytes / terabyte).toFixed(decimals));
}

export const waitFor = (seconds:number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

export const formatDateWithoutTime = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const convertToISOFormat = (dateRangeString:string) => {
  const [startPart, endPart] = dateRangeString.split(' - ');

  const [startDate, startTime] = startPart.split(' at ');
  const [startDay, startMonth, startYear] = startDate.split('/').map(Number);
  const [startHour, startMinute] = startTime.split(':').map(Number);

  const [endDate, endTime] = endPart.split(' at ');
  const [endDay, endMonth, endYear] = endDate.split('/').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const startDateTime = new Date(startYear, startMonth - 1, startDay, startHour, startMinute);
  const endDateTime = new Date(endYear, endMonth - 1, endDay, endHour, endMinute);

  return {
    start: startDateTime.toISOString(),
    end: endDateTime.toISOString()
  };
}