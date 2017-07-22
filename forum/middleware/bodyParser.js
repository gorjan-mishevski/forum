const bodyParser = require('body-parser')

module.exports = function (req, res, next) {
  bodyParser.json()
  next()
}
