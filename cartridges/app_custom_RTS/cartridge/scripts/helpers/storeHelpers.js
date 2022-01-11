"use strict";

function getStores(radius, postalCode, lat, long, geolocation, showMap, url) {
  var StoresModel = require("*/cartridge/models/stores");
  var StoreMgr = require("dw/catalog/StoreMgr");
  var Site = require("dw/system/Site");
  var URLUtils = require("dw/web/URLUtils");

  var countryCode = "US";
  var distanceUnit = countryCode === "US" ? "mi" : "km";
  var resolvedRadius = radius ? parseInt(radius, 10) : 15;

  var searchKey = {};
  var storeMgrResult = null;
  var location = {};

  if (postalCode && postalCode !== "") {
    searchKey = postalCode;
    storeMgrResult = StoreMgr.searchStoresByPostalCode(
      countryCode,
      searchKey,
      distanceUnit,
      resolvedRadius
    );
    searchKey = { postalCode: searchKey };
  } else {
    location.lat = lat && long ? parseFloat(lat) : geolocation.latitude;
    location.long = long && lat ? parseFloat(long) : geolocation.longitude;

    storeMgrResult = StoreMgr.searchStoresByCoordinates(
      location.lat,
      location.long,
      distanceUnit,
      resolvedRadius
    );
    searchKey = { lat: location.lat, long: location.long };
  }

  var actionUrl =
    url || URLUtils.url("Stores-FindStores", "showMap", showMap).toString();
  var apiKey = Site.getCurrent().getCustomPreferenceValue("mapAPI");

  var stores = new StoresModel(
    storeMgrResult.keySet(),
    searchKey,
    resolvedRadius,
    actionUrl,
    apiKey
  );

  return stores;
}

function createStoresResultsHtml(storesInfo) {
  var HashMap = require("dw/util/HashMap");
  var Template = require("dw/util/Template");

  var context = new HashMap();
  var object = { stores: { stores: storesInfo } };

  Object.keys(object).forEach(function (key) {
    context.put(key, object[key]);
  });

  var template = new Template("storeLocator/storeLocatorResults");
  return template.render(context).text;
}

module.exports = exports = {
  createStoresResultsHtml: createStoresResultsHtml,
  getStores: getStores,
};
