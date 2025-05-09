"use client";

import React, {useEffect, useRef} from 'react'
import RealTimeVideoPlayer from "@/components/channel/RealTimeVideoPlayer";
import {mockedVideoGridData} from "@/lib/data";
import LiveGridFooter from "@/components/footer/LiveGridFooter";

interface FullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface FullscreenDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const enterFullscreen = (): void => {
    const element = containerRef.current as FullscreenElement | null;
    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      enterFullscreen();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div
        ref={containerRef}
        className="flex-1 min-h-0 p-2 gap-4 overflow-hidden bg-gray-900 text-white">
        <div
          className="grid gap-2 w-full h-full"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "minmax(120px, 1fr)"
          }}
        >
          {Array.from({length: 16}).map((_, index) => {
            const video = mockedVideoGridData[index];

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
                      <div
                        className="absolute top-0 left-0 bg-black bg-opacity-70 p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {video.title}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                    {index < mockedVideoGridData.length ? "Loading..." : "No Stream"}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <LiveGridFooter enterFullscreen={() => enterFullscreen()}/>
    </div>
  )
}
export default Page
