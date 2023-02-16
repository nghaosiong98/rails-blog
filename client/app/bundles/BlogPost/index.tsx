import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { fetchBlog } from '../../apis/blog';

const BlogPost = () => {
  const { blogId } = useParams();

  const { data: blogData, isLoading } = useQuery(['blog', blogId], () => fetchBlog(blogId))

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      {JSON.stringify(blogData)}
    </div>
  )
}

export default BlogPost
