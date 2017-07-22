let express = require('express')
let routes = require('./routes/routes.js')

let body_parser = require('./middleware/body_parser.js')
let port = 8080

let app = express()

app.use(body_parser)
app.use('/', routes)

app.listen(port, () => {
  console.log("Server listening on port: " + port)
})
