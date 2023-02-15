import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "../HomeScreen";
import CreateBlogScreen from "../CreateBlogScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create-blog" element={<CreateBlogScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
