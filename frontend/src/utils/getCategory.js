import axios from 'axios';
import config from '../lib/config.js';
async function getCategory(page, category) {
  page ||= 1;
  const data = await axios.get(
    `${config.uri}/shows?page=${page}&category=${category}`
  );
  return data.data;
}

export default getCategory;
