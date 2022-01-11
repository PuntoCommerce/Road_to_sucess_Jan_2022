"use strict";

var server = require("server");

server.extend(module.superModule);

server.prepend("Show", function (req, res, next) {
  var viewData = res.getViewData();
  viewData.promo1 = "No hay promociones aun.";
  res.setViewData(viewData);
  next();
});

server.append("Show", function (req, res, next) {
  var viewData = res.getViewData();

  var promo = req.querystring.promo;
  if (promo == 1) {
    viewData.promo1 = "Hay promociones disponibles para mochilas";
  } else if (promo == 2) {
    viewData.promo1 = "Hay promociones disponibles para camisetas";
  } else if (promo == 3) {
    viewData.promo1 = "Hay promociones disponibles para pantalones";
  }

  res.setViewData(viewData);
  next();
});

module.exports = server.exports();
