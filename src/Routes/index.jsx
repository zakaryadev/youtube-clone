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
          <Route path="history" element={<History />} />
          {/* <Route index element={<Home />} />
          <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
