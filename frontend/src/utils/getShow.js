import axios from 'axios';

async function getShow(id) {
  const data = await axios.get(`http://localhost:4000/shows/${id}`);
  return data.data;
}

export default getShow;
