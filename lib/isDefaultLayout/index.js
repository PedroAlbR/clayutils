'use strict';

const isUriStringCheck = require('../strCheck');

/**
 * First test if argument passed in is a String. If true, determine if a uri points
 * to a DEFAULT instance of a layout. Otherwise, throw an error.
 *
 * @param  {string}  uri
 * @return {Boolean}
 */
module.exports = function (uri) {
  isUriStringCheck.strCheck(uri);
  return !!uri.match(/\/_layouts\/[A-Za-z0-9\-]+$/);
};
