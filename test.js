'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var inarray = require('./')

/*!
 * fixtures.
 */

// https://github.com/mathiasbynens/unicode-6.3.0/blob/master/properties/White_Space/code-points.js
var whitespace = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288]
var newlinetab = [9, 10]

/*!
 * tests.
 */

test('inarray()', function (t) {
  t.false(inarray(whitespace, 1), 'inarray/2 (1 is not a whitespace codepoint)')
  t.assert(inarray(whitespace, 32), 'inarray/2 (32 is a whitespace codepoint)')
  t.assert(newlinetab.every(inarray(whitespace)), 'inarray/1 (newlinetab contains only whitespace codepoints)')
  t.end()
})
