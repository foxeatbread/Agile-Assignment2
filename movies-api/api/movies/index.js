import uniqid from 'uniqid'
import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData.js';
import movieModel from './movieModel.js';
import asyncHandler from 'express-async-handler';
import { getUpcomingMovies } from '../tmdb-api.js';
import { getMovies } from '../tmdb-api.js';
import { getMovie } from '../tmdb-api.js';
import { getGenres } from '../tmdb-api.js';
import { getMovieReviews } from '../tmdb-api.js';
import { getUpcomingPage } from '../tmdb-api.js';
import { getMovieImages } from '../tmdb-api.js';
import { getPages } from '../tmdb-api.js';
import { getCredits } from '../tmdb-api.js';
import { getActorDetails } from '../tmdb-api.js';
import { searchMovieApi } from '../tmdb-api.js';

const router = express.Router(); 

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
  const upcomingMovies = await getUpcomingMovies();
  res.status(200).json(upcomingMovies);
}));


router.get('/tmdb/movies', asyncHandler( async(req, res) => {
  const movies = await getMovies();
  res.status(200).json(movies);
}));

router.get('/tmdb/movie/:id', asyncHandler( async(req, res) => {
  const movie = await getMovie(req.params.id);
  res.status(200).json(movie);
}));

router.get('/tmdb/genres', asyncHandler( async(req, res) => {
  const genres = await getGenres();
  res.status(200).json(genres);
}));

router.get('/tmdb/reviews/:id', asyncHandler( async(req, res) => {
  const movieReviews = await getMovieReviews(req.params.id);
  res.status(200).json(movieReviews);
}));

router.get('/tmdb/upcomingpage', asyncHandler( async(req, res) => {
  const upcomingPage = await getUpcomingPage();
  res.status(200).json(upcomingPage);
}));

router.get('/tmdb/reviews/movieImages/:id', asyncHandler( async(req, res) => {
  const movieImages = await getMovieImages(req.params.id);
  res.status(200).json(movieImages);
}));

router.get('/tmdb/pages/:page', asyncHandler( async(req, res) => {
  const pages = await getPages(req.params.page);
  res.status(200).json(pages);
}));

router.get('/tmdb/credits/:movie_id', asyncHandler( async(req, res) => {
  const credits = await getCredits(req.params.movie_id);
  res.status(200).json(credits);
}));

router.get('/tmdb/actorDetail/:id', asyncHandler( async(req, res) => {
  const actorDetails = await getActorDetails(req.params.id);
  res.status(200).json(actorDetails);
}));

router.get('/tmdb/searchMovie/:moveiName', asyncHandler( async(req, res) => {
  const searchMovie = await searchMovieApi(req.params.page);
  res.status(200).json(searchMovie);
}));
// router.get('/', asyncHandler(async (req, res) => {
//   const movies = await movieModel.find();
//   res.status(200).json(movies);
// }));

// router.get('/:id', asyncHandler(async (req, res) => {
//   const id = parseInt(req.params.id);
//   const movie = await movieModel.findByMovieDBId(id);
//   if (movie) {
//       res.status(200).json(movie);
//   } else {
//       res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
//   }
// }));

// router.get('/:id/reviews', (req, res) => {
//   const id = parseInt(req.params.id);
//   // find reviews in list
//   if (movieReviews.id == id) {
//       res.status(200).json(movieReviews);
//   } else {
//       res.status(404).json({
//           message: 'The resource you requested could not be found.',
//           status_code: 404
//       });
//   }
// });

// router.post('/:id/reviews', (req, res) => {
//   const id = parseInt(req.params.id);

//   if (movieReviews.id == id) {
//       req.body.created_at = new Date();
//       req.body.updated_at = new Date();
//       req.body.id = uniqid();
//       movieReviews.results.push(req.body); //push the new review onto the list
//       res.status(201).json(req.body);
//   } else {
//       res.status(404).json({
//           message: 'The resource you requested could not be found.',
//           status_code: 404
//       });
//   }
// });

export default router;