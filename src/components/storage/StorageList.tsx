import React from 'react'
import {useNavbarDetails} from "@/hooks/useNavbarDetails";
import StorageListCard from "@/components/storage/StorageListCard";
import Link from "next/link";
import {StorageType} from "@/lib/types";

type Props = {
  storageData: StorageType[];
}

const StorageList = (props:Props) => {
  const {searchTerm} = useNavbarDetails();

  // const filteredStorages = props.storageData.filter(storage => {
  //   const nvr = mockedNVRData.find(n => n.id === storage.nvrId);
  //   const channel = mockedChannelsData.find(c => c.id === storage.channelId);
  //   const combinedText = `${nvr?.name ?? ''} ${nvr?.location ?? ''} ${channel?.name ?? ''} ${channel?.location ?? ''}`.toLowerCase();
  //
  //   return combinedText.includes(searchTerm.toLowerCase());
  // });

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">All Store Files</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {props?.storageData?.map((storage, index) => (
          <Link
            href={`/storages/${storage.filename}`}
            key={index}
          >
            <StorageListCard storage={storage}/>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default StorageList
