import {ChannelType, NVR} from "@/lib/types";
import {mockedChannelsData, mockedNVRData} from "@/lib/data";

export const getNVRById = (id: string): NVR | undefined => {
  return mockedNVRData.find(nvr => nvr.id === id);
};

export const getFilteredChannel = (serverId: string): ChannelType[] => {
  return mockedChannelsData.filter(camera => camera.nvrId === serverId);
};