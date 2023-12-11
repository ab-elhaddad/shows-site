import express from 'express';
import { alert } from './config/debug.js';
import Shows from './services/shows.js';
import errHandler from './utils/errorHandler.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('tiny'));

app.get('/shows', async (req, res) => {
  try {
    let data;
    const { page, search, category } = req.query;
    if (category) data = await Shows.getCategory(page, category);
    else data = await Shows.getMany(page, search || '');
    res.json(data);
  } catch (err) {
    errHandler(err, res);
  }
});

app.get('/shows/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const show = await Shows.getOne(Number(id));
    res.json(show);
  } catch (err) {
    errHandler(err, res);
  }
});
app.listen(4000, () => alert('🚀 Server is running on port 4000'));
