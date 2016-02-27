var express = require('express')
var app = express()

//New code for reading from index.html
var fs = require('fs')
var data = fs.readFileSync('index.html')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(data.toString())  // Change code to read from index.html
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

