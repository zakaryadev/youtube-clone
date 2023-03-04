import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ id }) => {
  return (
    <iframe
      id="single-video"
      src={`https://www.youtube.com/embed/${id ? id : null}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture;"
      allowFullScreen></iframe>
  );
};

export default VideoPlayer;
