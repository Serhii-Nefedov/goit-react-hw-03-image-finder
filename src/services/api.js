import axios from 'axios';

const key = '21861287-f0cf5c93ab1e02daa62ff5f3f';

export const getImages = (query = '', page = 1) => {
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};

export const someFetch = () => {};