import React from 'react';
import Header from "../components/Header/index.jsx";
import VideoDetailsPage from "../pages/VideoDetailsPage.jsx";

const VideoLayout = () => {
  return (
    <div>
      <Header/>
      <VideoDetailsPage />
    </div>
  );
};

export default VideoLayout;