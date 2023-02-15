import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "../HomeScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
