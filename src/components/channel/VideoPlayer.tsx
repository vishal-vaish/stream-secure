"use client";

import React from "react"

type Props = {
  src: string;
  poster?: string;
  title?: string;
}

const VideoPlayer = (props: Props) => {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <div className="absolute top-4 right-4 flex items-center bg-yellow-700 text-white text-xs font-semibold px-2 py-1 rounded z-10">
        <span className="h-2 w-2 bg-white rounded-full mr-1 animate-ping-slow" />
        Recorded
      </div>
      <video
        controls
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        poster={props.poster}
      >
        <source src={props.src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
export default VideoPlayer
