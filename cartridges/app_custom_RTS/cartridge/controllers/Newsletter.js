"use strict";

var server = require("server");
var newsletter = server.forms.getForm("newsletter");
var Resource = require("dw/web/Resource");

server.get("Start", function (req, res, next) {
  newsletter.clear();

  res.render("newsletter/newsletterSignUp", {
    newsletter: newsletter,
  });
  next();
});

server.post("Save", function (req, res, next) {
  var saveNewsletter = require("~/cartridge/scripts/storageService");
  var Transaction = require("dw/system/Transaction");

  Transaction.begin();

  var CustomObject = saveNewsletter.saveNewsletter(newsletter);

  res.render("newsletter/newsletterSuccess", {
    fn: newsletter.firstname.value,
    ln: newsletter.lastname.value,
    email: newsletter.email.value,
  });

  Transaction.commit();

  next();
});

module.exports = server.exports();
