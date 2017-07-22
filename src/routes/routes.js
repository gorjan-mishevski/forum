let express = require('express')
let router = express.Router()



// Home page.
router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router
