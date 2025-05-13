import React from 'react'
import {StorageType} from "@/lib/types";
import {useNavbarDetails} from '@/hooks/useNavbarDetails';
import StorageListCard from "@/components/storage/StorageListCard";
import CreateStorageDialog from "@/components/storage/CreateStorageDialog";
import {applyDynamicFilter} from "@/components/applyDynamicFilter";

type Props = {
  data: StorageType[];
}

const StorageList = (props: Props) => {
  const {searchTerm} = useNavbarDetails();

  const filteredStorages = applyDynamicFilter(
    props.data,
    searchTerm,
    {textFields: ["storageName", "ipAddress"]}
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {filteredStorages.map((storage) => (
        <StorageListCard storage={storage} key={storage.id}/>
      ))}
      <CreateStorageDialog/>
    </div>
  )
}
export default StorageList
