import React, { useRef } from "react";
import { IconContext } from "react-icons";
import Control from "./Control";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import {
  PlayCircleOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined,
} from "@mui/icons-material";
import { PlayCircleOutline, PauseCircleOutline } from "@mui/icons-material";
import Details from "./Details";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [play, { pause, duration, sound }] = useSound(wizkid);

  // const [timer, setTimer] = useState({
  //   min: "",
  //   sec: "",
  // });

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex (() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length -1 ) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  // const playButton = () => {
  //   if (isPlaying) {
  //     pause();
  //     setIsPlaying(false);
  //   } else {
  //     play();
  //     setIsPlaying(true);
  //   }
  // };

  // const [currTime, setCurrTime] = useState({
  //   min: "",
  //   sec: "",
  // });
  // console.log(sound);

  // const [seconds, setSeconds] = useState();

  // useEffect(() => {
  //   if (duration) {
  //     const sec = duration / 1000;
  //     const min = Math.floor(sec / 60);
  //     const secRemain = Math.floor(sec % 60);
  //     setTimer({
  //       min: min,
  //       sec: secRemain,
  //     });
  //   }
  // }, [isPlaying]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (sound) {
  //       setSeconds(sound.seek([]));
  //       const min = Math.floor(sound.seek([]) / 60);
  //       const sec = Math.floor(sound.seek([]) % 60);
  //       setCurrTime({
  //         min,
  //         sec,
  //       });
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [sound]);

  return (
    <div className="component">
      <h2>Playing Now</h2>
      <div>
        <Details song={props.songs[props.currentSongIndex]} />
      </div>
      <div>
      <audio
          className="player__audio"
          src={props.songs[props.currentSongIndex].src}
          ref={audioEl}
          controls
        ></audio>
      </div>
    
      <Control
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        Next Up:{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by {""}{" "}
          {props.songs[props.nextSongIndex].artist}{" "}
        </span>
      </p>
    </div>
  );
};

export default Player;
