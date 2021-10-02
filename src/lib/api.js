import axios from 'axios'


export const getUnsplash = (query) => axios.create({
  baseURL: 'https://api.unsplash.com/search/photos/?query=',
  headers: {
    Authorization:
      "Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a"
  }
}).get(`/${query}&orientation=landscape&featured&per_page=5`)