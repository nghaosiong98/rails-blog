import React, { useCallback } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { fetchBlogs } from "../../apis/blog";

const HomeScreen = () => {
  const navigate = useNavigate();
  const { data: blogData } = useQuery(['blogs'], fetchBlogs)

  const onAddNewPostClick = useCallback(() => {
    navigate("/create-blog");
  }, [])

  const onViewPostClick = useCallback((id: number) => {
    navigate('/read-blog/' + id)
  }, [])

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex gap-8 items-center">
        <h1 className="font-bold">My Blog</h1>
        <button
          className="btn-primary"
          onClick={onAddNewPostClick}
        >
          Add +
        </button>
      </div>

      {blogData?.map((data) => (
        <button type="button" onClick={() => onViewPostClick(data.id)}>
          <div className="p-2 border rounded-lg hover:bg-slate-100">
            <p className="text-lg">{data.title}</p>
            <p className="text-xs">{dayjs(data.created_at).format('DD/MM/YYYY')}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default HomeScreen;
