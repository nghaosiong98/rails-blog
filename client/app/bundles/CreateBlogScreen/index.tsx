import React from "react";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from "react-router-dom";

import { createBlog } from '../../apis/blog';

type CreateBlogFormValues = {
  title: string;
  body: string;
}

const CreateBlogScreen = () => {
  const { register, handleSubmit } = useForm<CreateBlogFormValues>();
  const navigate = useNavigate();

  const { mutateAsync: createBlogMutate } = useMutation(createBlog)

  const onSubmit = React.useCallback(async (values) => {
    console.log(values)
    try {
      await createBlogMutate(values);
      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  }, [createBlogMutate])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 flex-1"
    >
      <label htmlFor="title">
        <h2>Title</h2>
      </label>
      <input id="title" type="text" {...register('title')} className="border rounded-lg p-2" />
      <label htmlFor="body">
        <h2>Content</h2>
      </label>
      <textarea id="body" {...register('body')} className="border rounded-lg p-2 h-64" />
      <button type="submit" className="btn-primary self-start">Create</button>
    </form>
  );
};

export default CreateBlogScreen;
