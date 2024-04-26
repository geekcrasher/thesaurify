import React from "react";

type MP3AudioType = {
  source?: { audio?: string }[]
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const mp3Audio = ({ source, setState }: MP3AudioType) => {
  setTimeout(() => {
    const audioElement = new Audio(source && source[0].audio);
    audioElement.play();

    audioElement.addEventListener('play', () => {
      setState(true);
    });
    audioElement.addEventListener('ended', () => {
      setState(false);
    });
  }, 500)
};