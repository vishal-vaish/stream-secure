"use client";

import React, {useCallback, useEffect, useState} from 'react'
import {getAllRecordingsData} from "@/lib/queries";
import {toast} from "sonner";
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {BreadcrumbItemType, FilterConfigType, RecordingType} from "@/lib/types";
import {getChannelById, getNVRById} from "@/actions/nvr";
import {useParams} from "next/navigation";
import RecordingsListSkeleton from "@/components/recording/RecordingsListSkeleton";
import Link from "next/link";
import RecordingListCard from "@/components/recording/RecordingListCard";
import {applyDynamicFilter} from "@/components/applyDynamicFilter";

const Page = () => {
  const {setNavbarTitle, setBreadcrumbItems, searchTerm} = useNavbarDetails();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [recordingData, setRecordingData] = useState<RecordingType[]>([]);
  const {nvrId, channelId} = useParams<{
    nvrId: string;
    channelId: string;
  }>();

  const nvr = getNVRById(nvrId || "");
  const channel = getChannelById(channelId || "");

  const fetchData = useCallback(async () => {
    if (nvr) {
      try {
        setIsLoading(true);
        const data = await getAllRecordingsData(nvrId, channelId);
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        const filteredData = data.filter(item => {
          const createdAt = new Date(item.created);
          return createdAt < fiveMinutesAgo;
        });
        setRecordingData(filteredData);
      } catch (error) {
        toast.error("Unable to fetch data");
      } finally {
        setIsLoading(false);
      }
    }
  }, [channelId, nvr, nvrId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (nvr && channel) {
      const breadcrumbItems: BreadcrumbItemType[] = [
        {label: "All NVR", path: "/nvr"},
        {label: nvr.name, path: `/nvr/${nvr.id}`},
        {
          label: channel!.name,
          path: `/nvr/${nvr.id}/channel/${channel!.id}`
        },
        {
          label: "Recording",
          path: `/nvr/${nvr.id}/channel/${channel!.id}/recording`
        }
      ];

      setNavbarTitle(`${nvr?.name} Recordings`);
      setBreadcrumbItems(breadcrumbItems);
    }
  }, [channel, nvr, setBreadcrumbItems, setNavbarTitle]);

  const recordingFilterConfig: FilterConfigType = {
    textFields: ["channelName", "nvrName"],
    dateField: "created",
  };

  const filteredStorages = applyDynamicFilter(
    recordingData,
    searchTerm,
    recordingFilterConfig
  );

  return (
    <div>
      {isLoading ? (
        <RecordingsListSkeleton/>
      ) : (
        recordingData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-700 dark:text-gray-200">
              No data is Available
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{nvr?.name} Recordings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredStorages.map((recording, index) => (
                <Link
                  href={`/nvr/${nvr?.id}/channel/${channel?.id}/recording/${recording.filename}`}
                  key={index}
                >
                  <RecordingListCard recording={recording}/>
                </Link>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}
export default Page
