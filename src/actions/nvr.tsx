import {NVR} from "@/lib/types";
import {nvrs} from "@/lib/data";

export const getNVRById = (id: string): NVR | undefined => {
  return nvrs.find(nvr => nvr.id === id);
};