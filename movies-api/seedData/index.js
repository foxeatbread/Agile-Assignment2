import userModel from '../api/users/userModel.js';
import genreModel from '../api/genres/genreModel.js';
import users from './users.js';
import genres from './genres.js';
import dotenv from 'dotenv';
import movieModel from '../api/movies/movieModel.js';
import movies from './movies.js';

dotenv.config();

// deletes all genres documents in collection and inserts test data
async function loadGenres() {
    console.log('load genres Data');
    try {
        await genreModel.deleteMany();
        await genreModel.collection.insertMany(genres);
        console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load genres Data: ${err}`);
    }
}

// deletes all user documents in collection and inserts test data
async function loadUsers() {
    console.log('load user Data');
    try {
        await userModel.deleteMany();
        await users.forEach(user => userModel.create(user));
        console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
    }
}

export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  if (process.env.SEED_DB) {
    loadUsers();
    loadGenres();//you may not need this line if you skipped the exercises
    loadMovies();//ADD THIS LINE
  }