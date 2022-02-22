"use strict";

var server = require("server");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("*/cartridge/scripts/Prueba/helpers/pruebaApi");

server.get("get", function (req, res, next) {
  var users = getUsers();
  res.json(users);
  next();
});

server.use("create", function (req, res, next) {
  var user = createUser({
    name: req.querystring.name,
    job: req.querystring.job,
  });
  res.json(user);
  next();
});

server.use("update", function (req, res, next) {
  var user = updateUser({
    id: req.querystring.id,
    name: req.querystring.name,
    job: req.querystring.job,
  });
  res.json(user);
  next();
});

server.use("delete", function (req, res, next) {
  var user = deleteUser({
    id: req.querystring.id,
  });

  if (user === false) {
    res.json({
      error: true,
      message: "something went wrong",
    });
  } else {
    res.json({ message: "user deleted" });
  }
  next();
});

module.exports = server.exports();
