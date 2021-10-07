import axios from 'axios';

const newsApi = axios.create({
  baseURL: process.env.VUE_APP_NEWS_API_PATH,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': process.env.VUE_APP_NEWS_API_KEY,
  },
});

const everyThing = (params) => newsApi.get('/v2/everything', { params });

export default {
  everyThing,
};
