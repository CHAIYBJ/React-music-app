import {
  PauseCircleOutline,
  PlayCircleOutline,
  SkipNextOutlined,
  SkipPreviousOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import Player from "./Player";
import { IconContext } from "react-icons";

const Control = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className="control">
        <button className="playButton" style={{}} onClick={() => props.SkipSong(false)}>
          <SkipPreviousOutlined  className="plays" />
        </button>

        <button
          onClick={() => props.setIsPlaying(!props.isPlaying)}
          className="playButton"
        >
          {props.isPlaying ? <PauseCircleOutline /> : <PlayCircleOutline />}
        </button>

        <button className="playButton" onClick={() => props.SkipSong()}>
          <SkipNextOutlined />
        </button>
      </div>
    </div>
  );
};

export default Control;
