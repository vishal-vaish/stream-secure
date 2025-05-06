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
