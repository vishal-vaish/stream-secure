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

export function bytesToTB(bytes: number, decimals = 4) {
  if (bytes === 0) return 0;

  const terabyte = 1024 ** 4; // 1 TB = 1024^4 bytes

  return parseFloat((bytes / terabyte).toFixed(decimals));
}
