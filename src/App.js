import React, { useEffect, useState } from "react";
import Player from "./Components/Player";

const App = () => {
  const songs = [
    {
      title: "2sugar",
      artist: "Wizkid",
      img_src: "./Images/2sugar.jpg",
      src: "./Songs/2sugar.mp3",
    },
    {
      title: "Badtome",
      artist: "Wizkid",
      img_src: "./Images/Badtome.jpg",
      src: "./Songs/Badtome.mp3",
    },
    {
      title: "frames",
      artist: "Wizkid",
      img_src: "./Images/frames.jpg",
      src: "./Songs/frames.mp3",
    },
    {
      title: "idk",
      artist: "Wizkid",
      img_src: "./Images/idk.jpg",
      src: "./Songs/idk.mp3",
    },
    {
      title: "joro",
      artist: "Wizkid",
      img_src: "./Images/wallpaper.jpg",
      src: "./Songs/joro.mp3",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, SetNextSongIndex] = useState(0);

  useEffect(() => {
    SetNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
