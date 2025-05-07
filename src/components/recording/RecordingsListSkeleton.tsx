import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";

const RecordingsListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Skeleton key={i} className="h-48 w-full"/>
      ))}
    </div>
  )
}
export default RecordingsListSkeleton
