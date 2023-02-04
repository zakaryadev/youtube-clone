import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import History from "../pages/History";
import HomePage from "../pages/HomePage";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="subscribe" element={<h1>subscribe</h1>} />
          <Route path="history" element={<History />} />
          <Route path="videos" element={<h1>videos</h1>} />
          <Route path="videos/:id" element={<h1>videos/:id</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
