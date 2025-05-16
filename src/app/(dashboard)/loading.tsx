import React from 'react'
import {Loader2} from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-15rem)] flex justify-center items-center">
      <Loader2 className="animate-spin"/>
    </div>
  )
}
export default Loading
