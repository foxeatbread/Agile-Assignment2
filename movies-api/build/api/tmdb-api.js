"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchMovieApi = exports.getUpcomingPage = exports.getUpcomingMovies = exports.getPages = exports.getMovies = exports.getMovieReviews = exports.getMovieImages = exports.getMovie = exports.getGenres = exports.getCredits = exports.getActorDetails = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var getUpcomingMovies = function getUpcomingMovies() {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.getUpcomingMovies = getUpcomingMovies;
var getMovies = function getMovies() {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/discover/movie?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&include_adult=false&include_video=false&page=1")).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.getMovies = getMovies;
var getMovie = function getMovie(id) {
  // console.log(args)
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.getMovie = getMovie;
var getGenres = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _nodeFetch["default"])("https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_TMDB_KEY + "&language=en-US").then(function (response) {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })["catch"](function (error) {
            throw error;
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getGenres() {
    return _ref.apply(this, arguments);
  };
}();
exports.getGenres = getGenres;
var getMovieReviews = function getMovieReviews(id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/reviews?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (res) {
    return res.json();
  }).then(function (json) {
    // console.log(json.results);
    return json.results;
  });
};
exports.getMovieReviews = getMovieReviews;
var getUpcomingPage = function getUpcomingPage(id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/upcoming?api_key=").concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1")).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.getUpcomingPage = getUpcomingPage;
var getMovieImages = function getMovieImages(id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(id, "/images?api_key=").concat(process.env.REACT_APP_TMDB_KEY)).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.getMovieImages = getMovieImages;
var getPages = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(page) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", (0, _nodeFetch["default"])("https://api.themoviedb.org/3/discover/movie?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&include_adult=false&include_video=false&page=").concat(page)).then(function (response) {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })["catch"](function (error) {
            throw error;
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getPages(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getPages = getPages;
var getCredits = function getCredits(movie_id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/movie/".concat(movie_id, "/credits?api_key=").concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US")).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.getCredits = getCredits;
var getActorDetails = function getActorDetails(id) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/person/".concat(id, "?api_key=").concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US")).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.getActorDetails = getActorDetails;
var searchMovieApi = function searchMovieApi(movieName) {
  return (0, _nodeFetch["default"])("https://api.themoviedb.org/3/search/movie?api_key=".concat(process.env.REACT_APP_TMDB_KEY, "&language=en-US&page=1&include_adult=false&query=").concat(movieName)).then(function (response) {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
exports.searchMovieApi = searchMovieApi;