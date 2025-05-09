"use client";

import React, {useEffect, useRef} from "react"
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/http-streaming";
import type Player from "video.js/dist/types/player";
import {cn} from "@/lib/utils";

type Props = {
  src: string;
  showAsThumbail?: boolean;
  className?: string;
}

interface VideoJsPlayerProps {
  options: any;
  onReady?: (player: Player) => void;
}

const RealTimeVideoPlayer = (props: Props) => {
  const playerRef = useRef<Player | null>(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: props.src ? [{
      src: props.src,
      type: "application/x-mpegURL"
    }] : [],
    html5: {
      vhs: {
        overrideNative: true,
        withCredentials: false,
        handleManifestRedirects: true
      },
      nativeAudioTracks: false,
      nativeVideoTracks: false
    }
  };

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    player.on("error", () => {
      console.log("Video playback error. You might need to update the stream URL.");
    });

    player.on("loadedmetadata", () => {
      console.log("Metadata loaded successfully");
    });

    player.on("loadeddata", () => {
      console.log("Media data loaded successfully");
    });
  };

  return (
    <div
      className={cn("relative w-full aspect-video overflow-hidden shadow-lg",
      props.showAsThumbail ? "" : "rounded-lg bg-black",
      props.className)}
    >
      {!props.showAsThumbail && (
        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded z-10">
          LIVE
        </div>
      )}
      <VideoJsPlayer
        options={videoJsOptions}
        onReady={handlePlayerReady}
      />
    </div>
  )
}
export default RealTimeVideoPlayer;

const VideoJsPlayer = ({options, onReady}: VideoJsPlayerProps) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      if (!videoRef.current) return;

      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, {
        ...options,
        debug: true,
        liveui: true
      }, () => {
        console.log("Player is ready");
        onReady && onReady(player);
      });

      player.on("error", () => {
        console.error("VideoJS Error:", player.error());
      });
    } else {
      const player = playerRef.current;
      player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div ref={videoRef} className="w-full h-full"/>
    </div>
  );
};
