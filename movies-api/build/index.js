"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./api/movies/index.js"));
var _index2 = _interopRequireDefault(require("./api/genres/index.js"));
require("./db/index.js");
require("./seedData/index.js");
var _index5 = _interopRequireDefault(require("./api/users/index.js"));
var _index6 = _interopRequireDefault(require("express-session/index.js"));
var _index7 = _interopRequireDefault(require("./authenticate/index.js"));
_dotenv["default"].config();
var app = (0, _express["default"])();
var port = process.env.PORT;
app.use(_express["default"].json());
app.use(_index7["default"].initialize());
// app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/genres', _index2["default"]);
app.use('/api/movies', _index["default"]);
app.use('/api/users', _index5["default"]);
app.listen(port, function () {
  console.info("Server running at ".concat(port));
});