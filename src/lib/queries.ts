import axios from "axios";
import {RecordingType} from "@/lib/types";

export const baseUrl = "http://192.168.1.114:8000";

export const getAllRecordingsData = async (
  nvrId?: string,
  channelId?: string,
): Promise<RecordingType[]> => {
  try {
    let url = `${baseUrl}/recordings`;
    const queryParams = [];
    if(nvrId) queryParams.push(`nvrId=${nvrId}`);
    if(channelId) queryParams.push(`channelId=${channelId}`);

    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    const response = await axios.get(url);
    return response.data.recordings;
  } catch (error) {
    console.error('Error fetching camera data:', error);
    throw error;
  }
};