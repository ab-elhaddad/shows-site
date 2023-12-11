import axios from 'axios';

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
      `http://localhost:4000/shows?page=${page}&search=${search}`
    );
    return data.data;
  } catch (err) {
    console.error('🤬 An orror occured\n', err);
  }
}

export default getShows;
