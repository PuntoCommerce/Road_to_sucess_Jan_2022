"use strict";

var server = require("server");

server.get("Show", function (req, res, next) {
  // res.json(req);
  res.print("Hola " + req.querystring.name);
  next();
});

module.exports = server.exports();
