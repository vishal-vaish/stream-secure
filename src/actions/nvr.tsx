import {ChannelType, NVR} from "@/lib/types";
import {mockedChannelsData, mockedNVRData} from "@/lib/data";

export const getNVRById = (id: string): NVR | undefined => {
  return mockedNVRData.find(nvr => nvr.id === id);
};

export const getFilteredChannel = (nvrId: string): ChannelType[] => {
  return mockedChannelsData.filter(camera => camera.nvrId === nvrId);
};

export const getChannelById = (id: string): ChannelType | undefined => {
  return mockedChannelsData.find(camera => camera.id === id);
};