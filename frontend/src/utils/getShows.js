import axios from 'axios';
import config from '../lib/config.js';

/**
 * @param {number} page
 * @param {string} search
 * @returns {Promise<any[]>}
 */
async function getShows(page, search) {
  try {
    page ||= 1;
    search ||= '';
    const data = await axios.get(
      `${config.uri}/shows?page=${page}&search=${search}`
    );
    return data.data;
  } catch (err) {
    console.error('🤬 An orror occured\n', err);
  }
}

export default getShows;
