//api/error

const path = require('path');

function error(req, res) {
  res.sendFile(path.join(__dirname, '..','public', 'error.html'));
}

module.exports = {error}