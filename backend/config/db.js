import mongoose from 'mongoose';
import config from '../config.js';
import { error, alert } from './debug.js';

await mongoose
  .connect(config.uri, { autoIndex: true })
  .then(() => alert('🍃 MongoDB connected successfully'))
  .catch((err) => error('🤬 Error connecting to MongoDB\n', err));

const client = mongoose.connection;

export default client;
