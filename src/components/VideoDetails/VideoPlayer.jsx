import React from "react";

const VideoPlayer = ({ id }) => {
  return (
    <iframe
      id="single-video"
      src={`https://www.youtube.com/embed/${id ? id : null}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
