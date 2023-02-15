import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import VideoLayout from "../layouts/VideoLayout.jsx";
import HomePage from "../pages/HomePage";
import HistoryPage from "../pages/History";
import AboutPage from "../pages/About";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="channels" element={<h1>subscribe</h1>} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="/watch" element={<VideoLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
