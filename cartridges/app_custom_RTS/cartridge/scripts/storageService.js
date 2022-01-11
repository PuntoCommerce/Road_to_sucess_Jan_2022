"use strict";

var CustomObject = require("dw/object/CustomObject");

function saveNewsletter(newsletter) {
  var object = CustomObject.createCustomObject(
    "NewsletterSuscription",
    newsletter.email.value
  );

  object.custom.firstName = newsletter.firstname.value;
  object.custom.lastName = newsletter.lastname.value;

  return object;
}

module.exports = { saveNewsletter: saveNewsletter };
