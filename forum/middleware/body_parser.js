const body_parser = require('body-parser')

module.exports = function (req, res, next) {
  body_parser.json()
  next()
}
