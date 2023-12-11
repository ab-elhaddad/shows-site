import client from '../config/db.js';
import { Schema } from 'mongoose';
import mongoose_fuzzy_searching from 'mongoose-fuzzy-searching';

const showSchema = new Schema({
  id: { type: Number, required: true, index: true },
  url: { type: String, required: true },
  name: { type: String, required: true, index: 'text', weight: 3 },
  type: { type: String, required: true },
  language: { type: String, required: true },
  genres: { type: [String], required: true },
  status: { type: String, required: true },
  runtime: { type: Number, required: true },
  premiered: { type: Date, required: true },
  officialSite: { type: String, required: true },
  schedule: {
    time: { type: String, required: true },
    days: { type: [String], required: true }
  },
  rating: {
    average: { type: Number }
  },
  weight: { type: Number, required: true },
  network: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    country: {
      name: { type: String, required: true },
      code: { type: String, required: true },
      timezone: { type: String, required: true }
    }
  },
  webChannel: { type: String },
  externals: {
    tvrage: { type: Number },
    thetvdb: { type: Number },
    imdb: { type: String }
  },
  image: {
    medium: { type: String },
    original: { type: String }
  },
  summary: { type: String, index: 'text', weight: 1 },
  updated: { type: Number },
  _links: {
    self: { href: { type: String, required: true } },
    previousepisode: { href: { type: String } }
  }
});

showSchema.plugin(mongoose_fuzzy_searching, {
  fields: ['name', 'summary']
});
const showsModel = client.model('Show', showSchema);

try {
  // showsModel.ensureIndexes();
} catch (err) {
  null;
}

export default showsModel;
