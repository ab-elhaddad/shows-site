import client from '../config/db.js';
import { Schema } from 'mongoose';
import mongoose_fuzzy_searching from 'mongoose-fuzzy-searching';

const showSchema = new Schema({
  id: { type: Number, required: true, index: true },
  url: { type: String, required: true },
  name: { type: String, required: true, index: 'text', weight: 3 },
  type: { type: String },
  language: { type: String, required: true },
  genres: { type: [String], required: true },
  status: { type: String },
  runtime: { type: Number },
  premiered: { type: Date },
  officialSite: { type: String },
  schedule: {
    time: { type: String },
    days: { type: [String] }
  },
  rating: {
    average: { type: Number }
  },
  weight: { type: Number },
  network: {
    id: { type: Number },
    name: { type: String },
    country: {
      name: { type: String },
      code: { type: String },
      timezone: { type: String }
    }
  },
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
    self: { href: { type: String } },
    previousepisode: { href: { type: String } }
  }
});

const showsModel = client.model('Show', showSchema);

export default showsModel;
