import React from 'react'
import RealTimeVideoPlayer from "@/components/channel/RealTimeVideoPlayer";

const initialVideos = [
  { id: 1, url: "http://192.168.1.114:8000/hls/stream_0/playlist.m3u8", title: "cam-009" },
  { id: 2, url: "http://192.168.1.114:8000/hls/stream_1/playlist.m3u8", title: "cam-010" }
];

const Page = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 bg-gray-900 text-white">
      <div
        className="grid gap-2 w-full h-full"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "minmax(120px, 1fr)"
        }}
      >
        {Array.from({ length: 16 }).map((_, index) => {
          const video = initialVideos[index];

          return (
            <div
              key={index}
              className={`rounded overflow-hidden relative ${video ? 'bg-gray-800' : 'bg-black'}`}
            >
              {video ? (
                <>
                  <div className="group w-full h-full flex items-center justify-center">
                    <RealTimeVideoPlayer
                      src={video.url}
                      className="h-full"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-70 p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {video.title}
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                  {index < initialVideos.length ? "Loading..." : "No Stream"}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default Page
