var express = require('express')
var path = require('path')
var app = express()
var port = process.env.PORT || 8080

app.use('/', express.static(path.join(__dirname, '')))

app.get('/', function (req, res) { res.redirect('/') })

app.listen(port, function () {
  console.log('listening on port '+port)
})

module.exports = app