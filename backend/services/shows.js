import showsModel from './../models/showsModel.js';

class Shows {
  static getAll = async (page) => {
    const skip = (page - 1) * 24,
      limit = 24;
    const shows = await showsModel
      .find(
        {},
        {
          name: 1,
          rating: 1,
          'network.name': 1,
          'image.original': 1,
          id: 1
        }
      )
      .sort({ 'rating.average': -1 })
      .skip(skip)
      .limit(limit)
      .exec();
    return shows;
  };

  static getOne = async (id) => {
    const show = await showsModel.findOne(
      { id },
      {
        name: 1,
        summary: 1,
        genres: 1,
        language: 1,
        rating: 1,
        'network.name': 1,
        'image.original': 1,
        url: 1,
        id: 1,
        _id: 0
      }
    );
    if (!show)
      throw {
        message: 'Show with the provided id not available',
        status: 404
      };
    return show;
  };

  /**
   * @param {number} page
   * @param {string} word
   * @returns {Promise<any[]>}
   */
  static getMany = async (page, word) => {
    // Getting the shows contains the word whether in name or summary
    const regex = new RegExp(word, 'ig');
    const nameData = await showsModel
      .find(
        { name: regex },
        { id: 1, name: 1, rating: 1, network: 1, image: 1 }
      )
      .exec();
    const summData = await showsModel
      .find(
        { summary: regex },
        { id: 1, name: 1, rating: 1, network: 1, image: 1, genres: 1 }
      )
      .exec();

    // Concat the two arrays and remove duplicate shows
    const concatArr = nameData.concat(summData);
    const seen = new Set();
    const data = concatArr.filter((el) =>
      !seen.has(el.id) ? seen.add(el.id) : false
    );

    // Sort shows based on rating
    data.sort((a, b) => b.rating.average - a.rating.average);

    // Skipping and limitting
    const start = (page - 1) * 24,
      end = start + 24;
    return { data: data.slice(start, end), cnt: Math.ceil(data.length / 24) };
  };

  static getCategory = async (page, category) => {
    const data = await showsModel
      .find(
        { genres: category },
        { name: 1, id: 1, rating: 1, network: 1, image: 1 }
      )
      .exec();

    // Sort shows based on rating
    data.sort((a, b) => b.rating.average - a.rating.average);

    // Skipping and limitting
    const start = (page - 1) * 24,
      end = start + 24;
    return { data: data.slice(start, end), cnt: Math.ceil(data.length / 24) };
  };
}

export default Shows;
