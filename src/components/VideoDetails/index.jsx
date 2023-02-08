import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../redux/slices/videoSlice.js";
import { Container, Video } from "./styled.js";
import VideoPlayer from "./VideoPlayer";

const VideoDetails = () => {
  const location = useLocation();
  const videoId = location.search.slice(3);

  const { video } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const { snippet } = video;

  React.useEffect(() => {
    if (window.location.search) {
      // console.log();
      dispatch(fetchVideo(window.location.search.slice(3)));
    }
  }, [location]);

  return (
    <Container>
      <Video>
        <VideoPlayer id={videoId ? videoId : videoID} />
        <Video.Title>{snippet?.title}</Video.Title>
        <Video.Desc>{snippet?.description}</Video.Desc>
      </Video>
    </Container>
  );
};

export default VideoDetails;
