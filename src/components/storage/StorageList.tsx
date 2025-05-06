import React from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import {mockedChannelsData, mockedNVRData, mockedStorageData} from "@/lib/data";
import StorageListCard from "@/components/storage/StorageListCard";
import Link from "next/link";

const StorageList = () => {
  const {searchTerm} = useNavbarDetails();

  const filteredStorages = mockedStorageData.filter(storage => {
    const nvr = mockedNVRData.find(n => n.id === storage.nvrId);
    const channel = mockedChannelsData.find(c => c.id === storage.channelId);
    const combinedText = `${nvr?.name ?? ''} ${nvr?.location ?? ''} ${channel?.name ?? ''} ${channel?.location ?? ''}`.toLowerCase();

    return combinedText.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">All Store Files</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredStorages.map((storage) => (
          <Link
            href={`/storages/${storage.id}`}
            key={storage.id}
          >
            <StorageListCard storage={storage}/>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default StorageList
