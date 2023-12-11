import axios from 'axios';

async function getCategory(page, category) {
  page ||= 1;
  const data = await axios.get(
    `http://localhost:4000/shows?page=${page}&category=${category}`
  );
  return data.data;
}

export default getCategory;
