import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies/index.js';
import genresRouter from './api/genres/index.js';
import './db/index.js';
import './seedData/index.js'
import usersRouter from './api/users/index.js';
import session from 'express-session/index.js';
import authenticate from './authenticate/index.js';
import passport from './authenticate/index.js';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(passport.initialize());
// app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});