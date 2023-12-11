import axios from 'axios';
import config from '../lib/config.js';

async function getShow(id) {
  const data = await axios.get(`${config.uri}/shows/${id}`);
  return data.data;
}

export default getShow;
