const express = require('express')

const bodyParser = require('./middleware/bodyParser')
let port = 8080


let app = express()

app.use(bodyParser)

app.listen(port, () => {
  console.log("Server listening on port: " + port)
})
