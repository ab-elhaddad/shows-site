function extractCategories(data) {
  const seen = new Set();
  data.forEach((show) => {
    show.genres.forEach((cat) => {
      if (!seen.has(cat)) seen.add(cat);
    });
  });
  return [...seen];
}

export default extractCategories;
