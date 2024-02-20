import React from "react";

const Details = (props) => {
  return (
    <div className="details">
      <div className="details__img">
        <img src={props.song.img_src} alt="" />
      </div>

      <div className="title_artist">
        <h3 className="details__title THIRD">{props.song.title}</h3>
        <h3 className="details__artist THIRD">{props.song.artist}</h3>
      </div>
    </div>
  );
};

export default Details;
