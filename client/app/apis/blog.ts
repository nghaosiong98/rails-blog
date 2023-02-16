import axios from 'axios';
import ReactOnRails from 'react-on-rails'

export const createBlog = (entity) => {
  return axios({
    method: 'POST',
    url: 'blogs',
    responseType: 'json',
    headers: ReactOnRails.authenticityHeaders({}),
    data: entity,
  });
}

export const fetchBlogs = () => {
  return axios({
    method: 'GET',
    url: 'blogs.json',
    responseType: 'json'
  }).then((resp) => resp.data)
}

export const fetchBlog = (id: number | string) => {
  return axios({
    method: 'GET',
    baseURL: 'http://localhost:3000',
    url: `blogs/${id}.json`,
    responseType: 'json',
  }).then((resp) => resp.data)
}
