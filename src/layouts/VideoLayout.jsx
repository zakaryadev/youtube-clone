import React from "react";
import { useLocation } from "react-router";
import Header from "../components/Header/index.jsx";
import VideoDetailsPage from "../pages/VideoDetailsPage.jsx";

const VideoLayout = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Header />
      <VideoDetailsPage videoID={location.search && location.search.slice(3)} />
    </React.Fragment>
  );
};

export default VideoLayout;
