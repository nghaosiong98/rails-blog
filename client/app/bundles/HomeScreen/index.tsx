import React from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between gap-8 items-center">
      <h1 className="font-bold">My Blog</h1>
      <button
        className="btn-primary"
        onClick={() => {
          navigate("/create-blog");
        }}
      >
        Add +
      </button>
    </div>
  );
};

export default HomeScreen;
