import { error } from '../config/debug.js';

function errHandler(err, res) {
  error('🤬 ', err);
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal Server Error!' });
}

export default errHandler;
