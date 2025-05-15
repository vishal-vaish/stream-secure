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
  const {channelId} = useParams<{
    channelId: string;
  }>();

  const channel = getChannelById(channelId);

  useEffect(() => {
    if (channel) {
      const breadcrumbItems: BreadcrumbItemType[] = [
        {label: "All Channels", path: "/channels"},
        {label: channel.name, path: `/channels/${channel.id}`},
        {
          label: "Recording",
          path: `/channels/${channel.id}/recording`
        }
      ];

      setNavbarTitle(`${channel.name} Recordings`);
      setBreadcrumbItems(breadcrumbItems);
    }
  }, [channel, setBreadcrumbItems, setNavbarTitle]);

  const fetchData = useCallback(async () => {
    if (channel) {
      try {
        setIsLoading(true);
        const data = await getAllRecordingsData(channel.nvrId, channel.id);
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
  }, [channel]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const recordingFilterConfig: FilterConfigType = {
    textFields: ["channelName", "nvrName"],
    dateField: "created",
  };

  const filteredRecording = applyDynamicFilter(
    recordingData,
    searchTerm,
    recordingFilterConfig
  );

  return (
    <div>
      {isLoading ? (
        <RecordingsListSkeleton/>
      ) : (
        filteredRecording.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-700 dark:text-gray-200">
              No data is Available
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{channel?.name} Recordings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredRecording.map((recording, index) => (
                <Link
                  href={`/channels/${channel?.id}/recording/${recording.filename}`}
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
