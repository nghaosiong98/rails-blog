import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

import HomeScreen from "../HomeScreen";
import CreateBlogScreen from "../CreateBlogScreen";
import BlogPost from "../BlogPost";

const queryClient = new QueryClient()

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create-blog" element={<CreateBlogScreen />} />
          <Route path="/read-blog/:blogId" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
