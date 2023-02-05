import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import History from "../pages/History";
import HomePage from "../pages/HomePage";
import VideoDetailsPage from "../pages/VideoDetailsPage.jsx";
import Sidebar from "../components/Sidebar/index.jsx";
import VideoLayout from "../layouts/VideoLayout.jsx";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="subscribe" element={<h1>subscribe</h1>}/>
          <Route path="history" element={<History/>}/>
          <Route path="about" element={<h1>About</h1>}/>
        </Route>
        <Route path="/watch" element={<VideoLayout />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
