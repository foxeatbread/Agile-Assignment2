"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uniqid = _interopRequireDefault(require("uniqid"));
var _express = _interopRequireDefault(require("express"));
var _moviesData = require("./moviesData.js");
var _movieModel = _interopRequireDefault(require("./movieModel.js"));
var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));
var _tmdbApi = require("../tmdb-api.js");
var router = _express["default"].Router();
router.get('/tmdb/upcoming', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var upcomingMovies;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _tmdbApi.getUpcomingMovies)();
        case 2:
          upcomingMovies = _context.sent;
          res.status(200).json(upcomingMovies);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
router.get('/tmdb/movies', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var movies;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _tmdbApi.getMovies)();
        case 2:
          movies = _context2.sent;
          res.status(200).json(movies);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));
router.get('/tmdb/movie/:id', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var movie;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _tmdbApi.getMovie)(req.params.id);
        case 2:
          movie = _context3.sent;
          res.status(200).json(movie);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));
router.get('/tmdb/genres', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var genres;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _tmdbApi.getGenres)();
        case 2:
          genres = _context4.sent;
          res.status(200).json(genres);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()));
router.get('/tmdb/reviews/:id', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var movieReviews;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _tmdbApi.getMovieReviews)(req.params.id);
        case 2:
          movieReviews = _context5.sent;
          res.status(200).json(movieReviews);
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}()));
router.get('/tmdb/upcomingpage', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var upcomingPage;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _tmdbApi.getUpcomingPage)();
        case 2:
          upcomingPage = _context6.sent;
          res.status(200).json(upcomingPage);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()));
router.get('/tmdb/reviews/movieImages/:id', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var movieImages;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _tmdbApi.getMovieImages)(req.params.id);
        case 2:
          movieImages = _context7.sent;
          res.status(200).json(movieImages);
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()));
router.get('/tmdb/pages/:page', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var pages;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _tmdbApi.getPages)(req.params.page);
        case 2:
          pages = _context8.sent;
          res.status(200).json(pages);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}()));
router.get('/tmdb/credits/:movie_id', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var credits;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _tmdbApi.getCredits)(req.params.movie_id);
        case 2:
          credits = _context9.sent;
          res.status(200).json(credits);
        case 4:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}()));
router.get('/tmdb/actorDetail/:id', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var actorDetails;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _tmdbApi.getActorDetails)(req.params.id);
        case 2:
          actorDetails = _context10.sent;
          res.status(200).json(actorDetails);
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}()));
router.get('/tmdb/searchMovie/:moveiName', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var searchMovie;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _tmdbApi.searchMovieApi)(req.params.page);
        case 2:
          searchMovie = _context11.sent;
          res.status(200).json(searchMovie);
        case 4:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}()));
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
var _default = router;
exports["default"] = _default;