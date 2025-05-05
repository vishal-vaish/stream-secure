"use client";

import React, {useEffect, useRef} from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/http-streaming';
import type Player from 'video.js/dist/types/player';

type Props = {
  src:string;
}

interface VideoJsPlayerProps {
  options: any;
  onReady?: (player: Player) => void;
}

const RealTimeVideoPlayer = (props:Props) => {

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: props.src ? [{
      src: props.src,
      type: 'application/x-mpegURL'
    }] : [],
    html5: {
      vhs: { // Use vhs instead of hls for newer versions
        overrideNative: true,
        withCredentials: false,
        handleManifestRedirects: true
      },
      nativeAudioTracks: false,
      nativeVideoTracks: false
    }
  };

  return (
    <div
      className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg"
    >
      <VideoJsPlayer
        options={videoJsOptions}
        // onReady={handlePlayerReady}
      />
    </div>
  )
}
export default RealTimeVideoPlayer;

const VideoJsPlayer = ({ options, onReady }: VideoJsPlayerProps) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      if (!videoRef.current) return;

      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, {
        ...options,
        debug: true,
        liveui: true
      }, () => {
        console.log('Player is ready');
        onReady && onReady(player);
      });

      player.on('error', () => {
        console.error('VideoJS Error:', player.error());
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
      <div ref={videoRef} className="w-full h-full" />
    </div>
  );
};
