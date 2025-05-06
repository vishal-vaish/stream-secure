import axios from "axios";
import {StorageType} from "@/lib/types";

export const baseUrl = "http://192.168.1.114:8000";

export const getAllStorageData = async (): Promise<StorageType[]> => {
  try {
    const response = await axios.get(`${baseUrl}/recordings`);
    return response.data.recordings;
  } catch (error) {
    console.error('Error fetching camera data:', error);
    throw error;
  }
};