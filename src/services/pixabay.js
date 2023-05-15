import axios from 'axios';

const API_KEY = '34883427-fe70cd3747fe88c31215abbc1';
export const perPage = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`, {
    params: {
      per_page: perPage,
    },
  });

  return data;
};
