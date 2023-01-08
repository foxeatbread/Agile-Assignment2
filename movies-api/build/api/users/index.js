"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _userModel = _interopRequireDefault(require("./userModel.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _movieModel = _interopRequireDefault(require("../movies/movieModel.js"));
var router = _express["default"].Router(); // eslint-disable-line
var validate = function validate(value) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(value);
};

// Get all users
router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _userModel["default"].find();
        case 2:
          users = _context.sent;
          res.status(200).json(users);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// register(Create)/Authenticate User
router.post('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var validatePwd, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          validatePwd = validate(req.body.password);
          if (!(!req.body.username || !req.body.password)) {
            _context2.next = 4;
            break;
          }
          res.status(401).json({
            success: false,
            msg: 'Please pass username and password.'
          });
          return _context2.abrupt("return", next());
        case 4:
          if (validatePwd) {
            _context2.next = 7;
            break;
          }
          res.status(401).json({
            success: false,
            msg: 'Password format is not valid.'
          });
          return _context2.abrupt("return", next());
        case 7:
          if (!(req.query.action === 'register')) {
            _context2.next = 13;
            break;
          }
          _context2.next = 10;
          return _userModel["default"].create(req.body);
        case 10:
          res.status(201).json({
            code: 201,
            msg: 'Successful created new user.'
          });
          _context2.next = 19;
          break;
        case 13:
          _context2.next = 15;
          return _userModel["default"].findByUserName(req.body.username);
        case 15:
          user = _context2.sent;
          if (user) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            code: 401,
            msg: 'Authentication failed. User not found.'
          }));
        case 18:
          user.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch && !err) {
              // if user is found and password matches, create a token
              var token = _jsonwebtoken["default"].sign(user.username, process.env.SECRET);
              // return the information including token as JSON
              res.status(200).json({
                success: true,
                token: 'BEARER ' + token
              });
            } else {
              res.status(401).json({
                code: 401,
                msg: 'Authentication failed. Wrong password.'
              });
            }
          });
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
router.put('/:id', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (req.body._id) delete req.body._id;
          _context3.next = 3;
          return _userModel["default"].updateOne({
            _id: req.params.id
          }, req.body);
        case 3:
          result = _context3.sent;
          if (result.matchedCount) {
            res.status(200).json({
              code: 200,
              msg: 'User Updated Sucessfully'
            });
          } else {
            res.status(404).json({
              code: 404,
              msg: 'Unable to Update User'
            });
          }
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/:userName/favourites', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var newFavourite, userName, movie, user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          newFavourite = req.body.id;
          userName = req.params.userName;
          _context4.next = 4;
          return _movieModel["default"].findByMovieDBId(newFavourite);
        case 4:
          movie = _context4.sent;
          _context4.next = 7;
          return _userModel["default"].findByUserName(userName);
        case 7:
          user = _context4.sent;
          if (user.favourites.includes(movie._id)) {
            _context4.next = 16;
            break;
          }
          _context4.next = 11;
          return user.favourites.push(movie._id);
        case 11:
          _context4.next = 13;
          return user.save();
        case 13:
          res.status(201).json(user);
          _context4.next = 17;
          break;
        case 16:
          res.status(401).json({
            success: false,
            msg: 'Movie added is duplicated'
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}());
router.get('/:userName/favourites', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var userName, user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          userName = req.params.userName;
          _context5.next = 3;
          return _userModel["default"].findByUserName(userName).populate('favourites');
        case 3:
          user = _context5.sent;
          res.status(200).json(user.favourites);
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;