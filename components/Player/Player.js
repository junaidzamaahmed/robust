import React, { useState } from "react";
import {
  ArrowsRightLeftIcon,
  ArrowUturnLeftIcon,
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  PlayIcon,
  SpeakerWaveIcon as VolUp,
} from "@heroicons/react/24/solid";
import {
  PauseIcon,
  SpeakerWaveIcon as VolDown,
} from "@heroicons/react/24/outline";

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const podcastPlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      {/* LEFT */}
      <div className="flex items-center space-x-4 col-span-1">
        <img
          className="hidden md:inline h-10 w-10"
          src="https://media.wired.com/photos/620eb0f39266d5d11c07b3c5/master/pass/Gear-Podcast-Gear-1327244548.jpg"
          alt=""
        />
        <div>
          <h3>Podcast Name</h3>
          <p className="text-sm">Junaid Ahmed, Sharnit Saha</p>
        </div>
      </div>
      {/* CENTER */}
      <div className="flex items-center justify-evenly">
        <ArrowsRightLeftIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />

        <BackwardIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        {isPlaying ? (
          <PauseCircleIcon
            onClick={podcastPlay}
            className="w-10 h-10 cursor-pointer hover:scale-125 transition transform duration-100 ease-out"
          />
        ) : (
          <PlayCircleIcon
            onClick={podcastPlay}
            className="w-10 h-10 cursor-pointer hover:scale-125 transition transform duration-100 ease-out"
          />
        )}
        <ForwardIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        <ArrowUturnLeftIcon className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
      </div>
      {/* RIGHT */}
      <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
        <VolUp className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        <input type="range" />
        <VolDown className="w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
      </div>
    </div>
  );
};
