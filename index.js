var fs = require('fs');
fs.readFile('./bitstarter/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

